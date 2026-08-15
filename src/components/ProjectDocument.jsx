import React, { useRef } from 'react';
import { 
  Printer, 
  MessageSquare, 
  Mail, 
  Copy, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  Calendar, 
  User, 
  Phone, 
  Hash,
  ArrowRight
} from 'lucide-react';

export default function ProjectDocument({ 
  documentData, 
  onClose, 
  onReset,
  showToast,
  isModal = false 
}) {
  const documentRef = useRef(null);

  const {
    ticketId = 'BF-2026-7842',
    name = 'Valued Client',
    email = 'client@example.com',
    phone = 'N/A',
    service = 'Website Development',
    budget = '$500 - $1,500',
    message = 'Full responsive application with custom UI & API integrations.',
    features = [],
    timeline = 'Standard (3 - 4 Weeks)',
    createdAt = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  } = documentData || {};

  const handlePrint = () => {
    if (!documentRef.current) {
      window.print();
      return;
    }

    const documentHtml = documentRef.current.outerHTML;
    const printWindow = window.open('', '_blank', 'width=900,height=750,left=200,top=100');

    if (!printWindow) {
      window.print();
      return;
    }

    printWindow.document.open();
    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>BLANK FIVE - Project Scope [${ticketId}]</title>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Outfit:wght@600;700;800;900&display=swap" rel="stylesheet">
          <style>
            * { box-sizing: border-box; margin: 0; padding: 0; }
            body { 
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
              background: #ffffff !important; 
              color: #0f172a !important; 
              padding: 24px;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            .printable-document-sheet {
              box-shadow: none !important;
              border: 1px solid #cbd5e1 !important;
              padding: 32px !important;
              border-radius: 12px !important;
              width: 100% !important;
              max-width: 800px;
              margin: 0 auto;
            }
            table { width: 100%; border-collapse: collapse; }
            .no-print { display: none !important; }
            @page { margin: 12mm; size: A4 portrait; }
          </style>
        </head>
        <body>
          ${documentHtml}
          <script>
            window.onload = function() {
              setTimeout(function() {
                window.focus();
                window.print();
                setTimeout(function() {
                  window.close();
                }, 800);
              }, 250);
            };
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  const getDocumentText = () => {
    return `=======================================================
BLANK FIVE - OFFICIAL PROJECT SPECIFICATION DOCUMENT
Document Ticket: ${ticketId}
Date: ${createdAt}
Domain: www.blankfive.com
Support Email: haroonalayil6@gmail.com
WhatsApp / Phone: +91 8078434415
=======================================================

1. CLIENT PARTICULARS:
-------------------------------------------------------
- Client Name: ${name}
- Client Email: ${email}
- Contact Phone: ${phone || 'N/A'}
- Inquiry Status: Registered in blankfive.com database

2. PROJECT SCOPE & REQUIREMENTS:
-------------------------------------------------------
- Primary Service: ${service}
- Estimated Investment Tier: ${budget}
- Target Timeline: ${timeline}
${features && features.length > 0 ? `- Selected Features: ${features.join(', ')}\n` : ''}
- Client Brief / Directive:
"${message || 'Standard custom development scope.'}"

3. INCLUDED DELIVERABLES & ARCHITECTURAL STANDARDS:
-------------------------------------------------------
- Modern High-Performance Architecture (React 18 & Vite)
- 100% Mobile Fluid Responsive Layout
- SEO Meta & OpenGraph Integration
- Fast Deployment Pipeline & Domain Configuration
- 30-Day Post-Launch Warranty & Technical Handover
- 100% Full Intellectual Property & Codebase Ownership

4. VERIFICATION:
-------------------------------------------------------
Digitally Registered by BLANK FIVE Core Software Engineering Team.
Direct WhatsApp: https://wa.me/918078434415
=======================================================`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getDocumentText());
    if (showToast) {
      showToast({ 
        title: 'Document Copied!', 
        message: 'Full project document copied to clipboard in standard formatted text.', 
        type: 'success' 
      });
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(getDocumentText());
    window.open(`https://wa.me/918078434415?text=${text}`, '_blank');
    if (showToast) {
      showToast({ title: 'Opening WhatsApp...', message: 'Forwarding document to lead architect.', type: 'info' });
    }
  };

  const handleEmail = () => {
    const subject = encodeURIComponent(`Project Specification Document - [${ticketId}] - ${name}`);
    const body = encodeURIComponent(getDocumentText());
    window.location.href = `mailto:haroonalayil6@gmail.com?subject=${subject}&body=${body}`;
    if (showToast) {
      showToast({ title: 'Opening Email...', message: 'Preparing document email dispatch.', type: 'info' });
    }
  };

  const documentContent = (
    <div className="project-document-container" style={{ width: '100%' }}>
      {/* Top Action Toolbar (Hidden during print) */}
      <div className="document-actions-toolbar no-print" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        marginBottom: '20px',
        padding: '14px 18px',
        background: 'rgba(255, 255, 255, 0.03)',
        borderRadius: '12px',
        border: '1px solid var(--border-subtle)',
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FileText size={18} color="#00F2FE" />
          <span style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.9rem' }}>
            Official Specification Document
          </span>
          <span className="badge badge-cyan" style={{ fontSize: '0.72rem', padding: '2px 8px' }}>
            #{ticketId}
          </span>
        </div>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <button 
            onClick={handlePrint}
            className="btn-primary" 
            style={{ padding: '8px 14px', fontSize: '0.8rem', borderRadius: '8px' }}
            title="Print or Save as PDF"
          >
            <Printer size={15} />
            <span>Print / Save PDF</span>
          </button>

          <button 
            onClick={handleCopy}
            className="btn-secondary" 
            style={{ padding: '8px 14px', fontSize: '0.8rem', borderRadius: '8px' }}
            title="Copy Text Format"
          >
            <Copy size={15} />
            <span>Copy Text</span>
          </button>

          <button 
            onClick={handleWhatsApp}
            className="btn-secondary" 
            style={{ padding: '8px 14px', fontSize: '0.8rem', borderRadius: '8px', borderColor: 'rgba(0, 242, 254, 0.3)' }}
          >
            <MessageSquare size={15} color="#00F2FE" />
            <span>WhatsApp</span>
          </button>

          <button 
            onClick={handleEmail}
            className="btn-secondary" 
            style={{ padding: '8px 14px', fontSize: '0.8rem', borderRadius: '8px', borderColor: 'rgba(127, 0, 255, 0.4)' }}
          >
            <Mail size={15} color="#7F00FF" />
            <span>Email</span>
          </button>
        </div>
      </div>

      {/* The Printable Document Sheet */}
      <div 
        ref={documentRef} 
        className="printable-document-sheet"
        style={{
          background: '#ffffff',
          color: '#0f172a',
          borderRadius: '16px',
          padding: '40px 44px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 242, 254, 0.15)',
          fontFamily: 'var(--font-body)',
          position: 'relative',
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}
      >
        {/* Decorative Top Accent Ribbon */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '6px',
          background: 'linear-gradient(90deg, #00F2FE 0%, #7F00FF 50%, #FF007F 100%)'
        }}></div>

        {/* Document Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          borderBottom: '2px solid #e2e8f0',
          paddingBottom: '22px',
          marginBottom: '24px',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <div style={{ 
                width: '32px', 
                height: '32px', 
                borderRadius: '8px', 
                background: '#07090e', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: '#00F2FE',
                fontWeight: 900,
                fontSize: '1rem'
              }}>
                B5
              </div>
              <span style={{ fontSize: '1.35rem', fontWeight: 800, color: '#07090e', fontFamily: 'var(--font-heading)', letterSpacing: '-0.5px' }}>
                BLANK FIVE
              </span>
            </div>
            <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 500 }}>
              Advanced Web, App & Custom Software Solutions
            </div>
            <div style={{ fontSize: '0.8rem', color: '#475569', marginTop: '4px' }}>
              Official Domain: <strong style={{ color: '#0284c7' }}>www.blankfive.com</strong>
            </div>
          </div>

          <div style={{ textAlign: 'right', minWidth: '200px' }}>
            <div style={{ 
              display: 'inline-block',
              background: '#f1f5f9', 
              border: '1px solid #cbd5e1',
              padding: '6px 14px', 
              borderRadius: '8px',
              fontWeight: 800,
              fontSize: '0.82rem',
              color: '#0f172a',
              letterSpacing: '0.5px',
              marginBottom: '6px'
            }}>
              PROJECT SPECIFICATION
            </div>
            <div style={{ fontSize: '0.82rem', color: '#475569', display: 'flex', justifyContent: 'flex-end', gap: '6px', alignItems: 'center' }}>
              <Hash size={13} />
              <span>Document Ticket: <strong>{ticketId}</strong></span>
            </div>
            <div style={{ fontSize: '0.82rem', color: '#64748b', display: 'flex', justifyContent: 'flex-end', gap: '6px', alignItems: 'center', marginTop: '2px' }}>
              <Calendar size={13} />
              <span>Date: {createdAt}</span>
            </div>
          </div>
        </div>

        {/* 2-Column Info Section: Client Particulars & Engineering Desk */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
          gap: '16px', 
          marginBottom: '24px' 
        }}>
          {/* Client Details Box */}
          <div style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '16px 18px'
          }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.6px', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <User size={13} color="#0284c7" />
              <span>Client / Requestor Information</span>
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>
              {name}
            </div>
            <div style={{ fontSize: '0.85rem', color: '#334155', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
              <Mail size={13} color="#64748b" />
              <span>{email}</span>
            </div>
            <div style={{ fontSize: '0.85rem', color: '#334155', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Phone size={13} color="#64748b" />
              <span>{phone || 'Not provided'}</span>
            </div>
          </div>

          {/* Service Provider Desk */}
          <div style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '16px 18px'
          }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.6px', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={13} color="#16a34a" />
              <span>Assigned Engineering Desk</span>
            </div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>
              BLANK FIVE Core Solutions Team
            </div>
            <div style={{ fontSize: '0.83rem', color: '#334155', marginBottom: '3px' }}>
              <strong>Direct Phone / WhatsApp:</strong> +91 8078434415
            </div>
            <div style={{ fontSize: '0.83rem', color: '#334155' }}>
              <strong>Official Email:</strong> haroonalayil6@gmail.com
            </div>
          </div>
        </div>

        {/* Project Scope Specification Table */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', color: '#0f172a', letterSpacing: '0.5px', marginBottom: '8px' }}>
            Specification & Parameter Summary
          </div>
          
          <div style={{
            border: '1px solid #cbd5e1',
            borderRadius: '10px',
            overflow: 'hidden'
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ background: '#f1f5f9', borderBottom: '1px solid #cbd5e1', textAlign: 'left' }}>
                  <th style={{ padding: '10px 14px', color: '#334155', fontWeight: 700, width: '35%' }}>Scope Parameter</th>
                  <th style={{ padding: '10px 14px', color: '#334155', fontWeight: 700 }}>Registered Specification</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '10px 14px', fontWeight: 600, color: '#475569' }}>Selected Primary Service</td>
                  <td style={{ padding: '10px 14px', fontWeight: 700, color: '#0f172a' }}>{service}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#fafafa' }}>
                  <td style={{ padding: '10px 14px', fontWeight: 600, color: '#475569' }}>Investment / Budget Bracket</td>
                  <td style={{ padding: '10px 14px', fontWeight: 800, color: '#0284c7' }}>{budget}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '10px 14px', fontWeight: 600, color: '#475569' }}>Estimated Delivery Target</td>
                  <td style={{ padding: '10px 14px', color: '#0f172a' }}>{timeline}</td>
                </tr>
                {features && features.length > 0 && (
                  <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#fafafa' }}>
                    <td style={{ padding: '10px 14px', fontWeight: 600, color: '#475569' }}>Active Feature Add-ons</td>
                    <td style={{ padding: '10px 14px', color: '#0f172a' }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {features.map((feat, i) => (
                          <span key={i} style={{ background: '#e2e8f0', color: '#1e293b', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>
                            {feat}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                )}
                <tr>
                  <td style={{ padding: '10px 14px', fontWeight: 600, color: '#475569', verticalAlign: 'top' }}>Client Scope Notes / Brief</td>
                  <td style={{ padding: '10px 14px', color: '#1e293b', lineHeight: 1.5, fontStyle: message ? 'normal' : 'italic' }}>
                    {message || 'Standard custom development scope requested without additional custom notes.'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Included Standard Engineering Deliverables */}
        <div style={{ 
          background: '#f8fafc', 
          border: '1px solid #e2e8f0', 
          borderRadius: '12px', 
          padding: '16px 18px', 
          marginBottom: '24px' 
        }}>
          <div style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: '#475569', letterSpacing: '0.5px', marginBottom: '10px' }}>
            Included Standard Engineering Deliverables & Guarantees
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px', fontSize: '0.8rem', color: '#334155' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={14} color="#16a34a" />
              <span>100% Full Source Code Ownership</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={14} color="#16a34a" />
              <span>Ultra-Fast React 18 & Vite Build</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={14} color="#16a34a" />
              <span>Full Mobile Fluid Responsive Layout</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={14} color="#16a34a" />
              <span>SEO Meta, OpenGraph & Speed Tuning</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={14} color="#16a34a" />
              <span>Production Deployment & Domain Setup</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={14} color="#16a34a" />
              <span>30-Day Post-Launch Warranty Support</span>
            </div>
          </div>
        </div>

        {/* Verification Footer & Digital Stamp */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '2px solid #e2e8f0',
          paddingTop: '16px',
          flexWrap: 'wrap',
          gap: '14px'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#16a34a', fontWeight: 700, fontSize: '0.82rem' }}>
              <ShieldCheck size={15} />
              <span>VERIFIED RECORD • BLANK FIVE DATABASE</span>
            </div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '2px' }}>
              Review SLA: Direct developer connection within 2 business hours.
            </div>
          </div>

          <div style={{
            border: '2px dashed #0284c7',
            borderRadius: '8px',
            padding: '6px 14px',
            textAlign: 'center',
            background: 'rgba(2, 132, 199, 0.04)'
          }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 800, color: '#0284c7', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
              BLANK FIVE DIGITAL SEAL
            </div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0f172a' }}>
              STATUS: AUTHENTICATED
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Reset / Another Inquiry Option */}
      {onReset && (
        <div className="no-print" style={{ textAlign: 'center', marginTop: '18px' }}>
          <button 
            onClick={onReset}
            style={{ 
              color: 'var(--text-muted)', 
              fontSize: '0.85rem', 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer', 
              textDecoration: 'underline',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span>Submit Another Project Request</span>
            <ArrowRight size={14} />
          </button>
        </div>
      )}
    </div>
  );

  if (isModal) {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div 
          className="modal-content" 
          style={{ maxWidth: '900px', width: '95%', padding: '24px' }} 
          onClick={(e) => e.stopPropagation()}
        >
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
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10
            }}
          >
            ✕
          </button>
          {documentContent}
        </div>
      </div>
    );
  }

  return documentContent;
}
