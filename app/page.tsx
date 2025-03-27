import Header from "../components/Header";
import Hero from "@/components/Hero";
import EasyBankDetails from "@/components/EasyBankDetails";
import BankArticles from "@/components/BankArticles";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Header></Header>
      <Hero></Hero>
      <EasyBankDetails></EasyBankDetails>
      <BankArticles></BankArticles>
    </div>
  );
}
