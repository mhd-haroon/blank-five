import React from 'react';
import { ArrowRight, MessageCircle, Code, ShieldCheck, Zap, Sparkles, Layers, Cpu } from 'lucide-react';

export default function Hero({ onOpenCalculator }) {
  const stats = [
    { value: '50+', label: 'Digital Products Launched' },
    { value: '99.8%', label: 'Client Satisfaction Rate' },
    { value: '100%', label: 'On-Time Project Delivery' },
    { value: '24/7', label: 'Dedicated Engineering Support' },
  ];

  return (
    <section 
      style={{
        position: 'relative',
        paddingTop: '160px',
        paddingBottom: '100px',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(127, 0, 255, 0.12) 0%, rgba(7, 9, 14, 1) 75%)'
      }}
    >
      {/* Background Glow Orbs */}
      <div className="glow-orb glow-orb-cyan" style={{ top: '-100px', left: '-100px' }}></div>
      <div className="glow-orb glow-orb-pink" style={{ top: '100px', right: '-100px' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', lgGridTemplateColumns: '1.1fr 0.9fr', gap: '60px', alignItems: 'center' }} className="hero-grid">
          {/* Left Column: Text & Actions */}
          <div>
            {/* Top Tagline Badge */}
            <div className="badge badge-purple" style={{ marginBottom: '24px' }}>
              <Sparkles size={14} />
              <span>We Build Future — Websites • Apps • Branding</span>
            </div>

            {/* Main Headline */}
            <h1 
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
                fontWeight: 900,
                letterSpacing: '-1.5px',
                marginBottom: '24px',
                lineHeight: 1.1
              }}
            >
              From Idea to Impact. <br />
              <span className="text-gradient">We Craft Scalable Digital Ecosystems.</span>
            </h1>

            {/* Sub-headline */}
            <p 
              style={{
                fontSize: '1.2rem',
                color: 'var(--text-muted)',
                marginBottom: '36px',
                maxWidth: '620px',
                lineHeight: 1.7
              }}
            >
              BLANK FIVE empowers startups, growing enterprises, and visionaries with custom web apps, pixel-perfect design systems, mobile applications, and cloud-first architecture.
            </p>

            {/* Call to Actions */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '48px' }}>
              <a href="#contact" className="btn-primary">
                <span>Start Your Project</span>
                <ArrowRight size={18} />
              </a>

              <a 
                href="https://wa.me/918078434415?text=Hello%20BLANK%20FIVE,%20I'd%20like%20to%20discuss%20building%20a%20project!" 
                target="_blank" 
                rel="noreferrer" 
                className="btn-secondary"
              >
                <MessageCircle size={18} color="#00F2FE" />
                <span>Chat on WhatsApp</span>
              </a>

              <button 
                onClick={onOpenCalculator}
                className="btn-secondary"
                style={{ borderColor: 'rgba(127, 0, 255, 0.4)' }}
              >
                <Sparkles size={18} color="#FF007F" />
                <span>Calculate Project Scope</span>
              </button>
            </div>

            {/* Trust Highlights */}
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', color: 'var(--text-dim)', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} color="#00F2FE" />
                <span>Custom Architecture</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Zap size={16} color="#FF007F" />
                <span>Rapid Turnaround</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Cpu size={16} color="#7F00FF" />
                <span>Modern React Tech Stack</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Interactive Card Showcase */}
          <div style={{ position: 'relative' }}>
            <div 
              className="bg-glass-card animate-float"
              style={{
                padding: '32px',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 25px 60px -15px rgba(0, 242, 254, 0.15)',
                border: '1px solid rgba(0, 242, 254, 0.25)'
              }}
            >
              {/* Card Header Bar */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></span>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></span>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></span>
                </div>
                <span className="badge badge-purple" style={{ fontSize: '0.75rem', padding: '4px 10px' }}>
                  BLANK FIVE Engine v2.4
                </span>
              </div>

              {/* Code / Visual Mockup */}
              <div style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#e2e8f0', marginBottom: '24px', lineHeight: 1.8 }}>
                <p><span style={{ color: '#00F2FE' }}>const</span> <span style={{ color: '#FF007F' }}>blankFive</span> = <span style={{ color: '#7F00FF' }}>createEcosystem</span>({'{'}</p>
                <p style={{ paddingLeft: '16px' }}>client: <span style={{ color: '#a855f7' }}>'Your Vision'</span>,</p>
                <p style={{ paddingLeft: '16px' }}>capabilities: [<span style={{ color: '#38bdf8' }}>'Websites'</span>, <span style={{ color: '#38bdf8' }}>'Apps'</span>, <span style={{ color: '#38bdf8' }}>'Branding'</span>],</p>
                <p style={{ paddingLeft: '16px' }}>quality: <span style={{ color: '#f59e0b' }}>'Uncompromising'</span>,</p>
                <p style={{ paddingLeft: '16px' }}>deliverySpeed: <span style={{ color: '#10b981' }}>'Lightning Fast'</span></p>
                <p>{'}'});</p>
              </div>

              {/* Mini Features List */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '20px' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '12px', borderRadius: '10px', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Code size={18} color="#00F2FE" />
                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#ffffff' }}>React & Vite</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>High performance</div>
                  </div>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '12px', borderRadius: '10px', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Layers size={18} color="#FF007F" />
                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#ffffff' }}>UI/UX Design</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>Figma prototypes</div>
                  </div>
                </div>
              </div>

              {/* Bottom Live Banner */}
              <div style={{ marginTop: '20px', background: 'rgba(0, 242, 254, 0.08)', borderRadius: '12px', padding: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid rgba(0, 242, 254, 0.2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#00F2FE', boxShadow: '0 0 12px #00F2FE' }}></span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#ffffff' }}>Status: Ready to Build</span>
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--brand-cyan)', fontWeight: 600 }}>100% Custom Code</span>
              </div>
            </div>
          </div>
        </div>

        {/* Live Stats Ticker Grid */}
        <div 
          style={{
            marginTop: '80px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px'
          }}
        >
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-glass-card"
              style={{
                padding: '24px',
                textAlign: 'center',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <div 
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 900,
                  fontFamily: 'var(--font-heading)',
                  lineHeight: 1,
                  marginBottom: '8px'
                }}
                className="text-gradient"
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid { grid-template-columns: 1.1fr 0.9fr !important; }
        }
      `}</style>
    </section>
  );
}
