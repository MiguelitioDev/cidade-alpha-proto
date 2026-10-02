import type { Component } from 'solid-js';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhatIsIt } from './components/WhatIsIt';
import { Developments } from './components/Developments';
import { ComparisonTable } from './components/ComparisonTable';
import { StrategicLocation } from './components/StrategicLocation';
import { CommercialLots } from './components/CommercialLots';
import { FinancialCalculator } from './components/FinancialCalculator';
import { AuthoritySection } from './components/AuthoritySection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: Component = () => {
  return (
    <div style={{ 'min-height': '100vh', display: 'flex', 'flex-direction': 'column', 'background-color': 'var(--bg-page)' }}>
      {/* 1. Header & Navigation */}
      <Header />

      <main style={{ flex: '1' }}>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. "What It Is" Section */}
        <WhatIsIt />

        {/* 3. Developments Section with Filter */}
        <Developments />

        {/* 4. Interactive Comparison Table */}
        <ComparisonTable />

        {/* 5. Strategic Location & Google Maps */}
        <StrategicLocation />

        {/* 6. Commercial Lots */}
        <CommercialLots />

        {/* 7. HOA & Installment Calculators */}
        <FinancialCalculator />

        {/* 8. Social Proof & Resident Agent Authority */}
        <AuthoritySection />

        {/* 9. Comprehensive FAQ */}
        <FaqSection />

        {/* Lead Capture Form Section */}
        <ContactSection />
      </main>

      {/* 10. Footer with Disclaimer & Contact Info */}
      <Footer />

      {/* Floating WhatsApp CTA */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
