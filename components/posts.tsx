import NextLink from "next/link";
import { isArticleNew } from "../lib/dates";
import Date from "./date";

export default function Articles({ data, heading, headingClass }) {
  return (
    <section>
      <div className={`wrapper posts_section ${headingClass}`}>
        <h2 className="section_title">
          <span>{heading}</span>
          <NextLink className="section-button" href="/articles">
            View all
          </NextLink>
        </h2>
        <div className="articles">
          {data.map(({ id, date, title, categories, page_views }) => (
            <div className="article" key={id}>
              <NextLink href={`${categories[0].toLowerCase()}/${id}`}>
                <article className="article_row">
                  <h3>{title}</h3>
                  {isArticleNew(date) && (
                    <span className="new_article">New!</span>
                  )}
                  <Date dateString={date} />
                </article>
              </NextLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
