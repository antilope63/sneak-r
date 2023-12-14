import Link from "next/link"
import { NavItems } from "./navbar/navitems"



export default function NavBar() {
    return (
        <div className="z-50 bg-white/50 backdrop-blur-xl fixed top-0 left-0 w-full flex items-center justify-between p-3 px-10 lg:px-20">
            <p className="font-black uppercase p-2 sm:ml-2">
                <Link href="/">
                    Sneak'r
                </Link>
            </p>
            <NavItems />
        </div>
        
    )
}

