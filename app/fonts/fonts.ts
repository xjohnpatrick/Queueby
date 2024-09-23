import { Bebas_Neue, Poppins, Montserrat } from 'next/font/google'

export const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400'
})

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '400']
})

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '400']
})
