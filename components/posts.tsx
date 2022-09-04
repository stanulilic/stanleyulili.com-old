import NextLink from "next/link";

export default function Articles({ data, heading }) {
  return (
    <section>
      <div className="wrapper">
        <h2>
          <span>{heading}</span>
          <NextLink href="/articles">
            <a className="section-button">View all</a>
          </NextLink>
        </h2>
        <div className="articles">
          {data.map(({ id, date, title, categories, page_views }) => (
            <div className="article" key={id}>
              <NextLink href={`${categories[0].toLowerCase()}/${id}`}>
                <a>
                  <div className="article-row">
                    <time>{date}</time>
                    <h3>{title}</h3>
                  </div>
                  {heading === "Popular Posts" && (
                    <div className="page-views">{page_views} views</div>
                  )}
                  {/* <div className="new-article">New!</div> */}
                </a>
              </NextLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
