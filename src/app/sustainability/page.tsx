'use client';

import { Hero } from '../../components/Hero';
import { motion } from 'motion/react';
import { Leaf, Droplet, Recycle, Users, Heart, TreePine, Sun, Award } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

const initiatives = [
  {
    icon: TreePine,
    title: 'Reforestasi',
    description: 'Program penanaman 100.000 pohon per tahun untuk rehabilitasi lahan pasca tambang.',
    stats: '250K+ pohon ditanam',
  },
  {
    icon: Droplet,
    title: 'Pengelolaan Air',
    description: 'Sistem pengolahan air limbah modern untuk menjaga kualitas sumber air sekitar tambang.',
    stats: '95% air didaur ulang',
  },
  {
    icon: Recycle,
    title: 'Zero Waste',
    description: 'Komitmen mengurangi limbah operasional dengan program daur ulang dan efisiensi material.',
    stats: '80% limbah didaur ulang',
  },
  {
    icon: Sun,
    title: 'Energi Terbarukan',
    description: 'Transisi ke energi surya dan angin untuk mengurangi emisi karbon dari operasi pertambangan.',
    stats: '30% energi terbarukan',
  },
  {
    icon: Users,
    title: 'Pemberdayaan Masyarakat',
    description: 'Program pelatihan dan kewirausahaan untuk meningkatkan kesejahteraan masyarakat lokal.',
    stats: '5,000+ orang terlatih',
  },
  {
    icon: Heart,
    title: 'Kesehatan & Pendidikan',
    description: 'Pembangunan fasilitas kesehatan dan pendidikan untuk komunitas di sekitar area tambang.',
    stats: '15 fasilitas dibangun',
  },
];

const commitments = [
  {
    title: 'Carbon Neutral 2030',
    description: 'Target mencapai net-zero emissions pada seluruh operasi kami di tahun 2030.',
  },
  {
    title: 'Biodiversity Protection',
    description: 'Melindungi dan melestarikan keanekaragaman hayati di area operasi tambang.',
  },
  {
    title: 'Water Stewardship',
    description: 'Pengelolaan air yang bertanggung jawab dan sustainable untuk generasi mendatang.',
  },
  {
    title: 'Community Empowerment',
    description: 'Memberdayakan masyarakat lokal melalui program CSR yang berkelanjutan.',
  },
];

export default function SustainabilityPage() {
  return (
    <>
      <Hero
        title="Keberlanjutan"
        subtitle="Sustainability & CSR"
        description="Komitmen kami untuk menciptakan dampak positif bagi lingkungan dan masyarakat, memastikan operasi pertambangan yang bertanggung jawab untuk masa depan yang berkelanjutan."
        backgroundImage="https://images.unsplash.com/photo-1598962277067-f13ebd6cfdca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGZvcmVzdCUyMHN1c3RhaW5hYmlsaXR5fGVufDF8fHx8MTc2MTEwNDM4MXww&ixlib=rb-4.1.0&q=80&w=1080"
        height="medium"
      />

      {/* Mission Statement */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
              <Leaf className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-white">
              Pertambangan Berkelanjutan untuk Masa Depan
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Kami percaya bahwa kesuksesan bisnis harus sejalan dengan tanggung jawab 
              lingkungan dan sosial. Melalui praktik pertambangan berkelanjutan, kami 
              berkomitmen untuk meminimalkan dampak lingkungan, melindungi keanekaragaman 
              hayati, dan meningkatkan kesejahteraan masyarakat di sekitar area operasi kami.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-amber-500 mb-2 tracking-wide uppercase">Inisiatif Kami</p>
            <h2 className="text-white">Program Keberlanjutan</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-green-500/50 transition-all group"
              >
                <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:from-green-500/30 group-hover:to-green-600/20 transition-all">
                  <initiative.icon className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-white mb-3">{initiative.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {initiative.description}
                </p>
                <div className="text-green-500 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span className="text-sm">{initiative.stats}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
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
                <p className="text-amber-500 mb-2 tracking-wide uppercase">Dampak Lingkungan</p>
                <h2 className="text-white mb-4">
                  Melindungi Bumi untuk Generasi Mendatang
                </h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Kami menerapkan teknologi terkini dan praktik terbaik untuk meminimalkan 
                jejak ekologis operasi pertambangan. Setiap proyek dirancang dengan 
                mempertimbangkan dampak jangka panjang terhadap lingkungan.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
                    <Recycle className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-white mb-1">Circular Economy</h4>
                    <p className="text-gray-400 text-sm">
                      Mengoptimalkan penggunaan sumber daya dan mengurangi limbah melalui daur ulang.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
                    <Droplet className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-white mb-1">Water Conservation</h4>
                    <p className="text-gray-400 text-sm">
                      Sistem pengolahan air canggih untuk menjaga kualitas dan kuantitas air.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
                    <TreePine className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-white mb-1">Land Rehabilitation</h4>
                    <p className="text-gray-400 text-sm">
                      Program reklamasi lahan pasca tambang menjadi area produktif.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1760624683181-7570791efd52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWZvcmVzdGF0aW9uJTIwcGxhbnRpbmclMjB0cmVlc3xlbnwxfHx8fDE3NjExMDQ1ODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Reforestation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1655300256486-4ec7251bf84e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwcmVuZXdhYmxlfGVufDF8fHx8MTc2MTEwNDU4M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Solar Energy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1681011130080-46e470a7c96f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjEwNjY0NjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Community"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1598962277067-f13ebd6cfdca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGZvcmVzdCUyMHN1c3RhaW5hYmlsaXR5fGVufDF8fHx8MTc2MTEwNDM4MXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Forest"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-amber-500 mb-2 tracking-wide uppercase">Komitmen Kami</p>
            <h2 className="text-white">Target Keberlanjutan</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commitments.map((commitment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-green-500/50 transition-all"
              >
                <h3 className="text-white mb-3">{commitment.title}</h3>
                <p className="text-gray-400 leading-relaxed">{commitment.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-white">
              Bersama Membangun Masa Depan Berkelanjutan
            </h2>
            <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Pelajari lebih lanjut tentang program CSR dan inisiatif keberlanjutan kami, 
              atau hubungi kami untuk berkolaborasi dalam menciptakan dampak positif.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg transition-all"
            >
              Hubungi Kami
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
