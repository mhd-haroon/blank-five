import React, { useState } from 'react';
import Logo from './Logo';
import { MessageSquare, ArrowUp, ShieldCheck, X, Globe, Mail, Phone, Send, CheckCircle2, Database } from 'lucide-react';
import { dbService } from '../services/db';

export default function Footer({ showToast, onOpenAdmin }) {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    await dbService.saveSubscriber(newsletterEmail);
    setSubscribed(true);

    if (showToast) {
      showToast({ 
        title: 'Saved to Database!', 
        message: `${newsletterEmail} added to subscribers database.`, 
        type: 'success' 
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
        </svg>
      )
    },
    {
      name: 'X (Twitter)',
      href: 'https://twitter.com',
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      href: 'https://github.com',
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      )
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/918078434415',
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.174-1.236-6.158-3.481-8.404z"/>
        </svg>
      )
    }
  ];

  return (
    <footer style={{ background: '#040508', paddingTop: '80px', paddingBottom: '40px', borderTop: '1px solid var(--border-subtle)', position: 'relative' }}>
      <div className="container">
        {/* Newsletter Callout Bar */}
        <div 
          className="bg-glass-card"
          style={{
            padding: '32px 40px',
            borderRadius: '24px',
            marginBottom: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            border: '1px solid rgba(0, 242, 254, 0.25)',
            background: 'linear-gradient(135deg, rgba(14, 18, 26, 0.9) 0%, rgba(20, 28, 42, 0.9) 100%)'
          }}
        >
          <div>
            <div className="badge badge-cyan" style={{ marginBottom: '8px' }}>BLANK FIVE Tech Digest</div>
            <h3 style={{ fontSize: '1.4rem', color: '#ffffff' }}>Subscribe for Architecture & Web Insights</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Zero spam. Direct email updates from www.blankfive.com.</p>
          </div>

          <form onSubmit={handleNewsletterSubmit} style={{ display: 'flex', gap: '10px', minWidth: '320px' }}>
            {subscribed ? (
              <div style={{ color: '#10b981', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={18} />
                <span>Saved to database!</span>
              </div>
            ) : (
              <>
                <input 
                  type="email"
                  required
                  placeholder="Enter your work email..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  style={{
                    padding: '12px 18px',
                    borderRadius: '25px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-bright)',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    outline: 'none',
                    flexGrow: 1
                  }}
                />
                <button type="submit" className="btn-primary" style={{ padding: '12px 22px', fontSize: '0.9rem' }}>
                  <span>Subscribe</span>
                  <Send size={14} />
                </button>
              </>
            )}
          </form>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          {/* Brand Info */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ marginBottom: '20px' }}>
              <Logo size="medium" />
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', marginBottom: '24px', lineHeight: 1.6 }}>
              BLANK FIVE (www.blankfive.com) is a premier digital technology studio crafting high-performance websites, custom web & mobile apps, and iconic brand identity systems.
            </p>
            
            {/* Social Links */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {socialLinks.map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--brand-cyan)'; e.currentTarget.style.color = '#00F2FE'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
                  aria-label={s.name}
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#ffffff', marginBottom: '20px', fontFamily: 'var(--font-heading)' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['About', 'Services', 'Process', 'Portfolio', 'Calculator', 'FAQs', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--brand-cyan)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Capabilities */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#ffffff', marginBottom: '20px', fontFamily: 'var(--font-heading)' }}>
              Our Capabilities
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <li>React & Vite Web Apps</li>
              <li>Custom SaaS Platforms</li>
              <li>Mobile App Engineering</li>
              <li>UI/UX & Design Systems</li>
              <li>Cloud DevOps & Speed Audits</li>
              <li>REST / GraphQL API Services</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#ffffff', marginBottom: '20px', fontFamily: 'var(--font-heading)' }}>
              Get in Touch
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <div>
                <strong style={{ color: '#ffffff' }}>Domain:</strong> www.blankfive.com
              </div>
              <div>
                <strong style={{ color: '#ffffff' }}>Email:</strong> haroonalayil6@gmail.com
              </div>
              <div>
                <strong style={{ color: '#ffffff' }}>WhatsApp:</strong> +91 8078434415
              </div>
              <div style={{ marginTop: '10px', display: 'flex', gap: '8px' }}>
                <button 
                  onClick={onOpenAdmin} 
                  className="badge badge-cyan" 
                  style={{ fontSize: '0.75rem', cursor: 'pointer', border: '1px solid rgba(0,242,254,0.4)' }}
                >
                  <Database size={12} />
                  <span>Admin Database Portal</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div 
          style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px'
          }}
        >
          <div style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>
            © {new Date().getFullYear()} BLANK FIVE (www.blankfive.com). All rights reserved. Registered Digital Studio.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <button 
              onClick={() => setPrivacyOpen(true)}
              style={{ color: 'var(--text-dim)', fontSize: '0.85rem', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Privacy Policy & Terms
            </button>

            <button 
              onClick={scrollToTop}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-bright)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {privacyOpen && (
        <div className="modal-overlay" onClick={() => setPrivacyOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setPrivacyOpen(false)}
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

            <h3 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '16px' }}>Privacy Policy & Client Terms</h3>
            
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '16px', lineHeight: 1.6 }}>
              At BLANK FIVE (www.blankfive.com), we respect your privacy and protect all client intellectual property. All project code, database records, and communications are strictly encrypted and confidential.
            </p>

            <h4 style={{ color: '#ffffff', fontSize: '1rem', marginBottom: '8px' }}>Key Terms:</h4>
            <ul style={{ color: 'var(--text-muted)', fontSize: '0.9rem', paddingLeft: '20px', marginBottom: '24px', lineHeight: 1.6 }}>
              <li>100% ownership of source code transferred upon final invoice clearance.</li>
              <li>No client data is shared or sold to third-party vendors.</li>
              <li>30-day post-launch bug warranty included for all delivered codebases.</li>
            </ul>

            <button onClick={() => setPrivacyOpen(false)} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Close Privacy Terms
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
