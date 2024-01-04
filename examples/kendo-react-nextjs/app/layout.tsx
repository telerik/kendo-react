import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@progress/kendo-theme-default/dist/all.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KendoReact with Next.js',
  description: 'Using KendoReact with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
