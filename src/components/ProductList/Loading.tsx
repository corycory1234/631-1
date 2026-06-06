interface LoadingProps {
  count?: number
}

function SkeletonCard() {
  return (
    <div className="flex flex-col gap-3">
      {/* 圖片區 */}
      <div className="relative aspect-square rounded-xl overflow-hidden bg-neutral-100">
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      </div>

      {/* 分類標籤 */}
      <div className="relative overflow-hidden h-3 w-16 rounded-full bg-neutral-100">
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      </div>

      {/* 商品名稱：兩行，長短交錯 */}
      <div className="flex flex-col gap-1.5">
        <div className="relative overflow-hidden h-3.5 w-full rounded bg-neutral-100">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
        </div>
        <div className="relative overflow-hidden h-3.5 w-2/3 rounded bg-neutral-100">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_0.1s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
        </div>
      </div>

      {/* 價格 */}
      <div className="relative overflow-hidden h-4 w-1/3 rounded bg-neutral-100">
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_0.2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      </div>
    </div>
  )
}

export default function Loading(props: LoadingProps) {
  const { count = 8 } = props

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* 標題 skeleton */}
      <div className="relative overflow-hidden h-6 w-28 rounded-md bg-neutral-100 mb-8">
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
        {Array.from({ length: count }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </section>
  )
}
