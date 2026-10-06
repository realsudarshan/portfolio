"use client"
import React from 'react';
import AboutBox from '../../components/aboutbox';
import Link from 'next/link';
import { FaXTwitter, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa6';

const About = () => {
    return (
        <section className="flex flex-col gap-10 py-12 px-4 max-w-5xl mx-auto w-full">
            {/* Header Section */}
            <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-8">
                <div className="flex-1 space-y-5">
                    <div>
                        <p className="text-sm font-semibold text-blue-500 dark:text-blue-400 uppercase tracking-widest mb-2">नमस्ते 🙏🏻 — Hello!</p>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            I'm Sudarshan Dhakal
                        </h2>
                        <p className="mt-2 text-lg text-slate-500 dark:text-slate-400 font-medium">
                            Full-stack &amp; AI Engineer from Nepal 🇳🇵
                        </p>
                    </div>

                    <a href="https://sudarshandhakal.com.np" className="inline-block">
                        <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=18&pause=1200&color=46A2F1&vCenter=true&width=400&lines=Full-stack+Web+%26+Mobile+Dev;AI+Engineer+building+agents" alt="Typing SVG" className="max-w-full" />
                    </a>

                    <div className="grid grid-cols-2 gap-3 max-w-sm">
                        <a
                            href="https://x.com/realsudarsan"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-neutral-800 transition-colors shadow-sm"
                        >
                            <FaXTwitter className="w-4 h-4" />
                            @realsudarsan
                        </a>
                        <a
                            href="https://www.linkedin.com/in/sudarsan-dhakal-5b4522284"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0077B5] text-white text-sm font-medium hover:bg-[#005f91] transition-colors shadow-sm"
                        >
                            <FaLinkedin className="w-4 h-4" />
                            Sudarshan Dhakal
                        </a>
                        <a
                            href="http://discord.com/users/1519599755972317374"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5865F2] text-white text-sm font-medium hover:bg-[#4752c4] transition-colors shadow-sm"
                        >
                            <FaDiscord className="w-4 h-4" />
                            Discord
                        </a>
                        <a
                            href="https://github.com/realsudarshan"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 text-white text-sm font-medium hover:bg-slate-700 transition-colors shadow-sm dark:bg-slate-700 dark:hover:bg-slate-600"
                        >
                            <FaGithub className="w-4 h-4" />
                            Follow on GitHub
                        </a>
                    </div>
                </div>

                <div className="flex-shrink-0">
                    <img
                        src="/sudarshan.jpg"
                        alt="Sudarshan Dhakal, Full-stack and AI Engineer from Nepal"
                        className="rounded-full w-[200px] h-[200px] md:w-[260px] md:h-[260px] object-cover shadow-lg border-4 border-slate-100 dark:border-slate-800"
                    />
                </div>
            </div>

            <hr className="border-slate-200 dark:border-slate-800" />

            {/* A little more about me... */}
            <div className="space-y-6">
                <h3 className="text-2xl font-bold">About me</h3>

                <p className="text-base text-slate-500 dark:text-slate-400 font-medium italic">
                    A full-stack &amp; AI engineer building software that ships
                </p>

                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    I turn ideas into products people actually use, and I enjoy every step of the journey: the scrappy first prototype, the moment the flow finally clicks, and the hardening that makes it ready for the real world.
                </p>

                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    I care about software that is <strong>useful, fast, and a little memorable</strong>: clean architecture under the hood, a considered interface on top. My daily toolkit is <strong>Next.js, TypeScript, tRPC, Prisma/Drizzle, Postgres/MongoDB, MERN, Eve, Django, FastAPI etc</strong>, and I'm increasingly building <strong>AI agents</strong> while pushing into <strong>Rust, Go and blockchain</strong>.
                </p>

                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2">🚀 Building right now</h4>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                            <span>🌆</span>
                            <div>
                                <a href="https://github.com/realsudarshan/realestategear" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline"><strong>Realestate-gear</strong></a>: open-source, self-hostable real estate operating platform powered by Next.js, Express, and PostgreSQL. It combines an AI-driven agent CRM and transaction workspace with a custom-branded public portal for listing discovery and inquiry management.
                            </div>
                        </li>
                        <li className="flex items-start gap-2">
                            <span>💬</span>
                            <div>
                                <strong>EasyChat Support</strong>: an AI-powered customer support platform for businesses in Nepal, built as production-grade software
                            </div>
                        </li>
                        <li className="flex items-start gap-2">
                            <span>🌿</span>
                            <div>
                                <strong>Ojas</strong>: a second production-grade product, currently in active development
                            </div>
                        </li>
                        <li className="flex items-start gap-2">
                            <span>🗂️</span>
                            <div>
                                <strong>Everything else</strong>: case studies and other projects live in my portfolio at <a href="https://sudarshandhakal.com.np" className="text-blue-600 dark:text-blue-400 hover:underline">sudarshandhakal.com.np</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <hr className="border-slate-200 dark:border-slate-800" />

            {/* AI, the engineering way */}
            <div className="space-y-6">
                <h3 className="text-2xl font-bold">🤖 AI, the engineering way</h3>
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    I treat AI agents like any other production system: they need structure, limits and care.
                </p>
                <ul className="space-y-3">
                    <li className="flex items-start gap-2"><span>🧠</span><div><strong>Memory</strong>: designing short- and long-term context so agents stay relevant and consistent across conversations</div></li>
                    <li className="flex items-start gap-2"><span>🛡️</span><div><strong>Guardrails</strong>: validating inputs and outputs, and constraining what an agent can say and do</div></li>
                    <li className="flex items-start gap-2"><span>🔐</span><div><strong>Security</strong>: least-privilege tool access, protected secrets, and defenses against prompt injection</div></li>
                    <li className="flex items-start gap-2"><span>🚀</span><div><strong>Deployment</strong>: shipping agents to production and keeping them reliable</div></li>
                </ul>
            </div>

            {/* What I build & Learning */}
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold">✨ What I build</h3>
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                        <table className="w-full text-left">
                            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                                <tr><td className="p-4 align-top w-1/3">🌐 <strong>Full-stack products</strong></td><td className="p-4">SaaS platforms, dashboards, admin panels, auth-protected apps</td></tr>
                                <tr><td className="p-4 align-top">🤖 <strong>AI agents & automation</strong></td><td className="p-4">Customer-support agents, LLM-powered assistants, workflow automations</td></tr>
                                <tr><td className="p-4 align-top">📈 <strong>Data & market tools</strong></td><td className="p-4">Screeners, leaderboards, real-time dashboards</td></tr>
                                <tr><td className="p-4 align-top">🎨 <strong>Interfaces</strong></td><td className="p-4">Responsive, polished UIs with intentional visual design</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="space-y-6">
                    <h3 className="text-2xl font-bold">🌱 Currently learning</h3>
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                        <table className="w-full text-left">
                            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                                <tr><td className="p-4 align-top w-1/3">🦀 <strong>Rust</strong></td><td className="p-4">Systems programming and high-performance backends</td></tr>
                                <tr><td className="p-4 align-top">🐹 <strong>Go</strong></td><td className="p-4">Fast, simple, concurrent services</td></tr>
                                <tr><td className="p-4 align-top">⛓️ <strong>Blockchain</strong></td><td className="p-4">Smart contracts with Solidity and Solana / Anchor</td></tr>
                                <tr><td className="p-4 align-top">🏗️ <strong>Real estate development</strong></td><td className="p-4">Understanding property development and investment</td></tr>
                                <tr><td className="p-4 align-top">💭 <strong>Jev</strong></td><td className="p-4">skips token-by-token generation for instant decisions for AI</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <hr className="border-slate-200 dark:border-slate-800" />

            {/* How I build */}
            <div className="space-y-6">
                <h3 className="text-2xl font-bold">🧭 How I build</h3>
                <ol className="list-decimal list-inside space-y-3 text-lg text-slate-700 dark:text-slate-300">
                    <li><strong>Start small, ship early</strong>: get a working slice in front of real use quickly</li>
                    <li><strong>Clarity first</strong>: an interface should explain itself</li>
                    <li><strong>Production habits from day one</strong>: auth, validation, error handling and secure defaults, not afterthoughts</li>
                    <li><strong>Test the flow before overbuilding</strong>: let real usage decide what deserves more polish</li>
                    <li><strong>Keep experimenting</strong>: side projects and prototypes are how I level up</li>
                    <li><strong>Share resources</strong>: Blogs, notes, skill.md files directly from my portfolio</li>
                </ol>
                <blockquote className="border-l-4 border-blue-500 pl-4 py-2 italic text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 rounded-r-lg">
                    I like software that feels crafted: the small details that turn a tool that works into one that's a pleasure to use.
                </blockquote>
            </div>

            <hr className="border-slate-200 dark:border-slate-800" />

            {/* Quick facts & Activity */}
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold">📌 Quick facts</h3>
                    <ul className="space-y-3 text-lg text-slate-700 dark:text-slate-300">
                        <li className="flex items-start gap-2"><span>🎓</span><div>Pursuing a <strong>B.E. in Computer Engineering</strong> at National College of Engineering</div></li>
                        <li className="flex items-start gap-2"><span>🤝</span><div>Open to collaborating on <strong>web app & AI projects</strong></div></li>
                        <li className="flex items-start gap-2"><span>📱</span><div>Interested in <strong>mobile development on React Native and Expo</strong></div></li>
                        <li className="flex items-start gap-2"><span>💬</span><div>Ask me about <strong>TypeScript, React, Next.js, Node.js and AI agents</strong></div></li>
                        <li className="flex items-start gap-2"><span>📫</span><div>Reach me on <strong>X or LinkedIn</strong> (badges above)</div></li>
                    </ul>
                </div>
                
                <div>
                    <div className="block hover:opacity-90 transition-opacity">
                        <img src="/sudarshan_speak.jpeg" alt="Sudarshan Speaking" className="w-full max-w-[652px] rounded-xl shadow-lg object-cover" />
                    </div>
                </div>
            </div>

            <hr className="border-slate-200 dark:border-slate-800" />

            {/* Tech Stack */}
            <div className="space-y-8">
                <h2 className="text-3xl font-bold">🛠️ Tech Stack</h2>
                
                <div className="space-y-4">
                    <h4 className="font-semibold text-lg text-slate-600 dark:text-slate-400">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                        <img src="https://skillicons.dev/icons?i=ts,c,py,rust,go,solidity" alt="Languages" className="h-12" />
                    </div>
                </div>

                <div className="space-y-4">
                    <h4 className="font-semibold text-lg text-slate-600 dark:text-slate-400">Web, Mobile and Data</h4>
                    <div className="flex flex-wrap items-center gap-3">
                        <img src="https://skillicons.dev/icons?i=nextjs,react,tailwind,laravel,express,django,fastapi,prisma,mongodb,postgres,redis,sqlite&perline=15" alt="Web, Mobile and Data" className="h-12" />
                        <a href="https://orm.drizzle.team" target="_blank" rel="noreferrer"><img src="https://cdn.simpleicons.org/drizzle" alt="Drizzle" className="w-12 h-12" /></a>
                        <a href="https://expo.dev" target="_blank" rel="noreferrer"><img src="https://cdn.simpleicons.org/expo/8b949e" alt="Expo" className="w-12 h-12" /></a>
                        <a href="https://heroui.com" target="_blank" rel="noreferrer"><img src="https://cdn.simpleicons.org/heroui/8b949e" alt="HeroUI" className="w-12 h-12" /></a>
                        <a href="https://tanstack.com" target="_blank" rel="noreferrer"><img src="https://cdn.simpleicons.org/tanstack" alt="TanStack" className="w-12 h-12" /></a>
                        <a href="https://www.revenuecat.com" target="_blank" rel="noreferrer"><img src="https://cdn.simpleicons.org/revenuecat" alt="RevenueCat" className="w-12 h-12" /></a>
                        <a href="https://stripe.com" target="_blank" rel="noreferrer"><img src="https://cdn.simpleicons.org/stripe" alt="Stripe" className="w-12 h-12" /></a>
                        <a href="https://convex.dev" target="_blank" rel="noreferrer"><img src="https://cdn.simpleicons.org/convex" alt="Convex" className="w-12 h-12" /></a>
                    </div>
                </div>

                <div className="space-y-4">
                    <h4 className="font-semibold text-lg text-slate-600 dark:text-slate-400">AI Engineering & Production Infrastructure</h4>
                    <div className="flex flex-wrap gap-2">
                        <a href="https://ai-sdk.dev" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Vercel_AI_SDK-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel AI SDK" /></a>
                        <a href="https://www.langchain.com" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/LangChain-1C3C3C?style=for-the-badge&logo=langchain&logoColor=14B8A6" alt="LangChain" /></a>
                        <a href="https://www.llamaindex.ai" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/LlamaIndex-000000?style=for-the-badge" alt="LlamaIndex" /></a>
                        <a href="https://github.com/mem0ai/mem0" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Mem0-1F2937?style=for-the-badge" alt="Mem0" /></a>
                        <a href="https://ollama.com" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Ollama-000000?style=for-the-badge&logo=ollama&logoColor=white" alt="Ollama" /></a>
                        <a href="https://qdrant.tech" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Qdrant-DC2626?style=for-the-badge&logo=qdrant&logoColor=white" alt="Qdrant" /></a>
                        <a href="https://langfuse.com" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Langfuse-000000?style=for-the-badge" alt="Langfuse" /></a>
                        <a href="https://github.com/NVIDIA/NeMo-Guardrails" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/NeMo_Guardrails-76B900?style=for-the-badge&logo=nvidia&logoColor=white" alt="NeMo Guardrails" /></a>
                    </div>
                </div>

                <div className="space-y-4">
                    <h4 className="font-semibold text-lg text-slate-600 dark:text-slate-400">Models and AI platforms</h4>
                    <div className="flex flex-wrap items-center gap-3">
                        <a href="https://www.anthropic.com" target="_blank" rel="noreferrer"><img src="https://cdn.simpleicons.org/anthropic/D97757" alt="Claude" className="w-10 h-10" /></a>
                        <a href="https://openai.com" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/openai.svg" alt="OpenAI" className="w-10 h-10 dark:invert" /></a>
                        <a href="https://deepmind.google/models/gemini/" target="_blank" rel="noreferrer"><img src="https://cdn.simpleicons.org/googlegemini" alt="Gemini" className="w-10 h-10" /></a>
                        <a href="https://github.com/deepseek-ai" target="_blank" rel="noreferrer"><img src="https://cdn.simpleicons.org/deepseek/4D6BFE" alt="DeepSeek" className="w-10 h-10" /></a>
                        <a href="https://github.com/QwenLM" target="_blank" rel="noreferrer"><img src="https://cdn.simpleicons.org/qwen/615CED" alt="Qwen" className="w-10 h-10" /></a>
                        <a href="https://github.com/THUDM/GLM-4" target="_blank" rel="noreferrer"><img src="https://cdn.simpleicons.org/zdotai/0052CC" alt="GLM" className="w-10 h-10" /></a>
                        <a href="https://ollama.com" target="_blank" rel="noreferrer"><img src="https://cdn.simpleicons.org/ollama/8b949e" alt="Ollama" className="w-10 h-10" /></a>
                        <a href="https://huggingface.co" target="_blank" rel="noreferrer"><img src="https://cdn.simpleicons.org/huggingface" alt="Hugging Face" className="w-10 h-10" /></a>
                        <a
                            href="https://opencode.ai"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
                            title="OpenCode"
                        >
                            <img src="https://opencode.ai/favicon.ico" alt="OpenCode" className="w-5 h-5" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; }} />
                            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">OpenCode</span>
                        </a>
                    </div>
                </div>

                <div className="space-y-4">
                    <h4 className="font-semibold text-lg text-slate-600 dark:text-slate-400">DevOps, Cloud & Observability</h4>
                    <div className="flex flex-wrap gap-2">
                        <a href="https://www.docker.com" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" /></a>
                        <a href="https://kubernetes.io" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white" alt="Kubernetes" /></a>
                        <a href="https://cloud.google.com" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white" alt="Google Cloud" /></a>
                        <a href="https://github.com/features/actions" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white" alt="GitHub Actions" /></a>
                        <a href="https://www.terraform.io" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Terraform-844FBA?style=for-the-badge&logo=terraform&logoColor=white" alt="Terraform" /></a>
                        <a href="https://www.cloudflare.com" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white" alt="Cloudflare" /></a>
                        <a href="https://grafana.com" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Grafana-F46800?style=for-the-badge&logo=grafana&logoColor=white" alt="Grafana" /></a>
                        <a href="https://prometheus.io" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=prometheus&logoColor=white" alt="Prometheus" /></a>
                        <a href="https://posthog.com" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/PostHog-F54E00?style=for-the-badge&logo=posthog&logoColor=white" alt="PostHog" /></a>
                        <a href="https://sentry.io" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Sentry-362D59?style=for-the-badge&logo=sentry&logoColor=white" alt="Sentry" /></a>
                    </div>
                </div>
            </div>

            {/* AboutBox Stats Section */}
            <div className="w-full mt-16">
                <AboutBox />
            </div>
        </section>
    );
}

export default About;