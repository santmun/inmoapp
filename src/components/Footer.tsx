import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-coffee-900/10 bg-black py-16 text-white">
      <div className="container grid grid-cols-1 gap-12 md:grid-cols-4">
        <div className="space-y-6">
          <Link to="/" className="font-serif text-3xl font-bold tracking-tighter">
            ELEGANCIA<span className="text-coffee-400">.</span>
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-white/50">
            Definiendo el estándar de lujo y exclusividad en el mercado inmobiliario desde 2010.
          </p>
          <div className="flex space-x-4">
            <Instagram className="h-5 w-5 cursor-pointer text-white/40 hover:text-white transition-colors" />
            <Facebook className="h-5 w-5 cursor-pointer text-white/40 hover:text-white transition-colors" />
            <Twitter className="h-5 w-5 cursor-pointer text-white/40 hover:text-white transition-colors" />
          </div>
        </div>

        <div>
          <h4 className="mb-6 font-serif text-lg font-medium">Navegación</h4>
          <ul className="space-y-4 text-sm text-white/50">
            <li>
              <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
            </li>
            <li>
              <Link to="/propiedades" className="hover:text-white transition-colors">Propiedades</Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:text-white transition-colors">Contacto</Link>
            </li>
            <li>
              <Link to="/nosotros" className="hover:text-white transition-colors">Nuestra Historia</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 font-serif text-lg font-medium">Servicios</h4>
          <ul className="space-y-4 text-sm text-white/50">
            <li>Venta Residencial</li>
            <li>Alquiler de Lujo</li>
            <li>Consultoría de Inversión</li>
            <li>Gestión de Propiedades</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 font-serif text-lg font-medium">Contacto</h4>
          <ul className="space-y-4 text-sm text-white/50">
            <li className="flex items-center space-x-3">
              <MapPin className="h-4 w-4 text-coffee-400" />
              <span>Av. Paseo de Gracia 12, Barcelona</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="h-4 w-4 text-coffee-400" />
              <span>+34 900 123 456</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="h-4 w-4 text-coffee-400" />
              <span>contacto@elegancia.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-16 border-t border-white/5 pt-8 text-center text-xs tracking-widest text-white/20 uppercase">
        © 2024 Elegancia Inmobiliaria. Todos los derechos reservados.
      </div>
    </footer>
  );
}
