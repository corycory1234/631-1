import { useEffect, useState } from 'react'
import getProductById from '@/api/getProductById'
import type { Product } from '@/types/product'
import SpinnerLoading from '@/components/SpinnerLoading'

interface ModalProps {
  id: number
  onClose: () => void
}

export default function Modal(props: ModalProps) {
  const { id, onClose } = props

  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true)
      try {
        const response = await getProductById(id)
        setProduct(response.data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [id])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose()
  }

  const formattedPrice = product
    ? new Intl.NumberFormat('zh-TW', {
        style: 'currency',
        currency: 'TWD',
        maximumFractionDigits: 0,
      }).format(product.price)
    : ''

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-2xl overflow-hidden shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors text-neutral-600 text-sm"
          aria-label="關閉"
        >
          ✕
        </button>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <SpinnerLoading size="lg" />
          </div>
        ) : product ? (
          <div className="flex flex-col sm:flex-row">
            <div className="sm:w-2/5 flex items-center justify-center bg-neutral-50 p-8 min-h-[220px]">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full max-w-[160px] object-contain"
                />
              ) : (
                <span className="text-6xl opacity-20">◻</span>
              )}
            </div>

            <div className="sm:w-3/5 flex flex-col gap-4 p-8">
              <span className="self-start px-2.5 py-1 text-xs font-medium bg-neutral-100 rounded-full text-neutral-500">
                {product.category}
              </span>
              <h2 className="text-xl font-semibold text-neutral-900 leading-snug">
                {product.title}
              </h2>
              {product.description && (
                <p className="text-sm text-neutral-500 leading-relaxed line-clamp-4">
                  {product.description}
                </p>
              )}
              <p className="text-2xl font-bold text-neutral-900 mt-auto pt-2">
                {formattedPrice}
              </p>

            </div>
          </div>
        ) : (
          <div className="p-12 text-center text-neutral-400 text-sm">
            找不到商品資料
          </div>
        )}
      </div>
    </div>
  )
}
