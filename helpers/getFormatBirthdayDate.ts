export default function getFormatBirthdayDate(date: string): string {
  return Intl.DateTimeFormat('ru',{
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date))
}