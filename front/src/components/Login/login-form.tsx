"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { toast } from "sonner"




const formSchema = z.object({
    email: z.string().min(1, {
        message: "Veillez entrer votre adresse mail."
    }).email("Veillez entrer une adresse mail valide."),
    password: z.string().min(1, {
        message: "Veillez entrer votre mot de passe."
    }).min(8, {
        message: "Votre mot de passe doit contenir au minimum 8 caractère."
    })
})

export function LoginForm() {

    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        toast.promise(
            (async () => {
                try {
                    // Ici, nous sommes dans une fonction async, donc await peut être utilisé
                    const response = await fetch('http://localhost:1337/api/auth/local', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            identifier: values.email,
                            password: values.password,
                        }),
                    });
    
                    if (!response.ok) {
                        const errorResponse = await response.json();
                        throw new Error(errorResponse.error?.message || 'Erreur lors de la connexion');
                    }
    
                    
                    const data = await response.json();
                    localStorage.setItem('userId', JSON.stringify(data.user.id));
                    localStorage.setItem('jwt', data.jwt);
                    localStorage.setItem('email', JSON.stringify(data.user.email));
                    localStorage.setItem('username', JSON.stringify(data.user.username));
                    console.log("localStorage mis à jour avec les données de l'utilisateur:", data.user);
                    console.log("Réponse de la connexion:", data); // Traitement de la réponse
                    router.refresh(); // ou une autre action après la connexion réussie
                    return "Connexion réussie ! Bienvenu chez sneak'r 🎉";
                } catch (error) {
                    console.error("Erreur lors de la connexion:", error);
                    throw error; // Rethrow l'erreur pour le toast.promise
                }
            })(),
            {
                loading: "Connexion...",
                success: "Connexion réussie ! Bienvenu chez sneak'r 🎉",
                error: "Une erreur c'est produite",
            }
        );
    }



    return (
        <div className="h-screen flex items-center justify-center relative">
            <div className="p-8 sm:relative">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto grid space-y-8 w-[300px] sm:w-[350px]">
                        <div className="flex flex-col text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">connecter vous</h1>
                            <p className="text-sm text-muted-foreground">Entrez vos inforamtions en dessous.</p>
                        </div>
                        <div className="space-y-2">
                            
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Votre meilleur adresse mail.</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="nom@exemple.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Votre mot de passe.</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="monmotdepasse*" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button className="flex gap-2" type="submit" disabled={!form.formState.isValid}>Se connecter</Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}
