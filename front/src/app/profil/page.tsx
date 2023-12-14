"use client"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import MaxWidthWrapper from "@/components/MiseEnPage_1";
import Link from 'next/link';
import { Profil } from "@/components/profil/profil";

export default function Profils (){


    return (
      <>
        <MaxWidthWrapper>
          <Profil/>
        </MaxWidthWrapper>
      </>
        
          
        
      );
    }
