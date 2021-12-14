export default function formatFirstToUppercase(str: string) {
  if (str.length === 1) return str.toUpperCase()

  return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase()
}