import React, { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Wrapper from '@/components/Wrapper'
import CartItem from '@/components/CartItem'
import { useSelector } from 'react-redux'

import { makePaymentRequest } from '@/utils/api'
import { loadStripe } from '@stripe/stripe-js'
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

const Cart = () => {
  const [loading, setLoading] = useState(false)
  const { cartItems } = useSelector((state) => state.cart)

  const subTotal = useMemo(() => {
    if (!cartItems) {
      return 0
    }
    return cartItems.reduce((total, val) => total + val.attributes.price, 0)
  }, [cartItems])

  const handlePayment = async () => {
    try {
      setLoading(true)
      const stripe = await stripePromise
      const res = await makePaymentRequest('/api/orders', {
        products: cartItems,
      })
      await stripe.redirectToCheckout({
        sessionId: res.stripeSession.id,
      })
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {cartItems && cartItems.length > 0 && (
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
                <div className="text-lg font-bold">Itens adicionados</div>
                {cartItems.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </div>
              {/* CART ITEMS END */}

              {/* SUMMARY START */}
              <div className="flex-[1]">
                <div className="text-lg font-bold">Resume</div>

                <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                  <div className="flex justify-between">
                    <div className="uppercase text-md md:text-lg font-medium text-black">
                      Subtotal
                    </div>
                    <div className="text-md md:text-lg font-medium text-black">
                      R${subTotal}
                    </div>
                  </div>
                  <div className="text-sm md:text-md py-5 border-t mt-5">
                    O subtotal reflete o preço total de seu pedido, incluindo
                    taxas e impostos, não inclui custos de entrega e taxas de
                    transações internacionais.
                  </div>
                </div>

                {/* BUTTON START */}
                <button
                  className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
                  onClick={handlePayment}
                >
                  Finalizar compra
                  {loading && <img src="/spinner.svg" alt="" />}
                </button>
                {/* BUTTON END */}
              </div>
              {/* SUMMARY END */}
            </div>
            {/* CART CONTENT END */}
          </>
        )}

        {/* This is empty screen */}
        {cartItems && cartItems.length < 1 && (
          <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
            <Image
              src="/empty-cart.jpg"
              width={300}
              height={300}
              className="w-[300px] md:w-[400px]"
              alt="empty cart"
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
        )}
      </Wrapper>
    </div>
  )
}

export default Cart
