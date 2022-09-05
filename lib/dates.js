import moment from "moment";
export function isArticleNew(publishedDate) {
  const today = moment().startOf("day");
  const dateOfPublish = moment(publishedDate, "YYYY-MM-DD").startOf("day");

  const difference = today.diff(dateOfPublish, "days");

  if (difference <= 14) {
    return true;
  }
  return false;
}
