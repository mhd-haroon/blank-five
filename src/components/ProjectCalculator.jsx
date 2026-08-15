import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Sparkles, Send, ShieldCheck, RefreshCw, FileText } from 'lucide-react';
import ProjectDocument from './ProjectDocument';

export default function ProjectCalculator({ isOpen, onClose, showToast }) {
  const [currency, setCurrency] = useState('USD');
  const [serviceType, setServiceType] = useState('website');
  const [selectedFeatures, setSelectedFeatures] = useState(['seo', 'responsive']);
  const [timeline, setTimeline] = useState('standard');
  const [showDocModal, setShowDocModal] = useState(false);

  const currencies = {
    USD: { symbol: '$', rate: 1, label: 'USD ($)' },
    INR: { symbol: '₹', rate: 83, label: 'INR (₹)' },
    EUR: { symbol: '€', rate: 0.92, label: 'EUR (€)' },
    GBP: { symbol: '£', rate: 0.78, label: 'GBP (£)' }
  };

  const currentCurrency = currencies[currency];

  const services = [
    { id: 'website', name: 'Standard React Website', basePrice: 450, desc: 'Responsive 3-5 page React SPA with clean styling & SEO' },
    { id: 'webapp', name: 'Web App / E-commerce Portal', basePrice: 950, desc: 'Dynamic web application with product listings, cart & state' },
    { id: 'saas', name: 'Custom SaaS Platform', basePrice: 1800, desc: 'Multi-user dashboard, authentication, APIs & admin panel' },
    { id: 'mobile', name: 'Mobile App (iOS/Android)', basePrice: 1500, desc: 'React Native mobile application with native functionality' },
    { id: 'branding', name: 'Brand Identity & Design System', basePrice: 500, desc: 'Logo vector kit, Figma UI system & brand guidelines' },
  ];

  const featureOptions = [
    { id: 'seo', name: 'Advanced SEO & Speed Tuning', price: 150 },
    { id: 'responsive', name: '100% Mobile Fluid Optimization', price: 100 },
    { id: 'auth', name: 'User Authentication & Database', price: 300 },
    { id: 'payment', name: 'Stripe/Razorpay Payment Gateway', price: 250 },
    { id: 'admin', name: 'Custom Admin Dashboard', price: 400 },
    { id: 'animations', name: 'Custom Glassmorphic Micro-Animations', price: 150 },
  ];

  const timelineOptions = [
    { id: 'express', name: 'Express Rush (1 - 2 Weeks)', multiplier: 1.25 },
    { id: 'standard', name: 'Standard (3 - 4 Weeks)', multiplier: 1.0 },
    { id: 'flexible', name: 'Flexible (5+ Weeks)', multiplier: 0.9 },
  ];

  const toggleFeature = (id) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const selectedServiceObj = services.find(s => s.id === serviceType);
  const featuresTotal = selectedFeatures.reduce((acc, fId) => {
    const f = featureOptions.find(opt => opt.id === fId);
    return acc + (f ? f.price : 0);
  }, 0);
  const selectedTimelineObj = timelineOptions.find(t => t.id === timeline);

  const baseMinUSD = Math.round((selectedServiceObj.basePrice + featuresTotal) * selectedTimelineObj.multiplier);
  const baseMaxUSD = Math.round(baseMinUSD * 1.25);

  const estimatedMin = Math.round(baseMinUSD * currentCurrency.rate);
  const estimatedMax = Math.round(baseMaxUSD * currentCurrency.rate);

  const handleApplyScope = () => {
    if (showToast) {
      showToast({ 
        title: 'Scope Saved!', 
        message: `Estimated Range: ${currentCurrency.symbol}${estimatedMin.toLocaleString()} - ${currentCurrency.symbol}${estimatedMax.toLocaleString()}`, 
        type: 'success' 
      });
    }
    if (onClose) onClose();
    window.location.hash = '#contact';
  };

  const content = (
    <div className="container" id="calculator" style={{ padding: '80px 0' }}>
      {/* Section Header */}
      <div className="section-header">
        <div className="badge badge-pink section-subtitle">INSTANT ESTIMATOR</div>
        <h2 className="section-title">
          Calculate Your <span className="text-gradient">Project Scope & Budget</span>
        </h2>
        <p className="section-description">
          Select your requirements below to receive an instant, transparent estimate for your project.
        </p>
      </div>

      <div 
        className="bg-glass-card"
        style={{
          padding: '40px',
          border: '1px solid rgba(0, 242, 254, 0.3)',
          boxShadow: 'var(--shadow-glow-cyan)'
        }}
      >
        {/* Currency Switcher Bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px', paddingBottom: '16px', borderBottom: '1px solid var(--border-subtle)', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffffff', fontWeight: 600, fontSize: '0.9rem' }}>
            <Calculator size={18} color="#00F2FE" />
            <span>Interactive Scope Configurator</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Currency:</span>
            {Object.keys(currencies).map((curr) => (
              <button
                key={curr}
                onClick={() => setCurrency(curr)}
                style={{
                  padding: '4px 12px',
                  borderRadius: '16px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  background: currency === curr ? 'var(--gradient-brand)' : 'rgba(255, 255, 255, 0.04)',
                  color: currency === curr ? '#07090e' : 'var(--text-muted)',
                  border: currency === curr ? 'none' : '1px solid var(--border-subtle)'
                }}
              >
                {curr}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', lgGridTemplateColumns: '1.2fr 0.8fr', gap: '40px' }} className="calc-grid">
          {/* Options Column */}
          <div>
            {/* Step 1: Service Type */}
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1.1rem', color: '#ffffff', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--brand-cyan)', color: '#07090e', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 800 }}>1</span>
                <span>Select Primary Service</span>
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {services.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setServiceType(s.id)}
                    style={{
                      padding: '14px 18px',
                      borderRadius: '12px',
                      background: serviceType === s.id ? 'rgba(0, 242, 254, 0.1)' : 'rgba(255, 255, 255, 0.02)',
                      border: serviceType === s.id ? '1px solid var(--brand-cyan)' : '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div>
                      <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem' }}>{s.name}</div>
                      <div style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>{s.desc}</div>
                    </div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--brand-cyan)' }}>
                      Starting at {currentCurrency.symbol}{Math.round(s.basePrice * currentCurrency.rate).toLocaleString()}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Add-on Features */}
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1.1rem', color: '#ffffff', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--brand-purple)', color: '#ffffff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 800 }}>2</span>
                <span>Select Required Features</span>
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {featureOptions.map((f) => {
                  const isChecked = selectedFeatures.includes(f.id);
                  return (
                    <button
                      key={f.id}
                      onClick={() => toggleFeature(f.id)}
                      style={{
                        padding: '12px 14px',
                        borderRadius: '10px',
                        background: isChecked ? 'rgba(127, 0, 255, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                        border: isChecked ? '1px solid var(--brand-purple)' : '1px solid var(--border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        textAlign: 'left'
                      }}
                    >
                      <div 
                        style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '4px',
                          background: isChecked ? 'var(--brand-purple)' : 'transparent',
                          border: isChecked ? 'none' : '1px solid var(--text-dim)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {isChecked && <Check size={14} color="#ffffff" />}
                      </div>
                      <span style={{ fontSize: '0.85rem', color: isChecked ? '#ffffff' : 'var(--text-muted)' }}>
                        {f.name} (+{currentCurrency.symbol}{Math.round(f.price * currentCurrency.rate)})
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Target Timeline */}
            <div>
              <h3 style={{ fontSize: '1.1rem', color: '#ffffff', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--brand-pink)', color: '#ffffff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 800 }}>3</span>
                <span>Target Timeline</span>
              </h3>
              <div style={{ display: 'flex', gap: '10px' }}>
                {timelineOptions.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTimeline(t.id)}
                    style={{
                      flex: 1,
                      padding: '12px',
                      borderRadius: '10px',
                      background: timeline === t.id ? 'rgba(255, 0, 127, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                      border: timeline === t.id ? '1px solid var(--brand-pink)' : '1px solid var(--border-subtle)',
                      color: timeline === t.id ? '#ffffff' : 'var(--text-muted)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      textAlign: 'center'
                    }}
                  >
                    {t.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Estimate Summary Sidebar Card */}
          <div 
            style={{
              background: 'rgba(7, 9, 14, 0.85)',
              borderRadius: '20px',
              padding: '32px',
              border: '1px solid var(--border-bright)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 15px 35px rgba(0,0,0,0.5)'
            }}
          >
            <div>
              <div className="badge badge-purple" style={{ marginBottom: '16px' }}>
                <Sparkles size={14} />
                <span>Estimated Scope Summary</span>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '4px' }}>Selected Service:</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff' }}>{selectedServiceObj.name}</div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '8px' }}>Active Features ({selectedFeatures.length}):</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {selectedFeatures.map(fId => {
                    const f = featureOptions.find(opt => opt.id === fId);
                    return (
                      <div key={fId} style={{ fontSize: '0.85rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--brand-cyan)' }}></span>
                        <span>{f?.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '20px', marginBottom: '24px' }}>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Estimated Investment ({currency}):</div>
                <div style={{ fontSize: '2.4rem', fontWeight: 900, fontFamily: 'var(--font-heading)' }} className="text-gradient">
                  {currentCurrency.symbol}{estimatedMin.toLocaleString()} - {currentCurrency.symbol}{estimatedMax.toLocaleString()}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                onClick={() => setShowDocModal(true)}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <FileText size={18} />
                <span>View Scope as Document</span>
              </button>

              <button
                onClick={handleApplyScope}
                className="btn-secondary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>Apply to Contact Form</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Scope Document Modal */}
        {showDocModal && (
          <ProjectDocument
            isModal={true}
            onClose={() => setShowDocModal(false)}
            showToast={showToast}
            documentData={{
              ticketId: `BF-SCOPE-${Math.floor(1000 + Math.random() * 9000)}`,
              name: 'Prospective Client',
              email: 'Inquiry via blankfive.com Estimator',
              phone: 'Not provided',
              service: selectedServiceObj.name,
              budget: `${currentCurrency.symbol}${estimatedMin.toLocaleString()} - ${currentCurrency.symbol}${estimatedMax.toLocaleString()} (${currency})`,
              timeline: selectedTimelineObj.name,
              features: selectedFeatures.map(fId => {
                const f = featureOptions.find(opt => opt.id === fId);
                return f ? f.name : fId;
              }),
              message: `Configured interactive scope for ${selectedServiceObj.name} with ${selectedFeatures.length} feature module(s) on ${selectedTimelineObj.name} delivery pace.`,
              createdAt: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
            }}
          />
        )}
      </div>
      <style>{`
        @media (min-width: 992px) {
          .calc-grid { grid-template-columns: 1.2fr 0.8fr !important; }
        }
      `}</style>
    </div>
  );

  if (isOpen) {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" style={{ maxWidth: '1000px' }} onClick={(e) => e.stopPropagation()}>
          <button 
            onClick={onClose}
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
            ✕
          </button>
          {content}
        </div>
      </div>
    );
  }

  return content;
}
