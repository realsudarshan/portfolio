'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, motion } from 'framer-motion';
import {
    Code2,
    ExternalLink,
    GalleryVerticalEnd,
    Github,
    History,
    Info,
    Layers,
    Layout,
    Smartphone,
    X
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ProjectType } from '../../data/project';

// Tabs configuration
const TABS = [
    { id: 'info', label: 'Info', icon: Info },
    { id: 'builds', label: 'Builds', icon: Layers },
    { id: 'journey', label: 'Journey', icon: History },
    { id: 'gallery', label: 'Gallery', icon: GalleryVerticalEnd },
] as const;

type TabId = (typeof TABS)[number]['id'];

interface ProjectDialogProps {
    project: ProjectType;
    onClose: () => void;
}

export function ProjectDialog({ project, onClose }: ProjectDialogProps) {
    const [activeTab, setActiveTab] = useState<TabId>('info');

    // Close on escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return (
        <Dialog.Root open>
            <Dialog.Portal>
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    onClick={onClose}
                />

                {/* Dialog Content */}
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
                    <motion.div
                        layoutId={`card-${project.id}`}
                        className="w-full max-w-4xl h-[85vh] bg-[#09090b] rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col pointer-events-auto"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    >
                        {/* Header */}
                        <div className={`relative h-48 md:h-64 flex-shrink-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900`}>
                            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-soft-light"></div>

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors backdrop-blur-md z-10"
                            >
                                <X size={20} />
                            </button>

                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-[#09090b] to-transparent">
                                <motion.h2
                                    layoutId={`title-${project.id}`}
                                    className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-2"
                                >
                                    {project.title}
                                </motion.h2>
                                <p className="text-lg md:text-xl text-zinc-300 font-mono border-l-2 border-indigo-500 pl-4">
                                    {project.tagline}
                                </p>
                            </div>
                        </div>

                        {/* Tabs Navigation */}
                        <div className="flex overflow-x-auto border-b border-white/5 bg-black/20 px-6 hide-scrollbar flex-shrink-0">
                            {TABS.map((tab) => {
                                const Icon = tab.icon;
                                const isActive = activeTab === tab.id;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex items-center gap-2 px-4 py-4 text-sm font-medium transition-colors relative whitespace-nowrap ${isActive ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
                                            }`}
                                    >
                                        <Icon size={16} />
                                        {tab.label}
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500"
                                            />
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="h-full"
                                >
                                    {activeTab === 'info' && <InfoTab project={project} />}
                                    {activeTab === 'builds' && <BuildsTab project={project} />}
                                    {activeTab === 'journey' && <JourneyTab project={project} />}
                                    {activeTab === 'gallery' && <GalleryTab project={project} />}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </Dialog.Portal>
        </Dialog.Root>
    );
}

// --- Tab Components ---

function InfoTab({ project }: { project: ProjectType }) {
    return (
        <div className="space-y-8 max-w-3xl mx-auto">
            <div className="prose prose-invert prose-lg">
                <p className="text-zinc-300 leading-relaxed text-lg">{project.summary}</p>
            </div>

            <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Code2 className="text-indigo-500" /> Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                    {project.techstack.map((tech, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs md:text-sm text-zinc-300 font-mono hover:bg-white/10 transition-colors"
                        >
                            {tech.split(' - ')[0]}
                        </span>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Layout className="text-indigo-500" /> Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map((feature, i) => (
                        <div
                            key={i}
                            className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
                        >
                            <div className="flex items-start gap-3">
                                {/* We render a generic icon since dynamic icon loading is complex in client components without heavy libs */}
                                <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                                    <Code2 size={18} />
                                </div>
                                <div>
                                    <h4 className="font-medium text-white text-sm mb-1">{feature.label.split(' - ')[0]}</h4>
                                    <p className="text-xs text-zinc-400 leading-relaxed">{feature.label.split(' - ')[1] || feature.label}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {project.blogs && project.blogs.length > 0 && (
                <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <ExternalLink className="text-indigo-500" /> Technical Deep Dives
                    </h3>
                    <div className="flex flex-col gap-3">
                        {project.blogs.map((blog, i) => (
                            <Link key={i} href={blog.url} target="_blank" className="block group">
                                <div className="p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/5 hover:border-indigo-500/50 transition-all flex items-center justify-between">
                                    <span className="font-medium text-zinc-200 group-hover:text-indigo-300 transition-colors">{blog.title}</span>
                                    <ExternalLink size={16} className="text-zinc-500 group-hover:text-indigo-400" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

function BuildsTab({ project }: { project: ProjectType }) {
    if (!project.build) return <div className="text-center text-zinc-500 py-10">No public builds available for this project.</div>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {project.build.Git && (
                <a
                    href={project.build.Git}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-[1.02] transition-all group"
                >
                    <Github className="w-12 h-12 text-zinc-400 group-hover:text-white mb-4 transition-colors" />
                    <span className="text-lg font-bold text-white mb-1">Source Code</span>
                    <span className="text-sm text-zinc-500">View on GitHub</span>
                </a>
            )}
            {project.build.WebDemo && (
                <a
                    href={project.build.WebDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-8 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 hover:border-indigo-500/40 hover:scale-[1.02] transition-all group"
                >
                    <Layout className="w-12 h-12 text-indigo-400 group-hover:text-indigo-300 mb-4 transition-colors" />
                    <span className="text-lg font-bold text-white mb-1">Live Demo</span>
                    <span className="text-sm text-zinc-500">Launch Web App</span>
                </a>
            )}
            {project.build.AndroidDemo && (
                <a
                    href={project.build.AndroidDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-8 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 hover:border-emerald-500/40 hover:scale-[1.02] transition-all group"
                >
                    <Smartphone className="w-12 h-12 text-emerald-400 group-hover:text-emerald-300 mb-4 transition-colors" />
                    <span className="text-lg font-bold text-white mb-1">Android APK</span>
                    <span className="text-sm text-zinc-500">Download Build</span>
                </a>
            )}
        </div>
    );
}

function JourneyTab({ project }: { project: ProjectType }) {
    if (!project.journey || project.journey.length === 0) return <div className="text-center text-zinc-500 py-10">Journey details coming soon.</div>

    return (
        <div className="relative pl-8 border-l border-white/10 space-y-12 ml-4">
            {project.journey.map((milestone, i) => (
                <div key={i} className="relative">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#09090b] border-2 border-indigo-500 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-indigo-500" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4">{milestone.milestone}</h3>
                    <ul className="space-y-3">
                        {milestone.details.map((detail, j) => (
                            <li key={j} className="text-zinc-400 text-sm leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-zinc-700">
                                {detail}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

function GalleryTab({ project }: { project: ProjectType }) {
    if (!project.gallery || project.gallery.length === 0) return <div className="text-center text-zinc-500 py-10">Gallery images coming soon.</div>

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.gallery.map((item, i) => (
                <div key={i} className="group relative aspect-video bg-zinc-900 rounded-xl overflow-hidden border border-white/5">
                    {/* Placeholder for images since we only have descriptions in the data */}
                    <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                        <span className="text-zinc-500 text-sm">{item}</span>
                    </div>
                    {/* <Image src={...} ... /> would go here if we had actual URLs */}
                </div>
            ))}
        </div>
    );
}
