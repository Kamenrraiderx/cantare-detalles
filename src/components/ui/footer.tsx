import Link from 'next/link'
import {  Instagram, Mail, Phone, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-100 to-purple-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">CANTARE detalles</h2>
            <p className="text-sm">Creamos recuerdos mágicos con flores, globos, dulces, cerámicas y más.</p>
            <div className="flex space-x-4">
              {
                /*
                  <Link target="_blank"  href="https://facebook.com/cantaredetalles" className="text-primary hover:text-primary/80">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </Link>
                */
              }
              <Link target="_blank" href="https://www.instagram.com/cantaredetalles/" className="text-primary hover:text-primary/80">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contáctanos</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-primary" />
                <span>+504 9218-9653</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-primary" />
                <a href="mailto:info@cantaredetalles.com" className="hover:underline">info@cantaredetalles.com</a>
              </li>
              {
                /*
                  <li className="flex items-center">
                <MapPin size={18} className="mr-2 text-primary" />
                <span>Calle Mágica 123, Ciudad Encantada</span>
              </li>
                */
              }
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Nuestros Servicios</h3>
            <ul className="space-y-2">
              <li>Arreglos Florales</li>
              <li>Decoración con Globos</li>
              <li>Dulces Personalizados</li>
              <li>Cerámicas Artesanales</li>
              <li>Regalos Únicos</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-300 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} CANTARE detalles. Todos los derechos reservados.
          </p>
          <div className="mt-2 flex justify-center items-center text-sm">
            <Heart size={16} className="text-red-500 mr-1" />
            <span>Hecho con amor para momentos especiales</span>
          </div>
        </div>
      </div>
    </footer>
  )
}