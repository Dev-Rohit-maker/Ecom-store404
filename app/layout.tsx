import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ShopItNow - Your Modern Shopping Destination",
  description: "Discover amazing products at ShopItNow",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-black text-neon-blue border-b border-neon-blue">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold text-neon-blue">
                ShopItNow
              </Link>
              <div className="flex gap-6">
                {["Electronics", "Groceries", "Home Appliances", "Fashion", "Books"].map((category) => (
                  <Link
                    key={category}
                    href={`/category/${category.toLowerCase().replace(" ", "-")}`}
                    className="text-neon-blue hover:text-neon-blue/80 transition-colors"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </header>
        <main className="bg-black text-white min-h-screen">{children}</main>
      </body>
    </html>
  )
}



import './globals.css'