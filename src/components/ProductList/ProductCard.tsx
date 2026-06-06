import type { Product } from '@/types/product'

interface ProductCardProps {
  product: Product
  onClick?: (product: Product) => void
}

const PLACEHOLDER_GRADIENTS = [
  'from-rose-100 to-rose-200',
  'from-sky-100 to-sky-200',
  'from-amber-100 to-amber-200',
  'from-emerald-100 to-emerald-200',
  'from-violet-100 to-violet-200',
  'from-orange-100 to-orange-200',
]

export default function ProductCard(props: ProductCardProps) {
  const { product, onClick } = props

  const gradient = PLACEHOLDER_GRADIENTS[product.id % PLACEHOLDER_GRADIENTS.length]

  const handleClick = () => {
    onClick?.(product)
  }

  const formattedPrice = new Intl.NumberFormat('zh-TW', {
    style: 'currency',
    currency: 'TWD',
    maximumFractionDigits: 0,
  }).format(product.price)

  return (
    <article
      onClick={handleClick}
      className="group flex flex-col cursor-pointer"
    >
      {/* 商品圖 */}
      <div className={`relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br ${gradient} flex items-center justify-center`}>
        {product.image ? (
          <img
            src={product.image}
            alt={product.title}
            className="w-1/2 h-1/2 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl opacity-30">◻</span>
          </div>
        )}

        {/* 分類標籤 */}
        <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-medium bg-white/80 backdrop-blur-sm rounded-full text-neutral-600">
          {product.category}
        </span>
      </div>

      {/* 商品資訊 */}
      <div className="mt-3 flex flex-col gap-1 px-0.5">
        <h3 className="text-sm font-medium text-neutral-800 leading-snug line-clamp-2 group-hover:text-neutral-600 transition-colors">
          {product.title}
        </h3>
        <p className="text-sm font-semibold text-neutral-900">
          {formattedPrice}
        </p>
      </div>
    </article>
  )
}
