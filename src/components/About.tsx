import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Award, Users } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

          {/* IMAGE + BADGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Interior design studio workspace"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-gradient-to-br from-zinc-700 to-zinc-900 
              p-8 rounded-2xl shadow-2xl"
            >
              <Sparkles className="w-12 h-12 text-white mb-2" />
              <div className="text-3xl font-bold text-white">15+</div>
              <div className="text-sm text-zinc-300">Years of Excellence</div>
            </motion.div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Tag */}
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-zinc-800 border border-zinc-700">
              <span className="text-sm font-medium text-zinc-300">About Our Studio</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Crafting Beautiful, Functional Interiors
              <span className="text-zinc-400"> — With a Personal Touch.</span>
            </h2>

            {/* Paragraphs */}
            <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
              Exceptional interiors are more than just beautiful—they’re personal. 
              We design spaces that elevate your lifestyle, reflect your identity, 
              and inspire you every single day. With 15+ years of experience, 
              our approach blends elegant design with modern innovation.
            </p>

            <p className="text-lg text-neutral-400 mb-10 leading-relaxed">
              From initial concept to the final reveal, our team works closely with you, 
              ensuring every detail aligns with your vision. Your space should feel uniquely yours— 
              and we’re here to make that happen.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-zinc-800 rounded-xl">
                  <Award className="w-6 h-6 text-zinc-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Award-Winning</h3>
                  <p className="text-sm text-neutral-500">Recognized for design excellence</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-zinc-800 rounded-xl">
                  <Users className="w-6 h-6 text-zinc-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Client-Focused</h3>
                  <p className="text-sm text-neutral-500">Your vision, our expertise</p>
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
