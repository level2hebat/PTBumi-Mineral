'use client';
import react from 'react'
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from './Link';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
  height?: 'small' | 'medium' | 'large';
}

export function Hero({
  title,
  subtitle,
  description,
  backgroundImage,
  ctaText,
  ctaLink,
  height = 'large',
}: HeroProps) {
  const heightClasses = {
    small: 'h-[40vh] min-h-[300px]',
    medium: 'h-[60vh] min-h-[400px]',
    large: 'h-[90vh] min-h-[600px]',
  };

  return (
    <section className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}>
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-900/70" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {subtitle && (
            <motion.p
              className="text-amber-500 mb-4 tracking-wide uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {subtitle}
            </motion.p>
          )}
          <h1 className="text-white mb-6 max-w-4xl mx-auto">
            {title}
          </h1>
          {description && (
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              {description}
            </p>
          )}
          {ctaText && ctaLink && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                href={ctaLink}
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg transition-all hover:gap-3 group shadow-xl shadow-amber-900/20"
              >
                {ctaText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {height === 'large' && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}
