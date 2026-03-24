import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Inter, PT_Sans_Caption } from "next/font/google";

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500'],
    variable: '--font-inter'
})

const ptSansCaption = PT_Sans_Caption({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-sans'
})


export function Layout ({children}: {children: React.ReactNode}){
    return(
        <div className={`${inter.className} ${ptSansCaption.variable} relative flex min-h-screen flex-col dark bg-zinc-950 font-inter`}>
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