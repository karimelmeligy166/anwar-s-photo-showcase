import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Instagram, MessageCircle } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactMethods = [
    {
      icon: Phone,
      label: 'Call',
      value: '01027797779',
      href: 'tel:01027797779',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '01027797779',
      href: 'https://wa.me/201027797779',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@anwarweddings',
      href: 'https://www.instagram.com/anwarweddings',
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-card">
      <div className="container max-w-4xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl md:text-5xl font-light tracking-wider text-gradient-gold mb-8">
            Get In Touch
          </h2>
          
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-12" />
          
          <p className="font-body text-muted-foreground mb-16 max-w-xl mx-auto">
            Ready to capture your special moments? Reach out to discuss your wedding photography needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.label !== 'Call' ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 border border-border hover:border-primary/50 transition-all duration-500 bg-background"
              >
                <method.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-display text-xl text-foreground mb-2">{method.label}</h3>
                <p className="font-body text-sm text-muted-foreground">{method.value}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
