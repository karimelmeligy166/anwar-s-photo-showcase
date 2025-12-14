import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Instagram } from 'lucide-react';

import wedding01 from '@/assets/portfolio/wedding-01.jpg';
import wedding02 from '@/assets/portfolio/wedding-02.jpg';
import wedding03 from '@/assets/portfolio/wedding-03.jpg';
import wedding04 from '@/assets/portfolio/wedding-04.jpg';
import wedding05 from '@/assets/portfolio/wedding-05.jpg';
import wedding06 from '@/assets/portfolio/wedding-06.jpg';
import wedding07 from '@/assets/portfolio/wedding-07.jpg';
import wedding08 from '@/assets/portfolio/wedding-08.jpg';
import wedding09 from '@/assets/portfolio/wedding-09.jpg';
import wedding10 from '@/assets/portfolio/wedding-10.jpg';
import wedding11 from '@/assets/portfolio/wedding-11.jpg';
import wedding12 from '@/assets/portfolio/wedding-12.jpg';
import wedding13 from '@/assets/portfolio/wedding-13.jpg';
import wedding14 from '@/assets/portfolio/wedding-14.jpg';
import wedding15 from '@/assets/portfolio/wedding-15.jpg';
import wedding16 from '@/assets/portfolio/wedding-16.jpg';

const portfolioImages = [
  wedding01,
  wedding02,
  wedding03,
  wedding04,
  wedding05,
  wedding06,
  wedding07,
  wedding08,
  wedding09,
  wedding10,
  wedding11,
  wedding12,
  wedding13,
  wedding14,
  wedding15,
  wedding16,
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {portfolioImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative overflow-hidden group cursor-pointer"
            >
              <img
                src={img}
                alt={`Wedding portfolio ${index + 1}`}
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
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
