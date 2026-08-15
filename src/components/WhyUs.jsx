import React from 'react';
import { Users, DollarSign, Zap, Code, Layers, ShieldCheck } from 'lucide-react';

export default function WhyUs() {
  const reasons = [
    {
      icon: <Users size={28} color="#00F2FE" />,
      title: 'Senior Engineering Team',
      desc: 'You work directly with dedicated senior developers and designers — never outsourced to junior interns.'
    },
    {
      icon: <DollarSign size={28} color="#7F00FF" />,
      title: 'Transparent Fixed Pricing',
      desc: 'Clear scope agreements with fixed milestones. No surprise add-on fees or hidden hourly charges.'
    },
    {
      icon: <Zap size={28} color="#FF007F" />,
      title: 'Lightning Fast Delivery',
      desc: 'Agile 1 to 3 week delivery cycles with continuous live staging updates so you see progress daily.'
    },
    {
      icon: <Code size={28} color="#00F2FE" />,
      title: '100% Custom React Codebase',
      desc: 'Zero bloated theme templates or fragile WordPress plugins. We write pure, scalable React JavaScript.'
    },
    {
      icon: <Layers size={28} color="#7F00FF" />,
      title: 'End-to-End Ecosystem',
      desc: 'From initial Figma UI wireframes to cloud hosting and SEO optimization, we handle the entire lifecycle.'
    },
    {
      icon: <ShieldCheck size={28} color="#FF007F" />,
      title: 'Enterprise Security & SLA',
      desc: 'Production-ready code with SSL encryption, DDoS protection, edge CDN caching, and 30-day post-launch support.'
    }
  ];

  return (
    <section style={{ padding: '100px 0', background: 'var(--bg-surface)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge badge-cyan section-subtitle">WHY CHOOSE US</div>
          <h2 className="section-title">
            Built for Businesses That <span className="text-gradient">Demand the Best</span>
          </h2>
          <p className="section-description">
            Here is why startups and enterprise brands trust BLANK FIVE as their long-term digital growth partner.
          </p>
        </div>

        {/* Reasons Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
          {reasons.map((reason, idx) => (
            <div 
              key={idx}
              className="bg-glass-card"
              style={{
                padding: '36px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '20px'
              }}
            >
              <div 
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-bright)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                {reason.icon}
              </div>

              <div>
                <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '10px' }}>
                  {reason.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {reason.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
