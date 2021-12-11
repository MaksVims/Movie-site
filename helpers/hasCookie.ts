export default function hasCookie(key: string): boolean {
  return document.cookie.includes(key)
}