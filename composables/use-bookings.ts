import type { Booking } from '~/types/booking'

export default function () {
  const bookings = useState<Booking[]>('bookings', () => [
    {
      id: '1',
      start: '2022-01-01T09:00:00',
      end: '2022-01-01T10:00:00',
      cottageId: '1',
      guest: {
        name: 'John Doe',
        email: 'fake@email.com',
        phone: '123456789',
      },
    },
    {
      id: '2',
      start: '2022-01-02T14:00:00',
      end: '2022-01-02T16:00:00',
      cottageId: '3',
      guest: {
        name: 'John Doe',
        email: 'fake@email.com',
        phone: '123456789',
      },
    },
    {
      id: '3',
      start: '2022-01-03T11:30:00',
      end: '2022-01-03T12:30:00',
      cottageId: '1',
      guest: {
        name: 'Jane Doe',
        email: 'fake@email.com',
        phone: '123456789',
      },
    },
    {
      id: '4',
      start: '2022-01-04T13:00:00',
      end: '2022-01-04T15:00:00',
      cottageId: '4',
      guest: {
        name: 'John Doe',
        email: 'fake@email.com',
        phone: '123456789',
      },
    },
  ])

  function addBooking(booking: Booking) {
    bookings.value.push(booking)
  }

  return {
    bookings,
    addBooking,
  }
}
