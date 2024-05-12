type Cottage = {
  id: number
  title: string
  address: string
  postalCode: string
  city: string
  beds: number
  rooms: number
  price: number
}

export default function () {
  return useState<Cottage[]>('foo', () => [
    {
      id: 1,
      title: 'Sjöstugan',
      address: 'Strandvägen 1',
      postalCode: '12345',
      city: 'Sjöstad',
      beds: 4,
      rooms: 2,
      price: 1000,
    },
    {
      id: 2,
      title: 'Skogshemmet',
      address: 'Skogsvägen 2',
      postalCode: '23456',
      city: 'Skogsby',
      beds: 6,
      rooms: 3,
      price: 1000,
    },
    {
      id: 3,
      title: 'Havsbris',
      address: 'Havsgatan 3',
      postalCode: '34567',
      city: 'Havshamn',
      beds: 8,
      rooms: 4,
      price: 1000,
    },
    {
      id: 4,
      title: 'Fjällstugan',
      address: 'Fjällvägen 4',
      postalCode: '45678',
      city: 'Fjällbyn',
      beds: 6,
      rooms: 3,
      price: 1000,
    },
    {
      id: 5,
      title: 'Ängslunden',
      address: 'Ängsvägen 5',
      postalCode: '56789',
      city: 'Ängsby',
      beds: 4,
      rooms: 2,
      price: 1000,
    },
    {
      id: 6,
      title: 'Sjöboden',
      address: 'Sjögatan 6',
      postalCode: '67890',
      city: 'Sjöby',
      beds: 8,
      rooms: 4,
      price: 1000,
    },
    {
      id: 7,
      title: 'Strandstugan',
      address: 'Strandvägen 7',
      postalCode: '78901',
      city: 'Strandstad',
      beds: 6,
      rooms: 3,
      price: 1000,
    },
    {
      id: 8,
      title: 'Skogsgläntan',
      address: 'Skogsvägen 8',
      postalCode: '89012',
      city: 'Skogshamn',
      beds: 4,
      rooms: 2,
      price: 1000,
    },
    {
      id: 9,
      title: 'Havsnära',
      address: 'Havsgatan 9',
      postalCode: '90123',
      city: 'Havsby',
      beds: 8,
      rooms: 4,
      price: 1000,
    },
    {
      id: 10,
      title: 'Fjällvinden',
      address: 'Fjällvägen 10',
      postalCode: '01234',
      city: 'Fjällstad',
      beds: 6,
      rooms: 3,
      price: 1000,
    },
    {
      id: 11,
      title: 'Ängshagen',
      address: 'Ängsvägen 11',
      postalCode: '12340',
      city: 'Ängsstad',
      beds: 4,
      rooms: 2,
      price: 1000,
    },
    {
      id: 12,
      title: 'Sjöutsikten',
      address: 'Sjögatan 12',
      postalCode: '23450',
      city: 'Sjöhamn',
      beds: 8,
      rooms: 4,
      price: 1000,
    },
  ])
}
