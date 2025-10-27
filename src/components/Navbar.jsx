import { useEffect, useState } from 'react';
import { Flame, Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar({ onToggleTheme, theme }) {
  const [open, setOpen] = useState(false);

  // Close mobile menu on hash change (smooth scrolling)
  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  const links = [
    { href: '#about', label: 'About' },
    { href: '#programs', label: 'Programs' },
    { href: '#trainers', label: 'Trainers' },
    { href: '#membership', label: 'Membership' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/70 text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-red-600 text-white">
              <Flame className="w-5 h-5" />
            </span>
            <span className="font-extrabold tracking-tight text-lg sm:text-xl">
              IronPulse <span className="text-red-500">Fitness</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium hover:text-red-400 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-white/10 hover:border-white/20 transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <a
              href="#membership"
              className="inline-flex items-center px-4 py-2 rounded-md bg-red-600 hover:bg-red-500 transition-colors text-sm font-semibold"
            >
              Join Now
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80">
          <div className="px-4 py-4 space-y-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block px-3 py-2 rounded-md hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => {
                  onToggleTheme();
                  setOpen(false);
                }}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-white/10"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                <span>Theme</span>
              </button>
              <a
                href="#membership"
                className="flex-1 text-center px-3 py-2 rounded-md bg-red-600 hover:bg-red-500 font-semibold"
                onClick={() => setOpen(false)}
              >
                Join Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
