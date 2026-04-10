import { motion } from 'motion/react';
import { Server, Network, MonitorPlay, Headset } from 'lucide-react';

const services = [
  {
    icon: <Server className="w-10 h-10 text-[#D4AF37]" />,
    title: "Hardware Solutions",
    desc: "Enterprise-grade servers, workstations, and computing devices for robust performance."
  },
  {
    icon: <Network className="w-10 h-10 text-blue-400" />,
    title: "Networking & Infrastructure",
    desc: "Secure, scalable LAN/WAN setups and structured cabling for seamless connectivity."
  },
  {
    icon: <MonitorPlay className="w-10 h-10 text-[#D4AF37]" />,
    title: "SMART Solutions",
    desc: "Interactive displays, AV systems, and smart classroom setups for modern institutions."
  },
  {
    icon: <Headset className="w-10 h-10 text-blue-400" />,
    title: "IT Consulting",
    desc: "Strategic guidance and support to optimize your IT infrastructure and operations."
  }
];

export default function Services() {
  return (
    <section className="py-24 relative z-10" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-rubik font-bold mb-4 uppercase tracking-tight">Core <span className="text-[#D4AF37]">Expertise</span></h2>
          <p className="text-slate-400 font-sans max-w-2xl mx-auto">Delivering end-to-end IT infrastructure solutions tailored for enterprise and institutional excellence.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02, zIndex: 10 }}
              className="advanced-glass p-8 rounded-xl hover:border-[#D4AF37]/50 transition-colors group cursor-pointer transform-style-3d"
            >
              <div className="w-16 h-16 rounded-lg bg-[#0A192F] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)] translate-z-12">
                {service.icon}
              </div>
              <h3 className="text-xl font-rubik font-bold mb-3 text-white group-hover:text-[#D4AF37] transition-colors">{service.title}</h3>
              <p className="text-sm font-sans text-slate-400 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
