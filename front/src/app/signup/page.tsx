import { SignupForm } from "@/components/Singup/singnUp-form"
import NavBar from "@/components/navbar"

export default function Login (){
    return (
        <>
        <NavBar />
        <div className="flex justify-center items-center h-screen">
            <SignupForm />
        </div>
        </>
        
    )
}