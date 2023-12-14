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
    first_name: z.string().min(1, {
        message: "Veillez entrer votre prénom."
    }).max(30, {
        message: "Votre prénom ne peut pas avoir plus de 30 caractère."
    }),
    email: z.string().min(1, {
        message: "Veillez entrer votre adresse mail."
    }).email("Veillez entrer une adresse mail valide."),
    password: z.string().min(1, {
        message: "Veillez entrer votre mot de passe."
    }).min(8, {
        message: "Votre mot de passe doit contenir au minimum 8 caractère."
    })
})

export function SignupForm() {

    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { // Assurez-vous que les valeurs par défaut sont définies pour chaque champ
            first_name: '',
            email: '',
            password: '',
        }
    });

    const promise = () => new Promise((resolve) => setTimeout(resolve, 2000));

    async function onSubmit(values: z.infer<typeof formSchema>) {
        toast.promise(
            (async () => {
                try {
                    const response = await fetch('http://localhost:1337/api/auth/local/register', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            username: values.first_name, // ou une combinaison de first_name et last_name
                            email: values.email,
                            password: values.password
                        }),
                    });
    
                    if (!response.ok) {
                        throw new Error('Erreur lors de l\'inscription');
                    }
    
                    const data = await response.json();
                    console.log(data); // Traitement de la réponse
                    router.refresh(); // ou une autre action après l'inscription réussie
                    return "Inscription réussie ! Bienvenu chez sneak'r 🎉";
                } catch (error) {
                    console.error(error);
                    throw error; // Rethrow l'erreur pour le toast.promise
                }
            })(),
            {
                loading: "Connexion...",
                success: "Inscription réussie ! Bienvenu chez sneak'r 🎉",
                error: "email ou username deja utiliser",
            }
        );
    }
    console.log(form.formState);
    return (
        <div className="h-screen flex items-center justify-center relative">
            <div className="p-8 sm:relative">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto grid space-y-8 w-[300px] sm:w-[350px]">
                        <div className="flex flex-col text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">Créer un compte</h1>
                            <p className="text-sm text-muted-foreground">Entrez vos inforamtions en dessous.</p>
                        </div>
                        <div className="space-y-2">
                            <FormField
                                control={form.control}
                                name="first_name" // -> first_name: ... in the formSchema, same for all FormField
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>username</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Dupont" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
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
                        <Button className="flex gap-2" type="submit" disabled={!form.formState.isValid}>S&apos;inscrire</Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}
