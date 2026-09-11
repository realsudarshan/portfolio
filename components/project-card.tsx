"use client";

import { motion } from "framer-motion";

import {
  Palette,
  Users,
  BarChart3,
  Box,
  Shield,
  GitBranch,
  ArrowUpRight,
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
      className="
        group
        relative
        flex
        h-full
        min-h-[24rem]
        w-full
        cursor-pointer
        flex-col
        overflow-hidden
        rounded-[1.75rem]
        border
        border-border/60
        bg-card
        shadow-sm
        transition-all
        duration-500
        hover:border-border
        hover:shadow-lg
      "
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.985 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
    >
      {/* Card-wide dynamic hover gradient glow */}
      <div
        className={`
          pointer-events-none
          absolute
          inset-0
          rounded-[1.75rem]
          bg-gradient-to-br
          ${project.gradient ?? "from-foreground/5 to-transparent"}
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-15
        `}
      />

      {/* Header */}
      <div className="relative z-10 p-5 pb-4 md:p-6 md:pb-4">
        <div className="flex items-start gap-3 md:gap-4">
          {/* Left: Icon */}
          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-2xl
              border
              border-border
              bg-background
              text-muted-foreground
              transition-all
              duration-500
              group-hover:text-foreground
            "
          >
            <Icon className="h-5 w-5" />
          </div>

          {/* Right: Title, Button & Full-width Description */}
          <div className="flex-1 min-w-0">
            {/* Top Row: Title and Button */}
            <div className="flex items-start justify-between gap-4">
              <h3
                className="
                  text-xl
                  font-bold
                  tracking-tight
                  text-foreground
                  md:text-2xl
                "
              >
                {project.title}
              </h3>

              {/* "more detail" Pill Button */}
              <div
                className="
                  flex
                  shrink-0
                  items-center
                  gap-1.5
                  rounded-full
                  border
                  border-border
                  bg-background/50
                  px-3
                  py-1.5
                  text-xs
                  font-medium
                  text-muted-foreground
                  transition-all
                  duration-500
                  group-hover:border-border
                  group-hover:bg-background
                  group-hover:text-foreground
                "
              >
                <span className="whitespace-nowrap">more detail</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </div>

            {/* Bottom Row: Description spanning full width of this container */}
            <p
              className="
                mt-2
                text-xs
                leading-relaxed
                text-muted-foreground
                md:text-sm
              "
            >
              {project.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* Thumbnail Container */}
      <div
        className="
          relative
          z-10
          mt-auto
          overflow-hidden
          border-t
          border-border/50
          bg-background/40
        "
      >
        {/* Dynamic gradient reveal behind the image on hover */}
        {project.gradient && (
          <div
            className={`
              pointer-events-none
              absolute
              inset-0
              z-0
              bg-gradient-to-tr
              ${project.gradient}
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-20
            `}
          />
        )}

        <div
          className="
            relative
            z-10
            h-[18rem]
            w-full
            overflow-hidden
          "
        >
          {project.projectCardThumbnail ? (
            <img
              src={project.projectCardThumbnail}
              alt={`${project.title} project preview`}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-contain
                p-2
                transition-transform
                duration-700
                ease-out
                group-hover:scale-[1.04]
              "
            />
          ) : (
            <div
              className={`
                flex
                h-full
                w-full
                items-center
                justify-center
                bg-gradient-to-br
                ${project.gradient ?? "from-slate-500 to-slate-800"}
                opacity-10
              `}
            >
              <Icon className="h-12 w-12 text-muted-foreground" />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}