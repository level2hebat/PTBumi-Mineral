'use client';

import { Hero } from '../components/Hero';
import { StatsCounter } from '../components/StatsCounter';
import { motion } from 'motion/react';
import { Target, Eye, Award, Shield } from 'lucide-react';
import Link from '../components/Link';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const stats = [
  { label: 'Years of Experience', value: 25, suffix: '+' },
  { label: 'Active Projects', value: 48 },
  { label: 'Mining Sites', value: 12 },
  { label: 'Employees', value: 850, suffix: '+' },
];

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'Committed to delivering the highest quality in every aspect of our operations.',
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Prioritizing the well-being of our employees and communities above all.',
  },
  {
    icon: Award,
    title: 'Innovation',
    description: 'Embracing cutting-edge technology to optimize our mining processes.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'Operating with integrity and accountability in all our business dealings.',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        title="Empowering Resources, Sustaining the Future"
        subtitle="PT Bumi Mineral Nusantara"
        description="Leading Indonesia's mining industry with sustainable practices, advanced technology, and unwavering commitment to excellence."
        backgroundImage="https://images.unsplash.com/photo-1599277185953-192064410f5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjBjb2FsJTIwZXhjYXZhdG9yfGVufDF8fHx8MTc2MTEwNDM4MHww&ixlib=rb-4.1.0&q=80&w=1080"
        ctaText="Pelajari Lebih Lanjut"
        ctaLink="/about"
        height="large"
      />

      {/* Stats Section */}
      <section className="relative py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsCounter stats={stats} />
        </div>
      </section>

      {/* About Preview */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759312471111-78e910f24d82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWluaW5nJTIwc2l0ZXxlbnwxfHx8fDE3NjExMDQzODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Mining Site"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <p className="text-amber-500 mb-2 tracking-wide uppercase">Tentang Kami</p>
                <h2 className="text-white mb-4">
                  Pemimpin Industri Pertambangan Indonesia
                </h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                PT Bumi Mineral Nusantara adalah perusahaan pertambangan terkemuka yang berdedikasi 
                untuk mengekstraksi sumber daya alam Indonesia dengan cara yang bertanggung jawab 
                dan berkelanjutan.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Dengan lebih dari 25 tahun pengalaman, kami telah menjadi mitra terpercaya dalam 
                industri pertambangan, menggabungkan teknologi modern dengan praktik terbaik untuk 
                memberikan nilai maksimal kepada stakeholder kami.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors group"
              >
                Selengkapnya tentang kami
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-amber-500 mb-2 tracking-wide uppercase">Nilai-Nilai Kami</p>
            <h2 className="text-white">Prinsip yang Memandu Kami</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-amber-500/30 group-hover:to-amber-600/20 transition-all">
                  <value.icon className="w-10 h-10 text-amber-500" />
                </div>
                <h3 className="text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-white">Siap Berkolaborasi dengan Kami?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Hubungi tim kami untuk mendiskusikan bagaimana kami dapat membantu proyek 
              pertambangan Anda dengan solusi yang berkelanjutan dan efisien.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg transition-all"
              >
                Hubungi Kami
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white px-8 py-4 rounded-lg transition-all"
              >
                Lihat Proyek Kami
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
