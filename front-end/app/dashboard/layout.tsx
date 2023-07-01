import LeftNavbar from "@/app/dashboard/LeftNavbar"
import "@/styles/index.css"

export const metadata = {
  title: 'dashboard',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative flex'>
        <LeftNavbar />
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}