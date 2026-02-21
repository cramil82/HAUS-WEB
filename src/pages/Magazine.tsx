import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, User } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: "El futuro de la arquitectura sostenible",
    excerpt: "Descubre cómo las nuevas tecnologías están revolucionando la construcción ecológica.",
    date: "20 Oct 2023",
    author: "Ana García",
    image: "https://picsum.photos/seed/blog1/800/600",
    category: "Tendencias"
  },
  {
    id: 2,
    title: "Beneficios de la certificación WELL",
    excerpt: "Analizamos cómo la certificación WELL impacta positivamente en la salud de los empleados.",
    date: "15 Oct 2023",
    author: "Carlos Ruiz",
    image: "https://picsum.photos/seed/blog2/800/600",
    category: "Salud"
  },
  {
    id: 3,
    title: "Materiales bioconstructivos: Una guía",
    excerpt: "Todo lo que necesitas saber sobre materiales naturales y su aplicación en obra nueva.",
    date: "10 Oct 2023",
    author: "Laura M.",
    image: "https://picsum.photos/seed/blog3/800/600",
    category: "Materiales"
  }
];

const Magazine = () => {
  return (
    <div className="bg-stone-50 min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-serif text-stone-900 mb-6">Magazine</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Noticias, tendencias y reflexiones sobre arquitectura sostenible y salud.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article 
              key={article.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-stone-100 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {article.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-stone-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    <span>{article.author}</span>
                  </div>
                </div>
                <h2 className="text-xl font-serif text-stone-900 mb-3 hover:text-emerald-700 transition-colors cursor-pointer">
                  {article.title}
                </h2>
                <p className="text-stone-600 text-sm leading-relaxed mb-6 flex-grow">
                  {article.excerpt}
                </p>
                <button className="text-emerald-800 font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all group self-start">
                  Leer más <ArrowRight size={16} className="group-hover:text-emerald-600" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Magazine;
