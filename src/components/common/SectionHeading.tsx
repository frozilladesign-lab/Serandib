import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  index?: string;
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  divider?: boolean;
  className?: string;
}

/**
 * Serandib bold editorial section header.
 * Signature: a large gold index number + short eyebrow on one baseline,
 * an oversized serif title, and a full-width structural hairline rule.
 * Left-aligned by default for a magazine feel; supports a centered variant.
 */
export function SectionHeading({
  index,
  eyebrow,
  title,
  subtitle,
  align = 'left',
  tone = 'light',
  divider = true,
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';
  const titleColor = tone === 'dark' ? 'text-white' : 'text-primary';
  const subColor = tone === 'dark' ? 'text-white/75' : 'text-muted';
  const dividerColor = tone === 'dark' ? 'border-white/15' : 'border-hairline';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`${isCenter ? 'text-center' : 'text-left'} ${className}`}
    >
      {(index || eyebrow) && (
        <div className={`flex items-center gap-3 mb-4 ${isCenter ? 'justify-center' : ''}`}>
          {index && (
            <span className="font-heading text-xl md:text-2xl font-semibold text-accent tabular-nums leading-none">
              {index}
            </span>
          )}
          {index && eyebrow && <span className="h-4 w-px bg-accent/50" />}
          {eyebrow && (
            <span className="text-[11px] md:text-xs tracking-luxury uppercase font-semibold text-accent">
              {eyebrow}
            </span>
          )}
        </div>
      )}

      <h2
        className={`font-heading font-semibold ${titleColor} leading-[1.03] text-[2rem] md:text-5xl lg:text-[3.5rem] ${
          isCenter ? 'mx-auto max-w-4xl' : 'max-w-3xl'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-5 text-base md:text-lg ${subColor} leading-relaxed ${
            isCenter ? 'max-w-2xl mx-auto' : 'max-w-2xl'
          }`}
        >
          {subtitle}
        </p>
      )}

      {divider && <div className={`mt-8 md:mt-10 border-t ${dividerColor}`} />}
    </motion.div>
  );
}
