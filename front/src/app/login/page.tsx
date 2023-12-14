import { LoginForm } from "@/components/Login/login-form"
import NavBar from "@/components/navbar"

export default function Login (){
    return (
        <>
        <NavBar />
        <div className="flex justify-center items-center h-screen">
            <LoginForm />
        </div>
        </>
        
    )
}