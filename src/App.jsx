import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState('dark');

  // Apply smooth scrolling and theme class to root container
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('scroll-smooth');
  }, []);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div className={theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}>
      <Navbar onToggleTheme={toggleTheme} theme={theme} />
      <main>
        <Hero />
        <Sections />
      </main>
      <Footer />
    </div>
  );
}
