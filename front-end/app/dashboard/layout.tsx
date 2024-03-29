import LeftNavbar from "@/app/dashboard/navbars/LeftNavbar"
import "@/styles/index.css"
import TopNavbar from "./navbars/TopNavbar"

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
      <body className="relative w-full bg-darkBrown">
          <TopNavbar />
          <main className="w-full flex">
            <LeftNavbar />
            {children}
          </main>
      </body>
    </html>
  )
}
