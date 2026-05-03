import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-fixed bg-cover bg-center transition-transform duration-1000"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000')",
            filter: "brightness(0.4)"
          }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start text-left space-y-8"
          >
            <h2 className="text-[14px] uppercase tracking-[0.5em] text-gold font-medium">
              Exclusividad & Diseño
            </h2>
            <h1 className="font-serif text-6xl leading-[0.9] text-white md:text-9xl">
              <span className="block font-light italic">Encuentra el</span>
              <span className="block font-bold uppercase tracking-tighter">Espacio de</span>
              <span className="block font-light italic text-gold">tus Sueños.</span>
            </h1>
            <p className="max-w-md font-sans text-lg font-light leading-relaxed text-gray-400">
              Curaduría de propiedades de alto nivel en las zonas más exclusivas. Elegancia en cada detalle.
            </p>
            <div className="pt-8 mb-4">
              <Link
                to="/propiedades"
                className="group relative inline-flex items-center space-x-4 border border-gold px-12 py-5 tracking-[0.3em] font-serif italic text-xl text-gold transition-all hover:bg-gold hover:text-black"
              >
                <span>Ver Catálogo</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-10 left-10 hidden xl:block">
          <div className="flex items-center space-x-4 text-white/20">
            <span className="font-serif italic">01</span>
            <div className="h-[1px] w-20 bg-white/20" />
            <span className="text-[10px] tracking-widest uppercase">Tradición & Lujo</span>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-black py-24 text-white overflow-hidden">
        <div className="container grid grid-cols-1 gap-20 items-center md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden border border-white/5 bg-gray-900 shadow-2xl">
               <img 
                src="https://images.unsplash.com/photo-1600607687940-4e524cb35a5a?auto=format&fit=crop&q=80&w=1000" 
                alt="Luxury Interior" 
                className="h-full w-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 hidden bg-coffee-dark p-10 md:block">
               <Star className="h-8 w-8 text-gold" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h3 className="font-serif text-5xl leading-[1.1] md:text-7xl flex flex-col">
              <span className="text-[14px] uppercase tracking-[0.4em] text-gold font-sans font-medium mb-6">nuestra filosofía</span>
              <span className="font-light italic">Buscamos la</span>
              <span className="font-bold uppercase tracking-tighter">perfección en</span>
              <span className="font-light italic text-gold">cada detalle.</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed font-light max-w-lg">
              No somos simplemente una agencia inmobiliaria; somos curadores de espacios. Entendemos que su hogar es una extensión de su identidad.
            </p>
            <div className="grid grid-cols-2 gap-12 py-10 border-y border-white/5">
              <div>
                <span className="block font-serif text-5xl text-gold italic mb-2">15+</span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-gray-500 font-medium">Años de experiencia</span>
              </div>
              <div>
                <span className="block font-serif text-5xl text-gold italic mb-2">300+</span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-gray-500 font-medium">Propiedades vendidas</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Properties Preview */}
      <section className="bg-editorial-black py-32">
        <div className="container">
          <div className="mb-24 text-center">
            <h4 className="text-[12px] uppercase tracking-[0.5em] text-gold font-medium mb-4">Inmuebles Destacados</h4>
            <h2 className="font-serif text-5xl font-bold uppercase tracking-widest text-white md:text-8xl">Colección Selecta</h2>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
             <FeaturedCard 
                title="Villa Serenity" 
                location="Costa Brava, España"
                price="€4,200,000"
                img="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000"
                delay={0}
                className="lg:h-[650px] bg-[#1a1a1a]"
             />
             <FeaturedCard 
                title="Loft Industrial" 
                location="Soho, Nueva York"
                price="$2,850,000"
                img="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1000"
                delay={0.2}
                className="lg:h-[550px] lg:translate-y-20 bg-coffee-dark"
             />
             <FeaturedCard 
                title="Penthouse Vista" 
                location="Dubai Marina, EAU"
                price="$5,100,000"
                img="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000"
                delay={0.4}
                className="lg:h-[600px] bg-[#1a1a1a]"
             />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeaturedCard({ title, location, price, img, delay, className }: { title: string, location: string, price: string, img: string, delay: number, className: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={`group relative overflow-hidden p-1 shadow-2xl transition-transform hover:scale-[1.02] ${className}`}
    >
      <div className="relative h-full w-full overflow-hidden">
        <img 
          src={img} 
          alt={title} 
          className="h-full w-full object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0 opacity-40 hover:opacity-100"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-10 flex flex-col justify-end">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-medium mb-2">{location}</span>
          <h3 className="font-serif italic text-3xl text-white mb-6 transform transition-transform group-hover:-translate-y-2">{title}</h3>
          <div className="flex justify-between items-end border-t border-white/10 pt-6">
            <span className="text-xl font-bold tracking-tight text-white uppercase">{price}</span>
            <span className="text-[10px] border-b border-gold pb-1 tracking-[0.3em] uppercase text-gold hover:text-white transition-colors cursor-pointer">DETALLES</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
