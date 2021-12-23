const months: Array<string> = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export default function getStringMonth(month: number) {
  if (month > 0 && month < months.length) {
    return months[month]
  }
  return ''
}
