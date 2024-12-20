import React, { useState } from 'react';
import { Send } from 'lucide-react';
import Button from '../common/Button';
import { createMailtoLink } from '../../utils/email';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = createMailtoLink(formData);
    window.location.href = mailtoLink;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary h-32"
          required
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        icon={<Send className="w-5 h-5" />}
        className="w-full"
      >
        Send Message
      </Button>
    </form>
  );
}