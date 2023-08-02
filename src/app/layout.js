import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'KISU',
  description: 'Kisu web design studio ux uix',
  content:'Kisu is an award-winning web design and development agency located in Mexico. With 5 years of experience, we focus on creating high-end and premium websites for businesses looking to make an impact online. Visit our website to view our stunning portfolio. Contact us to get in touch today 4496082929',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
