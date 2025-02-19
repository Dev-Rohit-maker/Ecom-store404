import { notFound } from "next/navigation"
import { ProductCard } from "@/components/ui/product-card"
import { products } from "@/lib/data"

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  const categoryProducts = products.filter((product) => product.category === category)

  if (categoryProducts.length === 0) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-neon-blue">{category}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categoryProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

