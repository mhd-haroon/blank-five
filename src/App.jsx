import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Process from './components/Process';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ProjectCalculator from './components/ProjectCalculator';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import FAQs from './components/FAQs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingChat from './components/FloatingChat';
import Toast from './components/Toast';
import AdminPortal from './components/AdminPortal';

export default function App() {
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (toastObj) => {
    setToast(toastObj);
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-dark)' }}>
      {/* Top Glassmorphic Navigation Header */}
      <Header onOpenCalculator={() => setCalculatorOpen(true)} />

      {/* Main Content Sections */}
      <main style={{ flexGrow: 1 }}>
        <Hero onOpenCalculator={() => setCalculatorOpen(true)} />
        <About />
        <Process />
        <Services onOpenCalculator={() => setCalculatorOpen(true)} />
        <Portfolio />
        <ProjectCalculator showToast={showToast} />
        <WhyUs />
        <Testimonials />
        <FAQs />
        <Contact showToast={showToast} onOpenAdmin={() => setAdminOpen(true)} />
      </main>

      {/* Footer */}
      <Footer showToast={showToast} onOpenAdmin={() => setAdminOpen(true)} />

      {/* Floating Real-Time Desk Widget */}
      <FloatingChat onOpenCalculator={() => setCalculatorOpen(true)} showToast={showToast} />

      {/* Global Toast Notification */}
      <Toast toast={toast} onClose={() => setToast(null)} />

      {/* Calculator Modal Trigger */}
      {calculatorOpen && (
        <ProjectCalculator 
          isOpen={true} 
          onClose={() => setCalculatorOpen(false)} 
          showToast={showToast} 
        />
      )}

      {/* Admin Database Portal Modal */}
      <AdminPortal 
        isOpen={adminOpen} 
        onClose={() => setAdminOpen(false)} 
        showToast={showToast} 
      />
    </div>
  );
}
