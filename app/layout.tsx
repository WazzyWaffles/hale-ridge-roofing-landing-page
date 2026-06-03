import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Professional Roofing Services in Northern Virginia | Hale Ridge Roofing',
  description: 'Expert roof replacement, repair, and inspection services in Northern Virginia. 14+ years of experience, 500+ completed projects. Get a free estimate today.',
  keywords: 'roofing, roof replacement, roof repair, Northern Virginia, local contractor, storm damage repair, leak inspection',
  generator: 'v0.app',
  openGraph: {
    title: 'Hale Ridge Roofing - Quality Roofing Services in Northern Virginia',
    description: 'Professional roofing services with 14+ years of experience. Roof replacement, repair, storm damage restoration.',
    type: 'website',
    locale: 'en_US',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
