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
            mention legal .
          </h1>
         <br />
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl text-left' >
          Introduction
          </h2> <br />
          <p className='mt-2 text-lg max-w-prose text-muted-foreground text-left'>
          Bienvenue sur 
          <span className='font-bold tracking-tight text-red-600'> Sneak'R </span>
          , le site dédié aux collectionneurs de sneakers. <br />
           Ce site est régie par 
           <span className='font-bold tracking-tight text-blue-700'> Antonin Planel </span>
          </p> <br />
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl text-left'>
          Identification
          </h2> <br />
          <p className='mt-2 text-lg max-w-prose text-muted-foreground text-left'>
            Raison sociale : 
            <span className='font-bold tracking-tight text-red-600'> Sneak'R </span>
            Adresse du siège social : 
            <span className='font-bold tracking-tight text-gray-600'> 7 rue de la paix </span> <br />
            planet du siège social : 
            <span className='font-bold tracking-tight text-gray-600'> B-185409 </span> <br />
            Directeur de la publication : 
            <span className='font-bold tracking-tight text-blue-600'> Antonin Planel </span> <br />
            Contact : 
            <span className='font-bold tracking-tight text-gray-600'> sneakpro@sneakr.fr </span>| 
            Tél : 
            <span className='font-bold tracking-tight text-gray-600'> 06-65-45-09-45 </span> 
          </p> <br />
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl text-left'>
          Hébergement
          </h2> <br />
          <p className='mt-2 text-lg max-w-prose text-muted-foreground text-left'>
          Le site <span className='font-bold tracking-tight text-red-600'> Sneak'R </span> est hébergé par 
          <span className='font-bold tracking-tight text-gray-500'> monopoly </span>
          , dont le siège social est situé à 
          <span className='font-bold tracking-tight text-gray-500'> parc gratuit </span>.
          </p> <br />
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl text-left'>
          Propriété Intellectuelle
          </h2> <br />
          <p className='mt-2 text-lg max-w-prose text-muted-foreground text-left'>
          Tous les éléments (textes, logos, images, sons, logiciels, icônes, mise en page, base de données, ...) 
          contenus dans le site <span className='font-bold tracking-tight text-red-600'> Sneak'R </span> sont protégés par le droit national et international de la propriété intellectuelle. 
          Ces éléments restent la propriété exclusive de <span className='font-bold tracking-tight text-red-600'> Sneak'R </span> et/ou de ses partenaires.
          </p> <br />
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl text-left'>
          Responsabilité
          </h2> <br />
          <p className='mt-2 text-lg max-w-prose text-muted-foreground text-left'>
          <span className='font-bold tracking-tight text-red-600'> Sneak'R </span> s’efforce de fournir des informations aussi précises que possible. 
          Toutefois, il ne pourra être tenu responsable des omissions, 
          des inexactitudes et des carences dans la mise à jour, 
          qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
          </p> <br />
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl text-left'>
          Données Personnelles
          </h2> <br />
          <p className='mt-2 text-lg max-w-prose text-muted-foreground text-left'>
          onformément à la législation en vigueur, <span className='font-bold tracking-tight text-red-600'> Sneak'R </span> informe ses utilisateurs que les données personnelles 
          recueillies sur le site sont utilisées uniquement dans le cadre de la gestion de leurs commandes ou pour des communications marketing. 
          Ces informations sont confidentielles et conservées par <span className='font-bold tracking-tight text-red-600'> Sneak'R </span>.
          </p> <br />
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl text-left'>
          Cookies
          </h2> <br />
          <p className='mt-2 text-lg max-w-prose text-muted-foreground text-left'>
          Le site <span className='font-bold tracking-tight text-red-600'> Sneak'R </span> utilise des cookies pour améliorer l'expérience utilisateur, 
          pour réaliser des statistiques de visites et pour proposer des publicités ciblées. 
          L'utilisateur a la possibilité de désactiver les cookies à partir des paramètres de son navigateur.
          </p> <br />
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl text-left'>
          Liens Hypertextes
          </h2> <br />
          <p className='mt-2 text-lg max-w-prose text-muted-foreground text-left'>
          <span className='font-bold tracking-tight text-red-600'> Sneak'R </span> peut offrir des liens vers d’autres sites web. 
          Ces sites sont indépendants et <span className='font-bold tracking-tight text-red-600'> Sneak'R </span> n’édite ni ne contrôle les sources et contenus de ces liens ou leurs liens avec d'autres sites.
          </p> <br />
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl text-left'>
          Modifications des Mentions Légales
          </h2> <br />
          <p className='mt-2 text-lg max-w-prose text-muted-foreground text-left'>
          <span className='font-bold tracking-tight text-red-600'> Sneak'R </span> se réserve le droit de modifier à tout moment les présentes mentions légales. 
          L’utilisateur est donc invité à les consulter régulièrement.
          </p> <br />
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl text-left'>
          Loi Applicable et Juridiction
          </h2> <br />
          <p className='mt-2 text-lg max-w-prose text-muted-foreground text-left'>
          Les présentes mentions légales sont soumises à la loi française. En cas de litige, 
          les tribunaux français seront seuls compétents.
          </p> <br />
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl text-left'>
          Divers
          </h2> <br />
          <p className='mt-2 text-lg max-w-prose text-muted-foreground text-left'>
          Si une partie des mentions légales devait s'avérer illégale, 
          invalide ou inapplicable pour quelque raison que ce soit, 
          le terme ou les termes en question seraient déclarés inexistants et les termes restants garderaient toute leur force et leur portée.
          </p> <br />
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
