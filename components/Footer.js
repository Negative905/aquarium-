'use client'

import { motion } from 'framer-motion'

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const footerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const CONTACT_EMAIL = 'nikhilchauhan6619@gmail.com'

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-900 text-white pt-12 pb-8 px-6 w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={staggerContainer}
    >
      <div className="w-full px-4 sm:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <motion.div className="flex flex-col items-center text-center" variants={footerItem}>
          <motion.div
            className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center mb-2"
            whileHover={{ rotate: 8, scale: 1.08 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <svg viewBox="0 0 50 50" className="w-10 h-10" fill="none">
              <ellipse cx="25" cy="25" rx="16" ry="11" stroke="white" strokeWidth="1.8" fill="none" />
              <path d="M13 22 Q19 17 25 22 Q31 27 37 22" stroke="white" strokeWidth="1.4" fill="none" />
              <circle cx="33" cy="21" r="1.8" fill="white" />
            </svg>
          </motion.div>
          <h3 className="font-bold text-lg tracking-widest mb-2">OCEAN CROWN</h3>
          <p className="text-gray-300 text-xs mb-2">Elevating spaces with the elegance of the ocean.</p>
          <p className="text-gray-400 text-xs leading-relaxed">
            We design and maintain premium aquariums that bring tranquility, beauty, and life into your environment.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={footerItem}>
          <h4 className="font-semibold text-sm mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              ['/', 'Home'],
              ['/about', 'About Us'],
              ['/fresh', 'Aquariums'],
              ['/fish-species', 'Fish & Species'],
              ['/plants', 'Plant & Corals'],
              ['/services', 'Services'],
              ['/contact', 'Contact'],
            ].map(([href, label], i) => (
              <motion.li
                key={label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 + 0.2, duration: 0.4 }}
              >
                <motion.a
                  href={href}
                  className="hover:text-white transition-colors"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {label}
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div variants={footerItem}>
          <h4 className="font-semibold text-sm mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {['Custom Aquarium Design', 'Marine & Reef Setup', 'Maintenance & Cleaning', 'Aquarium Consultation', 'Tank Relocation Services'].map((s, i) => (
              <motion.li
                key={s}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 + 0.3, duration: 0.4 }}
              >
                <motion.a
                  href="#"
                  className="hover:text-white transition-colors"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {s}
                </motion.a>
              </motion.li>
            ))}
          </ul>

          {/* Social Icons */}
          <motion.div
            className="flex gap-3 mt-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { bg: 'bg-blue-600 hover:bg-blue-500', icon: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /> },
              {
                bg: 'bg-pink-600 hover:bg-pink-500',
                icon: <path d="M7.5 2h9A5.5 5.5 0 0122 7.5v9A5.5 5.5 0 0116.5 22h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm0 2A3.5 3.5 0 004 7.5v9A3.5 3.5 0 007.5 20h9a3.5 3.5 0 003.5-3.5v-9A3.5 3.5 0 0016.5 4h-9zM12 7a5 5 0 110 10A5 5 0 0112 7zm0 2a3 3 0 100 6 3 3 0 000-6zm4.75-2a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />,
              },
              {
                bg: 'bg-gray-700 hover:bg-gray-600',
                icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />,
              },
              {
                bg: 'bg-red-600 hover:bg-red-500',
                icon: <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />,
              },
            ].map(({ bg, icon }, i) => (
              <motion.a
                key={i}
                href="#"
                className={`w-8 h-8 rounded-full ${bg} flex items-center justify-center transition-colors`}
                variants={fadeIn}
                custom={i}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  {icon}
                </svg>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Stay Connected */}
        <motion.div variants={footerItem}>
          <h4 className="font-semibold text-sm mb-4">Stay Connected</h4>
          <p className="text-gray-300 text-xs mb-3 leading-relaxed">
            Get updates on new aquarium designs, rare species, and special offers.
          </p>
          <motion.div
            className="flex gap-1 mb-5"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l text-white text-xs placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors"
            />
            <motion.button
              className="bg-white text-gray-900 px-3 py-2 rounded-r font-semibold text-xs hover:bg-gray-100 transition-colors whitespace-nowrap"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Subscribe
            </motion.button>
          </motion.div>

          <div className="space-y-2 text-xs text-gray-300">
            {[
              {
                icon: (
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 8l9 6 9-6M3 8h18v13H3V8z" />
                  </svg>
                ),
                text: CONTACT_EMAIL,
              },
              {
                icon: (
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M22 16.9v3a2 2 0 01-2.2 2A19.8 19.8 0 013.1 4.2 2 2 0 015.1 2h3a2 2 0 012 1.7c.1.9.4 1.8.7 2.6a2 2 0 01-.5 2.1L9 9.9a16 16 0 006.9 6.9l1.5-1.5a2 2 0 012.1-.5c.8.3 1.7.6 2.6.7A2 2 0 0122 16.9z" />
                  </svg>
                ),
                text: '+91-8907656789',
              },
              {
                icon: (
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
                  </svg>
                ),
                text: 'Bangalore, India',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 + 0.5, duration: 0.4 }}
              >
                {item.icon}
                <span>{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 w-full">
        <p className="text-center text-gray-400 text-sm">© 2026, Ocean Crown. All rights reserved.</p>
      </div>
    </motion.footer>
  )
}