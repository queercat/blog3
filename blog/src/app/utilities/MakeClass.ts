export type ClassAttribute = string
export type ClassAttributes = ClassAttribute[]

export const MakeClass = (attributes: ClassAttributes) => {
  return attributes.join(" ");
}