import { Dumbbell, Zap, Leaf, UserCog, Star, MapPin, Phone, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      {eyebrow && (
        <p className="uppercase tracking-widest text-xs sm:text-sm text-red-500 font-semibold">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-white/70">{subtitle}</p>}
    </div>
  );
}

export default function Sections() {
  return (
    <div className="relative bg-neutral-950 text-white">
      {/* About */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="About"
            title="Stronger Together"
            subtitle="Our mission is to forge resilient bodies and sharp minds through expert coaching, purposeful programming, and a community that has your back."
          />
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <Dumbbell className="w-6 h-6 text-red-500" />
              <h3 className="mt-4 font-bold">Elite Equipment</h3>
              <p className="mt-2 text-white/70">From power racks to sleds—everything you need to get stronger and move better.</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <Zap className="w-6 h-6 text-red-500" />
              <h3 className="mt-4 font-bold">High-Energy Culture</h3>
              <p className="mt-2 text-white/70">Motivational atmosphere, upbeat playlists, and coaches who bring the heat.</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <Leaf className="w-6 h-6 text-red-500" />
              <h3 className="mt-4 font-bold">Holistic Approach</h3>
              <p className="mt-2 text-white/70">Strength, conditioning, mobility, recovery, and nutrition guidance together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Programs"
            title="Train Your Way"
            subtitle="Pick the path that fits your goals—each program is guided by expert coaches."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: 'Strength Training',
                desc: 'Compound lifts, progressive overload, and technique mastery.',
                icon: Dumbbell,
              },
              { name: 'HIIT', desc: 'Short, intense intervals to torch calories and boost endurance.', icon: Zap },
              { name: 'Yoga', desc: 'Mobility, breath work, and balance to recover and reset.', icon: Leaf },
              {
                name: 'Personal Coaching',
                desc: 'One-on-one plans tailored to your goals with accountability.',
                icon: UserCog,
              },
            ].map((p) => (
              <div key={p.name} className="group relative p-6 rounded-xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 hover:border-red-500/50 transition-colors">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-red-600 text-white shadow-lg shadow-red-600/30">
                  <p.icon className="w-6 h-6" />
                </div>
                <h3 className="mt-4 font-bold text-lg">{p.name}</h3>
                <p className="mt-2 text-white/70 text-sm">{p.desc}</p>
                <a href="#contact" className="mt-4 inline-block text-sm text-red-400 hover:text-red-300">Book a Class →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section id="trainers" className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Trainers"
            title="Meet The Coaches"
            subtitle="Certified, experienced, and all-in on your progress."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: 'Alex Carter',
                role: 'Strength & Powerlifting',
                img: 'https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=1200&auto=format&fit=crop',
              },
              {
                name: 'Mia Rivera',
                role: 'HIIT & Conditioning',
                img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop',
              },
              {
                name: 'Noah Lee',
                role: 'Yoga & Mobility',
                img: 'https://images.unsplash.com/photo-1540206276207-3af25c08abc3?q=80&w=1200&auto=format&fit=crop',
              },
              {
                name: 'Sofia Patel',
                role: 'Personal Coaching',
                img: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=1200&auto=format&fit=crop',
              },
            ].map((t) => (
              <div key={t.name} className="rounded-xl overflow-hidden bg-white/5 border border-white/10">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover hover:scale-105 transition-transform" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold">{t.name}</h3>
                  <p className="text-sm text-white/70">{t.role}</p>
                  <div className="mt-3 flex items-center gap-3 text-white/70">
                    <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram className="w-4 h-4" /></a>
                    <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter className="w-4 h-4" /></a>
                    <a href="#" aria-label="Facebook" className="hover:text-white"><Facebook className="w-4 h-4" /></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership */}
      <section id="membership" className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Membership"
            title="Choose Your Edge"
            subtitle="Simple, transparent pricing. No contracts. Upgrade anytime."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                name: 'Basic',
                price: '$29/mo',
                features: ['Gym access', 'Open gym hours', 'Locker access'],
                highlight: false,
              },
              {
                name: 'Pro',
                price: '$59/mo',
                features: ['Everything in Basic', 'All classes', 'Monthly check-in'],
                highlight: true,
              },
              {
                name: 'Elite',
                price: '$99/mo',
                features: ['Everything in Pro', 'Personal coaching', 'Recovery lounge'],
                highlight: false,
              },
            ].map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl border ${tier.highlight ? 'border-red-500 bg-red-600/10' : 'border-white/10 bg-white/5'} p-6 flex flex-col`}
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-bold">{tier.name}</h3>
                  {tier.highlight && (
                    <span className="text-xs px-2 py-1 rounded bg-red-600 text-white">Popular</span>
                  )}
                </div>
                <p className="mt-2 text-3xl font-extrabold text-white">{tier.price}</p>
                <ul className="mt-4 space-y-2 text-white/80">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="inline-flex w-1.5 h-1.5 rounded-full bg-red-500" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-6 inline-flex items-center justify-center px-4 py-2 rounded-md font-semibold ${tier.highlight ? 'bg-red-600 hover:bg-red-500' : 'bg-white/10 hover:bg-white/20'}`}
                >
                  Join Now
                </a>
              </div>
            ))}
          </div>

          {/* Comparison */}
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr className="text-left text-white/70">
                  <th className="py-3">Feature</th>
                  <th className="py-3">Basic</th>
                  <th className="py-3">Pro</th>
                  <th className="py-3">Elite</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {[
                  ['24/7 Access', '—', '—', '✔'],
                  ['Group Classes', '—', '✔', '✔'],
                  ['Personal Training', '—', '—', '✔'],
                  ['Sauna & Recovery', '—', '—', '✔'],
                ].map((row, idx) => (
                  <tr key={idx}>
                    {row.map((cell, i) => (
                      <td key={i} className="py-3 text-white/80">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Testimonials"
            title="What Members Say"
            subtitle="Real stories from our community."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Jordan',
                text: 'The coaches here changed my approach to training. I feel stronger than ever.',
                rating: 5,
              },
              {
                name: 'Taylor',
                text: 'High-energy classes and welcoming people—this place keeps me consistent.',
                rating: 5,
              },
              {
                name: 'Riley',
                text: 'Love the vibe and the programming. The results speak for themselves.',
                rating: 4,
              },
            ].map((t) => (
              <div key={t.name} className="p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 text-red-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-white/80">“{t.text}”</p>
                <p className="mt-3 font-semibold">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Contact"
            title="Let’s Connect"
            subtitle="Drop a message, find us on the map, or give us a call."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <form className="p-6 rounded-xl bg-white/5 border border-white/10 grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="w-full px-4 py-2 rounded-md bg-black/60 border border-white/10 focus:border-red-500 outline-none" />
                <input type="email" placeholder="Email" className="w-full px-4 py-2 rounded-md bg-black/60 border border-white/10 focus:border-red-500 outline-none" />
              </div>
              <input type="text" placeholder="Subject" className="w-full px-4 py-2 rounded-md bg-black/60 border border-white/10 focus:border-red-500 outline-none" />
              <textarea rows={5} placeholder="Your message" className="w-full px-4 py-2 rounded-md bg-black/60 border border-white/10 focus:border-red-500 outline-none" />
              <div className="flex items-center gap-3">
                <button type="submit" className="inline-flex items-center justify-center px-5 py-2 rounded-md bg-red-600 hover:bg-red-500 font-semibold">Send Message</button>
                <a href="#programs" className="px-5 py-2 rounded-md border border-white/10 hover:border-white/30">Book a Class</a>
              </div>
            </form>

            <div className="grid gap-6">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-3 text-white/80"><MapPin className="w-5 h-5 text-red-500" /> 123 Iron Street, Performance City</div>
                  <div className="flex items-center gap-3 text-white/80"><Phone className="w-5 h-5 text-red-500" /> (555) 123-4567</div>
                  <div className="flex items-center gap-3 text-white/80"><Clock className="w-5 h-5 text-red-500" /> Mon–Sun: 5am–11pm</div>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden border border-white/10">
                <iframe
                  title="IronPulse Fitness Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95565131531692!3d-37.817327979751955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5775c0f0f0f0f0!2sGym!5e0!3m2!1sen!2sus!4v1614644123456!5m2!1sen!2sus"
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
