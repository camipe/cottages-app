import { format } from 'date-fns'

export default function formatDate(date: Date | undefined) {
  if (!date)
    return ''
  return format(new Date(date), 'yyyy-MM-dd')
}
