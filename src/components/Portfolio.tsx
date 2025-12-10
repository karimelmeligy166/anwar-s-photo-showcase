import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Instagram } from 'lucide-react';

const portfolioImages = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1549417229-7686ac5595fd?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1550005809-91ad75fb315f?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?w=600&h=400&fit=crop',
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-light tracking-wider text-gradient-gold mb-8">
            Portfolio
          </h2>
          
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
          
          <a
            href="https://www.instagram.com/anwarweddings"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 group"
          >
            <Instagram className="w-5 h-5" />
            <span className="font-body text-sm tracking-widest uppercase">Follow on Instagram</span>
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {portfolioImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative aspect-[4/3] overflow-hidden group cursor-pointer"
            >
              <img
                src={img}
                alt={`Wedding portfolio ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="w-12 h-12 border border-primary flex items-center justify-center">
                  <span className="font-display text-primary text-2xl">+</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
