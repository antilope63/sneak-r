import React, { useState, useEffect } from 'react';
import Image from "next/image";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from '../ui/button';
import Link from "next/link";

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

export function Whishlist() {
    const [wishlistItems, setWishlistItems] = useState<Sneaker[]>([]);

    useEffect(() => {
        const fetchWishlistItems = async () => {
            const userId = localStorage.getItem('userId');
            if (!userId) return;

            const wishlistUrl = `http://localhost:1337/api/users/${userId}?populate=wishlist`;
            try {
                const response = await fetch(wishlistUrl);
                if (response.ok) {
                    const userData = await response.json();
                    const wishlist = userData.wishlist;

                    if (Array.isArray(wishlist)) {
                        const sneakers = await Promise.all(
                            wishlist.map(async (item) => {
                                const sneakerResponse = await fetch(`http://localhost:1337/api/sneakers/${item.id}?&populate=%2A`);
                                if (sneakerResponse.ok) {
                                    const sneakerData = await sneakerResponse.json();
                                    // Accéder aux attributs via 'data'
                                    return sneakerData.data ? {
                                        id: sneakerData.data.id,
                                        attributes: sneakerData.data.attributes
                                    } : null;
                                }
                                return null;
                            })
                        );
                        setWishlistItems(sneakers.filter((sneaker): sneaker is Sneaker => sneaker !== null));
                    }
                }
            } catch (error) {
                console.error('Error fetching wishlist items:', error);
            }
        };

        fetchWishlistItems();
    }, []);

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {wishlistItems.map(sneaker => (
                <Card key={sneaker.id} className="w-full relative">
                    <CardHeader>
                        <CardTitle>
                            <img src={sneaker.attributes.image.original} alt={sneaker.attributes.name} className="w-full h-auto" />
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{sneaker.attributes.brand} - {sneaker.attributes.silhouette}</p>
                        <p>Gender: {sneaker.attributes.gender}</p>
                    </CardContent>
                    <CardFooter>
                        <p>Estimated Value: ${sneaker.attributes.estimatedMarketValue}</p>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}

