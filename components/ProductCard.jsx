import React from 'react'
// import { getDiscountedPricePercentage } from "@/utils/helper"
import Image from 'next/image'
import Link from 'next/link'

const ProductCard = () => {
  return (
    <Link
      href="/public/product-1.webp"
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
    >
      <Image width={500} height={500} src="/product-1.webp" alt="" />

      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">Tênis Jordan</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">R$ 400,00</p>

          <>
            <p className="text-base  font-medium line-through">R$ 500,00</p>
            <p className="ml-auto text-base font-medium text-green-500">
              20% off
            </p>
          </>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
