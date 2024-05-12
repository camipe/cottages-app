import { format } from 'date-fns'

export default function formatDate(date: string | Date) {
  return format(new Date(date), 'yyyy-MM-dd')
}
