import React, { useState } from 'react';
import { MessageSquare, Phone, Mail, Sparkles, X, ChevronUp, CheckCircle2 } from 'lucide-react';

export default function FloatingChat({ onOpenCalculator, showToast }) {
  const [expanded, setExpanded] = useState(false);

  const copyContact = (text, type) => {
    navigator.clipboard.writeText(text);
    if (showToast) {
      showToast({ title: 'Copied to Clipboard!', message: `${type}: ${text}`, type: 'success' });
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: '28px', right: '28px', zIndex: 999 }}>
      {/* Expanded Quick Contact Menu */}
      {expanded && (
        <div 
          className="bg-glass-card"
          style={{
            marginBottom: '16px',
            padding: '20px',
            width: '320px',
            borderRadius: '20px',
            border: '1px solid rgba(0, 242, 254, 0.4)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.7), 0 0 30px rgba(0, 242, 254, 0.25)',
            animation: 'scaleIn 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid var(--border-subtle)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#00F2FE', boxShadow: '0 0 10px #00F2FE' }}></span>
              <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff' }}>BLANK FIVE Live Desk</span>
            </div>
            <button onClick={() => setExpanded(false)} style={{ color: 'var(--text-dim)' }}>
              <X size={16} />
            </button>
          </div>

          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '16px', lineHeight: 1.5 }}>
            Have a project in mind? Connect directly with our lead software architect now.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {/* WhatsApp Direct */}
            <a 
              href="https://wa.me/916282878105?text=Hello%20BLANK%20FIVE,%20I'd%20like%20to%20discuss%20a%20new%20project!"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ padding: '10px 16px', fontSize: '0.88rem', justifyContent: 'center' }}
            >
              <MessageSquare size={16} />
              <span>Chat on WhatsApp (+91 6282878105)</span>
            </a>

            {/* Quick Phone Copy */}
            <button 
              onClick={() => copyContact('+916282878105', 'Phone Number')}
              className="btn-secondary"
              style={{ padding: '10px 16px', fontSize: '0.85rem', justifyContent: 'space-between' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={14} color="#FF007F" />
                <span>Call: +91 6282878105</span>
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--brand-cyan)' }}>Copy</span>
            </button>

            {/* Price Estimator */}
            <button 
              onClick={() => { setExpanded(false); onOpenCalculator(); }}
              className="btn-secondary"
              style={{ padding: '10px 16px', fontSize: '0.85rem', justifyContent: 'space-between', borderColor: 'rgba(127,0,255,0.4)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Sparkles size={14} color="#7F00FF" />
                <span>Calculate Project Scope</span>
              </div>
              <span style={{ fontSize: '0.75rem', color: '#b871ff' }}>Instant</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'var(--gradient-brand)',
          border: 'none',
          boxShadow: '0 8px 25px rgba(0, 242, 254, 0.4), 0 0 20px rgba(255, 0, 127, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#07090e',
          cursor: 'pointer',
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: expanded ? 'rotate(90deg)' : 'scale(1)',
          position: 'relative'
        }}
        aria-label="Open Floating Live Desk"
      >
        {expanded ? <X size={24} /> : <MessageSquare size={26} />}
        
        {/* Pulsing indicator dot */}
        {!expanded && (
          <span 
            style={{
              position: 'absolute',
              top: '2px',
              right: '2px',
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              background: '#10b981',
              border: '2px solid #07090e'
            }}
          />
        )}
      </button>

      <style>{`
        @keyframes scaleIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
