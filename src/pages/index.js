import Head from 'next/head'
import { Kumbh_Sans } from '@next/font/google'
import Header from '@/components/Header'
import Slider from '@/components/Slider'
import { useState } from 'react'
import Modal from '@/components/Modal'
import AddToCart from '@/components/AddToCart'
import MenuCart from '@/components/MenuCart'
import Counter from '@/components/Counter'
import Price from '@/components/Price'
import Description from '@/components/Description'
import CompanyName from '@/components/CompanyName'
import ProductName from '@/components/ProductName'

const kumbh = Kumbh_Sans({ subsets: ['latin'], weight: ["400", "700"] })

export default function Home() {
  const [modal, setModal] = useState(false)
  const [counterImages, setCounterImages] = useState(0);
  const [counter, setCounter] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [menuCart, setMenuCart] = useState(false)
  return (
    <>
      <Head>
        <title>E-Commerce Product Page</title>
        <meta name="description" content="E-commerce product page made with Next Js & Tailwind CSS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="E-Commerce Product Page" />
        <meta property="og:type" content="Sneakers" />
        <meta property="og:url" content="./" />
        <meta property="og:image" content="./image-product.jpg" />
        <meta property="og:description" content="Fall Limited Edition Sneakers" />
        <link rel="icon" href="/shop-svgrepo-com.ico" />
      </Head>
      <main className={`${kumbh.className} max-w-screen-xl m-auto `}>
        <Header quantity={quantity} menuCart={menuCart} setMenuCart={setMenuCart} />
        <div className='relative w-full m-auto mb-8 md:mb-0 md:flex md:w-[80%] gap-4 justify-between items-center flex-wrap min-h-[calc(80vh-96px)]'>
          <MenuCart menuCart={menuCart} counter={quantity} setCounter={setCounter} setQuantity={setQuantity} setMenuCart={setMenuCart} />
          {modal && <Modal modal={modal} setModal={setModal} counterImages={counterImages} setCounterImages={setCounterImages} />}
          <div className='md:w-[26.25rem] m-auto'>
            <Slider setModal={setModal} counterImages={counterImages} setCounterImages={setCounterImages} />
          </div>
          <div className='flex flex-col items-center mt-4 m-auto md:m-auto w-[90%] md:w-[26.26rem] '>
            <div>
              <div className='mb-4 md:mb-8'>
                <CompanyName name="Sneaker Company" />
                <ProductName product='Fall Limited Edition Sneakers' />
              </div>
              <Description description="These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer." />
              <Price price="125.00" discount="50" normalPrice="250.00" />
              <div className='md:flex justify-between items-center md:gap-4'>
                <Counter counter={counter} setCounter={setCounter} />
                <AddToCart counter={counter} quantity={quantity} setQuantity={setQuantity} setMenuCart={setMenuCart} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
