import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah & Ahmed',
    text: 'Anwar captured every magical moment of our wedding day. The photos are absolutely stunning and the attention to detail is incredible. We could not be happier!',
    date: 'October 2024',
  },
  {
    name: 'Nour & Kareem',
    text: 'Professional, creative, and truly passionate about his work. Anwar made us feel so comfortable in front of the camera. The final gallery exceeded all our expectations.',
    date: 'September 2024',
  },
  {
    name: 'Laila & Omar',
    text: 'From the first meeting to receiving our photos, the experience was seamless. Anwar has an incredible eye for capturing genuine emotions and beautiful moments.',
    date: 'August 2024',
  },
  {
    name: 'Yasmin & Hassan',
    text: 'We are so grateful we chose Anwar for our special day. Every photo tells a story and brings back the most beautiful memories. Highly recommended!',
    date: 'July 2024',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-card">
      <div className="container max-w-4xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl md:text-5xl font-light tracking-wider text-gradient-gold mb-8">
            Client Love
          </h2>
          
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-16" />

          <div className="relative min-h-[300px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: index === currentIndex ? 1 : 0,
                  x: index === currentIndex ? 0 : 50,
                }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 ${index === currentIndex ? 'pointer-events-auto' : 'pointer-events-none'}`}
              >
                <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />
                <p className="font-display text-xl md:text-2xl text-foreground/90 italic leading-relaxed mb-8">
                  "{testimonial.text}"
                </p>
                <div className="font-body">
                  <p className="text-primary tracking-wider">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.date}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary w-8' : 'bg-primary/30'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
