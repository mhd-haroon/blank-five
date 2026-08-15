import React, { useState } from 'react';
import { Globe, Cpu, Smartphone, Palette, Database, ShieldCheck, ArrowUpRight, X, Check, Sparkles } from 'lucide-react';

export default function Services({ onOpenCalculator }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'web-dev',
      category: 'Websites & Web Apps',
      icon: <Globe size={32} color="#00F2FE" />,
      title: 'Website & Web App Development',
      badge: 'Most Popular',
      shortDesc: 'Ultra-fast, responsive React & Vite websites engineered for high conversion, search engine indexing, and fluid user experience.',
      features: [
        'Custom React 18 & Vite Architecture',
        'Lighthouse 95+ Mobile Speed Score',
        'SEO Meta & OpenGraph Optimization',
        'Fluid Glassmorphic & Modern Styling',
        'Interactive Lead Generation Widgets',
        'E-commerce & CMS Integration'
      ],
      deliverables: 'Complete Source Code, Production Deployment, Domain Setup, 30-Day Guarantee',
      idealFor: 'Startups, Agencies, E-commerce, Corporate Brands, Local Businesses'
    },
    {
      id: 'custom-software',
      category: 'Custom Software & SaaS',
      icon: <Cpu size={32} color="#7F00FF" />,
      title: 'Custom Software & SaaS Platforms',
      badge: 'High Impact',
      shortDesc: 'Tailor-made software platforms, multi-tenant SaaS products, internal admin dashboards, and custom business management tools.',
      features: [
        'Scalable Modular Architecture',
        'User Role & Permissions System',
        'Payment Gateway (Stripe/Razorpay)',
        'Real-time Analytics Dashboards',
        'Automated Invoice & Email Reports',
        'REST / GraphQL API Endpoints'
      ],
      deliverables: 'Full-Stack Portal, Database Schemas, API Documentation, Admin Console',
      idealFor: 'B2B Enterprises, SaaS Founders, Operations Teams, Tech Startups'
    },
    {
      id: 'mobile-apps',
      category: 'Mobile Apps',
      icon: <Smartphone size={32} color="#FF007F" />,
      title: 'Mobile Application Development',
      badge: 'Cross-Platform',
      shortDesc: 'Native-feel iOS and Android applications built with React Native for high performance, smooth animations, and offline storage.',
      features: [
        'iOS & Android Cross-Platform Code',
        'Smooth 60fps UI Animations',
        'Push Notification Infrastructure',
        'Offline Data Synchronization',
        'App Store & Play Store Submissions',
        'Biometric Auth & Secure Storage'
      ],
      deliverables: 'App Store / Play Store Build Files (.ipa & .apk), Source Code, API Integration',
      idealFor: 'Consumer Apps, On-Demand Delivery, Travel & Booking, Healthcare'
    },
    {
      id: 'branding-uiux',
      category: 'Branding & UI/UX',
      icon: <Palette size={32} color="#00F2FE" />,
      title: 'Branding & UI/UX Design System',
      badge: 'Creative Focus',
      shortDesc: 'Iconic brand identity systems, high-fidelity Figma prototypes, color token systems, typography guidelines, and design kits.',
      features: [
        'Logo Design & Vector System',
        'Dark/Light Theme Color Palettes',
        'Interactive Figma Clickable Prototypes',
        'Custom Iconography & Typography',
        'Social Media Kit & Brand Guidelines',
        'Design System UI Component Library'
      ],
      deliverables: 'Figma Design Workspace, SVG Brand Asset Package, PDF Brand Guide',
      idealFor: 'New Ventures, Brand Rebranding, Digital Products, Marketing Campaigns'
    },
    {
      id: 'backend-apis',
      category: 'Custom Software & SaaS',
      icon: <Database size={32} color="#7F00FF" />,
      title: 'Custom Backend & REST/GraphQL APIs',
      badge: 'Infrastructure',
      shortDesc: 'High-concurrency Node.js, Express, and database solutions built to process complex workflows and high data volumes reliably.',
      features: [
        'High-Performance Node.js Services',
        'PostgreSQL / MongoDB Architecture',
        'JWT & OAuth2 Authentication',
        'Third-Party API Integrations',
        'Microservice & Serverless Setup',
        'Rate Limiting & Data Encryption'
      ],
      deliverables: 'Backend Codebase, Database Migration Scripts, Postman API Collection',
      idealFor: 'Data-intensive platforms, Mobile App Backends, Enterprise Automation'
    },
    {
      id: 'cloud-devops',
      category: 'Cloud & Digital Solutions',
      icon: <ShieldCheck size={32} color="#FF007F" />,
      title: 'Cloud DevOps, SEO & Speed Audit',
      badge: 'Optimization',
      shortDesc: 'Comprehensive site speed enhancement, cloud hosting setup (Vercel, AWS, Cloudflare), and technical SEO indexing.',
      features: [
        'Vercel / AWS Cloud Setup',
        'Cloudflare CDN & SSL Configuration',
        'Core Web Vitals Speed Audit',
        'Google Search Console Indexing',
        'Automated CI/CD Build Pipelines',
        '24/7 Server Health Monitoring'
      ],
      deliverables: 'Lighthouse Audit Report, CDN Setup, Automated CI/CD Config, Monitoring Setup',
      idealFor: 'Existing Sites Needing Speed Upgrade, High Traffic Portals, E-commerce'
    }
  ];

  const categories = ['All', 'Websites & Web Apps', 'Custom Software & SaaS', 'Mobile Apps', 'Branding & UI/UX', 'Cloud & Digital Solutions'];

  const filteredServices = activeCategory === 'All' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <section id="services" style={{ padding: '100px 0', background: 'var(--bg-surface)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge badge-cyan section-subtitle">OUR CAPABILITIES</div>
          <h2 className="section-title">
            Engineering Excellence Across <span className="text-gradient">Every Screen</span>
          </h2>
          <p className="section-description">
            From slick responsive websites to complex cloud software, BLANK FIVE provides end-to-end digital development services.
          </p>
        </div>

        {/* Filter Bar */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            flexWrap: 'wrap',
            marginBottom: '48px'
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '10px 20px',
                borderRadius: '25px',
                fontSize: '0.9rem',
                fontWeight: 600,
                fontFamily: 'var(--font-heading)',
                background: activeCategory === cat ? 'var(--gradient-brand)' : 'rgba(255, 255, 255, 0.04)',
                color: activeCategory === cat ? '#07090e' : 'var(--text-muted)',
                border: activeCategory === cat ? 'none' : '1px solid var(--border-subtle)',
                transition: 'all 0.3s ease',
                boxShadow: activeCategory === cat ? '0 4px 15px rgba(0, 242, 254, 0.3)' : 'none'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
          {filteredServices.map((service) => (
            <div 
              key={service.id}
              className="bg-glass-card"
              style={{
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                position: 'relative'
              }}
            >
              {/* Badge & Icon */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                <div 
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-bright)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {service.icon}
                </div>
                <span className="badge badge-purple" style={{ fontSize: '0.75rem' }}>
                  {service.badge}
                </span>
              </div>

              {/* Title & Description */}
              <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '12px' }}>
                {service.title}
              </h3>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '24px', flexGrow: 1, lineHeight: 1.6 }}>
                {service.shortDesc}
              </p>

              {/* Highlights */}
              <div style={{ marginBottom: '24px' }}>
                {service.features.slice(0, 3).map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-main)', marginBottom: '8px' }}>
                    <Check size={16} color="#00F2FE" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Card Action */}
              <button 
                onClick={() => setSelectedService(service)}
                className="btn-secondary"
                style={{
                  width: '100%',
                  justifyContent: 'space-between',
                  padding: '12px 20px',
                  borderRadius: '12px',
                  fontSize: '0.9rem'
                }}
              >
                <span>View Scope Details</span>
                <ArrowUpRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedService(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-subtle)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X size={18} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div 
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'rgba(0, 242, 254, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {selectedService.icon}
              </div>
              <div>
                <span className="badge badge-purple" style={{ fontSize: '0.75rem', marginBottom: '4px' }}>
                  {selectedService.category}
                </span>
                <h3 style={{ fontSize: '1.6rem', color: '#ffffff' }}>
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '24px', lineHeight: 1.6 }}>
              {selectedService.shortDesc}
            </p>

            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '12px' }}>Included Features & Scope:</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {selectedService.features.map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#ffffff' }}>
                    <Check size={16} color="#00F2FE" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '16px', borderRadius: '12px', marginBottom: '24px', border: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--brand-cyan)', fontWeight: 700, marginBottom: '4px' }}>Deliverables:</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>{selectedService.deliverables}</div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <a 
                href="#contact" 
                onClick={() => setSelectedService(null)} 
                className="btn-primary"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                <span>Request Quote for This Service</span>
              </a>
              <button 
                onClick={() => { setSelectedService(null); onOpenCalculator(); }} 
                className="btn-secondary"
              >
                <Sparkles size={16} color="#00F2FE" />
                <span>Estimate Price</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
