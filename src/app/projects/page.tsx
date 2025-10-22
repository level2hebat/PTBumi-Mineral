'use client';

import { Hero } from '../../components/Hero';
import { ProjectCard } from '../../components/ProjectCard';
import { motion } from 'motion/react';

const projects = [
  {
    title: 'Tambang Batu Bara Sangatta',
    location: 'Kalimantan Timur',
    year: '2018 - Present',
    image: 'https://images.unsplash.com/photo-1759411354013-a4313f3ce7d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2FsJTIwbWluaW5nJTIwb3BlcmF0aW9ufGVufDF8fHx8MTc2MTEwNDU4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Operasi penambangan batu bara skala besar dengan kapasitas produksi 2 juta ton per tahun, menggunakan teknologi ramah lingkungan.',
  },
  {
    title: 'Eksplorasi Nikel Kolaka',
    location: 'Sulawesi Tenggara',
    year: '2020 - Present',
    image: 'https://images.unsplash.com/photo-1709489662983-3674d790b224?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwcGl0JTIwbWluZXxlbnwxfHx8fDE3NjEwNTQyMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Proyek eksplorasi dan pengembangan deposit nikel laterit untuk mendukung industri baterai kendaraan listrik.',
  },
  {
    title: 'Tambang Tembaga Papua',
    location: 'Papua',
    year: '2015 - Present',
    image: 'https://images.unsplash.com/photo-1599277185953-192064410f5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjB0cnVjayUyMGV4Y2F2YXRvcnxlbnwxfHx8fDE3NjExMDQ1ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Penambangan tembaga dengan standar internasional, menghasilkan 150.000 ton konsentrat tembaga per tahun.',
  },
  {
    title: 'Pengolahan Bauksit Riau',
    location: 'Riau',
    year: '2019 - Present',
    image: 'https://images.unsplash.com/photo-1759312471111-78e910f24d82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWluaW5nJTIwc2l0ZXxlbnwxfHx8fDE3NjExMDQzODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Fasilitas pengolahan bauksit modern yang menghasilkan alumina berkualitas tinggi untuk pasar ekspor.',
  },
  {
    title: 'Tambang Emas Kalimantan Barat',
    location: 'Kalimantan Barat',
    year: '2021 - Present',
    image: 'https://images.unsplash.com/photo-1620323998149-82361f5aa29c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2FsJTIwbWluZSUyMGFlcmlhbHxlbnwxfHx8fDE3NjEwMzE5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Proyek penambangan emas dengan teknologi pengolahan mercury-free untuk menjaga kelestarian lingkungan.',
  },
  {
    title: 'Logistik Pelabuhan Samarinda',
    location: 'Kalimantan Timur',
    year: '2017 - Present',
    image: 'https://images.unsplash.com/photo-1758750518277-1a8a182033e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjBlcXVpcG1lbnQlMjBoZWF2eXxlbnwxfHx8fDE3NjExMDQzODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Infrastruktur pelabuhan dan logistik terintegrasi untuk distribusi produk tambang ke pasar domestik dan internasional.',
  },
];

const stats = [
  { value: '48', label: 'Proyek Aktif' },
  { value: '12', label: 'Lokasi Tambang' },
  { value: '5M+', label: 'Ton Produksi/Tahun' },
  { value: '95%', label: 'Tingkat Kepuasan' },
];

export default function ProjectsPage() {
  return (
    <>
      <Hero
        title="Proyek Kami"
        subtitle="Portfolio & Achievements"
        description="Berbagai proyek pertambangan yang telah kami kerjakan dengan standar kualitas dan keselamatan tertinggi di seluruh Indonesia."
        backgroundImage="https://images.unsplash.com/photo-1599277185953-192064410f5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjBjb2FsJTIwZXhjYXZhdG9yfGVufDF8fHx8MTc2MTEwNDM4MHww&ixlib=rb-4.1.0&q=80&w=1080"
        height="medium"
      />

      {/* Stats */}
      <section className="py-16 bg-gradient-to-br from-slate-800 to-slate-900 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-amber-500 mb-2">
                  <span className="text-4xl md:text-5xl">{stat.value}</span>
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-amber-500 mb-2 tracking-wide uppercase">Portfolio Proyek</p>
            <h2 className="text-white mb-4">
              Proyek Pertambangan Terkemuka
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Kami telah menyelesaikan dan mengoperasikan berbagai proyek pertambangan 
              berskala besar di seluruh Indonesia dengan komitmen terhadap kualitas dan keberlanjutan.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-white">
              Ingin Berkolaborasi dalam Proyek Tambang?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Kami terbuka untuk diskusi mengenai kemitraan strategis, investasi, 
              atau kolaborasi proyek pertambangan yang saling menguntungkan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg transition-all"
              >
                Diskusi Proyek
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center gap-2 border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white px-8 py-4 rounded-lg transition-all"
              >
                Lihat Layanan
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
