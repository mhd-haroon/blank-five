import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

export default function Header({ onOpenCalculator }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Calculator', href: '#calculator' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        padding: isScrolled ? '12px 0' : '20px 0',
        background: isScrolled ? 'rgba(7, 9, 14, 0.88)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a href="#">
          <Logo size={isScrolled ? 'small' : 'medium'} />
        </a>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'none', mdDisplay: 'flex', gap: '32px', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.95rem',
                fontWeight: 500,
                transition: 'color 0.2s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Header Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Status Badge */}
          <div 
            style={{
              display: 'none',
              lgDisplay: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '20px',
              background: 'rgba(0, 242, 254, 0.06)',
              border: '1px solid rgba(0, 242, 254, 0.2)',
              color: 'var(--brand-cyan)',
              fontSize: '0.8rem',
              fontWeight: 500
            }}
            className="status-pill"
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00F2FE', boxShadow: '0 0 10px #00F2FE' }}></span>
            <span>Available for Q3 Projects</span>
          </div>

          {/* Calculator Quick CTA */}
          <button 
            onClick={onOpenCalculator}
            className="btn-secondary"
            style={{
              padding: '8px 16px',
              fontSize: '0.85rem',
              borderRadius: '20px',
              display: 'none',
              smDisplay: 'inline-flex'
            }}
          >
            <Sparkles size={14} color="#00F2FE" />
            <span>Price Estimator</span>
          </button>

          {/* Contact Quote CTA */}
          <a href="#contact" className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
            <span>Get a Quote</span>
            <ArrowRight size={16} />
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-subtle)',
              color: '#ffffff'
            }}
            className="mobile-toggle"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div 
          style={{
            position: 'fixed',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(7, 9, 14, 0.96)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: 'var(--text-main)',
                fontSize: '1.1rem',
                fontWeight: 600,
                padding: '8px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
              }}
            >
              {link.name}
            </a>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px' }}>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenCalculator(); }}
              className="btn-secondary"
            >
              <Sparkles size={16} color="#00F2FE" />
              <span>Project Price Estimator</span>
            </button>
            <a 
              href="https://wa.me/916282878105?text=Hello%20BLANK%20FIVE,%20I'd%20like%20to%20discuss%20a%20new%20project!" 
              target="_blank" 
              rel="noreferrer"
              className="btn-primary"
              style={{ justifyContent: 'center' }}
            >
              <MessageSquare size={16} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}

      {/* Header Inline Media Queries */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 767px) {
          .status-pill { display: none !important; }
        }
      `}</style>
    </header>
  );
}
