# Typography Guidelines - PT Bumi Mineral Nusantara

## Font Family

Website ini menggunakan sistem font yang modern dan profesional:

### Space Grotesk (Heading Font)
- **Digunakan untuk**: Semua heading (h1, h2, h3, h4), angka statistik, dan elemen penting
- **Karakteristik**: Modern, geometric, kuat, dan memiliki personality yang unik
- **Font weights tersedia**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi Bold), 700 (Bold)
- **CSS Variable**: `var(--font-heading)`
- **Letter spacing**: -0.02em (h1), -0.01em (h2, h3)

### Inter (Body Font)
- **Digunakan untuk**: Body text, paragraf, form inputs, buttons, labels, dan UI elements
- **Karakteristik**: Sangat readable, neutral, dan optimized untuk layar digital
- **Font weights tersedia**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi Bold), 700 (Bold), 800 (Extra Bold)
- **CSS Variable**: `var(--font-body)`

## Penggunaan

### Automatic Application
Semua elemen HTML akan otomatis menggunakan font yang sesuai:
- Heading (h1, h2, h3, h4) → Space Grotesk
- Paragraf, form, button → Inter

### Manual Application
Anda bisa menggunakan utility classes untuk mengaplikasikan font secara manual:

```tsx
// Untuk heading font
<div className="font-heading">Teks dengan Space Grotesk</div>

// Untuk body font
<div className="font-body">Teks dengan Inter</div>
```

## Contoh Implementasi

### Hero Title
```tsx
<h1 className="text-5xl md:text-7xl text-white">
  Empowering Resources, Sustaining the Future
</h1>
// Otomatis menggunakan Space Grotesk
```

### Body Text
```tsx
<p className="text-gray-300 leading-relaxed">
  PT Bumi Mineral Nusantara adalah perusahaan pertambangan...
</p>
// Otomatis menggunakan Inter
```

### Stats Counter
```tsx
<span className="text-6xl font-heading text-amber-500">
  25+
</span>
// Menggunakan Space Grotesk untuk angka yang prominent
```

## Kustomisasi Font

Untuk mengganti font, edit file `/styles/globals.css`:

```css
:root {
  --font-heading: 'YourHeadingFont', system-ui, -apple-system, sans-serif;
  --font-body: 'YourBodyFont', system-ui, -apple-system, sans-serif;
}
```

Jangan lupa untuk mengimpor font baru di bagian atas file:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap');
```

## Best Practices

1. **Konsistensi**: Gunakan Space Grotesk untuk semua heading, Inter untuk semua body text
2. **Hierarchy**: Manfaatkan perbedaan font untuk menciptakan visual hierarchy yang jelas
3. **Readability**: Inter sangat optimized untuk body text, jadi gunakan untuk konten panjang
4. **Impact**: Space Grotesk memiliki personality yang kuat, sempurna untuk headline dan angka
5. **Performance**: Font dimuat dari Google Fonts dengan `display=swap` untuk performa optimal

## Tips

- Jangan gunakan terlalu banyak font weight dalam satu halaman
- Untuk heading, gunakan weight 500-700
- Untuk body text, gunakan weight 400-500
- Hindari menggunakan Space Grotesk untuk body text panjang (kurang readable)
- Gunakan letter-spacing negatif untuk heading besar agar terlihat lebih modern
