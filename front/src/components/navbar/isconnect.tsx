import React, { useState, useEffect } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from '../ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import Image from 'next/image';

export function AvatarProfil() {
  const user = JSON.parse(localStorage.getItem('userId') || '{}');
  const [avatarUrl, setAvatarUrl] = useState('');

  const router = useRouter(); // Assurez-vous d'importer useRouter de 'next/router'

  const handleLogout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('jwt');
    localStorage.removeItem('email');
    localStorage.removeItem('username');
    localStorage.removeItem('avatarUrl');
    // Rediriger l'utilisateur
    router.push('/login'); // Modifier avec votre chemin de page de connexion
  };


  async function fetchUserData() {
    const userId = JSON.parse(localStorage.getItem('userId') || '{}');
    if (!userId) return;

    try {
      const response = await fetch(`http://localhost:1337/api/users/${userId}?&populate=%2A`);
      if (!response.ok) {
        throw new Error('Problème lors de la récupération des données de l’utilisateur');
      }
      const userData = await response.json();
      console.log("Données de l'utilisateur récupérées:", userData);
      const avatarUrl = `http://localhost:1337${userData.avatar.formats.thumbnail.url}`;
      setAvatarUrl(avatarUrl);
      localStorage.setItem('avatarUrl', avatarUrl);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    let isMounted = true;
    if (isMounted) fetchUserData();
    return () => {
      isMounted = false;
    };
  }, []);

  if (!avatarUrl) {
    console.log("Chargement de l'avatar, URL actuelle:", avatarUrl);
    
  }

  return (
    <>
    <Link href="/whishlist">
            <Image 
            src="/coeur.png"
            width={20}
            height={20}
            alt="Favorite"
            className='mr-6 ml-2'
            />
    </Link>
        
    
    

    <Link href="/profil" >
        <Avatar className='mr-6'>
            <AvatarImage src={avatarUrl}  />
            <AvatarFallback>{user.username}</AvatarFallback> 
        </Avatar>    
    </Link>
    <Button onClick={handleLogout} className="ml-4">Déconnexion</Button>
    </>
    
    
  );
}
