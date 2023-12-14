"use client"
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { CheckboxReactHookFormMultiple } from '../categories/categrories';


export function FiltreItems() {

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Filtre</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Prix</p>
        <Slider defaultValue={[33]} max={100} step={1} /> <br/>
        <CheckboxReactHookFormMultiple/>

      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
