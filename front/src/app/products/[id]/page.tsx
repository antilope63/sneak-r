"use client"

// pages/products/[id].tsx
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import Image from 'next/image';
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { useParams } from 'next/navigation';
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator"
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface ProductDetails {
  UID: string;
  brand: string;  /* ok */
  colorway: string; /* ok */
  createdAt: string;  /* non */
  estimatedMarketValue: number; /* ok */
  gender: string; /* ok */
  name: string; /* ok */
  publishedAt: string;
  releaseDate: string;  /* ok */
  releaseYear: number;
  retailPrice: number;
  silhouette: string;
  sku: string;
  story: string;
  updatedAt: string;
  image: {
    original: string; /* ok */
  };
  links: {
    flightClub: string;
    goat: string;
    stadiumGoods: string;
    stockX: string;
  };
  // Ajoutez d'autres champs si nécessaire
}

const formatDate = (dateString: string) => {
  // Only attempt to split if dateString is not undefined
  return dateString ? dateString.split('T')[0] : '';
};



export default function ProductDetail() {

  const [showSkeleton, setShowSkeleton] = useState(true);
  
  const handleLinkClick = (url: string) => {
    if (!url) {
      toast("Ce lien n'est pas disponible pour le moment.")
    } else {
      // If you need to navigate to the link
      window.location.href = url;
    }
  };

const params = useParams();
  const fetcher = (url: string) => fetch(url).then(res => res.json());

  const { data, error, isValidating } = useSWR(params.id ? `http://localhost:1337/api/sneakers/${params.id}?&populate=%2A` : null, fetcher);
  const product: ProductDetails = data ? data.data.attributes : null;

  const formattedDate = product ? formatDate(product.publishedAt) : '';

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer); // Clear timeout if the component unmounts
  }, []);

  if (error) return <div>Failed to load</div>;
  if (!data || showSkeleton) return (
    <>
    <NavBar />
    <div className="flex justify-between items-start p-6 pt-20">
      <Skeleton className="flex-1 h-96" /> {/* Skeleton for image */}
      <div className="flex-1 p-4 pt-22 space-y-4">
        <Skeleton className="h-12" />
        <Skeleton className="h-6" />
        <Skeleton className="h-6" />
        <Skeleton className="h-6" />
        <Skeleton className="h-6" />
        <Skeleton className="h-6" />
      </div>
    </div>
    <Footer />
    </>
    
  );
  console.log(product);
  const imageUrl = product.image?.original || <p className='text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl text-left'>Acune image disponible</p> ;
  return (
    <>
      <NavBar />
        // Render content here
        <div className="flex justify-between items-start p-6">
          <div className="flex-1">
            <img
              src={data.data.attributes.image.original}
              alt={data.data.attributes.name}
              className="w-full h-auto"
            />
          </div>
          <div className="flex-1 p-4 pt-20">
            <h1 className="text-2xl font-bold">{data.data.attributes.name}</h1>
            <Separator className="my-4" />
            <p>Marque : {data.data.attributes.brand}</p>
            <Separator className="my-2" />
            <p>Silhouette : {data.data.attributes.silhouette}</p>
            <Separator className="my-2" />
            <p>Genre : {data.data.attributes.gender}</p>
            <Separator className="my-2" />
            <p>Valeur estimée : ${data.data.attributes.estimatedMarketValue}</p>
            <Separator className="my-2" />
            <p >couleur :  {data.data.attributes.colorway}</p>
            <Separator className="my-2" />
            <p>publier le: {formattedDate}</p>
            <Separator className="my-2" />
            <p >date de sortie :  {data.data.attributes.releaseDate}</p>
            <Separator className="my-2" />
            <p className='text-xl font-bold'> Aller acheter :</p>
            
            <div className='mt-4 flex'>
              <Link href={data.data.attributes.links.flightClub} className='p-2'>
                <Button variant="ghost" className='p-2' onClick={() => handleLinkClick(data.data.attributes.links.FlightClub)}>
                  FlightClub
                </Button>
              </Link>
              <Link href={data.data.attributes.links.goat} className='p-2'>
                <Button variant="ghost" onClick={() => handleLinkClick(data.data.attributes.links.goat)}>
                  goat
                </Button>
              </Link>             
              <Link href={data.data.attributes.links.stadiumGoods} className='p-2'>
                <Button variant="ghost" onClick={() => handleLinkClick(data.data.attributes.links.stadiumGoods)}>
                  stadiumGoods
                </Button>
              </Link>
              <Link href={data.data.attributes.links.stockX} className='p-2'>
                <Button variant="ghost" onClick={() => handleLinkClick(data.data.attributes.links.stockX)}>
                  stockX
                </Button>
              </Link>
            </div>
          </div>
        </div>
      <Footer />
    </>
  );
}