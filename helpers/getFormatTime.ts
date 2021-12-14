export default function getFormatTime(time: number | string) {
  const number = Number(time)
  if (!number && number !== 0) return ''

  if (number < 60) {
    return `${number} мин.`
  }

  return `${Math.floor(number / 60)} ч. ${number % 60} мин.`
}