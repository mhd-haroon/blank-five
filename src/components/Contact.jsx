import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Clock, Send, CheckCircle2, Sparkles, Copy, ExternalLink, Database } from 'lucide-react';
import { dbService } from '../services/db';

export default function Contact({ showToast, onOpenAdmin }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Website Development',
    budget: '$500 - $1,500',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateTicket = () => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    return `BF-2026-${randomNum}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const newTicket = generateTicket();
    setTicketId(newTicket);

    // Save to Database
    await dbService.saveInquiry({
      ...formData,
      ticketId: newTicket
    });
    
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (showToast) {
        showToast({ 
          title: 'Database Record Created!', 
          message: `Inquiry ticket #${newTicket} stored in blankfive.com database.`, 
          type: 'success' 
        });
      }
    }, 500);
  };

  const getFormattedMessage = () => {
    return `*BLANK FIVE Project Inquiry [Ticket #${ticketId || 'BF-2026'}]*\n` +
      `*Domain:* www.blankfive.com\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone || 'N/A'}\n` +
      `*Service:* ${formData.service}\n` +
      `*Budget:* ${formData.budget}\n` +
      `*Message:* ${formData.message}`;
  };

  const handleWhatsAppDispatch = () => {
    const text = encodeURIComponent(getFormattedMessage());
    window.open(`https://wa.me/916282878105?text=${text}`, '_blank');
    if (showToast) {
      showToast({ title: 'Opening WhatsApp...', message: 'Connecting with lead developer.', type: 'info' });
    }
  };

  const handleEmailDispatch = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.service} - [Ticket #${ticketId}]`);
    const body = encodeURIComponent(getFormattedMessage());
    window.location.href = `mailto:contact@blankfive.com?cc=blankfive.tech@gmail.com&subject=${subject}&body=${body}`;
    if (showToast) {
      showToast({ title: 'Opening Email...', message: 'Sending to contact@blankfive.com', type: 'info' });
    }
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    if (showToast) {
      showToast({ title: 'Copied to Clipboard!', message: `${label}: ${text}`, type: 'success' });
    }
  };

  return (
    <section id="contact" style={{ padding: '100px 0', background: 'var(--bg-dark)', position: 'relative' }}>
      {/* Background Orbs */}
      <div className="glow-orb glow-orb-cyan" style={{ bottom: '0', right: '-100px' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div className="section-header">
          <div className="badge badge-pink section-subtitle">LET'S CONNECT</div>
          <h2 className="section-title">
            Have a Vision? <span className="text-gradient">Let's Build It.</span>
          </h2>
          <p className="section-description">
            Fill out the form below or contact our lead software team directly. All inquiries are saved to our database and processed within 2 hours.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', lgGridTemplateColumns: '0.9fr 1.1fr', gap: '48px' }} className="contact-grid">
          {/* Direct Contact Options */}
          <div>
            <h3 style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '16px' }}>
              Direct Contact & <span className="text-gradient">Instant Support</span>
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '36px', lineHeight: 1.7 }}>
              Official Domain: <strong style={{ color: 'var(--brand-cyan)' }}>www.blankfive.com</strong>
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
              {/* WhatsApp Card */}
              <div 
                className="bg-glass-card"
                style={{
                  padding: '20px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  border: '1px solid rgba(0, 242, 254, 0.3)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 242, 254, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MessageSquare size={24} color="#00F2FE" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 600 }}>WhatsApp Direct</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff' }}>+91 6282878105</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--brand-cyan)' }}>Active for instant messaging</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <button 
                    onClick={() => copyToClipboard('+916282878105', 'WhatsApp')} 
                    className="btn-secondary" 
                    style={{ padding: '8px 12px', fontSize: '0.8rem' }}
                    title="Copy Phone Number"
                  >
                    <Copy size={14} />
                  </button>
                  <a 
                    href="https://wa.me/916282878105?text=Hello%20BLANK%20FIVE,%20I'd%20like%20to%20discuss%20a%20new%20project!" 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn-primary"
                    style={{ padding: '8px 14px', fontSize: '0.825rem' }}
                  >
                    <span>Chat</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div 
                className="bg-glass-card"
                style={{
                  padding: '20px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(127, 0, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Mail size={24} color="#7F00FF" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 600 }}>Official Email</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff' }}>contact@blankfive.com</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Backup: blankfive.tech@gmail.com</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <button 
                    onClick={() => copyToClipboard('contact@blankfive.com', 'Official Email')} 
                    className="btn-secondary" 
                    style={{ padding: '8px 12px', fontSize: '0.8rem' }}
                    title="Copy Email"
                  >
                    <Copy size={14} />
                  </button>
                  <a 
                    href="mailto:contact@blankfive.com" 
                    className="btn-secondary"
                    style={{ padding: '8px 14px', fontSize: '0.825rem' }}
                  >
                    <span>Mail</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div 
                className="bg-glass-card"
                style={{
                  padding: '20px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255, 0, 127, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Phone size={24} color="#FF007F" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 600 }}>Phone Consultation</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff' }}>+91 6282878105</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Mon - Sat (9am - 8pm IST)</div>
                  </div>
                </div>

                <button 
                  onClick={() => copyToClipboard('+916282878105', 'Phone Number')} 
                  className="btn-secondary" 
                  style={{ padding: '8px 12px', fontSize: '0.8rem' }}
                >
                  <Copy size={14} />
                </button>
              </div>
            </div>

            {/* Database Admin Quick Link */}
            <div style={{ background: 'rgba(0, 242, 254, 0.05)', border: '1px solid rgba(0, 242, 254, 0.2)', padding: '16px 20px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Database size={20} color="#00F2FE" />
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ffffff' }}>Database System Active</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>All inquiries stored in persistent table.</div>
                </div>
              </div>
              
              <button 
                onClick={onOpenAdmin}
                className="btn-secondary"
                style={{ padding: '6px 14px', fontSize: '0.8rem' }}
              >
                <span>Console</span>
              </button>
            </div>
          </div>

          {/* Interactive Lead Form / Dispatch Confirmation */}
          <div 
            className="bg-glass-card"
            style={{
              padding: '40px',
              border: '1px solid var(--border-bright)'
            }}
          >
            {submitted ? (
              <div style={{ padding: '20px 0', textAlign: 'center' }}>
                <div 
                  style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.15)',
                    color: '#10b981',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px'
                  }}
                >
                  <CheckCircle2 size={38} />
                </div>

                <div className="badge badge-purple" style={{ marginBottom: '12px' }}>
                  Database Record Ticket #{ticketId}
                </div>

                <h3 style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '10px' }}>
                  Inquiry Saved to Database!
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '28px', lineHeight: 1.6 }}>
                  Thank you <strong style={{ color: '#ffffff' }}>{formData.name}</strong>. Your project scope for <strong style={{ color: 'var(--brand-cyan)' }}>{formData.service}</strong> ({formData.budget}) is stored in our database and ready for instant dispatch!
                </p>

                {/* Instant Dispatch Actions */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                  <button 
                    onClick={handleWhatsAppDispatch} 
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <MessageSquare size={18} />
                    <span>Dispatch Scope via WhatsApp Now</span>
                  </button>

                  <button 
                    onClick={handleEmailDispatch} 
                    className="btn-secondary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <Mail size={18} color="#7F00FF" />
                    <span>Send to contact@blankfive.com</span>
                  </button>

                  <button 
                    onClick={() => copyToClipboard(getFormattedMessage(), 'Project Inquiry Scope')}
                    className="btn-secondary"
                    style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem' }}
                  >
                    <Copy size={16} />
                    <span>Copy Formatted Ticket Details</span>
                  </button>
                </div>

                <button 
                  onClick={() => setSubmitted(false)} 
                  style={{ color: 'var(--text-dim)', fontSize: '0.85rem', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
                >
                  Submit Another Project Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '24px' }}>
                  Project Scope Inquiry Form
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 500 }}>Your Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      value={formData.name} 
                      onChange={handleChange}
                      placeholder="e.g. Alex Turner"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-subtle)',
                        color: '#ffffff',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 500 }}>Email Address *</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      value={formData.email} 
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-subtle)',
                        color: '#ffffff',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 500 }}>Phone / WhatsApp</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange}
                      placeholder="+91 9876543210"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-subtle)',
                        color: '#ffffff',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 500 }}>Primary Service</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        background: '#0e121a',
                        border: '1px solid var(--border-subtle)',
                        color: '#ffffff',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    >
                      <option value="Website Development">Website Development</option>
                      <option value="Custom Software & SaaS">Custom Software & SaaS</option>
                      <option value="Mobile App (iOS/Android)">Mobile App (iOS/Android)</option>
                      <option value="Branding & UI/UX Design">Branding & UI/UX Design</option>
                      <option value="Cloud DevOps & SEO">Cloud DevOps & SEO</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 500 }}>Estimated Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: '#0e121a',
                      border: '1px solid var(--border-subtle)',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  >
                    <option value="Under $500">Under $500 / ₹40,000</option>
                    <option value="$500 - $1,500">$500 - $1,500 / ₹40k - ₹1.2L</option>
                    <option value="$1,500 - $3,000">$1,500 - $3,000 / ₹1.2L - ₹2.5L</option>
                    <option value="$3,000+">$3,000+ / ₹2.5L+</option>
                  </select>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 500 }}>Project Details / Description *</label>
                  <textarea 
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project goals, preferred features, target audience..."
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  {loading ? (
                    <span>Saving to Database...</span>
                  ) : (
                    <>
                      <span>Save to Database & Generate Ticket</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`
        @media (min-width: 992px) {
          .contact-grid { grid-template-columns: 0.9fr 1.1fr !important; }
        }
      `}</style>
    </section>
  );
}
