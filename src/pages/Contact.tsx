import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-stone-50 min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-serif text-stone-900 mb-6">Contáctanos</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Estamos aquí para ayudarte a construir un futuro más sostenible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            className="space-y-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
              <h2 className="text-2xl font-serif text-stone-900 mb-8">Información de Contacto</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-50 p-3 rounded-full text-emerald-800">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-900">Email</h3>
                    <p className="text-stone-600">info@haushealthybuildings.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-50 p-3 rounded-full text-emerald-800">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-900">Teléfono</h3>
                    <p className="text-stone-600">+34 912 345 678</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-50 p-3 rounded-full text-emerald-800">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-900">Oficina</h3>
                    <p className="text-stone-600">Calle Sostenibilidad 123, Madrid, España</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-64 bg-stone-200 rounded-2xl overflow-hidden">
              {/* Placeholder map */}
              <div className="w-full h-full bg-stone-300 flex items-center justify-center text-stone-500">
                Mapa Interactivo (Google Maps)
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-stone-100"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-serif text-stone-900 mb-8">Envíanos un mensaje</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">Nombre</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" placeholder="Tu nombre" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" placeholder="tu@email.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-2">Asunto</label>
                <input type="text" id="subject" className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" placeholder="¿En qué podemos ayudarte?" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">Mensaje</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" placeholder="Cuéntanos sobre tu proyecto..."></textarea>
              </div>
              <button type="submit" className="w-full bg-emerald-800 text-white font-medium py-4 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2">
                Enviar Mensaje <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
