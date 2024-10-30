import FAQ from "@/components/FAQ";
import Header from "@/components/Header";
import Students from "@/components/Students";
import TrialSubscription from "@/components/TrialSubscription";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";
import Teachers from "@/components/Teachers";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header/>
      <WhyChooseUs/>
      <Teachers/>
      <Students/>
      <FAQ/>
      <TrialSubscription/>
      <Footer/>
    </main>
    
  );
}
