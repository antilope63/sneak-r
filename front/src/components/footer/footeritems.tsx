"use client"

import * as React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Link from "next/link";

export function FooterItems() {


  const copyEmailToClipboard = () => {
    const email = "sneakpro@sneakr.fr"; // Remplacez ceci par l'email que vous voulez copier
    navigator.clipboard.writeText(email)
        .then(() => {
            console.log("Email copié dans le presse-papiers !");
        })
        .catch(err => {
            console.error("Quelque chose a mal tourné lors de la copie de l'email", err);
        });
  }
  const copyNumberToClipboard = () => {
    const number = "0665450945"; // Remplacez ceci par l'email que vous voulez copier
    navigator.clipboard.writeText(number)
        .then(() => {
            console.log("Email copié dans le presse-papiers !");
        })
        .catch(err => {
            console.error("Quelque chose a mal tourné lors de la copie de l'email", err);
        });
  }

  return (
    <div>
      <Popover>
      <PopoverTrigger asChild className="mr-6" >
      <Button variant="outline" >contact</Button>
      </PopoverTrigger>
      <PopoverContent>
        <Button variant="ghost" onClick={() => {
          copyEmailToClipboard();
          toast("Email copied!");

        }}>
          sneakpro@sneakr.fr
        </Button>
        <br />
        <Button variant="ghost" onClick={() => {
          copyNumberToClipboard();
          toast("numbers copied!");
        }}>
          0665450945
        </Button>
      </PopoverContent>  
    </Popover>
    <Link href="/mention_legal" legacyBehavior passHref>
        <Button variant={"destructive"} className="mr-6"> mention legale</Button>
      </Link>

    </div>
      
  );
}
