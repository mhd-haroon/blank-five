import React, { useState } from 'react';
import { Search, ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export default function FAQs() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      category: 'General',
      question: 'What is BLANK FIVE and what services do you provide?',
      answer: 'BLANK FIVE is a digital technology studio specializing in high-performance websites, custom software, mobile apps, SaaS products, and branding design systems. We engineer custom React JavaScript solutions for ambitious businesses.'
    },
    {
      category: 'Pricing & Timeline',
      question: 'How long does it take to build a website or web app?',
      answer: 'A standard React website takes 1 to 2 weeks, while custom web applications or SaaS platforms typically take 2 to 4 weeks depending on feature complexity. We provide strict milestone timelines before kickoff.'
    },
    {
      category: 'Technology',
      question: 'Why do you build with React & Vite instead of WordPress or Wix?',
      answer: 'React & Vite produce ultra-fast, lightweight, highly secure, and custom-tailored code that loads in under 1 second. Unlike bloated site builders, React apps scale indefinitely, never get broken by plugin updates, and rank higher on Google Core Web Vitals.'
    },
    {
      category: 'Pricing & Timeline',
      question: 'How does your pricing model work? Are there hidden costs?',
      answer: 'We operate on transparent, fixed-price milestone agreements. Once we agree on scope, the price is 100% locked — zero hidden hourly charges or unexpected add-on costs.'
    },
    {
      category: 'General',
      question: 'Do I get full ownership of the source code and design assets?',
      answer: 'Yes! Upon final project completion, 100% ownership of all source code, Figma design files, database schemas, and intellectual property is transferred directly to you.'
    },
    {
      category: 'Technology',
      question: 'Can BLANK FIVE handle domain setup, cloud hosting, and SSL?',
      answer: 'Absolutely. We configure production hosting on global edge networks (Vercel, AWS, Cloudflare), set up SSL certificates, configure custom domain DNS, and optimize Google Search Console indexing.'
    },
    {
      category: 'Pricing & Timeline',
      question: 'What post-launch support and maintenance do you offer?',
      answer: 'Every BLANK FIVE project includes 30 days of complimentary technical support and bug guarantees. We also offer affordable monthly retainer packages for continuous updates and feature additions.'
    }
  ];

  const categories = ['All', 'General', 'Pricing & Timeline', 'Technology'];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faqs" style={{ padding: '100px 0', background: 'var(--bg-surface)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge badge-cyan section-subtitle">FREQUENTLY ASKED QUESTIONS</div>
          <h2 className="section-title">
            Got Questions? <span className="text-gradient">We Have Answers.</span>
          </h2>
          <p className="section-description">
            Find answers to common questions about our development process, tech stack, timelines, and pricing.
          </p>
        </div>

        {/* Search Bar & Category Filter */}
        <div style={{ maxWidth: '750px', margin: '0 auto 40px auto' }}>
          {/* Search Input */}
          <div 
            style={{
              position: 'relative',
              marginBottom: '20px'
            }}
          >
            <Search 
              size={20} 
              color="var(--text-muted)" 
              style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)' }} 
            />
            <input 
              type="text"
              placeholder="Search questions (e.g. React, pricing, timeline)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '16px 20px 16px 52px',
                borderRadius: '30px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-bright)',
                color: '#ffffff',
                fontSize: '1rem',
                outline: 'none',
                transition: 'all 0.3s ease'
              }}
            />
          </div>

          {/* Category Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '6px 16px',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-heading)',
                  background: activeCategory === cat ? 'var(--gradient-brand)' : 'rgba(255, 255, 255, 0.03)',
                  color: activeCategory === cat ? '#07090e' : 'var(--text-muted)',
                  border: activeCategory === cat ? 'none' : '1px solid var(--border-subtle)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx}
                  className="bg-glass-card"
                  style={{
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: isOpen ? '1px solid rgba(0, 242, 254, 0.35)' : '1px solid var(--border-subtle)'
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '24px 28px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      background: isOpen ? 'rgba(0, 242, 254, 0.04)' : 'transparent'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <HelpCircle size={20} color={isOpen ? "#00F2FE" : "var(--text-muted)"} />
                      <span style={{ fontSize: '1.1rem', fontWeight: 600, color: isOpen ? '#ffffff' : 'var(--text-main)' }}>
                        {faq.question}
                      </span>
                    </div>

                    <ChevronDown 
                      size={20} 
                      color="var(--text-muted)" 
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                        flexShrink: 0
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 28px 24px 62px', color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7 }}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-dim)' }}>
              No matching questions found. Try searching a different keyword.
            </div>
          )}
        </div>

        {/* Still Have Questions CTA */}
        <div 
          style={{
            marginTop: '60px',
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '20px',
            padding: '32px',
            maxWidth: '650px',
            margin: '60px auto 0 auto'
          }}
        >
          <h3 style={{ fontSize: '1.3rem', color: '#ffffff', marginBottom: '8px' }}>Have a question not listed here?</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '20px' }}>Our technical team is ready to assist you directly.</p>
          <a 
            href="https://wa.me/916282878105?text=Hello%20BLANK%20FIVE,%20I%20have%20a%20question%20about%20your%20services!" 
            target="_blank" 
            rel="noreferrer"
            className="btn-secondary"
            style={{ display: 'inline-flex' }}
          >
            <MessageSquare size={16} color="#00F2FE" />
            <span>Chat Directly on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
