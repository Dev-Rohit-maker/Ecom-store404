import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "./Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Amazon - Your Modern Shopping Destination",
  description: "Discover amazing products at Amazon",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-black text-neon-blue border-b border-neon-blue">
          <div className="container mx-auto px-4 py-4">
            <Navbar />
          </div>
        </header>
        <main className="bg-black text-white min-h-screen">{children}</main>
      </body>
    </html>
  )
}

import './globals.css'
