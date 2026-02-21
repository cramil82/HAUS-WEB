import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Leaf, Zap, Scale, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <ShieldCheck className="w-12 h-12 text-emerald-800" />,
      title: "Sellos de Sostenibilidad",
      description: "Realizamos certificaciones BREEAM, DGNB, VERDE, WELL, LEED, SMART y WIRED SCORE para proyectos sostenibles y eficientes. Analizamos los ciclos de vida del edificio y proponemos las mejores soluciones para reducir su huella de carbono.",
      details: ["Certificación BREEAM", "Certificación LEED", "Certificación WELL", "Certificación VERDE", "Certificación DGNB"]
    },
    {
      icon: <Leaf className="w-12 h-12 text-emerald-800" />,
      title: "Consultoría y Asesoramiento",
      description: "Lideramos la gestión integral de proyectos de construcción y rehabilitación, garantizando la sostenibilidad, la salud y el cumplimiento normativo, coordinando cada etapa del proyecto para optimizar recursos y asegurar resultados a nuestros clientes.",
      details: ["Estrategias de Sostenibilidad", "Análisis de Ciclo de Vida", "Huella de Carbono", "Economía Circular"]
    },
    {
      icon: <Zap className="w-12 h-12 text-emerald-800" />,
      title: "Gestión de Proyectos",
      description: "Ofrecemos servicios de consultoría y asesoramiento para integrar criterios de sostenibilidad, salud y cumplimiento normativo en proyectos, acompañando a nuestros clientes en cada etapa del proceso, desde el análisis inicial hasta la implementación de soluciones personalizadas.",
      details: ["Project Management", "Construction Management", "Supervisión de Obra", "Control de Calidad"]
    },
    {
      icon: <Scale className="w-12 h-12 text-emerald-800" />,
      title: "Cumplimiento Normativo",
      description: "Ayudamos a nuestros clientes a garantizar el cumplimiento de normativas locales, nacionales y europeas, como la Taxonomía de la UE y los requisitos para fondos Next Generation.",
      details: ["Taxonomía UE", "Fondos Next Generation", "CTE", "Normativa Local"]
    }
  ];

  return (
    <div className="bg-stone-50 min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-serif text-stone-900 mb-6">Nuestros Servicios</h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Soluciones integrales para una arquitectura más sostenible, saludable y eficiente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-stone-100 flex flex-col md:flex-row gap-8 items-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="shrink-0 bg-emerald-50 p-6 rounded-xl">
                {service.icon}
              </div>
              <div className="flex-grow">
                <h2 className="text-3xl font-serif text-stone-900 mb-4">{service.title}</h2>
                <p className="text-stone-600 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-stone-700 font-medium">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center bg-stone-900 rounded-3xl p-12 text-stone-50">
          <h3 className="text-3xl font-serif mb-6">¿Necesitas una solución a medida?</h3>
          <p className="text-stone-400 mb-8 max-w-2xl mx-auto">
            Cada proyecto es único. Contáctanos para evaluar tus necesidades específicas y proponer la mejor estrategia.
          </p>
          <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-full transition-colors font-medium">
            Solicitar Presupuesto
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
