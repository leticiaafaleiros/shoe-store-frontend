import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Wrapper from '@/components/Wrapper'
import CartItem from '@/components/CartItem'

const Cart = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <>
          {/* HEADING AND PARAGRAPH START */}
          <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
              Carrinho de compras
            </div>
          </div>
          {/* HEADING AND PARAGRAPH END */}

          {/* CART CONTENT START */}
          <div className="flex flex-col lg:flex-row gap-12 py-10">
            {/* CART ITEMS START */}
            <div className="flex-[2]">
              <div className="text-lg font-bold">Itens do carrinho</div>
              <CartItem />
              <CartItem />
            </div>
            {/* CART ITEMS END */}

            {/* SUMMARY START */}
            <div className="flex-[1]">
              <div className="text-lg font-bold">Resumo</div>

              <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                <div className="flex justify-between">
                  <div className="uppercase text-md md:text-lg font-medium text-black">
                    Subtotal
                  </div>
                  <div className="text-md md:text-lg font-medium text-black">
                    R$ 00,00
                  </div>
                </div>

                <div className="flex justify-between border-t mt-5">
                  <div className="uppercase text-md md:text-lg font-medium text-black mt-5">
                    Total
                  </div>
                  <div className="text-md md:text-lg font-medium text-black mt-5">
                    R$ 00,00
                  </div>
                </div>
              </div>

              {/* BUTTON START */}
              <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center">
                Finalizando
                <img src="/spinner.svg" alt="" />
              </button>
              {/* BUTTON END */}
            </div>
            {/* SUMMARY END */}
          </div>
          {/* CART CONTENT END */}
        </>

        {/* This is empty screen */}
        <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
          <Image
            src="/empty-cart.jpg"
            alt=""
            width={300}
            height={300}
            className="w-[300px] md:w-[400px]"
          />
          <span className="text-xl font-bold">Seu carrinho está vazio</span>
          <span className="text-center mt-4">
            Parece que você não adicionou nada ao carrinho.
            <br />
            Vá em frente e explore as principais categorias.
          </span>
          <Link
            href="/"
            className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
          >
            Continue comprando
          </Link>
        </div>
      </Wrapper>
    </div>
  )
}

export default Cart
