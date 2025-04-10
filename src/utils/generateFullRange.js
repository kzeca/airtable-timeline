export function generateFullRage(start, end) {
  const range = [];
  const today = start.clone();

  while (today.isSameOrBefore(end)) {
    range.push(today.format("YYYY-MM-DD"));
    today.add(1, "day");
  }

  return range;
}
