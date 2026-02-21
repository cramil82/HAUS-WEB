import React from 'react';
import { motion } from 'motion/react';
import { FileText, Download, ExternalLink } from 'lucide-react';

const resources = [
  {
    title: "Guía de Certificación BREEAM",
    type: "PDF",
    size: "2.4 MB",
    description: "Todo lo que necesitas saber sobre el proceso de certificación BREEAM para edificios nuevos."
  },
  {
    title: "Catálogo de Materiales Saludables",
    type: "PDF",
    size: "5.1 MB",
    description: "Una selección de materiales libres de tóxicos para la construcción de espacios saludables."
  },
  {
    title: "Normativa de Eficiencia Energética 2024",
    type: "PDF",
    size: "1.8 MB",
    description: "Resumen de las últimas actualizaciones en la normativa europea de eficiencia energética."
  },
  {
    title: "Checklist de Sostenibilidad para Oficinas",
    type: "XLS",
    size: "0.5 MB",
    description: "Herramienta práctica para evaluar el nivel de sostenibilidad de tu espacio de trabajo."
  }
];

const Resources = () => {
  return (
    <div className="bg-stone-50 min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-serif text-stone-900 mb-6">Recursos</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Documentación, guías y herramientas para profesionales y clientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm border border-stone-100 flex items-start gap-6 hover:border-emerald-200 transition-colors group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-stone-100 p-4 rounded-lg text-stone-500 group-hover:text-emerald-600 group-hover:bg-emerald-50 transition-colors">
                <FileText size={32} />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif text-stone-900">{resource.title}</h3>
                  <span className="text-xs font-mono text-stone-400 bg-stone-100 px-2 py-1 rounded uppercase">
                    {resource.type}
                  </span>
                </div>
                <p className="text-stone-600 text-sm mb-4 leading-relaxed">
                  {resource.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-100">
                  <span className="text-xs text-stone-400">{resource.size}</span>
                  <button className="text-emerald-800 font-medium text-sm flex items-center gap-2 hover:underline">
                    Descargar <Download size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
