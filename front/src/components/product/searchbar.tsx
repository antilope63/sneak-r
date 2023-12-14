import { Button } from "@/components/ui/button"
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";



export function SearchBar() {


  return (
    <form className="flex w-full items-center space-x-2" >
      <Input 
        type="text"
        placeholder="search..."
      />
      <Button type="submit">search</Button>
    </form>
  );
}


  