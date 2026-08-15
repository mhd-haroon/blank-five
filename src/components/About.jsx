import React from 'react';
import { Target, Code2, Rocket, HeartHandshake, CheckCircle2 } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: <Code2 size={28} color="#00F2FE" />,
      title: 'Pixel-Perfect Engineering',
      desc: 'We write clean, modular, maintainable React code built to industry standards with zero bloat and maximum performance.',
      highlights: ['React & Vite Framework', 'Component-Driven Architecture', 'Clean Code Standards']
    },
    {
      icon: <Target size={28} color="#7F00FF" />,
      title: 'Scalable System Architecture',
      desc: 'Built for growth from day one. Our solutions scale seamlessly from initial launch to millions of monthly active users.',
      highlights: ['Cloud Native Deployment', 'REST & GraphQL APIs', 'Ultra-fast CDN Caching']
    },
    {
      icon: <Rocket size={28} color="#FF007F" />,
      title: 'Agile & Rapid Execution',
      desc: 'We value speed and clarity. Transparent weekly updates, live staging previews, and guaranteed delivery milestones.',
      highlights: ['Rapid Turnaround', 'Live Staging Links', 'Transparent Milestones']
    },
    {
      icon: <HeartHandshake size={28} color="#00F2FE" />,
      title: 'Dedicated Partnership & Support',
      desc: 'We don’t just deliver and vanish. We provide ongoing technical support, SEO tuning, and feature scaling.',
      highlights: ['24/7 Priority Support', 'Monthly Health Audits', 'Continuous Feature Upgrades']
    }
  ];

  return (
    <section id="about" style={{ padding: '100px 0', position: 'relative', background: 'var(--bg-surface)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge badge-cyan section-subtitle">About BLANK FIVE</div>
          <h2 className="section-title">
            Real Craftsmanship. <span className="text-gradient">No Cookie-Cutter Templates.</span>
          </h2>
          <p className="section-description">
            At BLANK FIVE, we believe digital solutions should be as unique as the vision behind them. We combine aesthetic UI design, strategic branding, and rock-solid software engineering.
          </p>
        </div>

        {/* Story Banner */}
        <div 
          className="bg-glass-card"
          style={{
            padding: '40px',
            marginBottom: '60px',
            border: '1px solid rgba(127, 0, 255, 0.25)',
            background: 'linear-gradient(135deg, rgba(14, 18, 26, 0.9) 0%, rgba(20, 26, 38, 0.9) 100%)'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', lgGridTemplateColumns: '1.2fr 0.8fr', gap: '40px', alignItems: 'center' }} className="story-grid">
            <div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '16px', color: '#ffffff' }}>
                Why Companies Choose <span className="text-gradient">BLANK FIVE</span>
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '20px', lineHeight: 1.7 }}>
                Unlike generic agencies that rely on sluggish site builders or outdated codebases, BLANK FIVE builds lightweight, responsive, and custom React-powered platforms tailored specifically to your revenue goals.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {['Custom React Solutions', 'SEO & Speed Optimized', 'High Conversion UI/UX', 'Transparent Communication'].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffffff', fontWeight: 500, fontSize: '0.95rem' }}>
                    <CheckCircle2 size={18} color="#00F2FE" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div 
              style={{
                background: 'rgba(0, 242, 254, 0.04)',
                border: '1px solid rgba(0, 242, 254, 0.2)',
                borderRadius: '16px',
                padding: '28px',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
                Our Mission Statement
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontStyle: 'italic', lineHeight: 1.6 }}>
                "To empower businesses worldwide with cutting-edge web applications and brand identities that inspire confidence and fuel measurable growth."
              </p>
            </div>
          </div>
        </div>

        {/* Core Pillars Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '24px' }}>
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="bg-glass-card"
              style={{ padding: '32px', display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <div 
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-bright)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}
              >
                {pillar.icon}
              </div>

              <h3 style={{ fontSize: '1.3rem', marginBottom: '12px', color: '#ffffff' }}>
                {pillar.title}
              </h3>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '20px', flexGrow: 1 }}>
                {pillar.desc}
              </p>

              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '16px', marginTop: 'auto' }}>
                {pillar.highlights.map((h, i) => (
                  <div key={i} style={{ fontSize: '0.825rem', color: 'var(--text-dim)', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--brand-cyan)' }}></span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (min-width: 992px) {
          .story-grid { grid-template-columns: 1.2fr 0.8fr !important; }
        }
      `}</style>
    </section>
  );
}
