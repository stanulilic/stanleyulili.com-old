import { google } from "googleapis";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");
let googleAuth;

function getPostsFromFiles() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });
}

async function getPostsWithPageViews() {
  const posts = getPostsFromFiles();
  googleAuth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY,
    },
    scopes: ["https://www.googleapis.com/auth/analytics.readonly"],
  });

  const analytics = google.analytics({
    auth: googleAuth,
    version: "v3",
  });

  const response = await analytics.data.ga.get({
    "start-date": "2019-01-01",
    "end-date": "today",
    ids: "ga:199940160",
    dimensions: "ga:pagePath",
    metrics: "ga:pageviews",
    sort: "-ga:pageviews",
  });
  const blogPosts = response.data.rows?.filter((row) => {
    const pagePath = row[0];
    if (/^\/\w+\/[\w-]+\/$/.test(pagePath)) {
      return [pagePath, row[1]];
    }
  });

  const allPosts = blogPosts?.flatMap((blogPost) => {
    const pagePath = blogPost[0];
    const pageSlug = pagePath.match(/\/\w+\/([\w-]+)\//);
    let post;
    if (pageSlug) {
      post = posts.find((item) => item.id === pageSlug[1]);
    }
    if (post) {
      return { page_views: parseInt(blogPost[1]), ...post };
    } else {
      return [];
    }
  });

  return allPosts;
}

export async function getRecentPosts() {
  const allPostsData = await getPostsFromFiles();
  return allPostsData
    .sort(({ date: a }, { date: b }) => {
      if (a < b) {
        return 1;
      } else if (a > b) {
        return -1;
      } else {
        return 0;
      }
    })
    .slice(0, 6);
}

export async function getPopularPosts() {
  const popularPosts = await getPostsWithPageViews();
  return popularPosts
    .sort(({ page_views: a }, { page_views: b }) => {
      if (a < b) {
        return 1;
      } else if (a > b) {
        return -1;
      } else {
        return 0;
      }
    })
    .slice(0, 7);
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);
    const category = matterResult.data.categories[0].toLowerCase();
    return {
      params: {
        id,
        category,
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const contentMD = matterResult.content;

  return {
    id,
    contentMD,
    ...matterResult.data,
  };
}
