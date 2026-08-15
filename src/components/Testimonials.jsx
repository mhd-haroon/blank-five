import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Rohan Sharma',
      role: 'Founder & CEO, LOOK UP Travel',
      industry: 'Tourism & Travel',
      avatarColor: 'linear-gradient(135deg, #00F2FE 0%, #4facfe 100%)',
      stars: 5,
      quote: 'BLANK FIVE completely transformed our online presence. Our new React travel platform loads instantly, looks futuristic, and our booking inquiries doubled within the first month. Incredible speed and execution!'
    },
    {
      name: 'Elena Rostova',
      role: 'Head of Product, ZenithFlow SaaS',
      industry: 'Enterprise Software',
      avatarColor: 'linear-gradient(135deg, #7F00FF 0%, #e0c3fc 100%)',
      stars: 5,
      quote: 'Working with BLANK FIVE was the smoothest experience we have had with any software team. Their attention to pixel-perfect detail, clean code structure, and proactive communication set them apart.'
    },
    {
      name: 'Marcus Vance',
      role: 'Marketing Director, Nexus Gear',
      industry: 'E-Commerce',
      avatarColor: 'linear-gradient(135deg, #FF007F 0%, #f7727d 100%)',
      stars: 5,
      quote: 'The team built our custom storefront in under 3 weeks. The dark glassmorphic design system they created for our brand turned heads immediately. 10/10 recommend BLANK FIVE for any web application project.'
    },
    {
      name: 'Dr. Anita Nair',
      role: 'Co-Founder, Solaris Green Energy',
      industry: 'Renewable Energy',
      avatarColor: 'linear-gradient(135deg, #00F2FE 0%, #7F00FF 100%)',
      stars: 5,
      quote: 'The interactive solar calculator BLANK FIVE developed for our site turned cold website visitors into high-intent leads. Outstanding engineering quality and on-time delivery!'
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section style={{ padding: '100px 0', background: 'var(--bg-dark)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge badge-purple section-subtitle">CLIENT FEEDBACK</div>
          <h2 className="section-title">
            Loved by Founders & <span className="text-gradient">Product Leaders</span>
          </h2>
          <p className="section-description">
            Read what our clients say about partnering with BLANK FIVE for their software & web projects.
          </p>
        </div>

        {/* Active Testimonial Card */}
        <div 
          className="bg-glass-card"
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '48px',
            position: 'relative',
            border: '1px solid rgba(127, 0, 255, 0.3)',
            boxShadow: 'var(--shadow-glow-pink)'
          }}
        >
          <Quote 
            size={64} 
            color="rgba(255, 0, 127, 0.15)" 
            style={{ position: 'absolute', top: '30px', right: '40px', pointerEvents: 'none' }} 
          />

          {/* Star Rating */}
          <div style={{ display: 'flex', gap: '6px', marginBottom: '24px' }}>
            {[...Array(current.stars)].map((_, i) => (
              <Star key={i} size={20} fill="#f59e0b" color="#f59e0b" />
            ))}
          </div>

          {/* Quote Text */}
          <p style={{ fontSize: '1.25rem', color: '#ffffff', fontStyle: 'italic', marginBottom: '32px', lineHeight: 1.7 }}>
            "{current.quote}"
          </p>

          {/* Profile Details */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div 
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  background: current.avatarColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '1.2rem',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                {current.name.charAt(0)}
              </div>
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff' }}>{current.name}</div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>{current.role}</div>
              </div>
            </div>

            <span className="badge badge-cyan" style={{ fontSize: '0.8rem' }}>
              {current.industry}
            </span>
          </div>

          {/* Carousel Controls */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '36px' }}>
            <button 
              onClick={handlePrev}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-bright)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease'
              }}
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  style={{
                    width: currentIndex === idx ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: currentIndex === idx ? 'var(--brand-cyan)' : 'rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s ease'
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={handleNext}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-bright)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease'
              }}
              aria-label="Next Testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
