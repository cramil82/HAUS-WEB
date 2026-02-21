import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Eco-Residencial Bosque Verde",
    category: "Residencial",
    image: "https://picsum.photos/seed/arch1/800/600",
    tags: ["LEED Platinum", "Bioclimático"]
  },
  {
    id: 2,
    title: "Oficinas Centrales TechHub",
    category: "Corporativo",
    image: "https://picsum.photos/seed/arch2/800/600",
    tags: ["WELL Gold", "Smart Building"]
  },
  {
    id: 3,
    title: "Centro Educativo Futuro",
    category: "Educación",
    image: "https://picsum.photos/seed/arch3/800/600",
    tags: ["BREEAM Excellent", "Madera"]
  },
  {
    id: 4,
    title: "Clínica Salud Integral",
    category: "Sanitario",
    image: "https://picsum.photos/seed/arch4/800/600",
    tags: ["WELL Health-Safety", "Accesibilidad"]
  },
  {
    id: 5,
    title: "Hotel Boutique Costa",
    category: "Hospitality",
    image: "https://picsum.photos/seed/arch5/800/600",
    tags: ["Passivhaus", "Turismo Sostenible"]
  },
  {
    id: 6,
    title: "Rehabilitación Edificio Histórico",
    category: "Patrimonio",
    image: "https://picsum.photos/seed/arch6/800/600",
    tags: ["Eficiencia Energética", "Restauración"]
  }
];

const Projects = () => {
  return (
    <div className="bg-stone-50 min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-serif text-stone-900 mb-6">Proyectos Destacados</h1>
          <p className="text-xl text-stone-600 max-w-2xl">
            Una selección de obras donde la sostenibilidad y el diseño se encuentran para crear espacios excepcionales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="group cursor-pointer relative overflow-hidden rounded-xl bg-stone-200"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase mb-2">{project.category}</span>
                <h3 className="text-white text-2xl font-serif mb-2">{project.title}</h3>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="absolute top-6 right-6 bg-white text-stone-900 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
