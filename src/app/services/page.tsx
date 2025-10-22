'use client';

import { Hero } from '../../components/Hero';
import { ServiceCard } from '../../components/ServiceCard';
import { Search, Drill, Truck, Leaf, Factory, MapPin, Zap, Users } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    icon: Search,
    title: 'Eksplorasi Mineral',
    description: 'Menggunakan teknologi geologi modern dan survey komprehensif untuk mengidentifikasi deposit mineral berkualitas tinggi dengan akurasi maksimal.',
  },
  {
    icon: Drill,
    title: 'Penambangan Batu Bara',
    description: 'Operasi penambangan batu bara skala besar dengan metode yang efisien, aman, dan ramah lingkungan untuk memenuhi kebutuhan energi nasional.',
  },
  {
    icon: Factory,
    title: 'Pengolahan Mineral',
    description: 'Fasilitas pengolahan canggih yang mengubah bijih mentah menjadi produk mineral siap pakai dengan standar kualitas internasional.',
  },
  {
    icon: Truck,
    title: 'Logistik & Distribusi',
    description: 'Sistem logistik terintegrasi yang memastikan pengiriman produk tepat waktu ke pelanggan domestik dan internasional.',
  },
  {
    icon: Leaf,
    title: 'Konsultasi Lingkungan',
    description: 'Layanan konsultasi AMDAL dan pengelolaan lingkungan untuk memastikan operasi pertambangan yang berkelanjutan dan bertanggung jawab.',
  },
  {
    icon: MapPin,
    title: 'Pemetaan Geospasial',
    description: 'Teknologi pemetaan satelit dan drone untuk analisis topografi, perencanaan tambang, dan monitoring area secara real-time.',
  },
  {
    icon: Zap,
    title: 'Optimasi Energi',
    description: 'Implementasi sistem energi terbarukan dan efisiensi operasional untuk mengurangi jejak karbon dalam proses pertambangan.',
  },
  {
    icon: Users,
    title: 'Pelatihan & Pengembangan',
    description: 'Program pelatihan komprehensif untuk meningkatkan kompetensi SDM dalam industri pertambangan modern.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Eksplorasi',
    description: 'Survey geologi dan analisis potensi deposit mineral',
  },
  {
    number: '02',
    title: 'Perencanaan',
    description: 'Desain tambang dan studi kelayakan ekonomi',
  },
  {
    number: '03',
    title: 'Ekstraksi',
    description: 'Penambangan dengan metode yang efisien dan aman',
  },
  {
    number: '04',
    title: 'Pengolahan',
    description: 'Proses refining dan quality control',
  },
  {
    number: '05',
    title: 'Distribusi',
    description: 'Pengiriman produk ke pelanggan',
  },
  {
    number: '06',
    title: 'Reklamasi',
    description: 'Pemulihan lahan pasca tambang',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Layanan Kami"
        subtitle="Solusi Pertambangan Terpadu"
        description="Dari eksplorasi hingga distribusi, kami menyediakan layanan pertambangan komprehensif yang didukung oleh teknologi modern dan tim ahli berpengalaman."
        backgroundImage="https://images.unsplash.com/photo-1620323998149-82361f5aa29c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2FsJTIwbWluZSUyMGFlcmlhbHxlbnwxfHx8fDE3NjEwMzE5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
        height="medium"
      />

      {/* Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-amber-500 mb-2 tracking-wide uppercase">Layanan Unggulan</p>
            <h2 className="text-white mb-4">
              Solusi Lengkap untuk Industri Pertambangan
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Kami menawarkan berbagai layanan pertambangan yang dirancang untuk memenuhi 
              kebutuhan spesifik setiap proyek dengan standar kualitas tertinggi.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-amber-500 mb-2 tracking-wide uppercase">Proses Kerja</p>
            <h2 className="text-white">Alur Operasional Kami</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-amber-500/50 transition-all">
                  <div className="text-6xl bg-gradient-to-br from-amber-500 to-amber-600 bg-clip-text text-transparent mb-4 opacity-20">
                    {step.number}
                  </div>
                  <h3 className="text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-amber-500/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20 rounded-2xl p-12"
          >
            <h2 className="text-white mb-4">
              Butuh Solusi Pertambangan Khusus?
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Tim ahli kami siap membantu merancang solusi yang disesuaikan dengan 
              kebutuhan spesifik proyek pertambangan Anda.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg transition-all"
            >
              Konsultasi Gratis
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
