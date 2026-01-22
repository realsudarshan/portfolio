"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "./project-card";
import { ProjectDialog } from "./project-dialog";
import { projects } from "@/data/project";
import type { ProjectType } from "@/data/project";

export function PortfolioGrid() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleProjectClick = (project: ProjectType) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <ProjectCard
              project={project}
              onClick={() => handleProjectClick(project)}
            />
          </motion.div>
        ))}
      </div>

      <ProjectDialog
        project={selectedProject}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
      />
    </>
  );
}
