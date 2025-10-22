'use client';
import react from 'react'
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function ServiceCard({ icon: Icon, title, description, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:bg-slate-800 hover:border-amber-500/50 transition-all duration-300"
    >
      <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:from-amber-500/30 group-hover:to-amber-600/20 transition-all">
        <Icon className="w-8 h-8 text-amber-500" />
      </div>
      <h3 className="text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}
