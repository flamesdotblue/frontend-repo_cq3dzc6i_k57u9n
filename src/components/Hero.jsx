import Spline from '@splinetool/react-spline';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] w-full text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10">
        {/* Gradient overlay to improve contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-36 pb-24 md:pt-40 md:pb-28 lg:pt-48 lg:pb-40">
            <div className="max-w-3xl">
              <p className="uppercase tracking-widest text-xs sm:text-sm text-red-400 font-semibold">
                IronPulse Fitness
              </p>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                Push <span className="text-red-500">Beyond</span> Limits
              </h1>
              <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl">
                Train with purpose in a community that elevates you. High-energy classes, elite
                coaching, and a space built for progress.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="#membership"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-red-600 hover:bg-red-500 font-semibold shadow-lg shadow-red-600/30"
                >
                  Join Now
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#programs"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-white/20 hover:border-white/40"
                >
                  <Play className="w-4 h-4" />
                  View Classes
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-white/20 hover:border-white/40"
                >
                  Book a Class
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
