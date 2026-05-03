import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contact() {
  return (
    <div className="min-h-screen bg-editorial-black pt-24 text-editorial-cream">
      {/* Intro Section */}
      <section className="py-32 border-b border-white/5 relative">
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
           <MapPin className="w-full h-full text-gold stroke-[0.5]" />
        </div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 gap-24 md:grid-cols-2"
          >
            <div className="space-y-6">
              <h2 className="text-[12px] uppercase tracking-[0.6em] text-gold font-medium">Atención Personalizada</h2>
              <h1 className="font-serif text-7xl font-bold leading-tight md:text-9xl tracking-tighter">
                <span className="block font-light italic text-white/40">Hablemos</span>
                <span className="block uppercase text-white -mt-4">en Privado</span>
              </h1>
            </div>
            <div className="flex flex-col justify-end pb-4">
              <p className="max-w-md text-lg font-light leading-relaxed text-gray-400 italic">
                Nuestro equipo de asesores está disponible para atender sus inquietudes con la discreción y el profesionalismo que usted merece.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map & Form Section */}
      <section className="py-32">
        <div className="container">
          <div className="grid grid-cols-1 gap-24 lg:grid-cols-12">
            
            {/* Form Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-4 space-y-16"
            >
              <div className="space-y-6">
                <h3 className="font-serif italic text-4xl text-white">Contáctanos</h3>
                <div className="h-[1px] w-24 bg-gold" />
              </div>

              <form className="space-y-10" id="contact-form">
                <div className="space-y-8">
                  <div className="space-y-2">
                    <input 
                      id="name" 
                      placeholder="Nombre Completo" 
                      className="w-full bg-transparent border-b border-white/20 py-3 text-sm focus:outline-none focus:border-gold transition-all placeholder:text-gray-500 placeholder:italic"
                    />
                  </div>
                  <div className="space-y-2">
                    <input 
                      id="email" 
                      type="email" 
                      placeholder="Correo Electrónico" 
                      className="w-full bg-transparent border-b border-white/20 py-3 text-sm focus:outline-none focus:border-gold transition-all placeholder:text-gray-500 placeholder:italic"
                    />
                  </div>
                  <div className="space-y-2">
                    <textarea 
                      id="message" 
                      placeholder="Tu Mensaje" 
                      rows={3}
                      className="w-full bg-transparent border-b border-white/20 py-3 text-sm focus:outline-none focus:border-gold transition-all placeholder:text-gray-500 placeholder:italic resize-none"
                    />
                  </div>
                </div>

                <button className="w-full bg-white text-black py-5 text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-gold transition-all italic">
                  <span>Enviar Consulta</span>
                </button>
              </form>
            </motion.div>

            {/* Content Mid */}
            <div className="lg:col-span-1 hidden lg:block border-x border-white/5" />

            {/* Map Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-16"
            >
              <div className="space-y-6">
                <h3 className="font-serif italic text-4xl text-white">Nuestra Sede</h3>
                <div className="h-[1px] w-24 bg-gold" />
              </div>

              <div className="relative aspect-video w-full overflow-hidden bg-gray-900 border border-white/5 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-1000 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000" 
                  alt="City Map Placeholder" 
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 bg-black/80 p-4 border-t border-white/10 flex justify-between items-center backdrop-blur-sm">
                   <span className="text-[10px] tracking-[0.3em] uppercase text-white/60">Abrir Mapa Interactivo</span>
                   <MapPin className="h-4 w-4 text-gold animate-bounce" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-12 md:grid-cols-2 pt-8">
                <div className="space-y-6">
                  <span className="text-[10px] uppercase tracking-[0.5em] text-gold font-medium block">Atención Telefónica</span>
                  <div className="space-y-2">
                    <p className="font-serif text-2xl font-bold italic">+34 900 123 456</p>
                    <p className="font-sans text-xs tracking-widest text-white/30 uppercase">Lunes a Viernes 09:00 - 20:00</p>
                  </div>
                </div>
                <div className="space-y-6">
                   <span className="text-[10px] uppercase tracking-[0.5em] text-gold font-medium block">Consultas por Email</span>
                  <div className="space-y-2">
                    <p className="font-serif text-2xl font-bold italic">info@elegancia.com</p>
                    <p className="font-sans text-xs tracking-widest text-white/30 uppercase">Respuesta en menos de 2h</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
      
      {/* Visual background image fix */}
      <div className="h-40 bg-black" />
    </div>
  );
}
