'use client';

import { Hero } from '../../components/Hero';
import { motion } from 'motion/react';
import { CheckCircle2, Users, TrendingUp, Globe } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

const timeline = [
  {
    year: '1998',
    title: 'Pendirian Perusahaan',
    description: 'PT Bumi Mineral Nusantara didirikan dengan visi menjadi pemimpin industri pertambangan Indonesia.',
  },
  {
    year: '2005',
    title: 'Ekspansi Regional',
    description: 'Membuka tambang pertama di Kalimantan Timur dengan kapasitas produksi 500.000 ton per tahun.',
  },
  {
    year: '2012',
    title: 'Sertifikasi Internasional',
    description: 'Meraih sertifikasi ISO 14001 untuk sistem manajemen lingkungan.',
  },
  {
    year: '2018',
    title: 'Teknologi Modern',
    description: 'Implementasi teknologi IoT dan AI untuk optimasi operasional pertambangan.',
  },
  {
    year: '2023',
    title: 'Sustainability Leader',
    description: 'Menerima penghargaan sebagai perusahaan tambang paling berkelanjutan di Indonesia.',
  },
];

const missions = [
  'Mengekstraksi sumber daya mineral dengan cara yang bertanggung jawab dan berkelanjutan',
  'Menerapkan standar keselamatan tertinggi di seluruh operasi kami',
  'Berkontribusi pada pembangunan ekonomi lokal dan nasional',
  'Meminimalkan dampak lingkungan melalui inovasi teknologi',
  'Memberdayakan masyarakat lokal melalui program CSR yang berkelanjutan',
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Tentang Kami"
        subtitle="PT Bumi Mineral Nusantara"
        description="Lebih dari 25 tahun pengalaman dalam industri pertambangan, menghadirkan solusi yang bertanggung jawab dan berkelanjutan."
        backgroundImage="https://images.unsplash.com/photo-1758750518277-1a8a182033e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjBlcXVpcG1lbnQlMjBoZWF2eXxlbnwxfHx8fDE3NjExMDQzODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
        height="medium"
      />

      {/* Company Profile */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <p className="text-amber-500 mb-2 tracking-wide uppercase">Profil Perusahaan</p>
                <h2 className="text-white mb-4">
                  Pelopor Pertambangan Berkelanjutan
                </h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                PT Bumi Mineral Nusantara adalah perusahaan pertambangan terkemuka di Indonesia 
                yang berfokus pada ekstraksi mineral berkualitas tinggi dengan pendekatan yang 
                bertanggung jawab terhadap lingkungan dan masyarakat.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Kami menggabungkan teknologi modern, praktik terbaik industri, dan komitmen 
                terhadap keberlanjutan untuk memberikan nilai jangka panjang kepada semua 
                stakeholder kami.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="flex items-start gap-3">
                  <div className="bg-amber-500/20 p-2 rounded-lg">
                    <Users className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-white">850+</p>
                    <p className="text-gray-400 text-sm">Karyawan</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-amber-500/20 p-2 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-white">25+</p>
                    <p className="text-gray-400 text-sm">Tahun Pengalaman</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-amber-500/20 p-2 rounded-lg">
                    <Globe className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-white">12</p>
                    <p className="text-gray-400 text-sm">Lokasi Tambang</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-amber-500/20 p-2 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-white">48</p>
                    <p className="text-gray-400 text-sm">Proyek Aktif</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYxMDkzNzEzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
            >
              <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-white mb-4">Visi Kami</h3>
              <p className="text-gray-300 leading-relaxed">
                Menjadi perusahaan pertambangan terkemuka di Asia Tenggara yang diakui atas 
                komitmen terhadap keberlanjutan, inovasi, dan nilai yang kami ciptakan untuk 
                stakeholder dan masyarakat.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
            >
              <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-white mb-4">Misi Kami</h3>
              <ul className="space-y-3">
                {missions.map((mission, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>{mission}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-amber-500 mb-2 tracking-wide uppercase">Perjalanan Kami</p>
            <h2 className="text-white">Milestone Penting</h2>
          </motion.div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="flex items-start gap-8">
                  <div className="flex-shrink-0 w-24 text-right">
                    <div className="inline-block bg-gradient-to-br from-amber-500 to-amber-600 text-white px-4 py-2 rounded-lg">
                      {item.year}
                    </div>
                  </div>
                  <div className="relative flex-1 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-amber-500/50 transition-all">
                    <h3 className="text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
