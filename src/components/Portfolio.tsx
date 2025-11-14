import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Modern Minimalist Living',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Luxury Master Suite',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Contemporary Office Space',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/1170686/pexels-photo-1170686.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Boutique Hotel Lobby',
    category: 'Hospitality',
    image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Elegant Dining Room',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Scandinavian Kitchen',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-24 bg-neutral-900">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30">
            <span className="text-sm font-medium text-amber-400">Our Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Explore our portfolio of stunning interiors that showcase our commitment to excellence and innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.6 }}
                />
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-transparent flex flex-col justify-end p-6"
              >
                <div className="inline-block mb-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 w-fit">
                  <span className="text-xs font-medium text-amber-400">{project.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <div className="flex items-center text-amber-400 font-semibold">
                  <span>View Project</span>
                  <ExternalLink className="w-5 h-5 ml-2" />
                </div>
              </motion.div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="p-2 bg-white/10 backdrop-blur-sm rounded-full">
                  <ExternalLink className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 bg-white text-neutral-900 rounded-full font-semibold hover:bg-amber-400 hover:text-white transition-all duration-300 shadow-xl">
            View Full Portfolio
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
