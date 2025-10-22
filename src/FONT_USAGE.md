# 🎨 Font Usage Guide - PT Bumi Mineral Nusantara

Panduan cepat penggunaan font untuk website company profile.

## 📦 Font Stack

```css
Headings → Space Grotesk
Body Text → Inter
```

## 🚀 Quick Reference

### ✅ Automatic (Recommended)

Tidak perlu menambahkan class khusus - font sudah diterapkan otomatis:

```tsx
// Heading - otomatis Space Grotesk
<h1>Judul Utama</h1>
<h2>Sub Judul</h2>
<h3>Heading Level 3</h3>

// Body - otomatis Inter
<p>Paragraf konten</p>
<button>Click Me</button>
<input type="text" />
<label>Label Form</label>
```

### 🎯 Manual Application

Gunakan utility class jika perlu kontrol lebih:

```tsx
// Force heading font
<div className="font-heading text-4xl">
  Special Title Text
</div>

// Force body font
<span className="font-body">
  Regular text content
</span>

// Angka statistik (recommended)
<span className="text-6xl font-heading text-amber-500">
  1,234
</span>
```

## 📋 Common Patterns

### Hero Section Title
```tsx
<h1 className="text-5xl md:text-7xl text-white mb-6">
  Empowering Resources, Sustaining the Future
</h1>
// ✅ Space Grotesk otomatis
```

### Section Heading
```tsx
<h2 className="text-3xl md:text-4xl text-white mb-4">
  Layanan Kami
</h2>
// ✅ Space Grotesk otomatis
```

### Body Paragraph
```tsx
<p className="text-gray-300 leading-relaxed">
  PT Bumi Mineral Nusantara adalah perusahaan pertambangan...
</p>
// ✅ Inter otomatis
```

### Stats Counter
```tsx
<span className="text-6xl font-heading text-amber-500">
  25+
</span>
<p className="text-gray-400">Years Experience</p>
// ✅ Angka: Space Grotesk (manual), Label: Inter (auto)
```

### Card Title
```tsx
<h3 className="text-xl text-white mb-3">
  Mineral Exploration
</h3>
// ✅ Space Grotesk otomatis
```

### Button Text
```tsx
<button className="bg-amber-600 px-6 py-3 rounded-lg">
  Learn More
</button>
// ✅ Inter otomatis
```

### Form Label & Input
```tsx
<label className="block mb-2">Full Name</label>
<input type="text" className="w-full px-4 py-2 rounded" />
// ✅ Keduanya Inter otomatis
```

## 🎨 Font Weights

### Space Grotesk (Headings)
- 300 → Light (jarang dipakai)
- 400 → Regular (jarang dipakai)
- **500 → Medium** (recommended untuk h2, h3)
- **600 → Semi Bold** (recommended untuk h1)
- **700 → Bold** (untuk emphasis khusus)

### Inter (Body)
- 300 → Light (jarang dipakai)
- **400 → Regular** (recommended untuk paragraf)
- **500 → Medium** (recommended untuk label, button)
- 600 → Semi Bold (untuk emphasis)
- 700 → Bold (untuk strong text)
- 800 → Extra Bold (jarang dipakai)

## 💡 Tips & Best Practices

### ✅ DO
- Gunakan Space Grotesk untuk semua heading
- Gunakan Inter untuk body text dan UI elements
- Gunakan `font-heading` untuk angka statistik yang prominent
- Biarkan sistem otomatis mengatur font (lebih mudah maintain)

### ❌ DON'T
- Jangan gunakan Space Grotesk untuk paragraf panjang (kurang readable)
- Jangan mix font di tengah kalimat tanpa alasan kuat
- Jangan gunakan terlalu banyak font weight (max 2-3 per halaman)
- Jangan override font tanpa keperluan jelas

## 🔧 Customization

Edit `/styles/globals.css` untuk mengganti font:

```css
:root {
  --font-heading: 'YourNewHeadingFont', system-ui, sans-serif;
  --font-body: 'YourNewBodyFont', system-ui, sans-serif;
}
```

Import font baru:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont...');
```

## 📱 Responsive Font Sizes

Gunakan Tailwind responsive classes:

```tsx
// Mobile → Desktop scaling
<h1 className="text-3xl md:text-5xl lg:text-7xl">
  Responsive Heading
</h1>

<p className="text-sm md:text-base lg:text-lg">
  Responsive paragraph
</p>
```

## 🎯 Real Examples from Codebase

Lihat contoh implementasi di:
- `/app/page.tsx` - Hero section & stats
- `/components/Hero.tsx` - Hero component
- `/components/StatsCounter.tsx` - Animated stats
- `/components/Navbar.tsx` - Navigation
- `/components/Footer.tsx` - Footer layout

---

**Need help?** Check `/guidelines/Typography.md` for detailed documentation.
