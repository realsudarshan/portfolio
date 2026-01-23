"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Github,
  Globe,
  Smartphone,
  ExternalLink,
  Palette,
  Accessibility,
  Zap,
  Package,
  Code,
  Layers,
  Users,
  Clock,
  Lock,
  Share2,
  MessageSquare,
  Shield,
  BarChart3,
  Target,
  TrendingUp,
  Map,
  Bell,
  Box,
  Sparkles,
  Lightbulb,
  Move3d,
  Cpu,
  Film,
  Video,
  FileText,
  Timer,
  Key,
  GitBranch,
  History,
  Plug,
  Feather,
  Check,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ProjectType } from "@/data/project";

const iconMap: Record<string, LucideIcon> = {
  Palette,
  Accessibility,
  Zap,
  Package,
  Code,
  Layers,
  Users,
  Clock,
  Lock,
  Globe,
  Share2,
  MessageSquare,
  Shield,
  BarChart3,
  Target,
  TrendingUp,
  Map,
  Bell,
  Box,
  Sparkles,
  Lightbulb,
  Move3d,
  Cpu,
  Film,
  Video,
  FileText,
  Timer,
  Key,
  Smartphone,
  GitBranch,
  History,
  Plug,
  Feather,
  Check,
  Workflow,
};

interface ProjectDialogProps {
  project: ProjectType | null;
  isOpen: boolean;
  onClose: () => void;
}

const tabs = ["Info", "Builds", "Blogs", "Demo", "Gallery", "Journey"] as const;
type TabType = (typeof tabs)[number];

export function ProjectDialog({
  project,
  isOpen,
  onClose,
}: ProjectDialogProps) {
  const [activeTab, setActiveTab] = useState<TabType>("Info");

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Dialog */}
          <motion.div
            className="fixed inset-4 z-50 m-auto flex max-h-[90vh] max-w-4xl flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-2xl md:inset-8"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Header with gradient */}
            <div
              className={`relative flex items-center justify-between bg-gradient-to-r ${project.gradient} p-6`}
            >
              <div>
                <h2 className="text-2xl font-bold tracking-tighter text-primary-foreground md:text-3xl">
                  {project.title}
                </h2>
                <p className="mt-1 text-sm text-primary-foreground/80">
                  {project.tagline}
                </p>
              </div>
              <button
                onClick={onClose}
                className="rounded-full bg-primary-foreground/20 p-2 text-primary-foreground transition-colors hover:bg-primary-foreground/30"
                aria-label="Close dialog"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 overflow-x-auto border-b border-border bg-secondary/50 px-4 py-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-lg bg-accent"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {activeTab === "Info" && <InfoTab project={project} />}
                  {activeTab === "Builds" && <BuildsTab project={project} />}
                  {activeTab === "Blogs" && <BlogsTab project={project} />}
                  {activeTab === "Demo" && <DemoTab project={project} />}
                  {activeTab === "Gallery" && <GalleryTab project={project} />}
                  {activeTab === "Journey" && <JourneyTab project={project} />}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function InfoTab({ project }: { project: ProjectType }) {
  return (
    <div className="space-y-8">
      {/* Summary */}
      <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
        {project.summary}
      </p>

      {/* Features */}
      <div>
  <h4 className="mb-6 text-sm font-medium uppercase tracking-wider text-muted-foreground">
    Features
  </h4>
  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
    {project.features.map((feature) => {
      const Icon = iconMap[feature.icon] || Code;
      return (
        <div
          key={feature.label}
          className="group flex flex-col gap-5 rounded-3xl border border-border bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/60 p-7 shadow-xl transition-all hover:scale-[1.025] hover:shadow-2xl hover:border-blue-500/40 hover:bg-gradient-to-br hover:from-blue-900/80 hover:via-slate-900/80 hover:to-blue-800/60"
        >
          {/* Header Row: Icon and Title */}
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 via-blue-400 to-blue-700 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform">
              <Icon className="h-6 w-6 text-white drop-shadow" />
            </div>
            <h5 className="text-lg font-bold leading-tight text-white group-hover:text-blue-200 transition-colors">
              {feature.label.split(' - ')[0]} 
            </h5>
          </div>

          {/* Description Content */}
          <div className="text-[15px] leading-relaxed text-blue-100/90 group-hover:text-white transition-colors min-h-[48px]">
            {/* If your labels contain the full text, we render it here */}
            {feature.label.includes(' - ') 
              ? feature.label.split(' - ').slice(1).join(' - ') 
              : feature.label}
          </div>
        </div>
      );
    })}
  </div>
</div>
      {/* Tech Stack */}
      <div>
        <h4 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Tech Stack
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.techstack.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-border bg-secondary px-3 py-1.5 font-mono text-xs text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function BuildsTab({ project }: { project: ProjectType }) {
  const { build } = project;

  return (
    <div className="space-y-4">
      <h4 className="mb-6 text-sm font-medium uppercase tracking-wider text-muted-foreground">
        Available Builds
      </h4>
      <div className="grid gap-4 md:grid-cols-2">
        {build.Git && (
          <a
            href={build.Git}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-border bg-secondary/50 p-5 transition-all hover:border-foreground/30 hover:bg-secondary"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-foreground text-background">
              <Github className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h5 className="font-semibold text-foreground">Source Code</h5>
              <p className="text-sm text-muted-foreground">View on GitHub</p>
            </div>
            <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
          </a>
        )}
        {build.WebDemo && (
          <a
            href={build.WebDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-border bg-secondary/50 p-5 transition-all hover:border-foreground/30 hover:bg-secondary"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 text-primary-foreground">
              <Globe className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h5 className="font-semibold text-foreground">Web Demo</h5>
              <p className="text-sm text-muted-foreground">Try it live</p>
            </div>
            <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
          </a>
        )}
        {build.AndroidDemo && (
          <a
            href={build.AndroidDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-border bg-secondary/50 p-5 transition-all hover:border-foreground/30 hover:bg-secondary"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 text-primary-foreground">
              <Smartphone className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h5 className="font-semibold text-foreground">Android App</h5>
              <p className="text-sm text-muted-foreground">Get on Play Store</p>
            </div>
            <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
          </a>
        )}
      </div>
      {!build.Git && !build.WebDemo && !build.AndroidDemo && (
        <p className="text-center text-muted-foreground">
          No builds available yet.
        </p>
      )}
    </div>
  );
}

function BlogsTab({ project }: { project: ProjectType }) {
  return (
    <div className="space-y-4">
      <h4 className="mb-6 text-sm font-medium uppercase tracking-wider text-muted-foreground">
        Related Articles
      </h4>
      {project.blogs.length > 0 ? (
        <div className="space-y-3">
          {project.blogs.map((blog) => (
            <a
              key={blog.title}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-border bg-secondary/50 p-4 transition-all hover:border-foreground/30 hover:bg-secondary"
            >
              <span className="font-medium text-foreground">{blog.title}</span>
              <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
            </a>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">No blogs yet.</p>
      )}
    </div>
  );
}

function DemoTab({ project }: { project: ProjectType }) {
  const demoUrl = project.demoUrl || project.build.WebDemo;

  return (
    <div className="space-y-4">
      <h4 className="mb-6 text-sm font-medium uppercase tracking-wider text-muted-foreground">
        Live Demo
      </h4>
      {demoUrl ? (
        <div className="overflow-hidden rounded-2xl border border-border">
          <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-4 py-3">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
            </div>
            <span className="ml-2 text-xs text-muted-foreground">{demoUrl}</span>
          </div>
          <div className="aspect-video bg-secondary">
          <iframe
  src={demoUrl}
  className="h-full w-full"
  title={`${project.title} Demo`}

/>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-16">
          <Globe className="mb-4 h-12 w-12 text-muted-foreground/50" />
          <p className="text-muted-foreground">Demo coming soon</p>
        </div>
      )}
    </div>
  );
}

function GalleryTab({ project }: { project: ProjectType }) {
  return (
    <div className="space-y-4">
      <h4 className="mb-6 text-sm font-medium uppercase tracking-wider text-muted-foreground">
        Gallery
      </h4>
      {project.gallery.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2">
          {project.gallery.map((image, index) => (
            <div
              key={index}
              className="aspect-video overflow-hidden rounded-xl border border-border bg-secondary"
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`${project.title} screenshot ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">No images yet.</p>
      )}
    </div>
  );
}

function JourneyTab({ project }: { project: ProjectType }) {
  return (
    <div className="space-y-4">
      <h4 className="mb-6 text-sm font-medium uppercase tracking-wider text-muted-foreground">
        Development Journey
      </h4>
      <div className="relative space-y-8 pl-8">
        {/* Vertical line */}
        <div className="absolute left-3 top-2 h-[calc(100%-16px)] w-px bg-border" />

        {project.journey.map((item, index) => (
          <div key={item.milestone} className="relative">
            {/* Bullet point */}
            <div
              className={`absolute -left-5 top-1.5 h-4 w-4 rounded-full border-2 border-foreground bg-background`}
            />

            <div>
              <h5 className="mb-3 text-lg font-semibold text-foreground">
                {item.milestone}
              </h5>
              <ul className="space-y-2">
                {item.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}