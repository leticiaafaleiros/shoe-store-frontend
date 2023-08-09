import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

const ProductCard = () => {
  return (
    <Link
      href="/public/product-1.webp"
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
    >
      <Image width={500} height={500} src="/product-1.webp" alt="" />
    </Link>
  )
}

export default ProductCard
