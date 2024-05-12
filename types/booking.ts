export type Booking = {
  id: string
  start: Date | undefined
  end: Date | undefined
  cottageId: string
  guest: {
    name: string
    email: string
    phone: string
  }
}
