// src/app/page.tsx
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Carousel from '@/components/Carousel';
import ProjectTabs from '@/components/ProjectTabs';
import InfoSection from '@/components/InfoSection';
import AboutSection from '@/components/AboutSection';
import SkillsGrid from '@/components/SkillsGrid';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="scroll-smooth pt-16">
        <Hero />
        <Carousel />
        <InfoSection />
        <ProjectTabs />
        <AboutSection />
        <SkillsGrid />
        <Testimonials />
        <CTASection />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}