import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import Link from 'next/link';
import { Button } from '../ui/button';
import Image from 'next/image';
import { SearchBar } from './searchbar';

export interface Sneaker {
    id: number;
    attributes: {
      brand: string;
      silhouette: string;
      gender: string;
      estimatedMarketValue: number;
      image: {
        original: string;
      };
      name: string;
    };
}

interface ProductItemsProps {
    sneaker: Sneaker;
}

export function ProductItems({ sneaker }: ProductItemsProps) {
    const [isFavorite, setIsFavorite] = useState(false);
    const imageUrl = sneaker.attributes.image?.original || 'https://image.goat.com/attachments/product_template_pictures/images/094/502/266/original/ID8470.png.png';
    const heartUrl = isFavorite ? '/coeur_rouge.png' : '/coeur.png';

    useEffect(() => {
        const checkIfFavorite = async () => {
            const userId = localStorage.getItem('userId');
            if (!userId) return;

            const url = `http://localhost:1337/api/users/${userId}?populate=wishlist`;
            try {
                const response = await fetch(url);
                if (response.ok) {
                    const user = await response.json();
                    const isSneakerFavorite = user.wishlist.some((item: { id: number }) => item.id === sneaker.id);
                    setIsFavorite(isSneakerFavorite);
                }
            } catch (error) {
                console.error('Error checking wishlist:', error);
            }
        };

        checkIfFavorite();
    }, [sneaker.id]);

    const updateWishlist = async (wishlistIds: number[]) => {
        const userId = localStorage.getItem('userId');
        if (!userId) throw new Error("User ID not found");

        const putWishlistUrl = `http://localhost:1337/api/users/${userId}`;
        const putResponse = await fetch(putWishlistUrl, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ wishlist: wishlistIds }),
        });

        if (!putResponse.ok) {
            throw new Error("Unable to update wishlist");
        }
    };

    const toggleFavorite = async () => {
        const userId = localStorage.getItem('userId');
        if (!userId) return;

        const getWishlistUrl = `http://localhost:1337/api/users/${userId}?populate=wishlist`;
        const wishlistResponse = await fetch(getWishlistUrl);
        let wishlistIds = [];
        if (wishlistResponse.ok) {
            const data = await wishlistResponse.json();
            wishlistIds = data.wishlist.map((item: { id: number }) => item.id);
        }

        if (isFavorite) {
            // Supprimer la sneaker de la wishlist
            const updatedWishlist = wishlistIds.filter((id: number) => id !== sneaker.id);
            await updateWishlist(updatedWishlist);
            setIsFavorite(false);
        } else {
            // Ajouter la sneaker à la wishlist
            const updatedWishlist = [...wishlistIds, sneaker.id];
            await updateWishlist(updatedWishlist);
            setIsFavorite(true);
        }
    };

    return (
        <>
            
        <Card className="w-full relative">
            <div className="absolute top-0 right-0 m-4">
                <Button variant="ghost" onClick={toggleFavorite}>
                    <Image src={heartUrl} width={20} height={20} alt="Favorite" />
                </Button>
            </div>
            <Link href={`/products/${sneaker.id}`} passHref>
                <CardHeader>
                    <CardTitle><img src={imageUrl} alt={sneaker.attributes.name} /></CardTitle>
                </CardHeader>
                <CardContent>
                    <p>{sneaker.attributes.brand} - {sneaker.attributes.silhouette}</p>
                    <p>Gender: {sneaker.attributes.gender}</p>
                </CardContent>
                <CardFooter>
                    <p>Estimated Value: ${sneaker.attributes.estimatedMarketValue}</p>
                </CardFooter>
            </Link>
        </Card>
        </>
    );
}
    