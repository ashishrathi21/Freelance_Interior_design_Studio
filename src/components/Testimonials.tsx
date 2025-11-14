import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'The transformation of our home exceeded all expectations. Every detail was thoughtfully considered, and the result is a space that truly feels like us. Professional, creative, and an absolute pleasure to work with.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Business Owner',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'Our new office space has completely transformed how our team works. The design is not only beautiful but incredibly functional. Employee satisfaction has noticeably improved, and clients are always impressed.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Restaurant Owner',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'The ambiance created for our restaurant is exactly what we envisioned. The design perfectly captures our brand identity and has become a talking point for our customers. Could not be happier with the outcome.',
    rating: 5,
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-amber-100 border border-amber-200">
            <span className="text-sm font-medium text-amber-900">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-100"
            >
              <div className="absolute -top-4 -left-4 p-3 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>

              <div className="flex gap-1 mb-6 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-neutral-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-neutral-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-amber-200"
                />
                <div>
                  <h4 className="font-semibold text-neutral-900">{testimonial.name}</h4>
                  <p className="text-sm text-neutral-600">{testimonial.role}</p>
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
          <div className="inline-flex items-center gap-8 px-8 py-6 bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl border border-amber-200">
            <div className="text-center">
              <div className="text-4xl font-bold text-neutral-900 mb-1">4.9/5</div>
              <div className="text-sm text-neutral-600">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-amber-300"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-neutral-900 mb-1">500+</div>
              <div className="text-sm text-neutral-600">Happy Clients</div>
            </div>
            <div className="w-px h-12 bg-amber-300"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-neutral-900 mb-1">98%</div>
              <div className="text-sm text-neutral-600">Would Recommend</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
