import { eachDayOfInterval } from 'date-fns'
import type { Booking } from '~/types/booking'

export default function () {
  const bookings = useLocalStorage<Booking[]>('bookings', () => [])

  function addBooking(booking: Booking) {
    bookings.value.push(booking)
  }

  function findOccupiedDates(cottageId: string) {
    return bookings.value
      .filter(booking => booking.cottageId === cottageId)
      .flatMap(booking => eachDayOfInterval({
        start: new Date(booking.start),
        end: new Date(booking.end),
      }))
  }

  return {
    bookings,
    addBooking,
    findOccupiedDates,
  }
}
