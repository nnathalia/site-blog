import Link from "next/link";
import Image from "next/image";

export function Logo() {
    return (
        <Link href="/">
            <Image src="/Brand-Logo.svg" alt="Logo" title="Página Inicial" width={116} height={32} />
        </Link>
    )
}