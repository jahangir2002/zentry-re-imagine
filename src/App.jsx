import React, { useEffect } from 'react'
import Lenis from 'lenis';
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Features from './components/Features'
import Story from './components/Story'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      wrapper: document.documentElement, // The scroll container
      content: document.body, // The content that will be scrolled
      smoothWheel: true, // Smooth the scroll initiated by wheel events
      duration: 1.2, // Duration of the scroll animation in seconds
      lerp: 0.1, // Linear interpolation intensity (between 0 and 1)
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        lenis.scrollTo(target, {
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
        });
      });
    });

  }, []);

  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
