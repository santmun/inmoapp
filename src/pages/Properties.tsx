import { motion } from "motion/react";
import { Search, Filter, Home as HomeIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const PROPERTIES = [
  { id: 1, title: "Palacio de Mar", location: "Marbella, ES", price: "€8,500,000", type: "Villa", beds: 6, size: "1,200m²", img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1000" },
  { id: 2, title: "Sky Mansion", location: "New York, US", price: "$12,000,000", type: "Penthouse", beds: 4, size: "450m²", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1000" },
  { id: 3, title: "Refugio Alpino", location: "Megeve, FR", price: "€5,200,000", type: "Chalet", beds: 5, size: "380m²", img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1000" },
  { id: 4, title: "Hacienda Real", location: "Sotogrande, ES", price: "€3,900,000", type: "Residencial", beds: 8, size: "2,500m²", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1000" },
  { id: 5, title: "Cubo Moderno", location: "Miami, US", price: "$4,500,000", type: "Arquitectura", beds: 4, size: "600m²", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000" },
  { id: 6, title: "Torre de Cristal", location: "Tokyo, JP", price: "¥850,000,000", type: "Apartamento", beds: 3, size: "300m²", img: "https://images.unsplash.com/photo-1512918766775-d56aacc58556?auto=format&fit=crop&q=80&w=1000" },
];

export default function Properties() {
  return (
    <div className="min-h-screen bg-editorial-black pt-24 text-editorial-cream">
      {/* Header Section */}
      <section className="relative py-32 overflow-hidden border-b border-white/5">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center space-y-6"
          >
            <h2 className="text-[12px] uppercase tracking-[0.6em] text-gold font-medium">Portafolio Curado</h2>
            <h1 className="font-serif text-7xl font-bold leading-tight md:text-9xl tracking-tighter">
              <span className="block font-light italic">Propiedades</span>
              <span className="block uppercase text-white -mt-4">Exclusivas</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Filter / Search Bar */}
      <section className="sticky top-24 z-40 bg-editorial-black/95 backdrop-blur-md border-b border-white/5">
        <div className="container py-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1 group">
              <Search className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-gold" />
              <input 
                type="text" 
                placeholder="BUSCAR ESPACIO..." 
                className="w-full bg-transparent border-b border-white/10 px-10 py-2 text-[11px] tracking-[0.3em] uppercase focus:border-gold focus:outline-none transition-all placeholder:text-white/20"
                id="search-input"
              />
            </div>
            <div className="flex items-center space-x-10">
              <button className="group flex items-center space-x-3 text-[11px] tracking-[0.3em] uppercase hover:text-gold transition-colors">
                 <Filter className="h-3.5 w-3.5 text-gold" />
                 <span>Filtrar Resultados</span>
              </button>
              <div className="h-4 w-[1px] bg-white/10 hidden md:block" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-white/20 hidden md:block italic">06 Unidades Disponibles</span>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2">
            {PROPERTIES.map((prop, idx) => (
              <div key={prop.id} className={idx % 3 === 0 ? 'md:col-span-2' : ''}>
                <PropertyItem property={prop} index={idx} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function PropertyItem({ property, index }: { property: typeof PROPERTIES[0], index: number }) {
  // Creating a non-uniform layout by alternating aspects
  const isLarge = index % 3 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`group relative overflow-hidden bg-[#111] p-1 shadow-2xl transition-transform hover:scale-[1.01] ${isLarge ? 'aspect-video' : 'aspect-square'}`}
    >
      <div className="relative h-full w-full overflow-hidden">
        <img 
          src={property.img} 
          alt={property.title} 
          className="h-full w-full object-cover opacity-40 grayscale transition-all duration-1000 group-hover:opacity-80 group-hover:scale-105 group-hover:grayscale-0"
          referrerPolicy="no-referrer"
        />
        
        <div className="absolute inset-0 flex flex-col justify-between p-12 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
          <div className="flex justify-between items-start">
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold font-bold">
              {property.type}
            </span>
            <div className="flex flex-col items-end text-white/50 text-[10px] tracking-[0.4em] uppercase font-light italic">
              <span>{property.size}</span>
              <span>{property.beds} Dorms</span>
            </div>
          </div>

          <div className="space-y-6">
             <div>
                <h3 className="font-serif text-5xl font-bold uppercase tracking-tighter text-white">
                  {property.title}
                </h3>
                <p className="text-gold/60 text-[11px] tracking-[0.4em] uppercase mt-4 italic font-medium">
                  {property.location}
                </p>
             </div>
             
             <div className="flex items-center justify-between pt-8 border-t border-white/5 translate-y-4 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="font-serif text-3xl italic text-white/90">
                  {property.price}
                </span>
                <button className="border border-gold text-gold px-12 py-3 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-gold hover:text-black transition-all">
                  EXPLORAR
                </button>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
