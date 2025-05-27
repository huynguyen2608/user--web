import './globals.css'

export const metadata = {
  title: 'Next.js Auth App',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="p-6">{children}</body>
    </html>
  )
}
