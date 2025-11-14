import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Award, Users } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Interior Design Studio"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent"></div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-gradient-to-br from-amber-500 to-amber-600 p-8 rounded-2xl shadow-2xl"
            >
              <Sparkles className="w-12 h-12 text-white mb-2" />
              <div className="text-3xl font-bold text-white">15+</div>
              <div className="text-sm text-amber-100">Years of Excellence</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-amber-100 border border-amber-200">
              <span className="text-sm font-medium text-amber-900">About Our Studio</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
              Crafting Beautiful, Functional Interiors{' '}
              <span className="text-amber-600">— With a Personal Touch.</span>
            </h2>

            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              We believe that exceptional interior design goes beyond aesthetics. It's about creating spaces that reflect your personality, enhance your lifestyle, and inspire you every day. With over 15 years of experience, we blend timeless elegance with contemporary innovation to deliver interiors that are both stunning and sustainable.
            </p>

            <p className="text-lg text-neutral-600 mb-10 leading-relaxed">
              From concept to completion, our dedicated team works closely with you to transform your vision into reality. Every project is a unique journey, and we're honored to be part of yours.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-amber-100 rounded-xl">
                  <Award className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">Award-Winning</h3>
                  <p className="text-sm text-neutral-600">Recognized for design excellence</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-amber-100 rounded-xl">
                  <Users className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">Client-Focused</h3>
                  <p className="text-sm text-neutral-600">Your vision, our expertise</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
