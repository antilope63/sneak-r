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
          <h1 className='text-4xl font-bold tracking-tight text-center text-red-600 sm:text-6xl'>
            Webapp Acrypto
          </h1>
          <p className='mt-6 text-lg max-w-prose text-center text-muted-foreground'>
            Tu veux y acceder plus facilement install notre webapp
          </p>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl text-left' >
            Sur IOS
          </h2>
          <p className='mt-2 text-lg max-w-prose text-muted-foreground text-left'>
            ouvre safari va sur notre site 
            <span className='font-bold tracking-tight text-gray-600'>Acrypto.com </span>
            click sur l'icon partager <br /> IMAGE <br />
            descend un peut et click sur 
            <span className='font-bold tracking-tight text-gray-600'> ajouter a l'ecran d'acceuil </span>
            <br />IMAGE <br /> 
            et voila tu est prêt a utiliser notre webapp 

          <span className='font-bold tracking-tight text-gray-600'></span>
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
