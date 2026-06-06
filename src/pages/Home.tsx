import { useEffect, useState } from 'react'
import getAllProducts from '@/api/getAllProducts'
import ProductList from '@/components/ProductList/ProductList'
import type { Product } from '@/types/product'

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await getAllProducts()
        setProducts(response.data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchAllProducts()
  }, [])

  return (
    <>
      <ProductList
        products={products}
        loading={loading}
        title="全部商品"
      />
    </>
  )
}
