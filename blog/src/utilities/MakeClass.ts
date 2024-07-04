export const MakeClass = (...attributes: string[]) => {
  // iterate over each attribute and split it into an array of strings and then flatten the array.
  attributes = attributes.map(attribute => attribute.split(" ")).flat();
  // filter out duplicates and empty strings.
  attributes = [...new Set(attributes)].filter(attribute => attribute !== "");

  return attributes.join(" ");
}