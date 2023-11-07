import Navbar from '@/components/Navbar';
import './globals.css'
import type { Metadata } from 'next'
import {Sansita_Swashed, Poppins} from 'next/font/google';
import { TailwindIndicator } from '@/components/TailwindIndicator';

const sansita_swashed = Sansita_Swashed({
  weight: ["400", "500", "600", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--sansita-swashed",
})

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--poppins",
})

export const metadata: Metadata = {
  title: 'Salish Sea Massage',
  description: 'Relax, Renew, Revive.',
  icons: {
    icon: '/assets/icon.png',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='overflow-x-hidden'>
      <body className={`${sansita_swashed.variable} ${poppins.variable} font-sans`}>
        <Navbar />
        {children}
        <TailwindIndicator/>
        </body>
    </html>
  )
}



