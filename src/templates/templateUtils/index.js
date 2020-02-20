export function formatArray(array) {
  return array.join(",").replace(/,(?=<li)/g, "<br/> ");
}
