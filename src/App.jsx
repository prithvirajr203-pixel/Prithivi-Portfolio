import IntroSequence from "./components/IntroSequence.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import WhatIBuild from "./components/WhatIBuild.jsx";
import AIThatActs from "./components/AIThatActs.jsx";
import Experience from "./components/Experience.jsx";
import ProjectCommandCenter from "./components/ProjectCommandCenter.jsx";
import ClientWork from "./components/ClientWork.jsx";
import AIStack from "./components/AIStack.jsx";
import Skills from "./components/Skills.jsx";
import BookSection from "./components/BookSection.jsx";
import CertificationVault from "./components/CertificationVault.jsx";
import AchievementSection from "./components/AchievementSection.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="relative bg-background min-h-screen">
      <div className="noise-overlay" />
      <IntroSequence />

      <Navbar />

      <main>
        <Hero />
        <WhatIBuild />
        <AIThatActs />
        <Experience />
        <ProjectCommandCenter />
        <ClientWork />
        <AIStack />
        <Skills />
        <BookSection />
        <CertificationVault />
        <AchievementSection />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
