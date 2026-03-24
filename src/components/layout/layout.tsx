import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Inter } from "next/font/google";

const inter = Inter({subsets: ['latin']})

export function Layout ({children}: {children: React.ReactNode}){
    return(
        <div className={`${inter.className} relative flex min-h-screen flex-col dark bg-zinc-950`}>
            <Header />
            <main
                className="flex-1 flex flex-col"
            >
                {children}
            </main>
            <Footer />
        </div>
    )
}