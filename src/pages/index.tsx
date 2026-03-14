import { Header } from "@/components/header";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} bg-background h-screen w-full bg-black text-white`}>
      <Header />
      <h1 className="text-3xl font-bold font-mono text-center text-purple-500">Hello World</h1>
    </div>
  );
}
