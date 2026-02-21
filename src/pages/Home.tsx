import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Leaf, Heart, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-stone-900 text-stone-50 px-6 py-20">
        <div className="absolute inset-0 overflow-hidden opacity-30">
           <img 
            src="https://picsum.photos/seed/architecture/1920/1080?blur=2" 
            alt="Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Minimizamos el impacto ambiental, <br />
            <span className="text-emerald-400 italic">maximizamos el confort.</span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto mb-10 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Arquitectura sostenible y saludable. Integramos criterios de sostenibilidad ambiental y salud en tus proyectos.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link 
              to="/contacto" 
              className="inline-flex items-center gap-2 bg-emerald-800 text-white px-8 py-4 rounded-full hover:bg-emerald-700 transition-all transform hover:scale-105"
            >
              Contactar
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-sm font-sans font-bold tracking-widest text-emerald-800 uppercase mb-4">
              Nuestra Filosofía
            </motion.h2>
            <motion.h3 variants={fadeInUp} className="text-4xl md:text-5xl font-serif text-stone-900 mb-6 leading-tight">
              Espacios que respiran, <br />personas que viven mejor.
            </motion.h3>
            <motion.p variants={fadeInUp} className="text-stone-600 mb-6 text-lg leading-relaxed">
              Generamos valor a través de la incorporación de criterios y soluciones que convierten el espacio construido en entornos saludables.
            </motion.p>
            <motion.ul variants={fadeInUp} className="space-y-4 text-stone-700">
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-emerald-100 rounded-full text-emerald-800">
                  <Zap size={16} />
                </div>
                <span>Mejora del confort térmico, acústico y visual.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-emerald-100 rounded-full text-emerald-800">
                  <Leaf size={16} />
                </div>
                <span>Calidad del aire, agua y luz natural como nutrientes.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-emerald-100 rounded-full text-emerald-800">
                  <Heart size={16} />
                </div>
                <span>Biofilia: Integración del medio natural en el entorno construido.</span>
              </li>
            </motion.ul>
          </motion.div>
          <motion.div 
            className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://picsum.photos/seed/interior/800/1200" 
              alt="Interior saludable" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-emerald-800 uppercase mb-3">Servicios</h2>
            <h3 className="text-4xl font-serif text-stone-900">Expertos en Sostenibilidad</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <ShieldCheck size={32} />, 
                title: "Certificaciones", 
                desc: "BREEAM, LEED, WELL, VERDE, DGNB. Acreditamos la sostenibilidad de tu proyecto." 
              },
              { 
                icon: <Leaf size={32} />, 
                title: "Consultoría", 
                desc: "Asesoramiento integral para integrar criterios de salud y medioambiente desde el diseño." 
              },
              { 
                icon: <Zap size={32} />, 
                title: "Gestión de Proyectos", 
                desc: "Supervisión de obra y management para garantizar la implementación de estrategias." 
              },
              { 
                icon: <Heart size={32} />, 
                title: "Salud y Bienestar", 
                desc: "Estrategias de neuroarquitectura y biofilia para el bienestar de los usuarios." 
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-stone-200 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-emerald-800 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-serif font-semibold mb-3 text-stone-900">{service.title}</h4>
                <p className="text-stone-600 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/servicios" className="text-emerald-800 font-medium hover:underline underline-offset-4 inline-flex items-center gap-2">
              Ver todos los servicios <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-6 bg-stone-900 text-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-emerald-400 uppercase mb-3">Proyectos</h2>
              <h3 className="text-4xl font-serif text-white">Casos de Éxito</h3>
            </div>
            <Link to="/proyectos" className="hidden md:inline-flex items-center gap-2 text-stone-300 hover:text-white transition-colors">
              Ver portfolio <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div 
                key={item}
                className="group cursor-pointer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="aspect-[4/5] overflow-hidden rounded-lg mb-4">
                  <img 
                    src={`https://picsum.photos/seed/building${item}/600/800`} 
                    alt="Project" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-xl font-serif mb-1">Eco-Residencial {item}</h4>
                <p className="text-stone-400 text-sm">Certificación LEED Platinum</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 md:hidden text-center">
             <Link to="/proyectos" className="inline-flex items-center gap-2 text-stone-300 hover:text-white transition-colors">
              Ver portfolio <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-emerald-900 text-emerald-50 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">¿Listo para transformar tu proyecto?</h2>
          <p className="text-emerald-200 text-lg mb-10">
            Hablemos sobre cómo podemos integrar la sostenibilidad y la salud en tu próxima obra.
          </p>
          <Link 
            to="/contacto" 
            className="inline-block bg-white text-emerald-900 px-10 py-4 rounded-full font-medium hover:bg-emerald-50 transition-colors"
          >
            Contactar ahora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
