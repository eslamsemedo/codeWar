import React from 'react';



import Hero from '../../components/Hero';
import About from '../../components/About';
import Services from '../../components/Services';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import Blog from '../../components/Blog';
import Projects from '../../components/projects';
// import Eye from '../../components/eye';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Blog />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
} 