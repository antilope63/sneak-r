import MaxWidthWrapper from '@/components/MiseEnPage_1'
import {
  Button,
  buttonVariants,
} from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import React from 'react'

export default function Home() {
  return (
    <MaxWidthWrapper>
      <NavBar />
        <div className='py-20 pt-40 mx-auto min-h-[200vh] text-center flex flex-col items-center max-w-3xl'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
            Votre marcket place moderne{' '}
            <span className='text-red-600'>
              un nouveau design
            </span>
            .
          </h1>
          <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
            Bienvenu dans sneak'r une nouvel platforme
          </p>
          <div className='flex flex-col sm:flex-row gap-4 mt-6'>
            <Link
              href='/login'
              className={buttonVariants()}>
              cree un compte 
            </Link>
            
            <Link href="/products" className={buttonVariants()}>
              produits &rarr;
            </Link>
            
          </div>
        </div>
        <Footer/>
      </MaxWidthWrapper>
  )
}
