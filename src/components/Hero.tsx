import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const carouselImages = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1920&h=1080&fit=crop',
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {carouselImages.map((img, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentImage ? 1 : 0,
              scale: index === currentImage ? 1 : 1.1,
            }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          >
            <img
              src={img}
              alt={`Wedding photography ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl mx-auto">
              <img
                src="/profile.jpg"
                alt="Anwar - Wedding Photographer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-2 rounded-full border border-primary/20 animate-pulse" />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-light tracking-wider mb-4"
        >
          <span className="text-gradient-gold">ANWAR</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-display text-xl md:text-2xl tracking-[0.3em] text-muted-foreground uppercase mb-8"
        >
          Weddings
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-2xl mx-auto text-foreground/80 font-body text-sm md:text-base leading-relaxed mb-12"
        >
          Capturing your most precious moments with elegance and artistry. 
          Every love story deserves to be told through timeless, cinematic imagery 
          that you'll treasure for generations.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="inline-block px-8 py-4 border border-primary text-primary font-body text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-500"
        >
          Book Your Date
        </motion.a>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border border-primary/50 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
