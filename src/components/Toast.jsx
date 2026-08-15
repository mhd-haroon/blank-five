import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  const isSuccess = toast.type === 'success';
  const isError = toast.type === 'error';

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
        background: 'rgba(14, 18, 26, 0.95)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: isSuccess ? '1px solid #10b981' : isError ? '1px solid #ef4444' : '1px solid var(--brand-cyan)',
        borderRadius: '16px',
        padding: '16px 20px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.6), 0 0 20px rgba(0, 242, 254, 0.2)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        maxWidth: '400px',
        animation: 'slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      {isSuccess && <CheckCircle2 size={22} color="#10b981" />}
      {isError && <AlertCircle size={22} color="#ef4444" />}
      {!isSuccess && !isError && <Info size={22} color="#00F2FE" />}

      <div style={{ flexGrow: 1 }}>
        <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff' }}>
          {toast.title || (isSuccess ? 'Success' : 'Notice')}
        </div>
        <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
          {toast.message}
        </div>
      </div>

      <button 
        onClick={onClose}
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--text-dim)',
          cursor: 'pointer',
          padding: '4px'
        }}
      >
        <X size={16} />
      </button>

      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
