import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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
            About <span className="text-gold">Raghavendra Jewelers</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            A legacy of craftsmanship, trust, and exquisite jewelry spanning generations.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded decades ago, Raghavendra Jewelers has been a beacon of trust and craftsmanship in the jewelry industry.
                What started as a small family business has grown into a renowned establishment known for its commitment to quality,
                authenticity, and customer satisfaction.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our journey began with a simple vision: to create jewelry that not only beautifies but also tells a story.
                Each piece in our collection is crafted with meticulous attention to detail, using only the finest materials
                and traditional techniques passed down through generations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we continue to uphold the values that have made us successful - integrity, excellence, and a
                deep appreciation for the art of jewelry making.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gold to-dark-gold h-96 rounded-lg flex items-center justify-center"
            >
              <span className="text-white text-8xl">💎</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          >
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-50 rounded-lg"
            >
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Excellence</h3>
              <p className="text-gray-600">
                We strive for perfection in every piece we create, ensuring the highest quality standards
                in craftsmanship and materials.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-50 rounded-lg"
            >
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Trust</h3>
              <p className="text-gray-600">
                Building lasting relationships with our customers through transparency, honesty,
                and reliable service.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-50 rounded-lg"
            >
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Craftsmanship</h3>
              <p className="text-gray-600">
                Honoring traditional techniques while embracing innovation to create
                timeless pieces of art.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          >
            Meet Our Expert Craftsmen
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-32 h-32 bg-gradient-to-br from-gold to-dark-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-4xl">👨‍🔧</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Master Craftsman</h3>
              <p className="text-gray-600">30+ years of experience in gold and diamond jewelry</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-32 h-32 bg-gradient-to-br from-gold to-dark-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-4xl">👩‍🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Design Specialist</h3>
              <p className="text-gray-600">Creating unique designs that blend tradition with modernity</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-32 h-32 bg-gradient-to-br from-gold to-dark-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-4xl">👨‍💼</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Quality Controller</h3>
              <p className="text-gray-600">Ensuring every piece meets our stringent quality standards</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;