import React from 'react';

export default function Logo({ size = 'medium', className = '' }) {
  const isSmall = size === 'small';
  const isLarge = size === 'large';
  
  const fontSize = isSmall ? '1.5rem' : isLarge ? '2.8rem' : '2.1rem';
  const notchSize = isSmall ? { width: 14, height: 14 } : isLarge ? { width: 22, height: 22 } : { width: 18, height: 18 };

  return (
    <div 
      className={`logo-container ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'baseline',
        userSelect: 'none',
        fontFamily: "'Outfit', sans-serif",
        cursor: 'pointer',
        textDecoration: 'none'
      }}
    >
      {/* 'blank' text with cyan arrow notch */}
      <span 
        style={{
          color: '#ffffff',
          fontWeight: 800,
          fontSize: fontSize,
          letterSpacing: '-0.5px',
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'baseline'
        }}
      >
        blank
        {/* Notch graphic on top of 'k' */}
        <svg 
          width={notchSize.width} 
          height={notchSize.height} 
          viewBox="0 0 24 24" 
          fill="none" 
          style={{
            position: 'absolute',
            top: isSmall ? '-4px' : isLarge ? '-8px' : '-6px',
            right: '-1px',
            pointerEvents: 'none'
          }}
        >
          <path 
            d="M5 19L19 5M19 5H9M19 5V15" 
            stroke="#00F2FE" 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      </span>

      {/* 'five' text with linear gradient */}
      <span 
        style={{
          background: 'linear-gradient(135deg, #00F2FE 0%, #7F00FF 50%, #FF007F 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 800,
          fontSize: fontSize,
          letterSpacing: '-0.5px',
          marginLeft: '2px'
        }}
      >
        five
      </span>
    </div>
  );
}
