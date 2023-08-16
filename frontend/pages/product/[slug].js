import React from 'react'
// import { IoMdHeartEmpty } from 'react-icons/io'
import Wrapper from '@/components/Wrapper'
import ProductDetailsCarousel from '@/components/ProductDetailsCarousel'
import { IoMdHeartEmpty } from 'react-icons/io'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import RelatedProducts from '@/components/RelatedProducts'

const ProductDeails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel />
          </div>
          {/* left column end */}

          {/* right column start */}
          <div className="flex-[1] py-3">
            {/* PRODUCT TITLE */}
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              Jordan Retro 6 G
            </div>

            {/* PRODUCT SUBTITLE */}
            <div className="text-lg font-semibold mb-5">
              Tênis de golfe masculino
            </div>

            {/* PRODUCT PRICE */}
            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold">R$ 350,00</p>
            </div>

            <div className="text-md font-medium text-black/[0.5] mb-20"></div>

            {/* PRODUCT SIZE RANGE START */}
            <div className="mb-10">
              {/* HEADING START */}
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Selecione o tamanho</div>
                <div className="text-md font-bold text-black/[0.5] cursor-pointer">
                  Guia de tamanho
                </div>
              </div>
              {/* HEADING END */}

              {/* SIZE START */}
              <div className="grid grid-cols-3 gap-2">
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  37
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  38
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  39
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  40
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  41
                </div>
                <div className="border rounded-md text-center py-3 font-medium bg-black/[0.1] opacity-50 cursor-not-allowed">
                  42
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  43
                </div>
                <div className="border rounded-md text-center py-3 font-medium bg-black/[0.1] opacity-50 cursor-not-allowed">
                  44
                </div>
              </div>
              {/* SIZE END */}

              {/* SHOW ERROR START */}
              <div className="text-red-600 mt-1">
                A seleção de tamanho é obrigatória
              </div>
              {/* SHOW ERROR END */}
            </div>
            {/* PRODUCT SIZE RANGE END */}

            {/* ADD TO CART BUTTON START */}
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Adicionar no carrinho
            </button>
            {/* ADD TO CART BUTTON END */}

            {/* WHISHLIST BUTTON START */}
            <button className="w-full py-4 rounded-full border hover:border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 mb-10">
              Favoritos
              <IoMdHeartEmpty size={20} />
            </button>
            {/* WHISHLIST BUTTON END */}

            <div>
              <div className="text-lg font-bold mb-5">Detalhe do produto</div>
              <div className="markdown text-md mb-5">
                <ReactMarkdown>Descrição</ReactMarkdown>
              </div>
            </div>
          </div>
          {/* right column end */}
        </div>
        <RelatedProducts />
      </Wrapper>
    </div>
  )
}

export default ProductDeails
