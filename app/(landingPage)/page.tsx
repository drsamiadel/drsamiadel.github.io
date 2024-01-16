import CallToActionSection from "./_components/call-to-action-section";
import Footer from "./_components/footer";
import HeroSection from "./_components/hero-section";
import ProjectsSection from "./_components/projects-section";
import SkillsSection from "./_components/skills-section";
import TestemonialsSection from "./_components/testemonials-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SkillsSection />
      <TestemonialsSection />
      <ProjectsSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}
