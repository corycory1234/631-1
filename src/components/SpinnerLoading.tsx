interface SpinnerLoadingProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeMap = {
  sm: 'w-5 h-5 border-2',
  md: 'w-8 h-8 border-[3px]',
  lg: 'w-12 h-12 border-4',
}

export default function SpinnerLoading(props: SpinnerLoadingProps) {
  const { size = 'md', className = '' } = props

  return (
    <span
      role="status"
      aria-label="載入中"
      className={`inline-block rounded-full border-neutral-200 border-t-neutral-800 animate-spin ${sizeMap[size]} ${className}`}
    />
  )
}
