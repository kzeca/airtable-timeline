import moment from "moment";

export function rangeValue(start, end) {
  return moment(end).diff(moment(start), "days");
}
