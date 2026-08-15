import React, { useState } from 'react';
import { ExternalLink, Layers, ArrowUpRight, X, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'look-up-travel',
      title: 'LOOK UP — Next-Gen Travel Portal',
      category: 'Websites',
      imageBg: 'linear-gradient(135deg, #00F2FE 0%, #4facfe 100%)',
      summary: 'High-converting interactive destination booking platform featuring dynamic itinerary discovery, glassmorphic UI, and real-time quote generation.',
      tags: ['React 18', 'Vite', 'Vanilla CSS', 'Figma'],
      metrics: ['+140% User Engagement', '99/100 Lighthouse Performance', '< 0.8s Page Load'],
      client: 'LOOK UP Travel & Tours',
      challenge: 'The client needed an ultra-modern travel booking website to replace an old WordPress template that suffered from slow load times and high bounce rates.',
      solution: 'We engineered a custom React SPA with optimized media assets, smooth micro-animations, and direct WhatsApp booking inquiry integration.'
    },
    {
      id: 'zenith-saas',
      title: 'ZenithFlow — SaaS Analytics Engine',
      category: 'SaaS & Apps',
      imageBg: 'linear-gradient(135deg, #7F00FF 0%, #e0c3fc 100%)',
      summary: 'B2B subscription dashboard providing real-time data visualization, API key management, automated PDF invoice generation, and user role management.',
      tags: ['React', 'Node.js', 'Chart.js', 'REST API'],
      metrics: ['$42k MRR Growth', '4.9/5 Rating', '50k+ Daily API Calls'],
      client: 'Zenith Tech Labs',
      challenge: 'Complexity in rendering large datasets in real-time without freezing browser main thread UI.',
      solution: 'Implemented virtualized list rendering, Web Worker data crunching, and custom dark mode charts.'
    },
    {
      id: 'aurora-branding',
      title: 'Aurora AI — Brand Identity & Design System',
      category: 'Branding',
      imageBg: 'linear-gradient(135deg, #FF007F 0%, #f7727d 100%)',
      summary: 'Complete brand identity design system including 3D vector logo, dark glass UI component library, social media kit, and interactive brand guidelines.',
      tags: ['Figma System', 'Brand Strategy', 'Logo Design', 'Vector Assets'],
      metrics: ['100% Brand Consistency', 'Used by 25+ Designers'],
      client: 'Aurora Artificial Intelligence',
      challenge: 'Establishing a premium futuristic identity that stands out in the crowded AI software space.',
      solution: 'Created a sleek dark aesthetic with neon cyan & magenta glow tokens that convey futuristic precision.'
    },
    {
      id: 'apex-mobile',
      title: 'Apex Fit — On-Demand Fitness Mobile App',
      category: 'SaaS & Apps',
      imageBg: 'linear-gradient(135deg, #00F2FE 0%, #00c6ff 100%)',
      summary: 'Cross-platform mobile workout tracker featuring offline workout logs, video stream caching, and wearable Bluetooth sync.',
      tags: ['React Native', 'Redux Toolkit', 'iOS/Android'],
      metrics: ['25k+ Active Downloads', '4.8 App Store Rating'],
      client: 'Apex Health Group',
      challenge: 'Ensuring seamless offline workout logging without losing state during network disconnections.',
      solution: 'Built an offline-first SQLite synchronization engine with automatic cloud backup.'
    },
    {
      id: 'nexus-ecommerce',
      title: 'Nexus Gear — Luxury E-Commerce Platform',
      category: 'Websites',
      imageBg: 'linear-gradient(135deg, #7F00FF 0%, #9f44d3 100%)',
      summary: 'Headless e-commerce storefront with instant instant search, 3D product previews, multi-currency checkout, and customer reviews.',
      tags: ['React', 'Vite', 'Stripe API', 'Tailwind'],
      metrics: ['+85% Conversion Rate', '1.2s Average Checkout'],
      client: 'Nexus Global Outfitters',
      challenge: 'Slow product catalog page loads hurting checkout conversions.',
      solution: 'Replaced traditional page reloads with instant client-side route transitions and image pre-fetching.'
    },
    {
      id: 'solaris-energy',
      title: 'Solaris Energy — Industrial Corporate Portal',
      category: 'Websites',
      imageBg: 'linear-gradient(135deg, #FF007F 0%, #7F00FF 100%)',
      summary: 'Clean, corporate Web presentation platform for renewable energy provider with solar calculator, interactive map, and career portal.',
      tags: ['React', 'CSS Modules', 'Google Maps API'],
      metrics: ['3x Inquiries Received', 'Top 3 Google Ranking'],
      client: 'Solaris Green Tech',
      challenge: 'Communicating complex industrial ROI data in a digestible consumer format.',
      solution: 'Built an interactive solar savings calculator where homeowners instantly compute estimated quarterly power savings.'
    }
  ];

  const categories = ['All', 'Websites', 'SaaS & Apps', 'Branding'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" style={{ padding: '100px 0', background: 'var(--bg-dark)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge badge-purple section-subtitle">OUR PORTFOLIO</div>
          <h2 className="section-title">
            Featured Projects & <span className="text-gradient">Case Highlights</span>
          </h2>
          <p className="section-description">
            Explore how we've helped ambitious brands transform their digital presence with custom React solutions.
          </p>
        </div>

        {/* Filter Navigation */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '40px', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                padding: '8px 20px',
                borderRadius: '20px',
                fontSize: '0.88rem',
                fontWeight: 600,
                fontFamily: 'var(--font-heading)',
                background: activeFilter === cat ? 'var(--gradient-brand)' : 'rgba(255, 255, 255, 0.04)',
                color: activeFilter === cat ? '#07090e' : 'var(--text-muted)',
                border: activeFilter === cat ? 'none' : '1px solid var(--border-subtle)',
                transition: 'all 0.3s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '30px' }}>
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-glass-card"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
            >
              {/* Visual Header Thumbnail Banner */}
              <div 
                style={{
                  height: '200px',
                  background: project.imageBg,
                  position: 'relative',
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.3)' }}></div>
                
                <span className="badge badge-cyan" style={{ position: 'relative', zIndex: 1, backdropFilter: 'blur(8px)' }}>
                  {project.category}
                </span>

                <div style={{ position: 'relative', zIndex: 1, display: 'flex', gap: '6px' }}>
                  {project.metrics.slice(0, 1).map((m, i) => (
                    <span key={i} style={{ background: 'rgba(0, 0, 0, 0.7)', color: '#00F2FE', fontSize: '0.75rem', fontWeight: 700, padding: '4px 10px', borderRadius: '12px', backdropFilter: 'blur(4px)' }}>
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '28px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
                  Client: {project.client}
                </div>

                <h3 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '12px' }}>
                  {project.title}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', marginBottom: '20px', lineHeight: 1.6, flexGrow: 1 }}>
                  {project.summary}
                </p>

                {/* Tech Stack Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                  {project.tags.map((tag, i) => (
                    <span key={i} style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--border-subtle)', color: 'var(--text-muted)', fontSize: '0.75rem', padding: '4px 10px', borderRadius: '8px' }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Button */}
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="btn-secondary"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.88rem' }}
                >
                  <span>Explore Case Details</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Case Study Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedProject(null)}
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

            <span className="badge badge-purple" style={{ marginBottom: '12px' }}>
              {selectedProject.category} Case Study
            </span>

            <h3 style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '8px' }}>
              {selectedProject.title}
            </h3>

            <div style={{ color: 'var(--brand-cyan)', fontSize: '0.9rem', marginBottom: '20px', fontWeight: 600 }}>
              Client: {selectedProject.client}
            </div>

            {/* Impact Highlights */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '24px' }}>
              {selectedProject.metrics.map((metric, i) => (
                <div key={i} style={{ background: 'rgba(0, 242, 254, 0.06)', border: '1px solid rgba(0, 242, 254, 0.2)', padding: '12px', borderRadius: '10px', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#00F2FE' }}>{metric}</div>
                </div>
              ))}
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '6px' }}>The Challenge:</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: 1.6 }}>{selectedProject.challenge}</p>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '6px' }}>The BLANK FIVE Solution:</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: 1.6 }}>{selectedProject.solution}</p>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="#contact" onClick={() => setSelectedProject(null)} className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                <span>Build Similar Project</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
