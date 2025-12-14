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
            My name is Mohamed Anwar, born in 2001, and I am a graduate of the Faculty of Applied Arts, 
            Graphic Design and Advertising Department. I have been working as a professional wedding 
            photographer since 2020, with hands-on experience in capturing real emotions, genuine moments, 
            and timeless memories.
          </p>
          
          <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg mb-12">
            Over the years, I have photographed more than 400 weddings, each with its own unique story 
            and details. Through this journey, I have successfully built and led a strong, well-organized 
            photography team that shares the same vision, passion, and commitment to quality. Our goal is 
            not just to document a wedding day, but to create a visual story that couples can relive for a lifetime.
          </p>

          <div className="flex justify-center gap-12 md:gap-20">
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl text-primary mb-2">400+</div>
              <div className="font-body text-sm text-muted-foreground tracking-wider uppercase">Weddings</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl text-primary mb-2">5+</div>
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
