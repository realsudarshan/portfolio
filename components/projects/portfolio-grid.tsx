// 'use client';

// import { AnimatePresence, motion } from 'framer-motion';
// import { useState } from 'react';
// import { ProjectType, projects } from '../../data/project';
// import { ProjectDialog } from './project-dialog';

// export function PortfolioGrid() {
//     const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

//     return (
//         <>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
//                 {projects.map((project) => (
//                     <motion.div
//                         key={project.id}
//                         layoutId={`card-${project.id}`}
//                         onClick={() => setSelectedProject(project)}
//                         className="group relative aspect-square cursor-pointer overflow-hidden rounded-3xl bg-[#09090b] border border-white/5"
//                         whileHover={{ scale: 0.98 }}
//                         transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//                     >
//                         {/* Background Glow */}
//                         <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent blur-2xl" />

//                         {/* Content */}
//                         <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
//                             <motion.h3
//                                 layoutId={`title-${project.id}`}
//                                 className="text-4xl md:text-5xl font-bold tracking-tighter text-white/30 group-hover:text-white transition-colors duration-300 text-center"
//                             >
//                                 {project.title}
//                             </motion.h3>
//                             <motion.p
//                                 initial={{ opacity: 0, y: 10 }}
//                                 whileHover={{ opacity: 1, y: 0 }}
//                                 className="mt-2 text-sm text-zinc-400 font-mono opacity-0 transition-all duration-300"
//                             >
//                                 {project.tagline}
//                             </motion.p>
//                         </div>
//                     </motion.div>
//                 ))}
//             </div>

//             <AnimatePresence>
//                 {selectedProject && (
//                     <ProjectDialog
//                         project={selectedProject}
//                         onClose={() => setSelectedProject(null)}
//                     />
//                 )}
//             </AnimatePresence>
//         </>
//     );
// }
