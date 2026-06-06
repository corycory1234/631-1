import type { Product } from '@/types/product'
import ProductCard from '@/components/ProductList/ProductCard'
import Loading from '@/components/ProductList/Loading'

interface ProductListProps {
  products: Product[]
  title?: string
  loading?: boolean
  onProductClick?: (product: Product) => void
}

export default function ProductList(props: ProductListProps) {
  const { products, title = '全部商品', loading = false, onProductClick } = props

  if (loading) {
    return <Loading />
  }

  if (products.length === 0) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-lg font-semibold text-neutral-900 mb-8">{title}</h2>
        <p className="text-sm text-neutral-400">目前沒有商品。</p>
      </section>
    )
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-lg font-semibold text-neutral-900 mb-8">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={onProductClick}
          />
        ))}
      </div>
    </section>
  )
}
