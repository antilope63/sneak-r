import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export function Profil() {

  const [user, setUser] = useState({ avatarUrl: '', email: '', username: '' });

  useEffect(() => {
    const avatarUrl = localStorage.getItem('avatarUrl') || '';
    const email = localStorage.getItem('email') || '';
    const username = localStorage.getItem('username') || '';
    const userId = localStorage.getItem('userId') || '';

    if (userId && avatarUrl) {
      setUser({ avatarUrl, email, username });
    } else {
      console.log("Chargement de l'avatar...");
    }
  }, []);

  if (!user.avatarUrl || !user.username) {
    return <div>Chargement de l'avatar...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center pt-20">
      <div className="w-50 h-50"> {/* Ajustez la taille selon vos besoins */}
        <Avatar>
          <AvatarImage src={user.avatarUrl} alt={user.username} />
          <AvatarFallback>{user.username[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="mt-4 text-center"> {/* Marges et alignement */}
        <p className="text-lg font-semibold">Nom d'utilisateur: {user.username}</p>
        <p className="text-lg">Email: {user.email}</p>
      </div>
    </div>
  );
}
