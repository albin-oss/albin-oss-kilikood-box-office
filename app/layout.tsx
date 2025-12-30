import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kilikood Box Office - Kids Events',
  description: 'Your favorite ticketing platform for kids events',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-dark-black text-white">{children}</body>
    </html>
  )
}

