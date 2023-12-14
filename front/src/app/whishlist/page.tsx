"use client"
import React, { useEffect, useState } from 'react';
import { ProductItems } from "@/components/product/productsitems";
import NavBar from "@/components/navbar";
import MaxWidthWrapper_2 from '@/components/MiseEnPageProduits';
import { FiltreItems } from "@/components/filtre/filtreitems";
import { Sneaker } from "@/components/product/productsitems"
import { SearchBar } from '@/components/product/searchbar';
import { Skeleton } from "@/components/ui/skeleton"
import { Whishlist } from '@/components/whishlist/wichlist';

export default function WhichList() {
  
  return (
    <>
      <NavBar />
      <div className="pt-24"> 
        <MaxWidthWrapper_2 className="flex flex-row gap-4">
            
                  <Whishlist />

        </MaxWidthWrapper_2>
      </div>
    </>
  );
}
