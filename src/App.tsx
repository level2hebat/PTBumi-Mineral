import { NavigationProvider } from './lib/navigation';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Router } from './components/Router';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <NavigationProvider>
      <div className="bg-slate-900 text-white antialiased">
        <Navbar />
        <main>
          <Router />
        </main>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </NavigationProvider>
  );
}
