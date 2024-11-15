import Header from "@/components/Header";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import ChooseSectionTwo from "@/components/Choose/ChooseSectionTwo";
import FAQSection from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Video from "@/components/Video";
import { GetStaticPropsContext } from "next";
import { getLocalizedStaticProps } from "@/utils/getLocalizedStaticProps";



export default function Home() {
  return (
    <>
      <Header />
      <ScrollUp />
      <Hero />
      <AboutSectionTwo />
      <Features />
      <ChooseSectionTwo />
      {/* <Video /> */}
      <FAQSection />
      <Contact />
      <Footer />
    </>
  );
}


export const getStaticProps = getLocalizedStaticProps;   
