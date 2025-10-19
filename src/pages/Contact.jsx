import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Contact <span className="text-gold">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Get in touch with us for custom orders, inquiries, or just to say hello.
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Get In Touch</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📍</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Address</h3>
                  <p className="text-gray-600 text-sm">
                    123 Jewelry Street<br />
                    City, State 12345<br />
                    India
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📞</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone</h3>
                  <p className="text-gray-600 text-sm">+91 98765 43210</p>
                  <p className="text-gray-600 text-sm">+91 98765 43211</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">✉️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
                  <p className="text-gray-600 text-sm">info@raghavendrajewelers.com</p>
                  <p className="text-gray-600 text-sm">support@raghavendrajewelers.com</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🕒</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Business Hours</h3>
                  <p className="text-gray-600 text-sm">Mon-Sat: 10AM-8PM</p>
                  <p className="text-gray-600 text-sm">Sun: 11AM-6PM</p>
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;