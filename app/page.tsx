import { ChevronRight } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/ui/product-card"
import { products, categories } from "@/lib/data"

export default function Home() {
  const featuredProducts = products.slice(0, 5)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-r from-neon-blue/10 to-neon-blue/5">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-5xl font-bold text-neon-blue">Welcome to ShopItNow</h1>
            <p className="text-xl text-gray-300">Your one-stop destination for all your shopping needs</p>
            <Button size="lg" className="gap-2 bg-neon-blue text-black hover:bg-neon-blue/80">
              Explore Products <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-neon-blue">Featured Products</h2>
          <Button
            variant="outline"
            asChild
            className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black"
          >
            <Link href="/products">View All</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} featured />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-neon-blue">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Link key={category} href={`/category/${category.toLowerCase().replace(" ", "-")}`}>
                <Button
                  variant="outline"
                  className="w-full h-32 text-lg font-medium border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black"
                >
                  {category}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

