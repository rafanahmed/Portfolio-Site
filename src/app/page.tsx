// src/app/page.tsx
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Carousel from '@/components/Carousel';
import InfoSection from '@/components/InfoSection';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="scroll-smooth pt-16">
        <Hero />
        <Carousel />
        <InfoSection />
      </main>
      <Footer />
    </>
  );
}