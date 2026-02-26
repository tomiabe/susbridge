import Sidebar from "@/components/Sidebar";
import MobileHeader from "@/components/MobileHeader";
import Hero from "@/components/Hero";
import QuestionSection from "@/components/QuestionSection";
import GapSection from "@/components/GapSection";
import ServicesSection from "@/components/ServicesSection";
import PracticeSection from "@/components/PracticeSection";
import WorkSection from "@/components/WorkSection";
import PracticeQuestions from "@/components/PracticeQuestions";
import LatestThinking from "@/components/LatestThinking";
import Partners from "@/components/Partners";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-wrapper">
        <MobileHeader />
        <main>
          <Hero id="home" />
          <QuestionSection />
          <GapSection />
          <ServicesSection id="services" />
          <PracticeSection id="platforms" />
          <WorkSection id="work" />
          <PracticeQuestions />
          <LatestThinking id="insights" />
          <Partners />
          <TeamSection id="about" />
          <ContactSection id="contact" />
          <Footer />
        </main>
      </div>
    </div>
  );
}
