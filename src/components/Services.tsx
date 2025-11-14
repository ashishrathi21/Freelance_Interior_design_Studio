import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Home, Briefcase, Building2, Hammer, Box } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential Design',
    description: 'Transform your house into a dream home with personalized spaces that reflect your style and comfort.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Briefcase,
    title: 'Office Interiors',
    description: 'Create productive workspaces that inspire creativity and enhance employee well-being.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Building2,
    title: 'Commercial Spaces',
    description: 'Design impactful retail and hospitality environments that captivate customers and drive business.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Hammer,
    title: 'Renovation & Remodeling',
    description: 'Breathe new life into existing spaces with expert renovation and modernization services.',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Box,
    title: '3D Visualization',
    description: 'Experience your design before it is built with photorealistic 3D renderings and virtual walkthroughs.',
    color: 'from-amber-500 to-amber-600',
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white to-neutral-50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-amber-100 border border-amber-200">
            <span className="text-sm font-medium text-amber-900">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Comprehensive Design Solutions
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            From concept to completion, we offer a full spectrum of interior design services tailored to your needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4 group-hover:text-amber-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-neutral-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center text-amber-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn More</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
