"use client";

import { motion } from "framer-motion";
import {
  Palette,
  Users,
  BarChart3,
  Box,
  Shield,
  GitBranch,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ProjectType } from "@/data/project";

const iconMap: Record<string, LucideIcon> = {
  aurora: Palette,
  nexus: Users,
  pulse: BarChart3,
  vertex: Box,
  cipher: Shield,
  flux: GitBranch,
};

interface ProjectCardProps {
  project: ProjectType;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const Icon = iconMap[project.id] || Box;

  return (
    <motion.div
      onClick={onClick}
      className="group relative flex aspect-square w-full cursor-pointer items-center justify-center overflow-hidden rounded-3xl border border-border/30 bg-card/50 transition-all duration-700 hover:border-border hover:bg-card"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {/* Gradient glow - Visible on mobile, hover-only on desktop */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-[0.08] md:opacity-0 transition-opacity duration-700 md:group-hover:opacity-[0.15]`}
      />

      {/* Animated gradient orb - Scaled down/hidden on mobile to keep it clean */}
      <div
        className={`absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br ${project.gradient} opacity-20 blur-3xl transition-all duration-700 md:opacity-0 md:group-hover:h-64 md:group-hover:w-64 md:group-hover:opacity-30`}
      />

      {/* Default state - HIDDEN ON MOBILE, visible on desktop until hover */}
      <div className="relative z-10 hidden md:flex flex-col items-center justify-center text-center transition-all duration-500 group-hover:opacity-0 group-hover:scale-90">
        <Icon className="h-10 w-10 text-muted-foreground/40 transition-colors duration-500 md:h-12 md:w-12" />
        <h3 className="mt-4 text-3xl font-bold tracking-tight text-foreground/20 md:text-4xl lg:text-5xl">
          {project.title}
        </h3>
      </div>

      {/* Info Content - ALWAYS VISIBLE ON MOBILE, hover revealed on desktop */}
      <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 opacity-100 transition-all duration-500 md:p-8 md:opacity-0 md:group-hover:opacity-100">
        {/* Top: Icon badge + Title */}
        <div>
          <div
            className={`mb-4 inline-flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${project.gradient} text-white shadow-lg`}
          >
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-bold tracking-tight text-foreground md:text-3xl">
            {project.title}
          </h3>
          <p className="mt-1 text-xs md:text-sm text-foreground/70">{project.tagline}</p>
        </div>

        {/* Bottom: Tech stack + CTA */}
        <div>
          <div className="mb-4 flex flex-wrap gap-1.5 md:gap-2">
            {project.techstack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-foreground/20 bg-foreground/5 px-2 py-0.5 md:px-3 md:py-1 font-mono text-[9px] md:text-[10px] uppercase tracking-wider text-foreground/60"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-[10px] md:text-xs font-medium text-foreground/50">
            <span>Tap to explore</span>
            <span className="inline-flex gap-0.5">
              <span className="h-1 w-1 animate-pulse rounded-full bg-foreground/50" />
              <span className="h-1 w-1 animate-pulse rounded-full bg-foreground/50 [animation-delay:150ms]" />
              <span className="h-1 w-1 animate-pulse rounded-full bg-foreground/50 [animation-delay:300ms]" />
            </span>
          </div>
        </div>
      </div>

      {/* Corner accent - Visible on mobile */}
      <div
        className={`absolute -bottom-px -right-px h-16 w-16 md:h-24 md:w-24 bg-gradient-to-tl ${project.gradient} opacity-10 md:opacity-0 transition-opacity duration-500 md:group-hover:opacity-20`}
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
      />
    </motion.div>
  );
}