import React, { useState } from 'react';
import { Search, PenTool, Code, Rocket, CheckCircle, Clock, ShieldAlert } from 'lucide-react';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Discovery & Blueprinting',
      subtitle: 'Mapping Vision into Tech Specs',
      icon: <Search size={24} color="#00F2FE" />,
      timeline: '1 - 3 Days',
      desc: 'We start by deep-diving into your target audience, core business objectives, competitor landscape, and functional scope.',
      deliverables: [
        'Interactive Wireframes & Figma Mockups',
        'System Architecture Plan',
        'Tech Stack & API Specifications',
        'Project Timeline & Scope Roadmap'
      ]
    },
    {
      number: '02',
      title: 'Agile Modular Engineering',
      subtitle: 'Building Robust & Scalable Code',
      icon: <Code size={24} color="#7F00FF" />,
      timeline: '1 - 3 Weeks',
      desc: 'Our senior developers write modular, clean React & Vite code with custom styling, API connections, and state management.',
      deliverables: [
        'Pixel-Perfect Responsive UI Components',
        'REST / GraphQL Backend Integrations',
        'Live Staging Link Access',
        'Agile Sprint Demonstrations'
      ]
    },
    {
      number: '03',
      title: 'QA Testing & Speed Optimization',
      subtitle: 'Refining Every Pixel & Millisecond',
      icon: <ShieldAlert size={24} color="#FF007F" />,
      timeline: '2 - 4 Days',
      desc: 'We rigorously audit the product across 15+ mobile and desktop viewports, execute Lighthouse speed tuning, and conduct security checks.',
      deliverables: [
        'Lighthouse 95+ Performance Score',
        'Cross-Browser & Mobile Compatibility',
        'SEO Meta & OpenGraph Integration',
        'Security Audit & SSL Validation'
      ]
    },
    {
      number: '04',
      title: 'Deployment & Growth Scaling',
      subtitle: 'Going Live with Zero Downtime',
      icon: <Rocket size={24} color="#00F2FE" />,
      timeline: 'Ongoing Support',
      desc: 'We deploy your platform to high-speed edge networks (Vercel, Netlify, AWS), set up Google Analytics & Search Console, and support post-launch scaling.',
      deliverables: [
        'Production Edge CDN Deployment',
        'Domain & DNS Configuration',
        'Analytics & Conversion Tracking',
        '30-Day Guarantee & Maintenance'
      ]
    }
  ];

  return (
    <section id="process" style={{ padding: '100px 0', background: 'var(--bg-dark)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge badge-purple section-subtitle">HOW IT WORKS</div>
          <h2 className="section-title">
            Our Proven 4-Step <span className="text-gradient">Development Workflow</span>
          </h2>
          <p className="section-description">
            From raw concept to global deployment, we follow a transparent, high-efficiency process to guarantee on-time execution.
          </p>
        </div>

        {/* Process Step Navigation Bar */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '12px',
            marginBottom: '40px',
            overflowX: 'auto'
          }}
          className="process-nav"
        >
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              style={{
                padding: '16px 20px',
                borderRadius: '16px',
                background: activeStep === idx ? 'rgba(0, 242, 254, 0.1)' : 'rgba(255, 255, 255, 0.03)',
                border: activeStep === idx ? '1px solid var(--brand-cyan)' : '1px solid var(--border-subtle)',
                textAlign: 'left',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '14px'
              }}
            >
              <span 
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 900,
                  color: activeStep === idx ? 'var(--brand-cyan)' : 'var(--text-dim)',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                {step.number}
              </span>
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: activeStep === idx ? '#ffffff' : 'var(--text-muted)' }}>
                  {step.title}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                  {step.timeline}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Active Step Detailed Card Showcase */}
        <div 
          className="bg-glass-card"
          style={{
            padding: '40px',
            border: '1px solid rgba(0, 242, 254, 0.3)',
            boxShadow: 'var(--shadow-glow-cyan)'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', lgGridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }} className="process-detail-grid">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span className="badge badge-cyan" style={{ fontSize: '1rem', padding: '6px 14px' }}>
                  Phase {steps[activeStep].number}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                  <Clock size={16} color="#00F2FE" />
                  <span>Timeline: {steps[activeStep].timeline}</span>
                </div>
              </div>

              <h3 style={{ fontSize: '2rem', marginBottom: '10px', color: '#ffffff' }}>
                {steps[activeStep].title}
              </h3>
              
              <p style={{ color: 'var(--brand-cyan)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '16px' }}>
                {steps[activeStep].subtitle}
              </p>

              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '28px', lineHeight: 1.7 }}>
                {steps[activeStep].desc}
              </p>

              <div style={{ display: 'flex', gap: '16px' }}>
                <a href="#contact" className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
                  <span>Discuss Your Project</span>
                </a>
              </div>
            </div>

            {/* Deliverables Card */}
            <div 
              style={{
                background: 'rgba(7, 9, 14, 0.7)',
                borderRadius: '20px',
                padding: '32px',
                border: '1px solid var(--border-bright)'
              }}
            >
              <h4 style={{ fontSize: '1.1rem', color: '#ffffff', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                {steps[activeStep].icon}
                <span>Phase Key Deliverables</span>
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {steps[activeStep].deliverables.map((item, idx) => (
                  <div 
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    <CheckCircle size={18} color="#00F2FE" />
                    <span style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 991px) {
          .process-nav { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 576px) {
          .process-nav { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
