"use client"
import React, { useEffect, useState } from 'react';
import { ProductItems } from "@/components/product/productsitems";
import NavBar from "@/components/navbar";
import MaxWidthWrapper_2 from '@/components/MiseEnPageProduits';
import { FiltreItems } from "@/components/filtre/filtreitems";
import { Sneaker } from "@/components/product/productsitems"
import { SearchBar } from '@/components/product/searchbar';
import { Skeleton } from "@/components/ui/skeleton"
import Footer from '@/components/footer';

export default function Products() {
  const [sneakers, setSneakers] = useState<Sneaker[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchSneakers = () => {
    const url = 'http://localhost:1337/api/sneakers?pagination%5BpageSize%5D=21&populate=%2A';

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setSneakers(data.data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchSneakers();
  }, []);
  
  return (
    <>
    <NavBar/>
      <div className="pt-24"> {/* Padding top to push content below NavBar */}
  <MaxWidthWrapper_2 className="flex flex-col sm:flex-row gap-4">
    <div className="hidden sm:block w-1/4"> {/* Adjust width to 1/4 of the parent on larger screens, full width on small */}
      <FiltreItems />
    </div>
    <div className="sm:w-3/4 w-full flex flex-col space-y-4"> {/* Adjust width to 3/4 of the parent on larger screens, full width on small */}
      <SearchBar />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading ? (
          // Show skeleton while loading
          Array.from({ length: 21 }).map((_, index) => (
            <Skeleton key={index} className="h-60 w-full" />
          ))
        ) : (
          // Show products once loaded
          sneakers.map(sneaker => (
            <ProductItems key={sneaker.id} sneaker={sneaker} />
          ))
        )}
      </div>
    </div>
  </MaxWidthWrapper_2>
</div>
    </>
  );
}
