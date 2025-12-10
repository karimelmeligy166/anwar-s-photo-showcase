import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="container max-w-4xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl md:text-5xl font-light tracking-wider text-gradient-gold mb-8">
            About Me
          </h2>
          
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-12" />
          
          <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg mb-8">
            With over years of experience in wedding photography, I've had the honor of documenting 
            hundreds of love stories across Egypt and beyond. My approach combines candid moments 
            with artistic compositions, creating a timeless collection that reflects the genuine 
            emotions of your special day.
          </p>
          
          <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg mb-12">
            Every wedding is unique, and I believe in capturing not just the big moments, but the 
            subtle glances, joyful tears, and spontaneous laughter that make your celebration 
            truly yours. Using professional equipment and advanced color correction techniques, 
            I deliver fully edited photos that will look stunning for generations to come.
          </p>

          <div className="flex justify-center gap-12 md:gap-20">
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl text-primary mb-2">500+</div>
              <div className="font-body text-sm text-muted-foreground tracking-wider uppercase">Weddings</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl text-primary mb-2">7+</div>
              <div className="font-body text-sm text-muted-foreground tracking-wider uppercase">Years</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl text-primary mb-2">100%</div>
              <div className="font-body text-sm text-muted-foreground tracking-wider uppercase">Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
