import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const products = [
  { name: "Enterprise Servers", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800", colSpan: "md:col-span-2 lg:col-span-2" },
  { name: "Business Laptops", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800", colSpan: "md:col-span-1 lg:col-span-1" },
  { name: "Networking Devices", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800", colSpan: "md:col-span-1 lg:col-span-1" },
  { name: "Workstations", img: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&q=80&w=800", colSpan: "md:col-span-2 lg:col-span-2" },
];

export default function HardwareShowcase() {
  return (
    <section className="py-24 bg-[#050B14] relative overflow-hidden" id="hardware">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/5 via-[#050B14] to-[#050B14]"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Hardware <span className="text-gradient-gold uppercase tracking-tighter">Showcase</span></h2>
            <p className="text-slate-400 max-w-xl">Premium IT hardware from global leading brands to power your workforce.</p>
          </div>
          <button className="flex items-center gap-2 text-[#D4AF37] font-medium hover:text-[#F3E5AB] transition-colors group">
            View All Products <ArrowRight className="w-4 h-4 group-hover:translate-x-group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 perspective-1000">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ rotateX: 2, rotateY: -2, scale: 1.02 }}
              className={`relative h-80 rounded-2xl overflow-hidden group cursor-pointer transform-style-3d ${product.colSpan}`}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/50 to-transparent z-10"></div>
              <img src={product.img} alt={product.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              
              <div className="absolute bottom-0 left-0 p-8 z-20 translate-z-12">
                <h3 className="text-2xl font-display font-bold text-white mb-2">{product.name}</h3>
                <a href="#contact" className="inline-block px-4 py-2 glass-panel-gold text-xs font-bold uppercase tracking-wider text-[#D4AF37] rounded hover:bg-[#D4AF37] hover:text-[#050B14] transition-colors">
                  Request Quote
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
