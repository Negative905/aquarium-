'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Animation Variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const slideRight = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 },
  },
};

const CONTACT_EMAIL = 'nikhilchauhan6619@gmail.com';
const FORMSPREE_URL = 'https://formspree.io/f/xqedowzd';

// ─── Component ────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '', number: '', email: '', message: '', subscribeEmail: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          phone: formData.number,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ fullName: '', number: '', email: '', message: '', subscribeEmail: '' });
        }, 2500);
      } else {
        const data = await response.json();
        setError(data?.errors?.[0]?.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const inputClass =
    'w-full px-3 py-2 rounded text-white text-sm placeholder-blue-300 focus:outline-none transition-all duration-200 focus:ring-1 focus:ring-white/30';
  const inputStyle = {
    background: 'rgba(255,255,255,0.1)',
    border: '1px solid rgba(255,255,255,0.3)',
  };

  const contactItems = [
    {
      icon: (
        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 8l9 6 9-6M3 8h18v13H3V8z" />
        </svg>
      ),
      text: CONTACT_EMAIL,
    },
    {
      icon: (
        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M22 16.9v3a2 2 0 01-2.2 2A19.8 19.8 0 013.1 4.2 2 2 0 015.1 2h3a2 2 0 012 1.7c.1.9.4 1.8.7 2.6a2 2 0 01-.5 2.1L9 9.9a16 16 0 006.9 6.9l1.5-1.5a2 2 0 012.1-.5c.8.3 1.7.6 2.6.7A2 2 0 0122 16.9z" />
        </svg>
      ),
      text: '+91-8907656789',
    },
    {
      icon: (
        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
        </svg>
      ),
      text: 'Bangalore, India',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Segoe UI', sans-serif" }}>

      {/* ── Hero / Contact Section ── */}
      <section
        className="flex-1 relative pt-16 pb-0 px-6 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #1a4fa0 0%, #1a3a7a 40%, #0f2550 100%)' }}
      >
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <motion.div
            style={{
              position: 'absolute',
              top: '-10%',
              right: '-5%',
              width: '420px',
              height: '420px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(100,160,255,0.15) 0%, transparent 70%)',
            }}
            animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center relative z-10 min-h-[calc(100vh-4rem)]">

          {/* ── Left – Contact Info ── */}
          <motion.div
            className="text-white md:col-span-1"
            variants={slideRight}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl font-bold mb-4 leading-tight"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              Contact US
            </motion.h1>
            <motion.p
              className="text-sm text-blue-200 mb-6 leading-relaxed"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              Reach out today and transform your space into ocean elegance.
            </motion.p>

            <motion.div
              className="space-y-3 text-sm text-blue-100"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {contactItems.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2"
                  variants={fadeUp}
                  custom={i + 2}
                  whileHover={{ x: 4, color: '#ffffff' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right – Contact Form Card ── */}
          <motion.div
            className="md:col-span-2 rounded-lg mb-5 p-8"
            style={{
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(4px)',
              border: '1px solid rgba(255,255,255,0.3)',
            }}
            variants={cardVariant}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              className="text-white text-2xl font-semibold mb-1"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              We&apos;d love to hear from you!
            </motion.h2>
            <motion.p
              className="text-blue-200 text-sm mb-6"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              Let&apos;s get in touch
            </motion.p>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  className="flex flex-col items-center justify-center py-16 text-center"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <p className="text-white text-lg font-semibold">Message Sent!</p>
                  <p className="text-blue-200 text-sm mt-1">We&apos;ll get back to you soon.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="grid grid-cols-2 gap-4"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {[
                      { label: 'Full Name', name: 'fullName', type: 'text', placeholder: 'Enter your name' },
                      { label: 'Number', name: 'number', type: 'tel', placeholder: 'Enter your number' },
                    ].map((field) => (
                      <motion.div key={field.name} variants={fadeUp}>
                        <label className="text-white text-sm block mb-1">{field.label}</label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          className={inputClass}
                          style={inputStyle}
                          required={field.name === 'fullName'}
                        />
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}>
                    <label className="text-white text-sm block mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className={inputClass}
                      style={inputStyle}
                      required
                    />
                  </motion.div>

                  <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}>
                    <label className="text-white text-sm block mb-1">Your Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter your message!"
                      rows={6}
                      className={`${inputClass} resize-none`}
                      style={inputStyle}
                      required
                    />
                  </motion.div>

                  <AnimatePresence>
                    {error && (
                      <motion.p
                        className="text-red-300 text-sm"
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.3 }}
                      >
                        {error}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4}>
                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      className="bg-white text-gray-800 text-sm font-semibold px-5 py-2 rounded hover:bg-gray-100 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                      whileHover={!isLoading ? { scale: 1.03, boxShadow: '0 4px 20px rgba(255,255,255,0.25)' } : {}}
                      whileTap={!isLoading ? { scale: 0.97 } : {}}
                    >
                      {isLoading ? 'Sending…' : 'Send your message'}
                    </motion.button>
                  </motion.div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

    </div>
  );
}