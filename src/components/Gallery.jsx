import { motion } from 'framer-motion';
import { useState } from 'react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const categories = ['todos', 'realismo', 'blackwork', 'minimalista', 'retrato', 'tradicional'];

  // Imágenes extraídas de Instagram y subidas por el usuario
  const tattoos = [
    // Imágenes de Instagram
    { id: 1, category: 'blackwork', image: 'https://instagram.fhio2-1.fna.fbcdn.net/v/t51.2885-15/518251636_1280988463534110_2091732514869134285_n.jpg?stp=dst-jpg_e15_tt6&_nc_ht=instagram.fhio2-1.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2QFxXC9kTUYPWXszVTgY_RjVePZ5vkwVshGRzJ7qLbOe7n5XuRB4Kc-oYXZ_TIy6680tSFgeelMYhcMolFGFWel9&_nc_ohc=ZkWtVxAM1rkQ7kNvwGp0ye1&_nc_gid=7eTWlj-q_LGek7NVizTQYQ&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AffT8hJ6LV6XpiVioVtitG5_osapAmmi_bTAwzfpgPsk_A&oe=690AFFB0&_nc_sid=8b3546', title: 'Escorpión & Rosa' },
    { id: 2, category: 'blackwork', image: 'https://instagram.fhio2-2.fna.fbcdn.net/v/t15.5256-10/563264027_849115164446302_7028118517056030060_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_ht=instagram.fhio2-2.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QFxXC9kTUYPWXszVTgY_RjVePZ5vkwVshGRzJ7qLbOe7n5XuRB4Kc-oYXZ_TIy6680tSFgeelMYhcMolFGFWel9&_nc_ohc=4BU0bVBesLoQ7kNvwFUpNon&_nc_gid=7eTWlj-q_LGek7NVizTQYQ&edm=AOQ1c0wAAAAA&ccb=7-5&oh=00_Afff0aFDaJ7z2FLAYiod7OM97fg4NCnr67Wa9pwEyZog5g&oe=690B1CA4&_nc_sid=8b3546', title: 'Blackletter "999"' },
    { id: 3, category: 'retrato', image: 'https://instagram.fhio2-2.fna.fbcdn.net/v/t15.5256-10/541824348_783592530883111_2124545127769154181_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_ht=instagram.fhio2-2.fna.fbcdn.net&_nc_cat=107&_nc_oc=Q6cZ2QFxXC9kTUYPWXszVTgY_RjVePZ5vkwVshGRzJ7qLbOe7n5XuRB4Kc-oYXZ_TIy6680tSFgeelMYhcMolFGFWel9&_nc_ohc=8bLb6r81kDgQ7kNvwEhOdgE&_nc_gid=7eTWlj-q_LGek7NVizTQYQ&edm=AOQ1c0wAAAAA&ccb=7-5&oh=00_AfdTFA-cHS2P5zNY7_PvzCWpv9BbTXoVy5jvYhNdk-uYcA&oe=690B01E5&_nc_sid=8b3546', title: 'Retrato de Bebé' },
    { id: 4, category: 'realismo', image: 'https://instagram.fhio2-2.fna.fbcdn.net/v/t15.5256-10/510757929_1404116933966539_4655678501716832181_n.jpg?stp=dst-jpg_e15_p640x640_tt6&_nc_ht=instagram.fhio2-2.fna.fbcdn.net&_nc_cat=107&_nc_oc=Q6cZ2QFxXC9kTUYPWXszVTgY_RjVePZ5vkwVshGRzJ7qLbOe7n5XuRB4Kc-oYXZ_TIy6680tSFgeelMYhcMolFGFWel9&_nc_ohc=FeuvUB_e0PcQ7kNvwHyztYs&_nc_gid=7eTWlj-q_LGek7NVizTQYQ&edm=AOQ1c0wAAAAA&ccb=7-5&oh=00_Afea0yMxOMTjob44BbGioIbCwS9WQSERSBWIGHaPG62OeQ&oe=690AFA2E&_nc_sid=8b3546', title: 'Manos Orando Realista' },
    { id: 5, category: 'blackwork', image: 'https://instagram.fhio2-1.fna.fbcdn.net/v/t15.5256-10/539520744_1300765051462952_3413006541344121006_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_ht=instagram.fhio2-1.fna.fbcdn.net&_nc_cat=108&_nc_oc=Q6cZ2QFxXC9kTUYPWXszVTgY_RjVePZ5vkwVshGRzJ7qLbOe7n5XuRB4Kc-oYXZ_TIy6680tSFgeelMYhcMolFGFWel9&_nc_ohc=oqf00GTuidsQ7kNvwHgDT3P&_nc_gid=7eTWlj-q_LGek7NVizTQYQ&edm=AOQ1c0wAAAAA&ccb=7-5&oh=00_Aff74krgh5oLq1Q_EW3TWczUqLx0DtVyeeekIr3ziXNfbA&oe=690B257B&_nc_sid=8b3546', title: 'Corazón de Espinas' },
    { id: 6, category: 'minimalista', image: 'https://instagram.fhio2-2.fna.fbcdn.net/v/t51.2885-15/516907283_720696173910520_4679616284558031677_n.jpg?stp=dst-jpg_e15_tt6&_nc_ht=instagram.fhio2-2.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2QFxXC9kTUYPWXszVTgY_RjVePZ5vkwVshGRzJ7qLbOe7n5XuRB4Kc-oYXZ_TIy6680tSFgeelMYhcMolFGFWel9&_nc_ohc=ewsnAjoWJHEQ7kNvwFb-2sZ&_nc_gid=7eTWlj-q_LGek7NVizTQYQ&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_Afc3_VT0cfef2wQZOOuI5BCR3dzs4TDqLgUIzmlSYeMaQA&oe=690AF810&_nc_sid=8b3546', title: 'Robots de Pareja' },
    { id: 7, category: 'blackwork', image: 'https://instagram.fhio2-2.fna.fbcdn.net/v/t15.5256-10/510664946_1076301327714238_7979315946457560785_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_ht=instagram.fhio2-2.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QFxXC9kTUYPWXszVTgY_RjVePZ5vkwVshGRzJ7qLbOe7n5XuRB4Kc-oYXZ_TIy6680tSFgeelMYhcMolFGFWel9&_nc_ohc=HPbk5Pv1Bv4Q7kNvwFutyNW&_nc_gid=7eTWlj-q_LGek7NVizTQYQ&edm=AOQ1c0wAAAAA&ccb=7-5&oh=00_Afei1WDLakNj9B89Y3wlutBah2S34nMmejJHBXXwO2zJGA&oe=690AF62E&_nc_sid=8b3546', title: 'Dark Caricaturesco' },
    { id: 8, category: 'minimalista', image: 'https://instagram.fhio2-1.fna.fbcdn.net/v/t15.5256-10/563107989_24769307949393941_4582647336400340488_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_ht=instagram.fhio2-1.fna.fbcdn.net&_nc_cat=105&_nc_oc=Q6cZ2QFxXC9kTUYPWXszVTgY_RjVePZ5vkwVshGRzJ7qLbOe7n5XuRB4Kc-oYXZ_TIy6680tSFgeelMYhcMolFGFWel9&_nc_ohc=GFO7nFzMq_YQ7kNvwG2Vt9-&_nc_gid=7eTWlj-q_LGek7NVizTQYQ&edm=AOQ1c0wAAAAA&ccb=7-5&oh=00_AfctIKQHb67OO7rs-MClxnyyc1KciHTbUqxssaMo-PyTFQ&oe=690B1FEA&_nc_sid=8b3546', title: 'Virgo Fineline' },
    // Nuevas imágenes subidas por el usuario
    { id: 10, category: 'realismo', image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663200928162/ZHorNHudsVJITCam.jpg', title: 'Brújula Acuarela' },
    { id: 11, category: 'tradicional', image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663200928162/bPZJXeqcmpqHutkv.jpg', title: 'Rosas y Cruz' },
    { id: 12, category: 'tradicional', image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663200928162/jcMJjcGDeHhFUmHg.jpg', title: 'Rosa y Rosario' },
    { id: 13, category: 'minimalista', image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663200928162/RHUSzYHkqjFfNTUI.jpg', title: 'Best Buds' },
    { id: 14, category: 'retrato', image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663200928162/HQYPJvmAcDoYKjMA.jpg', title: 'Retrato de Pareja' },
    { id: 15, category: 'minimalista', image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663200928162/HPRBsDOzrhplPLEy.jpg', title: 'Diente de León' },
    { id: 16, category: 'realismo', image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663200928162/fWoeFQWLSdWgjklU.jpg', title: 'Chica Payaso y Rosa' },
    { id: 17, category: 'minimalista', image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663200928162/udVIpzlkmZqjFDsA.jpg', title: 'Robots de Pareja' },
    { id: 18, category: 'tradicional', image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663200928162/oKvQVTiSXjcarisN.jpg', title: 'Máscaras de Teatro' },
    { id: 19, category: 'realismo', image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663200928162/DokJlJhjgAZWPKnZ.jpg', title: 'Manga Completo' },
  ];

  const filteredTattoos = selectedCategory === 'todos'
    ? tattoos
    : tattoos.filter(tattoo => tattoo.category === selectedCategory);

  return (
    <section id="galeria" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Galería de Trabajos
        </motion.h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-white text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredTattoos.map((tattoo, index) => (
            <motion.div
              key={tattoo.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="tattoo-card group"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={tattoo.image}
                  alt={tattoo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">{tattoo.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
