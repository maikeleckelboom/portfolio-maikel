export const yearFromDate = (date: string) => {
  const [year] = date.split("-")
  return year
}
