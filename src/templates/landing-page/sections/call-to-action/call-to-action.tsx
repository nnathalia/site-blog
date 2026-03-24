import { PT_Sans_Caption } from "next/font/google";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Store } from "lucide-react";


const ptSansCaption = PT_Sans_Caption({
    subsets: ['latin'],
    weight: '700'
})

export function CallToAction() {
    return (
        <section className="relative py-24 mt-20 bg-gradient-to-b from-cyan-950/20 to-gray-700">
            <div className="absolute inset-0 hidden md:block bg-[url('/background-footer.svg')] bg-cover bg-center opacity-90" />
            <div className="container relative">
                <div className="relative flex flex-col  items-center gap-6 text-center">

                    <div className="bg-cyan-300 p-4 w-fit rounded-full absolute -top-32">
                        <Store className="text-cyan-100" />
                    </div>

                    <h2 className="font-sans text-balance text-center text-heading-xl text-gray-100">Crie uma loja online e inicie <br /> suas vendas ainda hoje</h2>
                    <Button variant="primary" className="mt-6">
                        <Link href="/criar-loja" className="flex items-center gap-2">
                            Criar loja grátis
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </div>

            </div>
        </section>
    )
}