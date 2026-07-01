import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { Eye, X, Calendar, Camera, User, Clipboard } from 'lucide-react';

const PROJECTS_DATA: Project[] = [
  {
    id: 'p1',
    title: 'Corona / Sunset Session',
    category: 'Comercial',
    thumbnailUrl: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0227e369146db3124ec7088a33ed93e&profile_id=165&oauth2_token_id=57447761',
    description: 'Campaña de verano grabada en las costas naturales de Chile. Captura de luz de atardecer, retratos orgánicos y tomas con drones de alta estabilidad para realzar la frescura icónica de la marca.',
    client: 'Cerveza Corona @cerveza_corona',
    role: 'Director de Fotografía | Dir. @christian_copaja',
    year: '2024',
    camera: 'RED Komodo 6K | Lentes Cooke s4/i'
  },
  {
    id: 'p2',
    title: 'Arcor / Dulce Rutina',
    category: 'Comercial',
    thumbnailUrl: 'https://images.unsplash.com/photo-1511385348-a52b4a160dc2?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://player.vimeo.com/external/403737525.sd.mp4?s=b61aa18eb4a682f939f50e8fbe54d0087799015c&profile_id=165&oauth2_token_id=57447761',
    description: 'Campaña lúdica y colorida para Arcor Chile en conjunto con We Are Machete. El rodaje combinó movimientos fluidos sobre rieles y cortes sumamente dinámicos para evocar alegría en cada bocado.',
    client: 'Arcor Chile @arcor_chile',
    role: 'Realización de Cámara & Editor | Dir. @nicomaynetto - @wearemachete',
    year: '2025',
    camera: 'Arri Alexa Mini LF | Lentes Zeiss Super Speed'
  },
  {
    id: 'p3',
    title: 'CCU / Logística de Vanguardia',
    category: 'Comercial',
    thumbnailUrl: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://player.vimeo.com/external/510850877.sd.mp4?s=ebd04fe39046c8297b819f706dd65ef50f498c09&profile_id=165&oauth2_token_id=57447761',
    description: 'Spot comercial corporativo de gran formato para CCU y Schkolnick. Filmado íntegramente en locaciones de manufactura y distribución nacional con esquemas avanzados de iluminación led.',
    client: 'CCU @ccu',
    role: 'Operador de Estabilizador & Edición | Dir. @christian_copaja & @schkolnick',
    year: '2024',
    camera: 'RED V-Raptor 8K | Zoom Angenieux Optimo'
  },
  {
    id: 'p4',
    title: 'UNO AFP / Futuro Luminoso',
    category: 'Comercial',
    thumbnailUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://player.vimeo.com/external/431189437.sd.mp4?s=0fcb9c8a005086d88c2cd708d7dbda48074d28f8&profile_id=165&oauth2_token_id=57447761',
    description: 'Producción digital fresca y cercana para AFP UNO en colaboración con Fruta Studio. Estilo de cine documental con luz ultra suave centrada en retratar la naturalidad del usuario moderno.',
    client: 'AFP UNO @unoafp',
    role: 'Dirección de Fotografía | Dir. @nayjimenez - @fruta.studio',
    year: '2025',
    camera: 'Sony FX6 | Lentes Leica R Duclos Vintage'
  },
  {
    id: 'p5',
    title: 'Metro de Santiago / Flujo Urbano',
    category: 'Comercial',
    thumbnailUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0227e369146db3124ec7088a33ed93e&profile_id=165&oauth2_token_id=57447761',
    description: 'Spot comercial celebrando la conectividad urbana de Santiago de Chile. Capturas a ras de andén, time-lapses coordinados y movimientos de grúa cinemáticos.',
    client: 'Metro de Santiago @metrodesantiago',
    role: 'Cámara Secundaria & Colorista | Dir. @stanleyfilmsilimitada',
    year: '2024',
    camera: 'Arri Alexa Mini | Lentes Sigma Cine Prime'
  },
  {
    id: 'p6',
    title: 'WeareMakakoo / Expresión Rítmica',
    category: 'Videoclip',
    thumbnailUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://player.vimeo.com/external/403737525.sd.mp4?s=b61aa18eb4a682f939f50e8fbe54d0087799015c&profile_id=165&oauth2_token_id=57447761',
    description: 'Producción musical vanguardista, con un look oscuro de neón y destellos anamórficos. Cortes instantáneos a compás y retratos de gran profundidad dramática.',
    client: 'WeareMakakoo',
    role: 'Dirección de Fotografía & Editor | Dir. @manuelasph',
    year: '2025',
    camera: 'RED Komodo-X | Lentes Canon FD Vintage'
  },
  {
    id: 'p7',
    title: 'Probiplus / Bienestar Diario',
    category: 'Comercial',
    thumbnailUrl: 'https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://player.vimeo.com/external/510850877.sd.mp4?s=ebd04fe39046c8297b819f706dd65ef50f498c09&profile_id=165&oauth2_token_id=57447761',
    description: 'Campaña publicitaria enfocada en la vida saludable e inmunológica de Probiplus. Rodado en ambientes residenciales con luz totalmente natural para enfatizar pureza.',
    client: 'Probiplus Chile @probiplus',
    role: 'Operador de Cámara & Stabilizer | Dir. Stanley Films',
    year: '2024',
    camera: 'Sony FX3 | Lentes Sony G-Master'
  },
  {
    id: 'p8',
    title: 'Ripley / Tendencias Temporada',
    category: 'Comercial',
    thumbnailUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://player.vimeo.com/external/431189437.sd.mp4?s=0fcb9c8a005086d88c2cd708d7dbda48074d28f8&profile_id=165&oauth2_token_id=57447761',
    description: 'Spot comercial de vestuario y alta moda filmado en exteriores santiaguinos con un ritmo ágil de videoclip pop. Destaca por transiciones dinámicas aceleradas.',
    client: 'Ripley Chile @ripleychile',
    role: 'Cámara de Acción & Editor | Dir. @boaldgroup',
    year: '2025',
    camera: 'Arri Alexa Mini LF | Lentes Kowa Anamorphic'
  },
  {
    id: 'p9',
    title: 'Fantasilandia / Adrenalina Total',
    category: 'Comercial',
    thumbnailUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0227e369146db3124ec7088a33ed93e&profile_id=165&oauth2_token_id=57447761',
    description: 'Campaña publicitaria de alta adrenalina en el parque de atracciones de Chile. Captura de gestos, reacciones de velocidad extrema y tomas con drones acrobáticos FPV.',
    client: 'Fantasilandia @fantasilandia.oficial',
    role: 'Director de Cámara Segunda Unidad & FPV | Dir. Stanley Films (2nd Unit)',
    year: '2024',
    camera: 'Sony FX3 & GoPro Hero 12 Creator'
  },
  {
    id: 'p10',
    title: 'Chocapic / Momentos Crujientes',
    category: 'Comercial',
    thumbnailUrl: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://player.vimeo.com/external/403737525.sd.mp4?s=b61aa18eb4a682f939f50e8fbe54d0087799015c&profile_id=165&oauth2_token_id=57447761',
    description: 'Producción familiar premium en alianza integrada con la agencia Somos DW. Movimientos de alta precisión milimétrica combinando elementos prácticos y efectos 3D.',
    client: 'Nestlé Chocapic @chocapicchile',
    role: 'Cámara Principal & Edición | @somosdw - Dir. Nico Maynetto',
    year: '2025',
    camera: 'RED V-Raptor | Lentes Cooke s4/i'
  },
  {
    id: 'p11',
    title: 'Ahumada / Cuidado Humano',
    category: 'Comercial',
    thumbnailUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://player.vimeo.com/external/510850877.sd.mp4?s=ebd04fe39046c8297b819f706dd65ef50f498c09&profile_id=165&oauth2_token_id=57447761',
    description: 'Comercial televisivo enfocado en la empatía y la salud familiar. Esquema elegante de luces difusas en locación interior recreando hogares chilenos.',
    client: 'Farmacias Ahumada @ahumada',
    role: 'Director de Fotografía | Dir. Nico Maynetto',
    year: '2024',
    camera: 'Arri Alexa Mini | Lentes Zeiss Ultra Prime'
  },
  {
    id: 'p12',
    title: 'Mallplaza / Punto de Encuentro',
    category: 'Comercial',
    thumbnailUrl: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://player.vimeo.com/external/431189437.sd.mp4?s=0fcb9c8a005086d88c2cd708d7dbda48074d28f8&profile_id=165&oauth2_token_id=57447761',
    description: 'Gran spot nacional para Mallplaza en conjunto con la agencia Republik. La pieza retrató experiencias de gastronomía, recreación y moda de manera fluida y magnética.',
    client: 'Mallplaza Chile @mallplazacl',
    role: 'Realizador de Video & Operador Ronin | Dir. @noliprovoste - @republik__',
    year: '2025',
    camera: 'Sony FX6 | Lentes DZOFilm Vespid Prime'
  },
  {
    id: 'p13',
    title: 'Banco Santander / Progreso',
    category: 'Comercial',
    thumbnailUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0227e369146db3124ec7088a33ed93e&profile_id=165&oauth2_token_id=57447761',
    description: 'Spot cinematográfico corporativo e institucional para Banco Santander Chile. Tomas aéreas, retratos corporativos de alta costura y un look cinematográfico cálido y aspiracional.',
    client: 'Santander Chile @santanderchile',
    role: 'Director de Fotografía & Editor | Dir @goya_ziegele',
    year: '2025',
    camera: 'Arri Alexa Mini LF | Lentes Cooke S7/i'
  }
];

type FilterType = 'Todos' | 'Comercial' | 'Videoclip';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('Todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs: FilterType[] = ['Todos', 'Comercial', 'Videoclip'];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === 'Todos') return true;
    return project.category === activeFilter;
  });

  return (
    <section id="portafolio" className="py-24 md:py-32 bg-zinc-50 relative border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-display font-semibold text-3xl sm:text-5xl text-zinc-950 tracking-tight leading-none">
            Proyectos destacados
          </h2>
          <p className="text-zinc-500 text-sm mt-4 max-w-md">
            Comerciales y videoclips realizados para marcas chilenas.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-16">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer border ${
                activeFilter === tab
                  ? 'bg-zinc-950 text-white border-zinc-950'
                  : 'bg-white text-zinc-600 border-zinc-200 hover:text-zinc-950 hover:border-zinc-300'
              }`}
            >
              {tab === 'Todos' ? 'Todos los trabajos' : tab === 'Comercial' ? 'Comerciales' : 'Videoclips'}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl overflow-hidden bg-white border border-zinc-200 hover:border-zinc-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image container */}
                <div className="aspect-[16/10] overflow-hidden relative bg-zinc-100">
                  <img
                    src={project.thumbnailUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transform duration-700 ease-out group-hover:scale-104 group-hover:brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Play icon scale bounce on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-zinc-950 shadow-xl scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Eye className="w-4 h-4" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                {/* Info Container */}
                <div className="p-6 bg-white">
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-100 text-zinc-600">
                      {project.category}
                    </span>
                    <span className="text-xs text-zinc-400">{project.year}</span>
                  </div>
                  <h3 className="font-display font-semibold text-base text-zinc-900 group-hover:text-zinc-950 transition-colors duration-200 tracking-tight leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-zinc-500 text-sm font-normal mt-2 leading-relaxed">
                    {project.description.slice(0, 105)}...
                  </p>

                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-zinc-100 text-xs text-zinc-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                    {project.client.split(' ')[0]} &mdash; ver créditos
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-md overflow-y-auto"
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.97, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.97, y: 15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl rounded-2xl overflow-hidden bg-white border border-zinc-200 shadow-2xl my-8 flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/80 text-white hover:bg-black/60 transition-all border border-white/15 cursor-pointer"
              >
                <X className="w-5 h-5" strokeWidth={1.5} />
              </button>

              {/* Video Player */}
              <div className="relative aspect-[16/9] w-full bg-black">
                <video
                  src={selectedProject.videoUrl}
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  playsInline
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Project Meta Info */}
              <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-zinc-200 bg-white">
                {/* Text Description */}
                <div className="md:col-span-2 flex flex-col gap-4 text-zinc-900">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-zinc-100 text-zinc-700 text-xs font-medium rounded-full">
                      {selectedProject.category}
                    </span>
                    <span className="text-xs text-zinc-400">{selectedProject.year}</span>
                  </div>

                  <h3 className="font-display font-semibold text-xl sm:text-2xl text-zinc-950 tracking-tight">
                    {selectedProject.title}
                  </h3>

                  <p className="text-zinc-600 text-sm leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Specs list */}
                <div className="space-y-4 p-5 rounded-2xl bg-zinc-50 border border-zinc-200 h-fit text-sm text-zinc-900">
                  <div className="text-xs font-medium text-zinc-500 border-b border-zinc-200 pb-2">
                    Ficha técnica y créditos
                  </div>

                  <div className="flex items-start gap-2.5">
                    <User className="w-4 h-4 text-zinc-400 mt-0.5" strokeWidth={1.5} />
                    <div>
                      <div className="text-zinc-400 text-xs">Cliente</div>
                      <div className="text-zinc-950 mt-0.5 font-medium">{selectedProject.client}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Clipboard className="w-4 h-4 text-zinc-400 mt-0.5" strokeWidth={1.5} />
                    <div>
                      <div className="text-zinc-400 text-xs">Crédito / rol</div>
                      <div className="text-zinc-950 mt-0.5 font-medium">{selectedProject.role}</div>
                    </div>
                  </div>

                  {selectedProject.camera && (
                    <div className="flex items-start gap-2.5">
                      <Camera className="w-4 h-4 text-zinc-400 mt-0.5" strokeWidth={1.5} />
                      <div>
                        <div className="text-zinc-400 text-xs">Formato / cámara</div>
                        <div className="text-zinc-950 mt-0.5 font-medium">{selectedProject.camera}</div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-2.5">
                    <Calendar className="w-4 h-4 text-zinc-400 mt-0.5" strokeWidth={1.5} />
                    <div>
                      <div className="text-zinc-400 text-xs">Rodaje</div>
                      <div className="text-zinc-950 mt-0.5 font-medium">{selectedProject.year}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
