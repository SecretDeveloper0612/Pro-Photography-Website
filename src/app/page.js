import { Suspense } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Categories from '../components/Categories';
import About from '../components/About';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import CtaBanner from '../components/CtaBanner';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Categories />
        <About />
        <Process />
        <Testimonials />
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
