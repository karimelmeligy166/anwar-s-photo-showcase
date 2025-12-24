import { motion } from 'framer-motion';
import { getOptimizedImage } from '@/lib/utils';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Instagram } from 'lucide-react';
import Lightbox from './Lightbox';

const portfolioImages = [
  "https://res.cloudinary.com/drsmh1bqk/image/upload/v1766596833/wedding-13_jrculc.webp",
  "https://res.cloudinary.com/drsmh1bqk/image/upload/v1766596836/wedding-04_plzpm7.webp",
  "https://res.cloudinary.com/drsmh1bqk/image/upload/v1766596838/wedding-01_e76kzn.webp",
  "https://res.cloudinary.com/drsmh1bqk/image/upload/v1766596839/wedding-03_shhfmr.webp",
  "https://res.cloudinary.com/drsmh1bqk/image/upload/v1766598191/wedding-02_xe0el5.webp",
  "https://res.cloudinary.com/drsmh1bqk/image/upload/v1766596846/wedding-06_fjdast.webp",
  "https://res.cloudinary.com/drsmh1bqk/image/upload/v1766596845/wedding-07_tax3ep.webp",
  "https://res.cloudinary.com/drsmh1bqk/image/upload/v1766596861/wedding-08_zmy7ed.webp",
  "https://res.cloudinary.com/drsmh1bqk/image/upload/v1766596853/wedding-09_wsmsfs.webp",
  "https://res.cloudinary.com/drsmh1bqk/image/upload/v1766596852/wedding-10_so5pk1.webp",
  "https://res.cloudinary.com/drsmh1bqk/image/upload/v1766596852/wedding-11_yfrzek.webp",
  "https://res.cloudinary.com/drsmh1bqk/image/upload/v1766596844/wedding-12_n1hzsj.webp",
  "https://res.cloudinary.com/drsmh1bqk/image/upload/v1766596839/wedding-14_ijv2ec.webp",
  "https://res.cloudinary.com/drsmh1bqk/image/upload/v1766596854/wedding-15_uqii3h.webp",
  "https://res.cloudinary.com/drsmh1bqk/image/upload/v1766596846/wedding-16_pvj5ne.webp",
  "https://res.cloudinary.com/drsmh1bqk/image/upload/v1766596862/wedding-05_bytet5.webp",

];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % portfolioImages.length);
  };

  const goToPrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length);
  };

  return (
    <>
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
                onClick={() => openLightbox(index)}
              >
                <img
                  src={getOptimizedImage(img, 600)}
                  alt={`Wedding portfolio ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="450"
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

      <Lightbox
        images={portfolioImages.map(img => getOptimizedImage(img, 1200))}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={goToNext}
        onPrev={goToPrev}
      />
    </>
  );
}
