import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import GrowMethod from "@/components/GrowMethod";
import InPersonTraining from "@/components/InPersonTraining";
import OnlineTraining from "@/components/OnlineTraining";
import PlanForYou from "@/components/PlanForYou";
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <GrowMethod />
        <InPersonTraining />
        <OnlineTraining />
        <PlanForYou />
        <About />
        <Certifications />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
