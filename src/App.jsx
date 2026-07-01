import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsappFloat from './components/WhatsappFloat';
import Hero from './sections/Hero';
import Categories from './sections/Categories';
import Inspiration from './sections/Inspiration';
import Benefits from './sections/Benefits';
import Projects from './sections/Projects';
import Testimonials from './sections/Testimonials';
import CTA from './sections/CTA';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Inspiration />
        <Benefits />
        <Projects />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
