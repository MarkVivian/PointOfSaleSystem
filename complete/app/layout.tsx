import '@/styles/App.css'
import Menu from "./Menu"

export const metadata = {
  title: 'Point of sale system',
  description: 'this is a point of sale system.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Menu />
        {children}
      </body>
    </html>
  )
}
