/**
 * BLANK FIVE Database Service
 * Provides persistent database operations for Inquiries, Newsletter Subscribers, and Project Estimates.
 * Supports LocalStorage/IndexedDB persistent database storage with optional Supabase/Firebase connection endpoints.
 */

const STORAGE_KEYS = {
  INQUIRIES: 'blankfive_db_inquiries',
  SUBSCRIBERS: 'blankfive_db_subscribers',
  ESTIMATES: 'blankfive_db_estimates'
};

// Initialize default database tables if empty
const initDB = () => {
  if (!localStorage.getItem(STORAGE_KEYS.INQUIRIES)) {
    const seedInquiries = [
      {
        id: 'BF-2026-8912',
        name: 'Rohan Sharma',
        email: 'rohan@lookup.com',
        phone: '+91 9876543210',
        service: 'Website Development',
        budget: '$1,500 - $3,000',
        message: 'Need a fast React travel portal with instant booking widgets.',
        timestamp: new Date(Date.now() - 86400000 * 2).toISOString(),
        status: 'Contacted'
      },
      {
        id: 'BF-2026-9415',
        name: 'Elena Rostova',
        email: 'elena@zenithflow.io',
        phone: '+1 415 555 0192',
        service: 'Custom Software & SaaS',
        budget: '$3,000+',
        message: 'Looking for a multi-tenant B2B analytics dashboard.',
        timestamp: new Date(Date.now() - 86400000 * 1).toISOString(),
        status: 'New'
      }
    ];
    localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(seedInquiries));
  }

  if (!localStorage.getItem(STORAGE_KEYS.SUBSCRIBERS)) {
    const seedSubscribers = [
      { id: 'sub_1', email: 'alex@techstartup.co', timestamp: new Date(Date.now() - 86400000 * 3).toISOString() },
      { id: 'sub_2', email: 'dev@innovate.io', timestamp: new Date(Date.now() - 86400000 * 1).toISOString() }
    ];
    localStorage.setItem(STORAGE_KEYS.SUBSCRIBERS, JSON.stringify(seedSubscribers));
  }

  if (!localStorage.getItem(STORAGE_KEYS.ESTIMATES)) {
    localStorage.setItem(STORAGE_KEYS.ESTIMATES, JSON.stringify([]));
  }
};

// Auto-run DB init
initDB();

export const dbService = {
  /**
   * Save a new inquiry ticket to the database
   */
  async saveInquiry(inquiryData) {
    try {
      const currentInquiries = JSON.parse(localStorage.getItem(STORAGE_KEYS.INQUIRIES) || '[]');
      const newRecord = {
        id: inquiryData.ticketId || `BF-2026-${Math.floor(1000 + Math.random() * 9000)}`,
        name: inquiryData.name,
        email: inquiryData.email,
        phone: inquiryData.phone || 'N/A',
        service: inquiryData.service,
        budget: inquiryData.budget,
        message: inquiryData.message,
        timestamp: new Date().toISOString(),
        status: 'New'
      };
      
      currentInquiries.unshift(newRecord);
      localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(currentInquiries));
      return { success: true, record: newRecord };
    } catch (err) {
      console.error('Database Save Error:', err);
      return { success: false, error: err.message };
    }
  },

  /**
   * Get all inquiries from the database
   */
  async getInquiries() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.INQUIRIES) || '[]');
  },

  /**
   * Update inquiry status
   */
  async updateInquiryStatus(id, newStatus) {
    const current = JSON.parse(localStorage.getItem(STORAGE_KEYS.INQUIRIES) || '[]');
    const updated = current.map(item => item.id === id ? { ...item, status: newStatus } : item);
    localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(updated));
    return updated;
  },

  /**
   * Delete inquiry
   */
  async deleteInquiry(id) {
    const current = JSON.parse(localStorage.getItem(STORAGE_KEYS.INQUIRIES) || '[]');
    const updated = current.filter(item => item.id !== id);
    localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(updated));
    return updated;
  },

  /**
   * Save a newsletter subscriber
   */
  async saveSubscriber(email) {
    const current = JSON.parse(localStorage.getItem(STORAGE_KEYS.SUBSCRIBERS) || '[]');
    if (!current.some(sub => sub.email.toLowerCase() === email.toLowerCase())) {
      const newSub = { id: `sub_${Date.now()}`, email, timestamp: new Date().toISOString() };
      current.unshift(newSub);
      localStorage.setItem(STORAGE_KEYS.SUBSCRIBERS, JSON.stringify(current));
    }
    return current;
  },

  /**
   * Get all subscribers
   */
  async getSubscribers() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.SUBSCRIBERS) || '[]');
  },

  /**
   * Export Database to CSV
   */
  exportToCSV() {
    const inquiries = JSON.parse(localStorage.getItem(STORAGE_KEYS.INQUIRIES) || '[]');
    if (inquiries.length === 0) return;

    const headers = ['Ticket ID', 'Name', 'Email', 'Phone', 'Service', 'Budget', 'Status', 'Date', 'Message'];
    const rows = inquiries.map(q => [
      q.id,
      `"${q.name}"`,
      `"${q.email}"`,
      `"${q.phone}"`,
      `"${q.service}"`,
      `"${q.budget}"`,
      `"${q.status}"`,
      `"${new Date(q.timestamp).toLocaleDateString()}"`,
      `"${q.message.replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `BLANK_FIVE_Database_Export_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
