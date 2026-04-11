import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-24 bg-[#050B14] relative" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 italic tracking-tighter uppercase">Get in <span className="text-gradient-gold">Touch</span></h2>
            <p className="text-slate-400 mb-12">Ready to upgrade your IT infrastructure? Reach out to our experts for a consultation and quote.</p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full glass-panel-gold flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Phone</h4>
                  <p className="text-slate-400">+91 9837066344</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full glass-panel-gold flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email</h4>
                  <p className="text-slate-400">support@tinfotech.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full glass-panel-gold flex items-center justify-center text-[#D4AF37] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Address</h4>
                  <p className="text-slate-400">Agra, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Request a Quote</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">First Name</label>
                  <input type="text" className="w-full bg-[#0A192F]/50 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Last Name</label>
                  <input type="text" className="w-full bg-[#0A192F]/50 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email</label>
                <input type="email" className="w-full bg-[#0A192F]/50 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Requirement</label>
                <select className="w-full bg-[#0A192F]/50 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none">
                  <option>Hardware (Servers, Laptops, etc.)</option>
                  <option>Networking Setup</option>
                  <option>SMART Classroom</option>
                  <option>IT Consulting</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Message</label>
                <textarea rows={4} className="w-full bg-[#0A192F]/50 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"></textarea>
              </div>
              <button className="w-full py-4 bg-[#D4AF37] text-[#050B14] font-bold rounded hover:bg-[#F3E5AB] transition-colors flex items-center justify-center gap-2 mt-4">
                Send Request <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
