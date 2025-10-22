'use client';
import react from 'react'
import { motion } from 'motion/react';
import { MapPin, Calendar } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  title: string;
  location: string;
  year: string;
  image: string;
  description: string;
  index: number;
}

export function ProjectCard({ title, location, year, image, description, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60" />
      </div>
      <div className="p-6">
        <h3 className="text-white mb-3 group-hover:text-amber-500 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 mb-4 leading-relaxed">
          {description}
        </p>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2 text-gray-400">
            <MapPin className="w-4 h-4 text-amber-500" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Calendar className="w-4 h-4 text-amber-500" />
            <span>{year}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
