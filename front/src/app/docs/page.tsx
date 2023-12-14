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
        <div className='py-20 pt-40 mx-auto min-h-[200vh]  flex flex-col  max-w-3xl'>
          <h1 className='text-4xl font-bold text-center tracking-tight text-gray-900 sm:text-6xl'>
            sneak'r{' '} <br />
            <span className='text-red-600'>
              le concept ?
            </span>
            
          </h1>
          <p className='mt-6 text-lg max-w-prose text-muted-foreground text-center '>
            une collection de toute les sneakers <br />
            a la pointe de la modernite et de la technologie
          </p> <br />
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl text-left' >
            Quelle est le but ?
          </h2> <br />
          <p className='mt-2 text-lg max-w-prose text-muted-foreground text-left'>
            l'objectif est simple vous avez des sneakers vous voulez les referencer <br />
            vos sneakers dans <span className='font-bold tracking-tight text-gray-600'>sneak'r </span>
            la marcketplace de collection <br />
            vous pouvez cree votre list d'envie.
          </p> <br />
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl text-left'>
            Comment nous aider ?
          </h2> <br />
          <p className='mt-2 text-lg max-w-prose text-muted-foreground text-left'>
            N'hesitez pas a venir referencer vos paires sur notre plateforme et si <br />
            vous aimez le concept partagez
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
