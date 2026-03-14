import { Header } from "@/components/header";
import { Footer } from "@/components/footer";


export function Layout ({children}: {children: React.ReactNode}){
    return(
        <div className="relative flex min-h-screen flex-col dark">
            <Header />
            <main
                className="flex-1 flex flex-col mb-12"
            >
                {children}
            </main>
            <Footer />
        </div>
    )
}