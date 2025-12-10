import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calendar, User, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function BookingForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventDate: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Open WhatsApp with pre-filled message
    const message = encodeURIComponent(
      `Hello! I'd like to book a wedding photography session.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEvent Date: ${formData.eventDate}`
    );
    window.open(`https://wa.me/201027797779?text=${message}`, '_blank');
    
    toast({
      title: 'Redirecting to WhatsApp',
      description: 'Complete your booking request via WhatsApp.',
    });
    
    setIsSubmitting(false);
    setFormData({ name: '', phone: '', eventDate: '' });
  };

  return (
    <section id="book" className="py-24 md:py-32 bg-background">
      <div className="container max-w-xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-light tracking-wider text-gradient-gold mb-8">
              Book Your Date
            </h2>
            
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
            
            <p className="font-body text-muted-foreground">
              Fill in your details and we'll get back to you shortly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label className="block font-body text-sm text-muted-foreground mb-2 tracking-wider uppercase">
                Your Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-12 pr-4 py-4 bg-card border border-border focus:border-primary/50 focus:outline-none font-body text-foreground transition-colors duration-300"
                  placeholder="Enter your name"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label className="block font-body text-sm text-muted-foreground mb-2 tracking-wider uppercase">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-12 pr-4 py-4 bg-card border border-border focus:border-primary/50 focus:outline-none font-body text-foreground transition-colors duration-300"
                  placeholder="Enter your phone number"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <label className="block font-body text-sm text-muted-foreground mb-2 tracking-wider uppercase">
                Event Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="date"
                  required
                  value={formData.eventDate}
                  onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                  className="w-full pl-12 pr-4 py-4 bg-card border border-border focus:border-primary/50 focus:outline-none font-body text-foreground transition-colors duration-300"
                />
              </div>
            </motion.div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-full py-4 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-primary/90 transition-colors duration-300 disabled:opacity-50"
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Request
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
