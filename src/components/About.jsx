import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { name: 'Realismo Básico', level: 95 },
    { name: 'Blackwork', level: 90 },
    { name: 'Neo-tradicional', level: 85 },
    { name: 'Minimalista', level: 88 },
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=600&h=600&fit=crop"
                alt="Baxto trabajando"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white text-black p-6 rounded-lg shadow-xl">
              <p className="text-4xl font-bold">10+</p>
              <p className="text-sm">Años de Experiencia</p>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre <span className="font-tattoo">Baxto</span>
            </h2>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
Especialista en Realismo básico, Blackwork Neo-tradicional y más. Mi pasión es transformar las ideas de mis clientes en obras de arte permanentes que cuentan historias únicas.
            </p>
            
            <p className="text-gray-400 mb-8 leading-relaxed">
Cada persona es única y puede convertir su historia en una obra de arte que se lleva en la piel. Trabajo con dedicación para asegurar que cada tatuaje sea una pieza única que supere las expectativas.
            </p>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Especialidades</h3>
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-white rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
