import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const location = useLocation();

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/propiedades", label: "Propiedades" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/90 backdrop-blur-sm">
      <div className="container flex h-24 items-center justify-between">
        <Link to="/" className="group flex items-center space-x-3">
          <span className="font-serif text-3xl font-bold tracking-tighter text-gold">
            ELEGANCIA<span className="italic font-light text-white ml-2">Real Estate</span>
          </span>
        </Link>

        <div className="flex items-center space-x-12">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "relative text-[11px] font-medium tracking-[0.25em] uppercase transition-colors hover:text-gold",
                location.pathname === link.href ? "text-gold border-b border-gold pb-1" : "text-white/60"
              )}
            >
              {link.label}
            </Link>
          ))}
          <button className="border border-gold text-gold px-10 py-3 text-[11px] font-serif italic tracking-widest uppercase transition-all hover:bg-gold hover:text-black">
            CONTACTAR
          </button>
        </div>
      </div>
    </nav>
  );
}
