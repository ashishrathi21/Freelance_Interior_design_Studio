import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 via-amber-50/30 to-neutral-100">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5"></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-50/50 to-neutral-50"
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block mb-6 px-6 py-2 rounded-full bg-gradient-to-r from-amber-100 to-amber-50 border border-amber-200/50 backdrop-blur-sm"
          >
            <span className="text-sm font-medium text-amber-900">Premium Interior Design Services</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 mb-6 leading-tight">
            Transforming Spaces into{' '}
            <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 bg-clip-text text-transparent">
              Stunning Experiences
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Bringing creativity, comfort, and class into every design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-gradient-to-r from-neutral-900 to-neutral-800 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
            >
              View Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-white/80 backdrop-blur-sm text-neutral-900 rounded-full font-semibold border-2 border-neutral-200 hover:border-amber-300 transition-all duration-300 flex items-center gap-2 shadow-lg"
            >
              <Play className="w-5 h-5" />
              Book Consultation
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: '500+', label: 'Projects Completed' },
            { number: '15+', label: 'Years Experience' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '50+', label: 'Design Awards' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-neutral-200/50 shadow-lg"
            >
              <div className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">{stat.number}</div>
              <div className="text-sm text-neutral-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-50 to-transparent"></div>
    </section>
  );
};

export default Hero;
