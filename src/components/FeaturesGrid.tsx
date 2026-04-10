import { Zap, Palette, BarChart3, Shield } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-5 h-5 text-white" />,
    title: "Days, Not Months",
    desc: "Concept to launch at a pace that redefines fast. Because waiting isn't a strategy."
  },
  {
    icon: <Palette className="w-5 h-5 text-white" />,
    title: "Obsessively Crafted",
    desc: "Every detail considered. Every element refined. Design so precise, it feels inevitable."
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-white" />,
    title: "Built to Convert",
    desc: "Layouts informed by data. Decisions backed by performance. Results you can measure."
  },
  {
    icon: <Shield className="w-5 h-5 text-white" />,
    title: "Secure by Default",
    desc: "Enterprise-grade protection comes standard. SSL, DDoS mitigation, compliance. All included."
  }
];

export default function FeaturesGrid() {
  return (
    <section className="py-24 bg-black px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-6">
            Why Us
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight leading-[0.9] text-white">
            The difference is everything.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="liquid-glass rounded-2xl p-8 flex flex-col items-start">
              <div className="liquid-glass-strong rounded-full w-12 h-12 flex items-center justify-center mb-6">
                {f.icon}
              </div>
              <h3 className="text-xl font-body font-medium text-white mb-3">{f.title}</h3>
              <p className="text-white/60 font-body font-light text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
