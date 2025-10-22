'use client';

import { Hero } from '../../components/Hero';
import { ContactForm } from '../../components/ContactForm';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Alamat Kantor',
    details: [
      'Jl. Sudirman Kav. 52-53',
      'Jakarta Selatan 12190',
      'Indonesia',
    ],
  },
  {
    icon: Phone,
    title: 'Telepon',
    details: [
      '+62 21 5000 1234',
      '+62 21 5000 1235 (Fax)',
    ],
  },
  {
    icon: Mail,
    title: 'Email',
    details: [
      'info@bumimineralnusantara.co.id',
      'corporate@bumimineralnusantara.co.id',
    ],
  },
  {
    icon: Clock,
    title: 'Jam Operasional',
    details: [
      'Senin - Jumat: 08:00 - 17:00',
      'Sabtu - Minggu: Tutup',
    ],
  },
];

const offices = [
  {
    name: 'Kantor Pusat Jakarta',
    address: 'Jl. Sudirman Kav. 52-53, Jakarta Selatan',
    phone: '+62 21 5000 1234',
  },
  {
    name: 'Kantor Cabang Kalimantan',
    address: 'Jl. Ahmad Yani No. 123, Samarinda',
    phone: '+62 541 123 4567',
  },
  {
    name: 'Kantor Operasional Papua',
    address: 'Jl. Raya Timika No. 45, Papua',
    phone: '+62 901 234 5678',
  },
];

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Hubungi Kami"
        subtitle="Get In Touch"
        description="Kami siap menjawab pertanyaan Anda dan mendiskusikan bagaimana kami dapat membantu kebutuhan pertambangan Anda."
        backgroundImage="https://images.unsplash.com/photo-1759312471111-78e910f24d82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWluaW5nJTIwc2l0ZXxlbnwxfHx8fDE3NjExMDQzODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
        height="medium"
      />

      {/* Contact Info */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:border-amber-500/50 transition-all"
              >
                <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-amber-500" />
                </div>
                <h3 className="text-white mb-3 text-lg">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-400 text-sm leading-relaxed">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>

          {/* Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <p className="text-amber-500 mb-2 tracking-wide uppercase">Kirim Pesan</p>
                <h2 className="text-white mb-4">Ada Pertanyaan?</h2>
                <p className="text-gray-400 leading-relaxed">
                  Isi formulir di bawah ini dan tim kami akan menghubungi Anda dalam 
                  1x24 jam. Kami siap membantu menjawab pertanyaan Anda.
                </p>
              </motion.div>
              <ContactForm />
            </div>

            {/* Map & Offices */}
            <div className="space-y-8">
              {/* Google Maps */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2264088257837!2d106.80894!3d-6.2293867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e4a0a0a0a1%3A0x1a1a1a1a1a1a1a1a!2sSudirman!5e0!3m2!1sen!2sid!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all"
                  />
                </div>
              </motion.div>

              {/* Office Locations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <h3 className="text-white mb-4">Kantor Kami</h3>
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4 hover:border-amber-500/50 transition-all"
                  >
                    <h4 className="text-white mb-2 text-sm">{office.name}</h4>
                    <p className="text-gray-400 text-sm mb-1">{office.address}</p>
                    <p className="text-amber-500 text-sm">{office.phone}</p>
                  </div>
                ))}
              </motion.div>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6"
              >
                <h3 className="text-white mb-4">Ikuti Kami</h3>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="bg-slate-700 hover:bg-amber-600 p-3 rounded-lg transition-all group"
                  >
                    <Facebook className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  </a>
                  <a
                    href="#"
                    className="bg-slate-700 hover:bg-amber-600 p-3 rounded-lg transition-all group"
                  >
                    <Twitter className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  </a>
                  <a
                    href="#"
                    className="bg-slate-700 hover:bg-amber-600 p-3 rounded-lg transition-all group"
                  >
                    <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  </a>
                  <a
                    href="#"
                    className="bg-slate-700 hover:bg-amber-600 p-3 rounded-lg transition-all group"
                  >
                    <Instagram className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ or Additional Info */}
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
              Ingin Berkunjung ke Kantor Kami?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Kami menerima kunjungan dengan perjanjian terlebih dahulu. Silakan hubungi 
              kami untuk membuat janji atau mendapatkan informasi lebih lanjut tentang 
              fasilitas dan layanan kami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+622150001234"
                className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg transition-all"
              >
                <Phone className="w-5 h-5" />
                Hubungi Sekarang
              </a>
              <a
                href="mailto:info@bumimineralnusantara.co.id"
                className="inline-flex items-center justify-center gap-2 border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white px-8 py-4 rounded-lg transition-all"
              >
                <Mail className="w-5 h-5" />
                Kirim Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
