import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Categories from '../components/Categories';
import About from '../components/About';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';

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
      </main>
    </>
  );
}
