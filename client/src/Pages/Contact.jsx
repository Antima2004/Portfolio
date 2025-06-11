import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !email || !message) return 'Please fill in all fields.';
    if (!emailRegex.test(email)) return 'Please enter a valid email address.';
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorMsg = validateForm();
    if (errorMsg) {
      setStatus(errorMsg);
      return;
    }

    setIsLoading(true);
    setStatus('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Failed to send message');
      const data = await res.json();
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center px-4 py-8 mt-0">
      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-cyan-400 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h1>

      <motion.p
        className="text-base sm:text-lg text-cyan-200 max-w-2xl text-center mb-8 px-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Feel free to reach out for collaborations, freelance work, or just to say hi!
      </motion.p>

      <div className="bg-gray-900 border border-cyan-400 rounded-xl shadow-lg p-6 w-full max-w-6xl flex flex-col lg:flex-row gap-8">
        <form className="w-full lg:w-1/2" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-cyan-200 text-sm mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded bg-black border border-cyan-400 text-cyan-100"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-cyan-200 text-sm mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded bg-black border border-cyan-400 text-cyan-100"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-cyan-200 text-sm mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 rounded bg-black border border-cyan-400 text-cyan-100"
              placeholder="Your Message"
              rows="4"
            ></textarea>
          </div>

          {status && (
            <div
              className={`p-3 mb-4 rounded ${
                status.includes('successfully')
                  ? 'bg-green-800 text-green-300 border border-green-500'
                  : 'bg-red-800 text-red-300 border border-red-500'
              }`}
            >
              {status}
            </div>
          )}

          <button
            type="submit"
            className="bg-cyan-500 text-black px-4 py-2 rounded hover:bg-cyan-400 transition duration-300 disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <div className="w-full lg:w-1/2 h-96">
          <iframe
            title="Google Map"
            className="w-full h-full border-2 border-cyan-400 rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d89247.86811670137!2d72.86136092501174!3d19.273780517190325!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1749633899714!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
