import React from 'react';
import { motion } from 'motion/react';

const About = () => {
  return (
    <div className="bg-stone-50 min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-serif text-stone-900 mb-6">Sobre Nosotros</h1>
          <p className="text-xl text-stone-600 max-w-3xl">
            Somos un equipo apasionado por la arquitectura que cuida de las personas y del planeta.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-serif text-stone-800 mb-6">Nuestra Misión</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              En HAUS, creemos que la arquitectura tiene el poder de transformar vidas. Nuestra misión es integrar la sostenibilidad ambiental y la salud en cada proyecto, creando espacios que no solo minimizan su impacto en el entorno, sino que activamente mejoran el bienestar de quienes los habitan.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed">
              Trabajamos con rigor técnico y sensibilidad humana, combinando la innovación tecnológica con el respeto por la naturaleza.
            </p>
          </motion.div>
          <motion.div 
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://picsum.photos/seed/teamwork/800/1000" 
              alt="Equipo trabajando" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-serif text-stone-800 mb-12 text-center">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Ana García", role: "Directora Ejecutiva", img: "https://picsum.photos/seed/p1/400/400" },
              { name: "Carlos Ruiz", role: "Arquitecto Senior", img: "https://picsum.photos/seed/p2/400/400" },
              { name: "Laura M.", role: "Consultora LEED/WELL", img: "https://picsum.photos/seed/p3/400/400" },
              { name: "David S.", role: "Ingeniero Energético", img: "https://picsum.photos/seed/p4/400/400" }
            ].map((member, index) => (
              <motion.div 
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-stone-100 shadow-lg group-hover:border-emerald-100 transition-colors">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-serif text-stone-900">{member.name}</h3>
                <p className="text-emerald-700 font-medium text-sm uppercase tracking-wider mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
