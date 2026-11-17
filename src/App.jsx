import { useState } from 'react';
import { IconSprite } from './components/Icons.jsx';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import DataSection from './components/DataSection.jsx';
import Why from './components/Why.jsx';
import Services from './components/Services.jsx';
import Process from './components/Process.jsx';
import Pricing from './components/Pricing.jsx';
import Faq from './components/Faq.jsx';
import Cta from './components/Cta.jsx';
import Footer from './components/Footer.jsx';
import useReveal from './hooks/useReveal.js';

export default function App() {
  // Which service tab is open. Lives here so footer links can switch it too.
  const [activeService, setActiveService] = useState(0);
  useReveal();

  return (
    <>
      <IconSprite />
      <Nav />
      <main id="top">
        <Hero />
        <DataSection />
        <Why />
        <Services active={activeService} setActive={setActiveService} />
        <Process />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <Footer onPickService={setActiveService} />
    </>
  );
}
