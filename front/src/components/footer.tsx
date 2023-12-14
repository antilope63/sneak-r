import { FooterItems } from "./footer/footeritems"

export default function Footer (){
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-white/50 backdrop-blur-xl p-3 px-10 lg:px-20 flex justify-center items-center">
            <FooterItems/>
        </footer>
    )
}