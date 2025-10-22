'use client';

import react from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Send } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log('Form data:', data);
    toast.success('Pesan berhasil dikirim! Kami akan menghubungi Anda segera.');
    reset();
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit(onSubmit)}
      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-gray-300 mb-2">
            Nama Lengkap *
          </label>
          <input
            id="name"
            type="text"
            {...register('name', { required: 'Nama wajib diisi' })}
            className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-300 mb-2">
            Email *
          </label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email wajib diisi',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Format email tidak valid',
              },
            })}
            className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-gray-300 mb-2">
            Nomor Telepon
          </label>
          <input
            id="phone"
            type="tel"
            {...register('phone')}
            className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
            placeholder="+62 812 3456 7890"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-gray-300 mb-2">
            Subjek *
          </label>
          <input
            id="subject"
            type="text"
            {...register('subject', { required: 'Subjek wajib diisi' })}
            className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
            placeholder="Pertanyaan tentang layanan"
          />
          {errors.subject && (
            <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-gray-300 mb-2">
          Pesan *
        </label>
        <textarea
          id="message"
          rows={6}
          {...register('message', { required: 'Pesan wajib diisi' })}
          className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all resize-none"
          placeholder="Tuliskan pesan Anda di sini..."
        />
        {errors.message && (
          <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Mengirim...
          </>
        ) : (
          <>
            Kirim Pesan
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>
    </motion.form>
  );
}
