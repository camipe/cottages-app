export type Booking = {
  id: string
  start: string
  end: string
  cottageId: string
  guest: {
    name: string
    email: string
    phone: string
  }
}
