import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';

const packages = [
  {
    name: 'Photo Session',
    duration: '2 Hours',
    price: '4,000',
    originalPrice: '5,000',
    features: ['Unlimited Photos', 'Full Color Correction', 'Private Online Gallery'],
  },
  {
    name: 'Mini Wedding',
    duration: '5 Hours',
    price: '6,000',
    originalPrice: '7,000',
    features: ['Unlimited Photos', 'Full Color Correction', 'Private Online Gallery'],
  },
  {
    name: 'Half Day',
    duration: '7 Hours',
    price: '8,000',
    originalPrice: '9,000',
    features: ['2 Photographers', 'Unlimited Photos', 'Full Color Correction', 'Private Online Gallery'],
  },
  {
    name: 'Full Day',
    duration: '12 Hours',
    price: '10,000',
    originalPrice: '12,000',
    features: ['2 Photographers', 'Unlimited Photos', 'Full Color Correction', 'Private Online Gallery'],
    popular: true,
  },
  {
    name: 'Full Day & Promo',
    duration: '12 Hours',
    price: '14,000',
    originalPrice: '16,000',
    features: ['2 Photographers', '1 Cinematography', 'Unlimited Photos', 'Full Color Correction', 'Private Online Gallery'],
  },
  {
    name: 'VIP',
    duration: '14 Hours',
    price: '17,000',
    originalPrice: '19,500',
    features: [
      '2 Photographers',
      '1 Cinematography',
      '1 Mobile Coverage',
      'Camera Film (Vintage)',
      'Unlimited Photos',
      'Full Color Correction',
      'Private Online Gallery',
    ],
  },
];

const extras = [
  { name: 'Extra Hour', price: '1,500 EGP' },
  { name: 'Extra Photographer', price: '2,500 EGP' },
  { name: 'Extra Mobile Coverage', price: '3,500 EGP' },
  { name: 'Extra Cinematography (8hrs)', price: '4,000 EGP' },
  { name: 'Extra Cinematography (12hrs)', price: '6,000 EGP' },
];

const notes = [
  'All photos are unlimited and fully edited (color correction included)',
  'Booking confirmed with 20% non-refundable deposit',
  'Transportation fees apply for events outside Cairo',
  'Final photos delivered within 20-25 days via private online gallery',
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="pricing" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-light tracking-wider text-gradient-gold mb-8">
            Packages & Pricing
          </h2>
          
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 border transition-all duration-500 hover:border-primary/50 ${
                pkg.popular ? 'border-primary bg-primary/5' : 'border-border bg-card'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-body tracking-widest uppercase">
                  Most Popular
                </div>
              )}
              
              <h3 className="font-display text-2xl text-foreground mb-2">{pkg.name}</h3>
              <p className="font-body text-sm text-muted-foreground tracking-wider mb-6">{pkg.duration}</p>
              
              <div className="mb-6">
                <span className="font-display text-4xl text-primary">{pkg.price}</span>
                <span className="font-body text-sm text-muted-foreground ml-2">EGP</span>
                <div className="font-body text-sm text-muted-foreground line-through">{pkg.originalPrice} EGP</div>
              </div>
              
              <ul className="space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="font-body">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Extras */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <h3 className="font-display text-2xl text-center text-foreground mb-8">Add-Ons</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {extras.map((extra) => (
              <div key={extra.name} className="flex justify-between items-center p-4 border border-border bg-card">
                <span className="font-body text-sm text-foreground/80">{extra.name}</span>
                <span className="font-body text-sm text-primary">{extra.price}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Notes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="max-w-3xl mx-auto p-8 border border-border bg-card/50"
        >
          <h4 className="font-display text-xl text-center text-primary mb-6">Important Notes</h4>
          <ul className="space-y-3">
            {notes.map((note, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="font-body">{note}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
