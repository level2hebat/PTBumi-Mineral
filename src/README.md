# PT Bumi Mineral Nusantara - Company Profile Website

Website company profile profesional untuk perusahaan pertambangan yang dibangun dengan Next.js 15, Tailwind CSS, dan Framer Motion.

## 🌟 Fitur Utama

- **Modern & Responsif** - Desain yang bersih dan modern, optimal untuk semua ukuran layar
- **Animasi Halus** - Menggunakan Framer Motion untuk transisi dan animasi yang smooth
- **Performa Tinggi** - Dioptimalkan untuk loading cepat dan performa maksimal
- **SEO Friendly** - Struktur kode yang baik untuk optimasi mesin pencari
- **Komponen Reusable** - Arsitektur komponen yang modular dan mudah dikustomisasi

## 📄 Halaman

1. **Home** - Landing page dengan hero section, statistik perusahaan, dan nilai-nilai
2. **About** - Profil perusahaan, visi & misi, dan timeline perjalanan
3. **Services** - Layanan pertambangan lengkap dan proses operasional
4. **Projects** - Galeri proyek tambang yang telah dikerjakan
5. **Sustainability** - Program keberlanjutan dan CSR
6. **Contact** - Form kontak, informasi kantor, dan peta lokasi

## 🎨 Teknologi

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion (motion/react)
- **Icons**: Lucide React
- **Typography**: Space Grotesk (headings) + Inter (body)
- **Form**: React Hook Form
- **UI Components**: Shadcn/ui
- **Notifications**: Sonner (Toast)

## 🚀 Cara Menjalankan

### Prasyarat

- Node.js 18+ atau versi terbaru
- npm atau yarn atau pnpm

### Instalasi

```bash
# Clone repository
git clone <repository-url>

# Masuk ke direktori project
cd minerra-company-profile

# Install dependencies
npm install
# atau
yarn install
# atau
pnpm install
```

### Development

```bash
# Jalankan development server
npm run dev
# atau
yarn dev
# atau
pnpm dev
```

Buka browser dan akses [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
# Build untuk production
npm run build

# Jalankan production server
npm start
```

## 📁 Struktur Project

```
minerra-company-profile/
├── app/                      # Next.js App Router pages
│   ├── page.tsx             # Home page
│   ├── about/page.tsx       # About page
│   ├── services/page.tsx    # Services page
│   ├── projects/page.tsx    # Projects page
│   ├── sustainability/page.tsx  # Sustainability page
│   ├── contact/page.tsx     # Contact page
│   └── layout.tsx           # Root layout
├── components/              # Reusable components
│   ├── Navbar.tsx          # Navigation component
│   ├── Footer.tsx          # Footer component
│   ├── Hero.tsx            # Hero section component
│   ├── StatsCounter.tsx    # Animated stats counter
│   ├── ServiceCard.tsx     # Service card component
│   ├── ProjectCard.tsx     # Project card component
│   ├── ContactForm.tsx     # Contact form component
│   └── ui/                 # Shadcn UI components
├── guidelines/             # Development guidelines
│   ├── Typography.md       # Font system documentation
│   └── Guidelines.md       # General guidelines
├── lib/                    # Utility functions
├── styles/                 # Global styles
│   └── globals.css         # Tailwind CSS & custom styles
├── FONT_USAGE.md          # Quick font reference guide
└── README.md              # Project documentation
```

## 🎨 Kustomisasi

### Mengubah Font

Website ini menggunakan kombinasi font modern:
- **Space Grotesk** untuk heading (judul, subtitle)
- **Inter** untuk body text (paragraf, form)

Untuk mengubah font, edit `styles/globals.css`:

```css
:root {
  --font-heading: 'YourHeadingFont', system-ui, sans-serif;
  --font-body: 'YourBodyFont', system-ui, sans-serif;
}
```

### Mengubah Warna

Edit file `styles/globals.css` untuk mengubah theme warna:

```css
:root {
  /* Ubah warna primary (amber) */
  --color-primary: ...;
  
  /* Ubah warna background */
  --color-background: ...;
}
```

### Menggunakan Font System

Website ini menggunakan sistem typography modern:
- **Space Grotesk** untuk heading (otomatis diterapkan pada h1-h4)
- **Inter** untuk body text (otomatis diterapkan pada p, button, input)

Lihat dokumentasi lengkap di:
- 📖 **Quick Reference**: `/FONT_USAGE.md` - Panduan cepat penggunaan
- 📚 **Detailed Guide**: `/guidelines/Typography.md` - Dokumentasi lengkap

Untuk menggunakan font secara manual:
```tsx
<div className="font-heading">Heading Text</div>
<div className="font-body">Body Text</div>
```

### Mengganti Konten

Semua konten dapat diubah dengan mengedit file-file di folder `/app`. Setiap halaman memiliki data yang mudah dikustomisasi di bagian atas file.

### Menambah Halaman Baru

1. Buat folder baru di `/app/nama-halaman`
2. Tambahkan file `page.tsx` di dalam folder tersebut
3. Update navigasi di `/components/Navbar.tsx`

## 📦 Deploy ke Production

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod
```

### Docker

```dockerfile
# Dockerfile sudah include di project
docker build -t mining-company-profile .
docker run -p 3000:3000 mining-company-profile
```

## 🔧 Konfigurasi Tambahan

### Form Contact

Form kontak saat ini menggunakan mock submission. Untuk integrasi dengan backend:

1. Edit `/components/ContactForm.tsx`
2. Ganti fungsi `onSubmit` dengan API call ke backend Anda
3. Tambahkan environment variable untuk API endpoint

### Google Maps

Edit iframe di `/app/contact/page.tsx` dengan koordinat lokasi kantor Anda:

```tsx
<iframe src="YOUR_GOOGLE_MAPS_EMBED_URL" ... />
```

## 📝 Lisensi

© 2025 PT Bumi Mineral Nusantara. All rights reserved.

---

**Dibuat dengan ❤️ menggunakan Next.js 15 & Tailwind CSS**
