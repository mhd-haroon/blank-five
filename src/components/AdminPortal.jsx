import React, { useState, useEffect } from 'react';
import { dbService } from '../services/db';
import { Database, Download, Trash2, CheckCircle, RefreshCw, X, Shield, Mail, Users, FileText, Eye } from 'lucide-react';
import ProjectDocument from './ProjectDocument';

export default function AdminPortal({ isOpen, onClose, showToast }) {
  const [activeTab, setActiveTab] = useState('inquiries');
  const [inquiries, setInquiries] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState(null);

  const loadData = async () => {
    setLoading(true);
    const inq = await dbService.getInquiries();
    const subs = await dbService.getSubscribers();
    setInquiries(inq);
    setSubscribers(subs);
    setLoading(false);
  };

  useEffect(() => {
    if (isOpen) {
      loadData();
    }
  }, [isOpen]);

  const handleStatusChange = async (id, newStatus) => {
    const updated = await dbService.updateInquiryStatus(id, newStatus);
    setInquiries(updated);
    if (showToast) {
      showToast({ title: 'Status Updated', message: `Ticket #${id} set to ${newStatus}`, type: 'success' });
    }
  };

  const handleDelete = async (id) => {
    const updated = await dbService.deleteInquiry(id);
    setInquiries(updated);
    if (showToast) {
      showToast({ title: 'Record Deleted', message: `Inquiry #${id} removed from database`, type: 'info' });
    }
  };

  const handleExportCSV = () => {
    dbService.exportToCSV();
    if (showToast) {
      showToast({ title: 'CSV Exported!', message: 'Database backup downloaded successfully.', type: 'success' });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        style={{ maxWidth: '1100px', width: '95%', padding: '36px' }} 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--border-subtle)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={18} />
        </button>

        {/* Portal Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div className="badge badge-cyan" style={{ marginBottom: '6px' }}>
              <Database size={14} />
              <span>BLANK FIVE Database Console (blankfive.com)</span>
            </div>
            <h3 style={{ fontSize: '1.8rem', color: '#ffffff' }}>Live Database Control Panel</h3>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={loadData} className="btn-secondary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
              <RefreshCw size={14} className={loading ? 'spin' : ''} />
              <span>Refresh</span>
            </button>
            <button onClick={handleExportCSV} className="btn-primary" style={{ padding: '8px 18px', fontSize: '0.85rem' }}>
              <Download size={14} />
              <span>Export Database CSV</span>
            </button>
          </div>
        </div>

        {/* Database Overview Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '28px' }}>
          <div style={{ background: 'rgba(0, 242, 254, 0.06)', border: '1px solid rgba(0, 242, 254, 0.2)', padding: '18px', borderRadius: '14px' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 600 }}>Total Inquiries</div>
            <div style={{ fontSize: '2rem', fontWeight: 900, color: '#ffffff' }}>{inquiries.length}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--brand-cyan)' }}>🟢 Database Active</div>
          </div>

          <div style={{ background: 'rgba(127, 0, 255, 0.06)', border: '1px solid rgba(127, 0, 255, 0.2)', padding: '18px', borderRadius: '14px' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 600 }}>Subscribers</div>
            <div style={{ fontSize: '2rem', fontWeight: 900, color: '#ffffff' }}>{subscribers.length}</div>
            <div style={{ fontSize: '0.75rem', color: '#b871ff' }}>Active Email List</div>
          </div>

          <div style={{ background: 'rgba(255, 0, 127, 0.06)', border: '1px solid rgba(255, 0, 127, 0.2)', padding: '18px', borderRadius: '14px' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 600 }}>Domain System</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', marginTop: '4px' }}>www.blankfive.com</div>
            <div style={{ fontSize: '0.75rem', color: '#ff5da8' }}>SSL & CDN Connected</div>
          </div>
        </div>

        {/* Tab Switcher */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '12px' }}>
          <button
            onClick={() => setActiveTab('inquiries')}
            style={{
              padding: '8px 18px',
              borderRadius: '20px',
              fontSize: '0.88rem',
              fontWeight: 600,
              background: activeTab === 'inquiries' ? 'var(--gradient-brand)' : 'transparent',
              color: activeTab === 'inquiries' ? '#07090e' : 'var(--text-muted)',
              border: 'none'
            }}
          >
            Inquiries Table ({inquiries.length})
          </button>
          <button
            onClick={() => setActiveTab('subscribers')}
            style={{
              padding: '8px 18px',
              borderRadius: '20px',
              fontSize: '0.88rem',
              fontWeight: 600,
              background: activeTab === 'subscribers' ? 'var(--gradient-brand)' : 'transparent',
              color: activeTab === 'subscribers' ? '#07090e' : 'var(--text-muted)',
              border: 'none'
            }}
          >
            Subscribers List ({subscribers.length})
          </button>
        </div>

        {/* Inquiries Table View */}
        {activeTab === 'inquiries' && (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem', color: 'var(--text-main)' }}>
              <thead>
                <tr style={{ background: 'rgba(255, 255, 255, 0.04)', textAlign: 'left', borderBottom: '1px solid var(--border-subtle)' }}>
                  <th style={{ padding: '12px 16px', color: '#ffffff' }}>Ticket ID</th>
                  <th style={{ padding: '12px 16px', color: '#ffffff' }}>Client Name</th>
                  <th style={{ padding: '12px 16px', color: '#ffffff' }}>Service</th>
                  <th style={{ padding: '12px 16px', color: '#ffffff' }}>Budget</th>
                  <th style={{ padding: '12px 16px', color: '#ffffff' }}>Status</th>
                  <th style={{ padding: '12px 16px', color: '#ffffff' }}>Date</th>
                  <th style={{ padding: '12px 16px', color: '#ffffff' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {inquiries.map((q) => (
                  <tr key={q.id} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 700, color: 'var(--brand-cyan)' }}>{q.id}</td>
                    <td style={{ padding: '12px 16px' }}>
                      <div style={{ fontWeight: 600, color: '#ffffff' }}>{q.name}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>{q.email} | {q.phone}</div>
                    </td>
                    <td style={{ padding: '12px 16px' }}>{q.service}</td>
                    <td style={{ padding: '12px 16px', color: '#10b981', fontWeight: 600 }}>{q.budget}</td>
                    <td style={{ padding: '12px 16px' }}>
                      <select
                        value={q.status}
                        onChange={(e) => handleStatusChange(q.id, e.target.value)}
                        style={{
                          background: q.status === 'New' ? 'rgba(0, 242, 254, 0.15)' : 'rgba(16, 185, 129, 0.15)',
                          border: '1px solid var(--border-bright)',
                          color: '#ffffff',
                          borderRadius: '8px',
                          padding: '4px 8px',
                          fontSize: '0.78rem'
                        }}
                      >
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Closed">Closed</option>
                      </select>
                    </td>
                    <td style={{ padding: '12px 16px', fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                      {new Date(q.timestamp).toLocaleDateString()}
                    </td>
                    <td style={{ padding: '12px 16px' }}>
                      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <button 
                          onClick={() => setSelectedDoc({
                            ticketId: q.id,
                            name: q.name,
                            email: q.email,
                            phone: q.phone,
                            service: q.service,
                            budget: q.budget,
                            message: q.message,
                            createdAt: new Date(q.timestamp).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
                          })}
                          style={{ background: 'rgba(0, 242, 254, 0.1)', border: '1px solid rgba(0, 242, 254, 0.3)', color: 'var(--brand-cyan)', borderRadius: '6px', padding: '4px 8px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem' }}
                          title="View Official Project Document"
                        >
                          <Eye size={13} />
                          <span>Doc</span>
                        </button>
                        <button 
                          onClick={() => handleDelete(q.id)} 
                          style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }}
                          title="Delete record"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Subscribers View */}
        {activeTab === 'subscribers' && (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem', color: 'var(--text-main)' }}>
              <thead>
                <tr style={{ background: 'rgba(255, 255, 255, 0.04)', textAlign: 'left', borderBottom: '1px solid var(--border-subtle)' }}>
                  <th style={{ padding: '12px 16px', color: '#ffffff' }}>Subscriber ID</th>
                  <th style={{ padding: '12px 16px', color: '#ffffff' }}>Email Address</th>
                  <th style={{ padding: '12px 16px', color: '#ffffff' }}>Joined Date</th>
                </tr>
              </thead>
              <tbody>
                {subscribers.map((sub) => (
                  <tr key={sub.id} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                    <td style={{ padding: '12px 16px', color: 'var(--text-dim)' }}>{sub.id}</td>
                    <td style={{ padding: '12px 16px', fontWeight: 600, color: '#ffffff' }}>{sub.email}</td>
                    <td style={{ padding: '12px 16px', color: 'var(--text-muted)' }}>
                      {new Date(sub.timestamp).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Selected Document Modal */}
        {selectedDoc && (
          <ProjectDocument
            isModal={true}
            onClose={() => setSelectedDoc(null)}
            showToast={showToast}
            documentData={selectedDoc}
          />
        )}
      </div>
    </div>
  );
}
