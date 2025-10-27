import { Flame, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-red-600 text-white">
              <Flame className="w-5 h-5" />
            </span>
            <div>
              <p className="font-extrabold">IronPulse Fitness</p>
              <p className="text-sm text-white/70">Push Beyond Limits</p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-4 text-sm text-white/80">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#programs" className="hover:text-white">Programs</a>
            <a href="#trainers" className="hover:text-white">Trainers</a>
            <a href="#membership" className="hover:text-white">Membership</a>
            <a href="#testimonials" className="hover:text-white">Testimonials</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>

          <div className="flex items-center gap-4 text-white/80">
            <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram className="w-5 h-5" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter className="w-5 h-5" /></a>
            <a href="#" aria-label="Facebook" className="hover:text-white"><Facebook className="w-5 h-5" /></a>
          </div>
        </div>
        <div className="mt-8 text-xs text-white/60">© {new Date().getFullYear()} IronPulse Fitness. All rights reserved.</div>
      </div>
    </footer>
  );
}
