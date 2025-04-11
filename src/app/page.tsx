import React from 'react';



import Hero from '../../components/Hero';
import About from '../../components/About';
import Services from '../../components/Services';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import Blog from '../../components/Blog';
// import Eye from '../../components/eye';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Blog />
      <Contact />
      <Footer />
      {/* <Eye /> */}
    </main>
  );
} 