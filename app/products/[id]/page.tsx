import Image from "next/image"
import { notFound } from "next/navigation"
import { Star, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/ui/product-card"
import { products } from "@/lib/data"

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 5)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="aspect-square relative rounded-lg overflow-hidden border border-neon-blue">
            <Image
              src={product.image || "/placeholder.svg?height=600&width=600"}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-neon-blue">{product.category}</p>
            <h1 className="text-3xl font-bold text-neon-blue">{product.name}</h1>
          </div>
          <div className="flex items-center gap-2">
            {Array.from({ length: product.reviews }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-neon-blue text-neon-blue" />
            ))}
            <span className="text-gray-400">({product.reviews} reviews)</span>
          </div>
          <p className="text-3xl font-bold text-neon-blue">₹{product.price.toLocaleString("en-IN")}</p>
          <div className="flex gap-4">
            <Button size="lg" className="flex-1 gap-2 bg-neon-blue text-black hover:bg-neon-blue/80">
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black"
            >
              Buy Now
            </Button>
          </div>
          {product.quantity > 0 ? (
            <p className="text-green-400">In Stock ({product.quantity} available)</p>
          ) : (
            <p className="text-red-400">Out of Stock</p>
          )}
          <div className="border-t border-neon-blue/30 pt-4">
            <h2 className="text-xl font-semibold text-neon-blue mb-2">About this product</h2>
            <p className="text-gray-300">
              {/* Leave space for product description */}
              Product description goes here. You can add detailed information about the product, its features,
              specifications, and any other relevant details.
            </p>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-8 text-neon-blue">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}

