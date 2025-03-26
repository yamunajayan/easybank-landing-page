import Image from "next/image";
import Header from "../components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Header></Header>
      <Hero></Hero>
    </div>
  );
}
