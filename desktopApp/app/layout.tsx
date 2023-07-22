import "@/styles/index.css"

export const metadata = {
  title: 'Point of Sale',
  description: 'this will be used as a point of sale system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  )
}
