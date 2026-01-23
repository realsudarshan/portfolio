interface Build {
  Git: string | null
  WebDemo: string | null
  AndroidDemo: string | null
}

interface Journey {
  milestone: string
  details: string[]
}

export interface ProjectType {
  id: number
  title: string
  tagline: string
  summary: string
  techstack: string[]
  features: { icon: string; label: string }[];
  blogs: { title: string; url: string }[];
  build: Build
  demoUrl?: string
  journey: Journey[]
  gallery: string[]
  gradient?: string

}


export const projects: ProjectType[] = [
  {
    "id": 1,
    "title": "Dotly",
    "gradient": "from-purple-500 via-pink-500 to-red-500",
    "tagline": "AI powered journeling App",
    "summary": "Dotly is an AI-native journaling platform that transforms personal reflection through intelligent organization, therapeutic conversation, and behavioral psychology. Built with a Backend-as-a-Service philosophy, it delivers seamless cross-platform experiences across Web and Android while leveraging RAG pipelines and high-parameter language models to surface hidden patterns in users' thoughts. The app solves the journaling paradox: users want to write freely without manual organization, yet still need to find entries later. Through invisible AI auto-categorization, context-aware therapeutic chat, and psychologically-driven streak systems, Dotly achieved a 34% improvement in day-7 retention and doubled user engagement—all built by a solo developer in just 3 months.",
    "build": { "Git": "https://github.com/realsudarshan/Dotly", "WebDemo": "https://dotly--giu0n57p5w.expo.app/sign-in#/", "AndroidDemo": "https://expo.dev/accounts/sudarshandhakal/projects/dotly/builds/5e881795-92a5-4798-914e-f77c08ce80d9" },
    "techstack": [
      "React Native with Expo (Managed Workflow) - Cross-platform mobile development with zero native configuration",
      "Expo Router - File-based navigation system for intuitive app structure",
      "TypeScript (Strict Mode) - Zero-tolerance for 'any' types with end-to-end type safety",
      "Tamagui - Universal styling with atomic CSS compilation, zero runtime overhead, 40% faster renders",
      "Sanity.io Content Lake - Flexible schema database with real-time listeners for instant sync",
      "Clerk - Cross-platform authentication with RBAC, social login, and automatic JWT rotation",
      "Vercel AI SDK - Streaming responses with tool calling framework and optimistic UI updates",
      "OpenRouter (gpt-oss-120b) - High-parameter LLM for therapeutic conversations with RAG context",
      "Stripe - Subscription billing with App Store compliant deep-linking integration",
      "EAS (Expo Application Services) - Automated build pipelines and Over-The-Air updates",
      "Shopify FlashList - High-performance list rendering at 60fps with advanced recycling",
      "expo-haptics - Tactile feedback system (iOS light impact, Android 10ms pulse)",
      "Zod - Runtime schema validation for structured AI outputs",
      "GROQ - Sanity query language optimized from 3.2s to 240ms (13x improvement)",
      "expo-image - Image caching with Blurhash placeholders and lazy loading",
      "date-fns - Timezone-aware date calculations for streak logic",
      "Husky - Pre-commit hooks for TypeScript and ESLint validation"
    ],
    "features": [
      { "icon": "brain", "label": "AI Therapeutic Chat with RAG Pipeline - Context-aware conversational AI that streams responses token-by-token while dynamically retrieving relevant journal entries via custom tools. Uses Vercel AI SDK's useChat hook for optimistic UI, tool coordination, and transparent visualization showing 'Searching journal from [date] to [date]'. Achieved 41% trust score increase through transparency." },
      { "icon": "eye-off", "label": "Invisible AI Auto-Categorization - Silent background system that organizes entries without user intervention using a 4-step pipeline: context gathering → AI decision → Zod-validated structured output → Sanity execution. Prevents taxonomic explosion by analyzing content against existing categories while maintaining semantic consistency (e.g., prevents 'Work Stress' vs 'Job Anxiety' duplication)." },
      { "icon": "flame", "label": "Gamified Streak System with Behavioral Psychology - Sophisticated habit-tracking leveraging loss aversion psychology with client-side calculation, YYYY-MM-DD normalization for late-night writers, device local timezone to prevent travel-related breaks, grace period extending to end of 'yesterday', and milestone system at 7/14/30/60/100 days with badge unlocks and confetti animations. Achieved 34% improvement in day-7 retention." },
      { "icon": "layout", "label": "Universal Design System with Tamagui - Compiler-first styling generating atomic CSS for web and optimized StyleSheets for native. Custom token system with 12-shade blue color scale (reduces anxiety, promotes calm), automatic WCAG AA compliant light/dark mode, static style extraction at compile time with zero runtime overhead. Reduced initial render time by 40% and eliminated layout jank." },
      { "icon": "refresh-cw", "label": "Real-Time Cross-Platform Sync - Sanity.io's listener API provides instant data synchronization without polling or WebSockets. Edit on web → instant update on mobile, delete on mobile → instant removal on web. Generated TypeScript types from schemas prevent runtime crashes. GROQ optimization achieved 13x speedup through projections, ordering, and smart denormalization." },
      { "icon": "credit-card", "label": "Cross-Platform Pro Subscriptions - Stripe integration via deep-linking to comply with App Store policies while avoiding 30% Apple tax. Uses Clerk's declarative <Protect> component for RBAC. Web: pre-built <PricingTable /> with modal checkout. Native: deep-link to web → Stripe checkout → dotly:// redirect → automatic session sync for instant Pro unlock." },
      { "icon": "zap", "label": "High-Performance Feed Rendering - Shopify's FlashList maintains 60fps scrolling with hundreds of complex journal cards using advanced recycling algorithms. useMemo for expensive calculations, image optimization (resize on upload, lazy loading, expo-image caching, Blurhash placeholders), memory reduced from 200MB+ to <80MB, dynamic imports for AI chat (150KB bundle reduction, 1.2s faster time-to-interactive)." },
      { "icon": "mouse-pointer", "label": "Intelligent Tab Navigation with Haptics - Four-tab structure (Home, Entries, AI Chat, Profile) with floating '+' button positioned 20px above tab bar. expo-haptics provides tactile feedback (iOS light impact, Android 10ms pulse). Achieved 23% increase in entries/user/week and 78% of users describing app as 'more premium'." },
      { "icon": "bell", "label": "Push Notification Retention System - Timezone-aware daily reminders via Expo push service personalized to user's local time. 'Don't break your streak!' at 8 PM local time with deep-link to new entry screen. Achieved 47% open rate and 2.3x higher retention at day 30 for notification users." },
      { "icon": "cloud-upload", "label": "Over-The-Air Update Pipeline - Instant JavaScript bundle updates via EAS without Play Store review delays. GitHub Actions CI/CD triggers EAS Build on push to main, AAB to internal testing track, Vercel auto-deploy for web. eas update --branch production fixes critical bugs in hours vs days. Native code changes require full build (only 10% of bugs)." }
    ],
    "blogs": [{ "title": "Building Dotly: A Technical Deep Dive", "url": "https://www.sudarshandhakal.com.np/blog/making-of-dotly" }],
    "demoUrl": "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7419798476990922752?compact=1",
    "journey": [
      {
        "milestone": "Foundational Architecture & Type Safety",
        "details": [
          "Initialized Tamagui design system with custom blue color scale (blue1-blue12) optimized for therapeutic contexts based on color psychology research showing blue tones reduce anxiety",
          "Designed flexible Sanity.io schemas: Entry document (required: userId, content, date; optional: category, mood, privacy) and Category documents as separate entities with references for global metadata updates",
          "Implemented strict TypeScript configuration with zero-tolerance 'any' policy and sanity-codegen for automatic type generation from CMS schemas, catching 47 potential runtime errors during development",
          "Integrated Clerk for cross-platform OAuth (Google social login), session management with automatic JWT rotation and expiration handling, and seamless token validation across web and native platforms",
          "Established absolute import paths via TypeScript aliases (@/components/...) for refactor-friendly codebase that doesn't break when moving files",
          "Set up ESLint strict rules enforcing React hooks best practices, consistent code style, accessibility requirements, and Prettier auto-formatting on save with Husky pre-commit hooks"
        ]
      },
      {
        "milestone": "Data Layer & Performance Optimization",
        "details": [
          "Authored optimized GROQ queries using projections (fetch only needed fields), ordering, limits, and smart joins - achieved 13x speedup reducing query time from 3.2 seconds to 240ms",
          "Replaced React Native's standard FlatList with Shopify's FlashList for 60fps scrolling performance even with hundreds of complex journal entry cards through advanced recycling algorithms",
          "Developed Sanity real-time listener infrastructure for automatic refetching on mutations, enabling instant cross-device sync without polling, WebSockets, or manual refresh logic",
          "Engineered complete image optimization pipeline: client-side resize and compress on upload, lazy loading as user scrolls through feed, expo-image caching for instant re-renders, Blurhash placeholders for perceived instant loading",
          "Implemented strategic memoization with useMemo for expensive calculations like streak logic, ensuring recalculation only when dependency arrays change (new entries added) to prevent frame drops",
          "Reduced memory footprint from 200MB+ to under 80MB through aggressive optimization, preventing crashes on older devices with image-heavy journals",
          "Added dynamic imports for heavy features like AI chat, reducing initial bundle size by 150KB and improving time-to-interactive by 1.2 seconds for better perceived performance"
        ]
      },
      {
        "milestone": "AI Intelligence, Tools & RAG Pipeline",
        "details": [
          "Built custom getUserJournalEntries tool with GROQ backend for RAG context injection, fetching entries from past 2 weeks, limited to 20 results, ordered by date for chronological context",
          "Integrated Vercel AI SDK's useChat hook managing optimistic UI updates (messages appear instantly), streaming token rendering (words appear as generated), tool call coordination (pause → execute → resume), and error recovery with retry logic",
          "Developed auto-categorization API endpoint implementing 4-step pipeline: fetch all existing categories → send to AI (OpenRouter gpt-oss-120b) with structured prompt → Zod-validated output (existing category ID or new category object) → execute in Sanity",
          "Created intelligent streak calculation utilities with timezone normalization using YYYY-MM-DD strings to handle late-night writers (11:59 PM → 12:01 AM as separate days), device local timezone to prevent breaks during travel, grace period logic extending to end of 'yesterday', and retroactive entry handling affecting longest streak but not current streak",
          "Designed tool use visualization components showing real-time status like 'Searching your journal from Jan 8 to Jan 22...' with spinner animations for transparency and trust building",
          "Implemented streaming architecture eliminating perceived 10-second latency by rendering tokens as they arrive, pausing stream for tool calls, showing visualization, fetching data, then resuming stream for natural conversation flow",
          "Enabled queries like 'Why was I anxious last Tuesday?' with concrete answers by injecting relevant journal entries as context, transforming generic chatbot into personalized therapeutic companion"
        ]
      },
      {
        "milestone": "Gamification & Behavioral Psychology",
        "details": [
          "Engineered streak tracking system entirely client-side for instant feedback with zero server latency: fetch entry history metadata → normalize dates to YYYY-MM-DD → iterate backwards from today/yesterday → count consecutive days with entries",
          "Handled complex edge cases: late-night writers writing at 11:59 PM then 12:01 AM counting as separate calendar days, timezone travel using device local time vs UTC to prevent geography-based breaks, retroactive entries affecting longest streak calculation but not current streak to prevent cheating while rewarding completionism",
          "Designed milestone system at 7, 14, 30, 60, and 100 days triggering badge unlocks and celebration animations with confetti for pure dopamine hits at key psychological thresholds",
          "Created rich visual feedback system: animated fire icons for 7+ day streaks, large hero numbers showing current streak prominently, progress bars visualizing journey to next milestone, encouraging text like '3 days until 30-day badge' for motivation",
          "Implemented grace period extending to end of 'yesterday' for fairness - if you skip Monday but write on Tuesday, streak stays alive, reducing anxiety and making system feel compassionate rather than punitive",
          "Built timezone-aware push notification system: users grant permission on first launch → store timezone and preferred reminder time → scheduled job queries users without today's entry → send personalized 'Don't break your streak!' at 8 PM local time → deep-link to entry creation on tap",
          "Achieved measurable behavior change: 34% improvement in day-7 retention post-implementation, 47% open rate for notifications, 2.3x higher retention at day 30 for notification users vs non-notification users, user feedback confirming 'I write just to not break the streak'"
        ]
      },
      {
        "milestone": "Monetization & Access Control",
        "details": [
          "Integrated Clerk's declarative <Protect> component for role-based access control (RBAC): wrap protected content → specify required plan → provide fallback for non-subscribers → automatic enforcement without scattered if/else logic throughout codebase",
          "Implemented web Stripe checkout using Clerk's pre-built <PricingTable /> component handling entire flow: user clicks Subscribe → modal checkout → payment → Clerk webhook processing → session update → immediate feature unlock with zero reload required",
          "Developed native billing workaround for App Store policy compliance avoiding 30% IAP fee: user taps Upgrade → Linking.openURL to web app pricing page → Stripe web checkout → custom dotly:// URL scheme redirect back to app → Clerk session syncs automatically → Pro features unlock instantly",
          "Created conversion interface replacing AI Chat tab for free users with beautifully designed upgrade prompt explaining premium features, pricing, and benefits without feeling manipulative or aggressive",
          "Ensured security through strict enforcement: every API route checks userId in request body against authenticated session, rejects mismatched requests with 403 Forbidden, all Sanity queries scoped with userId == $userId filters for data isolation",
          "Built automated security testing attempting cross-user data access with valid but mismatched tokens - all attempts correctly failed, giving confidence in security model"
        ]
      },
      {
        "milestone": "Production Hardening & DevOps",
        "details": [
          "Configured EAS Build CI/CD pipelines: GitHub Actions trigger on push to main → parallel Android AAB and Web builds → AAB automatically uploaded to Google Play internal testing track → Vercel auto-deploy for web → QA validation on real devices → promotion to production track when validated",
          "Implemented Over-The-Air (OTA) update system for instant JavaScript fixes: eas update --branch production pushes new bundle → users download automatically on next launch → critical bugs fixed in hours vs days waiting for Play Store approval → 90% of bugs are JavaScript so OTA covers most cases",
          "Hardened security posture: migrated all sensitive API keys and credentials to managed environment variables and secure stores → Clerk session validation on all API routes → userId scoping on every Sanity query with explicit filters → built automated tests attempting unauthorized access",
          "Established quality gates: Husky pre-commit hooks running TypeScript strict mode checks and ESLint validation before allowing any commit → prevents broken code from entering repository → maintains 'zero any' policy enforcement",
          "Implemented bundle optimization strategy: dynamic imports for heavy features (AI chat 150KB), tree-shaking unused code, code splitting by route, analyzing bundle composition with expo-bundle-visualizer to identify bloat",
          "Set up monitoring and error tracking: integrated error boundary components catching React errors, logging to external service for production debugging, performance monitoring tracking time-to-interactive and render performance metrics",
          "Documented deployment runbook: local development → feature branch → PR review → merge to main → automated builds → internal testing → production promotion → monitoring → hotfix process via OTA if needed"
        ]
      },
      {
        "milestone": "User Experience Refinement",
        "details": [
          "Integrated expo-haptics for tactile feedback on every tab press creating physical weight to digital interactions: iOS uses light impact feedback, Android uses Vibrator API with 10ms pulse, subtle but transformative for premium feel",
          "Designed floating '+' button with absolute positioning 20px above tab bar breaking visual boundaries for prominence, making entry creation feel significant and intentional rather than buried in UI, achieved 23% increase in entries per user per week from this visual emphasis alone",
          "Implemented smooth theme transitions using Tamagui's theme system: automatic light/dark mode adaptation respecting device preference, WCAG AA contrast ratio compliance for accessibility, darker blue tones for night-time journaling based on color psychology, zero jarring flashes when switching",
          "Created comprehensive data export functionality for user privacy and data ownership: export all entries as JSON, export as Markdown for portability to other apps, scheduled automatic backups, clear communication about data control",
          "Built granular notification preference controls: customizable reminder times accounting for different schedules, timezone-aware scheduling, frequency options (daily, weekdays only, custom), enable/disable per notification type, preview feature showing when next notification will arrive",
          "Added accessibility features: semantic labels for screen readers, sufficient color contrast ratios, keyboard navigation support, focus indicators, text scaling support, testing with accessibility audit tools",
          "Achieved measurable UX improvements: 78% of users describing app as 'more premium' due to haptic feedback, 'app feels fast' rating increased from 6.2 to 8.7 out of 10, user testimonials praising 'feels real instead of just typing into a void'"
        ]
      }
    ],
    "gallery": [
      "https://media.licdn.com/dms/image/v2/D5622AQFIMub8gaSPaQ/feedshare-shrink_1280/B56ZvmG4jyHQAc-/0/1769092123076?e=1770854400&v=beta&t=cb54DgQDsxBXK1SylT_NdAR5Gwyg4r5kVe3Jv2Y3jBc",
      "https://media.licdn.com/dms/image/v2/D5622AQGARoS2QZSbLQ/feedshare-shrink_1280/B56ZvmG4JFIQAc-/0/1769092121357?e=1770854400&v=beta&t=yMtCnolBW7ZIuMAcDPiLk9ydjmwVphVvSen3VI-N-os",
      "https://media.licdn.com/dms/image/v2/D5622AQGpxgB8aeoJDA/feedshare-shrink_2048_1536/B56ZvmG4JhIsAk-/0/1769092121399?e=1770854400&v=beta&t=EzHAGW9fdxDosg9KsUEHTFxyOInBMy0IUZDaCLiTGMs",
      "https://media.licdn.com/dms/image/v2/D5622AQG8b7pOVS9l5Q/feedshare-shrink_2048_1536/B56ZvmG4PnHAA0-/0/1769092121861?e=1770854400&v=beta&t=r7HdTNX2GBpyTHZzhhn-5m06BXPjw8b6pY7_TeVwseQ",
      "https://media.licdn.com/dms/image/v2/D5622AQG2JK5-6PKZJg/feedshare-shrink_2048_1536/B56ZvmG4L.JUAk-/0/1769092121559?e=1770854400&v=beta&t=nj8TVn0bLcLI5qbEK-7q-y_qEUOHxaNGmykbLNbK8xw",
      "https://media.licdn.com/dms/image/v2/D5622AQFi7xb51lDLIA/feedshare-shrink_2048_1536/B56ZvmG4YxIUAk-/0/1769092122415?e=1770854400&v=beta&t=G0ounlLMGzb4P6Y7gKddDm-MoZ8lMJRj0_mVFAW5s44",
    ]
  },
  {
    "id": 2,
    "title": "Sarathi",
    "tagline": "Ride Hailing App",
    "gradient": "from-green-400 via-blue-500 to-purple-600",
    "summary": "Sarathi is a production-ready ride-hailing platform built entirely with the Expo ecosystem that connects riders with drivers for on-demand transportation. The app solves the complex challenge of coordinating real-time GPS data, managing location-based state across multiple screens, and integrating diverse third-party APIs while maintaining type safety and developer velocity. Built with a unified monorepo approach where frontend and backend live in one codebase, Sarathi demonstrates how modern tools can enable a solo developer to build feature-rich, scalable applications that rival industry leaders—all developed over 6 months with seamless cross-platform support for iOS and Android.",
    "build": { "Git": "https://github.com/realsudarshan/sarathi", "WebDemo": null, "AndroidDemo": "https://expo.dev/accounts/sudarshandhakal/projects/sarathi/builds/4a6063aa-46d4-49b1-adf5-2f62b5ad8421" },
    "techstack": [
      "React Native 0.76 with Expo 54 - Foundation providing native capabilities with JavaScript and zero native configuration",
      "Expo Router - File-based navigation system inspired by Next.js for intuitive mobile app structure",
      "TypeScript 5.3 - Comprehensive type safety with strict mode and zero-tolerance 'any' policy across entire codebase",
      "NativeWind - Tailwind CSS for React Native enabling rapid UI development with utility classes",
      "Zustand - Lightweight 3KB state management library with minimal boilerplate and excellent TypeScript inference",
      "Expo Router API Routes - Serverless endpoints using +api.ts convention for unified frontend/backend codebase",
      "Neon PostgreSQL - Serverless database with edge computing, automatic scaling to zero, and instant provisioning",
      "Clerk - Authentication and user management with Google OAuth, session handling, and React Native SDK",
      "EAS (Expo Application Services) - Cloud-based native builds, automated deployment pipelines, and Over-The-Air updates",
      "Google Maps API - Map rendering for Android with custom markers and real-time location visualization",
      "Apple Maps - Native map experience for iOS with platform-specific optimizations",
      "Google Places API - Location autocomplete and search with instant suggestions as users type",
      "Google Directions API - Route calculation, travel time estimation, and dynamic fare pricing based on distance/duration",
      "Geoapify - Robust geocoding engine converting coordinates to human-readable addresses and vice versa",
      "expo-image - High-performance image loading with automatic caching, Blurhash placeholders, and lazy loading",
      "expo-location - GPS and location services with BestForNavigation accuracy mode for active rides",
      "expo-notifications - Push notification handling for ride status updates across iOS and Android",
      "expo-maps - Sophisticated mapping system with custom driver markers and marker clustering"
    ],
    "features": [
      { "icon": "lock", "label": "Secure Authentication with Clerk - Google OAuth integration with one-tap sign-in, SecureStore cache for token management, automatic user sync between Clerk and Neon database via internal API calls, cross-platform session handling with JWT rotation. Provides battle-tested security with MFA support, admin dashboard, and first-class mobile SDK." },
      { "icon": "map", "label": "Interactive Real-Time Maps with Custom Markers - Sophisticated mapping system using expo-maps with high-performance driver icons rendered via expo-image's useImage hook for smooth caching during map movement. Custom bike icons for each available driver, marker clustering when zoomed out to reduce render load, lazy loading of driver data only when map visible. Platform-specific: Google Maps for Android, Apple Maps for iOS." },
      { "icon": "navigation", "label": "Smart Location Services Triple Integration - Google Places API powers autocomplete destination input with instant suggestions. Google Directions API calculates optimal routes, travel time, and dynamic fare pricing based on distance and estimated duration. Geoapify serves as robust geocoding engine for coordinate-to-address conversion ensuring clear, human-friendly location displays throughout UI." },
      { "icon": "activity", "label": "Ride Management System with Real-Time Tracking - Complete booking flow from ride request to completion. During active rides: BestForNavigation accuracy mode updates every 1 second or 5 meters of movement, dual updates triggering both local state (instant UI feedback) and periodic database syncs (persistence), automatic cleanup of location subscriptions on ride completion to prevent battery drain. Balance between smooth real-time updates and system resource conservation." },
      { "icon": "bell", "label": "Push Notification System - Expo Notifications integration alerting users when driver assigned, when approaching, and when ride completed. Native handling ensures high deliverability across iOS and Android. Deep-linking from notifications directly to relevant app screens. Keeps users engaged and informed throughout entire journey lifecycle." },
      { "icon": "refresh-cw", "label": "Over-The-Air Update Pipeline - EAS Update enables instant bug fixes, UI improvements, and feature deployment without App Store or Play Store approval. Found a bug? Push fix in minutes. Want to tweak UI? Deploy instantly. Workflow: eas update --branch production pushes new JavaScript bundle, users receive on next launch. Only native code changes (new permissions, native modules) require full rebuild—90% of updates deployable via OTA." },
      { "icon": "database", "label": "Zustand State Coordination - Three custom stores managing complex app state: Location Store (user location and destination coordinates), Driver Store (available drivers and selected driver), Ride Store (active ride state with real-time updates). Reactive architecture keeps UI in perfect sync—when user sets new location, store automatically clears previously selected driver ensuring consistent state and relevant ride estimates. Selector-based approach means components only re-render when their specific slice changes." },
      { "icon": "star", "label": "Polished Onboarding Flow - Critical first 30 seconds designed with beautiful illustrations showcasing key features and clear value proposition. Smooth animations and premium user experience setting tone before moving to authentication. Users decide whether to keep app in first half-minute—entry points optimized first, internals refined later." },
      { "icon": "smartphone", "label": "Cross-Platform Native Experience - Seamless iOS and Android support with platform-specific optimizations. Expo's managed workflow provides pre-configured native modules, file-based routing eliminates boilerplate, new architecture included by default in Expo 54. Single codebase deploying to both platforms without maintaining separate repositories." },
      { "icon": "layers", "label": "Unified Monorepo Architecture - Revolutionary approach where mobile screens (app/(root)/ and app/(auth)/), API endpoints (app/(api)/), shared types (types/type.d.ts), state management (store/), and utilities (lib/) all live in one Expo project. Benefits: type safety across frontend and backend, simplified deployment (one codebase, one pipeline), faster development (no context switching), zero CORS issues during development." }
    ],
    "blogs": [{ "title": "Building Sarathi: A Technical Deep Dive", "url": "https://www.sudarshandhakal.com.np/blog/building-of-sarathi" }],
    "demoUrl": "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7415709534981136384?compact=1",
    "gallery": [
  "https://sudarshandhakal.com.np/images/building-of-sarathi/architecture-diagram.png",
  "https://sudarshandhakal.com.np/images/building-of-sarathi/build-sucessful.png",
  "https://sudarshandhakal.com.np/images/building-of-sarathi/githistory.png",
  "https://sudarshandhakal.com.np/images/building-of-sarathi/hero-img.png",
  "https://sudarshandhakal.com.np/images/building-of-sarathi/map-ui.png",
  "https://sudarshandhakal.com.np/images/building-of-sarathi/planning-flow.png",
  "https://sudarshandhakal.com.np/images/building-of-sarathi/tech-stack.png"
],
    "journey": [
      {
        "milestone": "Project Foundation & Technology Selection",
        "details": [
          "Chose Expo 54 managed workflow over bare React Native for faster iteration, seamless EAS ecosystem integration, file-based routing via Expo Router, and future-proof new architecture by default",
          "Selected Zustand for state management over Redux/MobX due to minimal boilerplate (no actions/reducers/providers), TypeScript-first design with excellent type inference, tiny 3KB bundle size vs Redux's 20KB+, and simple mental model using just hooks and stores",
          "Decided on Neon serverless PostgreSQL over traditional database for serverless scaling (auto-scales to zero when not in use), edge computing with low global latency, instant provisioning without server management, and cost-effective pay-per-use pricing",
          "Integrated Clerk for authentication instead of custom auth to leverage battle-tested security with MFA and session management, out-of-the-box Google OAuth social login, included admin dashboard for user management, and first-class React Native SDK support",
          "Adopted NativeWind (Tailwind for React Native) over StyleSheet for rapid UI prototyping with utility classes, built-in design system consistency, easy responsive design with breakpoints and variants, and familiar developer experience for Tailwind users",
          "Established unified monorepo architecture philosophy: mobile screens in app/(root)/ and app/(auth)/, API endpoints in app/(api)/, shared TypeScript types in types/type.d.ts used by both client and server, state management in store/, reusable utilities in lib/—eliminating separate repositories and providing type safety, simplified deployment, faster development, and zero CORS issues"
        ]
      },
      {
        "milestone": "Authentication & User Management",
        "details": [
          "Designed polished onboarding flow as critical first 30-second experience with beautiful illustrations showcasing app's key features, smooth animations for premium feel, and clear value proposition before authentication",
          "Integrated Clerk-powered authentication with Google OAuth for one-tap sign-in, implemented SecureStore cache for maximum token management safety, built custom hooks ensuring automatic user sync between Clerk authentication and Neon database via internal API calls",
          "Configured cross-platform session handling with automatic JWT rotation and expiration handling, seamless token validation across web and native platforms, and secure session management preventing unauthorized access",
          "Created users table in Neon PostgreSQL storing user profiles synced from Clerk authentication, with unique clerk_id bridging authentication layer with application data for seamless integration",
          "Established environment variable management using .env files with different values for development and production, EXPO_PUBLIC_ prefix for client-available variables while keeping sensitive keys (DATABASE_URL) server-side only",
          "Set up TypeScript strict mode configuration with zero-tolerance 'any' policy and comprehensive type definitions for User interface ensuring compile-time safety across authentication flows"
        ]
      },
      {
        "milestone": "Database Schema & Backend Infrastructure",
        "details": [
          "Designed comprehensive PostgreSQL schema with three core tables leveraging relational integrity: Users (profiles synced from Clerk with unique clerk_id), Drivers (profiles with ratings, vehicle info, availability status queried frequently for map population), Rides (origin/destination addresses and coordinates, timing and fare calculations, payment status tracking, real-time location updates during active rides, status tracking: in_progress/completed/cancelled)",
          "Implemented Expo Router API Routes using +api.ts convention creating serverless endpoints that run in same origin during development, eliminating CORS issues and enabling rapid backend development without separate server setup",
          "Configured Neon serverless PostgreSQL with instant provisioning, automatic scaling to zero when idle, edge computing for low-latency global distribution, and developer-friendly management without traditional server overhead",
          "Established database validation ensuring ride creation validates both user and driver existence, maintaining data consistency through foreign key relationships and preventing orphaned records",
          "Built internal API endpoints for user synchronization (Clerk → Neon), ride creation and management, driver availability queries, real-time location updates, and fare calculation logic",
          "Implemented TypeScript type generation from database schemas ensuring end-to-end type safety from database queries through API routes to frontend components, catching type mismatches at compile time"
        ]
      },
      {
        "milestone": "Mapping System & Location Services",
        "details": [
          "Built sophisticated mapping system using expo-maps with platform-specific implementations: Google Maps for Android, Apple Maps for iOS, both providing native performance and familiar user experience",
          "Created custom driver marker system using expo-image's useImage hook for high-performance rendering, automatic caching preventing network requests during map movement, custom bike icons for visual clarity, smooth marker updates even during heavy map panning and zooming",
          "Implemented marker clustering algorithm grouping nearby drivers when zoomed out to reduce render load and improve performance, automatically expanding clusters as user zooms in for detailed driver selection",
          "Integrated Google Places API powering destination input autocomplete with instant suggestions appearing as users type, fuzzy matching for typo tolerance, recent searches for convenience, making destination selection effortless",
          "Connected Google Directions API for route calculation determining literal ride path, travel time estimation for ETA display, distance calculation for dynamic fare pricing based on distance and estimated duration, polyline rendering showing route on map",
          "Deployed Geoapify as robust geocoding engine converting GPS coordinates to human-readable addresses for current location display, reverse geocoding for map tap-to-select functionality, ensuring UI always shows clear, user-friendly locations throughout app",
          "Optimized map performance through lazy loading (driver data fetched only when map visible), debounced location updates (changes batched to prevent excessive re-renders), efficient marker recycling, and strategic component memoization"
        ]
      },
      {
        "milestone": "Real-Time Location Tracking & Ride Management",
        "details": [
          "Engineered sophisticated real-time location tracking during active rides using expo-location with BestForNavigation accuracy mode providing highest precision GPS data, updates triggering every 1 second or 5 meters of movement (whichever comes first) balancing accuracy with battery efficiency",
          "Implemented dual update strategy: location changes trigger immediate local state updates for instant UI feedback (marker moves smoothly on map), followed by periodic database syncs for data persistence and cross-device consistency",
          "Designed intelligent cleanup system automatically removing location subscriptions when ride completes, preventing background battery drain and unnecessary network usage, ensuring app remains battery-friendly during idle periods",
          "Built comprehensive ride management flow: user selects destination → system calculates route and fare → user confirms booking → driver assigned → real-time tracking begins → progress updates throughout journey → ride completion with automatic cleanup",
          "Created Ride Store in Zustand managing active ride state with real-time location updates, ride status transitions, driver information, fare calculations, and payment status—providing single source of truth for ride lifecycle",
          "Handled complex edge cases: GPS accuracy fluctuations (smoothing algorithm prevents jittery markers), network interruptions (offline queue with sync on reconnection), timezone considerations for ride timestamps, retroactive location updates when connection restored",
          "Achieved optimal balance between user experience (smooth, real-time updates giving riders confidence) and system resources (minimal battery drain, efficient network usage, preventing device overheating during long rides)"
        ]
      },
      {
        "milestone": "State Management & Performance Optimization",
        "details": [
          "Architected Zustand state management with three specialized stores: Location Store managing user current location and destination coordinates with automatic updates, Driver Store tracking available drivers fetched from database and selected driver for ride booking, Ride Store maintaining active ride state with real-time location updates and status transitions",
          "Implemented reactive state updates where setting new destination automatically clears previously selected driver, ensuring UI consistency and preventing stale ride estimates, selector-based approach causing components to re-render only when their specific state slice changes (driver list doesn't re-render when user location updates, only map does)",
          "Optimized image rendering using expo-image instead of React Native's default Image component achieving automatic disk caching (reducing network requests and data usage), Blurhash placeholder support (perceived instant loading), better memory management (images released when no longer visible), preventing memory leaks on image-heavy screens",
          "Enhanced map performance through marker clustering reducing render load when zoomed out, lazy loading fetching driver data only when map visible, debounced location updates batching changes to prevent excessive re-renders, strategic useMemo for expensive calculations",
          "Separated business logic from UI components with pure functions in lib/ directory (calculateRegion, generateMarkersFromData) making code testable and reusable, utilities like fare calculation algorithms living independently from React components",
          "Achieved measurable performance improvements: 60fps scrolling maintained throughout app, map interactions remain smooth even with 50+ driver markers, memory usage stays under 150MB on mid-range devices, app startup time under 2 seconds on 4G networks",
          "Implemented development workflow best practices: useMemo for expensive calculations preventing unnecessary recomputation, useCallback for event handlers avoiding function recreation, React.memo for components with expensive renders, strategic code splitting reducing initial bundle size"
        ]
      },
      {
        "milestone": "Push Notifications & User Engagement",
        "details": [
          "Integrated Expo Notifications system providing native notification handling with high deliverability across iOS and Android, platform-specific optimizations for notification appearance and behavior",
          "Implemented comprehensive notification triggers: driver assigned notification when ride request matched with available driver, driver approaching alert when driver within 5 minutes of pickup location, ride started confirmation when journey begins, ride completed notification with fare summary and receipt",
          "Built deep-linking architecture allowing notifications to open app directly to relevant screen: tap 'Driver assigned' → opens ride tracking screen, tap 'Ride completed' → opens receipt/rating screen, seamless user flow from notification to app context",
          "Designed notification permission flow respecting user preferences: permission request on first ride booking (contextual, not intrusive), clear explanation of notification benefits, graceful degradation when permissions denied (in-app alerts as fallback)",
          "Created notification preference controls in user profile allowing customization of notification types (ride updates, promotional, safety alerts), quiet hours configuration, notification sound preferences, ensuring users maintain control over engagement",
          "Achieved high engagement metrics through strategic notification timing and relevance: notifications sent only for actionable events, clear call-to-action in each notification, personalized content based on ride context, preventing notification fatigue through thoughtful triggering"
        ]
      },
      {
        "milestone": "Deployment Pipeline & Production Hardening",
        "details": [
          "Configured comprehensive EAS Build setup with three build profiles: Development Build (includes Expo Dev Client for debugging, connects to localhost for API testing, fast iteration cycle, internal distribution only), Preview Build (points to staging servers, internal distribution for stakeholder testing, includes analytics, no debugging tools), Production Build (optimized bundle size, auto-incrementing version numbers, production server endpoints, ready for app store submission)",
          "Established cloud-based build workflow: eas build --platform android --profile production creates AAB for Play Store, eas build --platform ios --profile production creates iOS builds without requiring Mac, entire process takes 10-15 minutes in cloud, eliminating local build infrastructure needs",
          "Implemented Over-The-Air (OTA) update system via EAS Update for instant JavaScript bundle updates bypassing app store review: eas update --branch production --message 'Fixed driver marker rendering' pushes updates in 2-5 minutes, users download automatically on next launch, critical bugs fixed in hours vs days, 90% of bugs are JavaScript so OTA covers most scenarios",
          "Created automated deployment workflow: GitHub Actions trigger on push to main, parallel Android AAB and iOS builds, AAB uploaded to Google Play internal testing track, Vercel auto-deploy for web components, QA validation on real physical devices, promotion to production track when validated",
          "Hardened production security: migrated all sensitive API keys (DATABASE_URL, CLERK_PUBLISHABLE_KEY, GOOGLE_API_KEY, GEOAPIFY_API_KEY) to managed environment variables in Expo dashboard, server-side validation on all API routes checking userId against authenticated session, database queries scoped with explicit userId filters preventing cross-user data access",
          "Established quality gates: ESLint strict rules enforcing React hooks best practices, TypeScript strict mode with zero-tolerance 'any' policy, pre-commit hooks running validation before allowing commits, preventing broken code from entering repository",
          "Built comprehensive testing strategy: preview builds tested on physical devices (real-world GPS behavior, actual notification delivery, true performance characteristics), validation checklist (authentication flow, location permissions, map rendering, ride booking, push notifications), monitored crash reports and user feedback for continuous improvement"
        ]
      },
      {
        "milestone": "Developer Experience & Technical Challenges",
        "details": [
          "Overcame Expo Go limitations by pivoting to Development Builds enabling native map support and custom native modules, providing flexibility beyond Expo Go's constraints while maintaining managed workflow benefits",
          "Debugged persistent cache invalidation issues causing stale driver locations and 'ghost' data in UI, implemented proper dependency tracking in custom useFetch hook, added explicit cache-busting mechanisms where needed, learned classic 'cache invalidation is hard' lesson resulting in robust data-fetching strategy",
          "Resolved complex Gradle build errors in EAS Build through environment variable configuration debugging, dependency version conflicts resolution, and Android build configuration optimization",
          "Mastered development workflow combining local development with Expo Go for rapid iteration, feature branches with clear Git strategy (main for production, develop for integration, feature/* for individual work), pull request reviews maintaining code quality, seamless EAS integration for cloud builds",
          "Implemented TypeScript best practices with declare syntax for global types making frequently-used interfaces (Driver, Ride, MarkerData) available throughout codebase without explicit imports, comprehensive type definitions preventing runtime errors, autocomplete and refactoring confidence from end-to-end type safety",
          "Achieved developer velocity through tool selection prioritizing fast feedback loops: NativeWind for instant styling, Expo Router for file-based navigation, Zustand for simple state management, hot reloading for immediate visual feedback, TypeScript for compile-time error catching",
          "Built with 'boring technology' philosophy: proven tools over shiny new ones (Zustand over complex state management, PostgreSQL over trendy NoSQL, established APIs over experimental services), optimizing for iteration speed over perfect architecture with understanding that refactoring comes later",
          "Documented entire 6-month journey from first line of code to final OTA update in comprehensive technical blog post, sharing architectural decisions, technical challenges, key learnings, and critical realizations for aspiring developers"
        ]
      }
    ],

  },
  {
    "id": 3,
    "title": "Gyanwalla Academy",
    "tagline": "AI powered LMS",
    "gradient": "from-purple-400 via-pink-500 to-red-500",
    "summary": "LMS with AI is a production-ready learning platform built in seven days that combines real-time content management, secure video streaming, tiered subscriptions, and AI-powered assistance. The platform features an intelligent conversational tutor that searches through actual course content to provide contextual answers with direct lesson links, transforming how students interact with educational material.",
    "techstack": [
      "Next.js 16 - App Router with Server Components and streaming RSC for optimal performance",
      "React 19 - Latest concurrent features and improved hooks for modern UI patterns",
      "Sanity.io - Real-time collaborative CMS with structured content and powerful GROQ queries",
      "GROQ - Graph-relational query language for efficient, precise content fetching",
      "Clerk - Production-ready authentication with built-in subscription tier management",
      "OpenRouter + AI SDK - Multi-model access with tool-calling capabilities for intelligent tutoring",
      "Mux - Secure video infrastructure with adaptive streaming, auto-captions, and signed playback",
      "Tailwind CSS v4 - Utility-first styling framework for rapid, consistent design",
      "TypeScript - End-to-end type safety for maintainable, error-resistant code",
      "Radix UI + shadcn/ui - Accessible component primitives with pre-built, customizable patterns",
      "Zod - Runtime validation ensuring API contract integrity"
    ],
    "features": [
      { "icon": "bot", "label": "AI-Powered Tutor Assistant - Intelligent agent that searches course content in real-time, answers student questions with context, and provides direct links to relevant lessons using OpenRouter and tool-calling patterns" },
      { "icon": "video", "label": "Professional Video Streaming - Secure, adaptive video playback with Mux including signed URLs, JWT-based time-limited access, auto-generated captions, thumbnail previews, and storyboard scrubbing" },
      { "icon": "list-tree", "label": "Hierarchical Content Structure - Organized learning paths with Categories → Courses → Modules → Lessons, each level supporting rich metadata, progress tracking, and granular access control" },
      { "icon": "credit-card", "label": "Tiered Subscription System - Three access levels (Free, Pro, Ultra) with Clerk-powered authentication, server-side content gating, and seamless checkout integration" },
      { "icon": "trending-up", "label": "Progress Tracking - Per-user completion tracking at both course and lesson levels with server-side validation, automatic cache invalidation, and real-time dashboard updates" },
      { "icon": "palette", "label": "Modern UI/UX - Beautiful dark theme with gradient effects, smooth animations, fully responsive design built with Tailwind CSS v4 and shadcn/ui components" },
      { "icon": "zap", "label": "Real-Time Content Updates - Live queries from Sanity CMS using Server-Sent Events ensure content changes appear instantly across all users without page refreshes" },
      { "icon": "shield-check", "label": "Secure Video Infrastructure - Three-layer security with signed playback policies, time-limited tokens (1-hour expiry), and server-side generation keeping private keys protected" },
      { "icon": "search", "label": "Content Search & Discovery - Client-side filtering with server-rendered data, category-based browsing, and progressive enhancement for instant navigation" },
      { "icon": "layout-dashboard", "label": "Personalized Dashboard - User-specific view showing active subscription, in-progress courses with completion percentages, recently accessed lessons, and tier-based recommendations" }
    ],
    "blogs": [
      {
        "title": "Building an AI-Powered Learning Management System in 7 Days",
        "url": "https://sudarshandhakal.com.np/blog/building-an-ai-powered-learning-management-system-in-7-days"
      }
    ],
    "demoUrl": "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7411757470051856384?compact=1",
    "journey": [
      {
        "milestone": "Day 1 - Foundation & Infrastructure",
        "details": [
          "Established Next.js 16 project with App Router and TypeScript configuration",
          "Integrated Clerk authentication with OAuth providers (Google, GitHub)",
          "Set up Sanity.io workspace with custom schema structure",
          "Built landing page with Hero, Pricing, and CTA sections",
          "Configured shadcn/ui component library with custom theming",
          "Implemented dark theme with Tailwind CSS v4 and gradient effects",
          "Created fully responsive layout system with mobile-first approach",
          "Decision: Starting with auth and CMS prevented costly refactoring later"
        ]
      },
      {
        "milestone": "Day 2 - Content Architecture & Video Integration",
        "details": [
          "Designed Sanity schema hierarchy (Category, Course, Module, Lesson)",
          "Integrated Mux video plugin for seamless uploads from Sanity Studio",
          "Established content relationships and reference structures",
          "Built course cards with live data rendering from Sanity",
          "Implemented statistics display showing course and lesson counts",
          "Imported sample content for end-to-end testing",
          "Configured Mux for automatic transcoding, adaptive streaming, and auto-captions",
          "Set up direct video uploads with built-in analytics"
        ]
      },
      {
        "milestone": "Day 3 - Monetization & Access Control",
        "details": [
          "Created pricing page with detailed tier comparison table",
          "Configured Clerk subscription plans (Free, Pro, Ultra)",
          "Implemented server-side access control with centralized authorization logic",
          "Built content gating middleware for protected routes",
          "Developed checkout flow with comprehensive error handling",
          "Added subscription status UI components to dashboard",
          "Used Clerk's has({ plan: 'tier' }) for server-side verification",
          "Fixed z-index and modal issues in checkout experience"
        ]
      },
      {
        "milestone": "Day 4 - User Dashboard & Discovery",
        "details": [
          "Built personalized dashboard showing active subscription and benefits",
          "Created 'My Courses' section displaying enrolled courses with progress",
          "Implemented course search with instant client-side filtering",
          "Added category-based browsing with progressive enhancement",
          "Displayed progress indicators on course cards",
          "Built 'Continue Learning' quick access for recently viewed content",
          "Added subscription upgrade prompts for gated content",
          "Optimized with server-rendered data for zero loading spinners"
        ]
      },
      {
        "milestone": "Day 5 - Course Pages & Progress System",
        "details": [
          "Developed dynamic course detail pages with collapsible module structure",
          "Created accordion-style module navigation with lesson lists",
          "Implemented lesson completion indicators with visual checkmarks",
          "Built server actions for progress tracking with data integrity",
          "Added content gating displaying lock icons on premium material",
          "Created 'Mark as Complete' functionality with automatic updates",
          "Optimized URL structure for SEO and clean routing",
          "Implemented automatic course completion calculation from lesson status"
        ]
      },
      {
        "milestone": "Day 6 - Secure Video Streaming",
        "details": [
          "Implemented secure video upload workflow through Sanity",
          "Built JWT-based signed playback token generation system",
          "Set time-limited access with 1-hour token expiry and auto-refresh",
          "Integrated professional Mux player component with full controls",
          "Added thumbnail and storyboard support for preview scrubbing",
          "Configured auto-generated subtitle integration for accessibility",
          "Implemented comprehensive loading and error states",
          "Created three-layer security: signed policies, time limits, server-side generation"
        ]
      },
      {
        "milestone": "Day 7 - AI Tutor Integration",
        "details": [
          "Built AI tutor widget with floating, minimal interface",
          "Integrated OpenRouter API with Vercel's AI SDK",
          "Implemented tool-equipped agent using 'tool loop' pattern",
          "Created course search tool querying Sanity via GROQ in real-time",
          "Used pt::text() for extracting searchable content from Portable Text",
          "Built content-aware response generation with direct lesson linking",
          "Implemented streaming chat interface with message history",
          "Restricted AI tutor access to Ultra-tier subscribers",
          "Agent searches through course titles, descriptions, modules, and full lesson content",
          "Responses grounded in actual platform content with verifiable links"
        ]
      }
    ],
    "gallery": [
      
  "https://sudarshandhakal.com.np/images/making-of-gyanwalla-lms/Content%20structure%20in%20GyanWalla%20(1).png",
  "https://www.sudarshandhakal.com.np/images/making-of-gyanwalla-lms/aitutoringyanwalla.png",
  "https://sudarshandhakal.com.np/images/making-of-gyanwalla-lms/flowdiagram%20(1).png",
  "https://sudarshandhakal.com.np/images/making-of-gyanwalla-lms/systemdesign.png",
      "https://media.licdn.com/dms/image/v2/D5622AQHniC3rSEckhA/feedshare-shrink_1280/B56Ztzy7KAIcAs-/0/1767174289629?e=1770854400&v=beta&t=8C4g3cSi1PqyoZkNRsmAHPe72klfr57uLDuy00jKMn8",
      "https://media.licdn.com/dms/image/v2/D5622AQFTHiqIR6QueA/feedshare-shrink_1280/B56ZtB_0snHIAw-/0/1766338809350?e=1770854400&v=beta&t=wefB6gisjKvuZQvxrRnjUTNgW3_ZzkWHx_yhhLN8bO8",
      "https://media.licdn.com/dms/image/v2/D5622AQGsHht0N47axQ/feedshare-shrink_1280/B56ZtB_0srHIAw-/0/1766338809367?e=1770854400&v=beta&t=Zbned-sv58NPTsNyFLBbUFhxTwFEhDBOFZs6Cp2pjuQ",
      "https://media.licdn.com/dms/image/v2/D5622AQFZChUqOUBskA/feedshare-shrink_2048_1536/B56ZtB_0s.GsA4-/0/1766338809663?e=1770854400&v=beta&t=OiTkRJJkLhnnDtFHY-jVGdQ8niejtWhABp5p-BStxR4",
      "https://media.licdn.com/dms/image/v2/D5622AQHdm8qBluXtUA/feedshare-shrink_2048_1536/B56Zs8_1snJUA0-/0/1766254929137?e=1770854400&v=beta&t=LG-mjsyD0q8-6pUVSq4YCOifggiJV3PkaGcxjfrZnpQ",
      "https://media.licdn.com/dms/image/v2/D5622AQGslDjCg8fDQQ/feedshare-shrink_2048_1536/B56Zs8_1soGgAw-/0/1766254928274?e=1770854400&v=beta&t=4nEpIOFp1VWaxaNGzSqktIIbz2h38o2k9CivoUMIEPw",
      "https://media.licdn.com/dms/image/v2/D5622AQGdqkVwT9ghfw/feedshare-shrink_2048_1536/B56Zsn2hVVG4A0-/0/1765900163653?e=1770854400&v=beta&t=FbLRvSfeXTvescCf653MdAjyjrEQw60nhhgXKdOFHoU",
      "https://media.licdn.com/dms/image/v2/D5622AQHy6bVU2FIjYA/feedshare-shrink_2048_1536/B56Zsn2hTvGkAw-/0/1765900164008?e=1770854400&v=beta&t=E_tymVkWXyPQNQEG2WqAPl9Mhsz3GoW3PgpMBElcPBc",
      "https://media.licdn.com/dms/image/v2/D5622AQH8mioqtiX0lQ/feedshare-shrink_2048_1536/B56Zs30XO5J4Aw-/0/1766168033245?e=1770854400&v=beta&t=T1h3Y1eRPvw5XSTA2_yZb6NnceZLt6bJnvbEK0tIYts"
    ],
    "build": { "Git": "https://github.com/realsudarshan/lms_platform_with_AI", "WebDemo": "https://gyanwallaacademy.vercel.app/", "AndroidDemo": null }
  },
  {
    "id": 4,
    "title": "Extractor",
    "gradient": "from-yellow-400 via-red-500 to-pink-500",
    "tagline": "AI-powered bill scanner",
    "summary": "Extractor is a production-ready AI-powered SaaS that transforms receipt management from manual spreadsheet hell into a seamless 'Drop & Forget' experience. Built with a multi-agent architecture, it processes receipts asynchronously with 99.2% accuracy, handles thousands of users with metered billing, and delivers real-time updates without polling. The platform demonstrates enterprise-grade reliability with automatic retries, structured data validation, and sustainable economics at $0.01 per scan.",
    "techstack": [
      "Next.js 15 (React 19) - Modern full-stack framework with server components and optimized performance",
      "TypeScript - End-to-end type safety from browser to database to AI agents",
      "Convex - Real-time database backend with built-in file storage, zero DevOps, and global CDN",
      "Inngest - Event-driven workflow engine with automatic retries and exponential backoff",
      "Clerk - Production authentication with secure session management and webhook integration",
      "Google Gemini 2.0 Flash Lite - Cost-effective AI model processing receipts in ~2 seconds at ~$8/1000 receipts",
      "AI Agent Kit - Multi-agent orchestration framework for coordinated AI workflows",
      "Schematic - Feature flags and usage tracking for metered billing and entitlements",
      "Stripe - Payment processing and subscription management for tiered pricing",
      "Zod - Runtime schema validation for AI outputs, form inputs, and environment variables",
      "Tailwind CSS - Utility-first styling for rapid, responsive design",
      "Radix UI - Accessible component primitives for professional UI elements",
      "Recharts - Data visualization library for analytics dashboards and spending trends",
      "Vercel - Edge deployment platform with automatic scaling and global distribution"
    ],
    "features": [
      { "icon": "scan", "label": "AI-Powered Receipt Recognition - Advanced LLM automatically extracts merchant names, dates, amounts, tax details, and every line item from any receipt format with 99.2% accuracy" },
      { "icon": "users", "label": "Multi-Agent Architecture - Three specialized agents (Supervisor, Scanner, Database) coordinate extraction workflow with clear separation of concerns for 10x easier debugging" },
      { "icon": "zap", "label": "Lightning Fast Processing - Receipts processed asynchronously in ~2 seconds with real-time UI updates, users never wait for AI completion" },
      { "icon": "refresh-ccw", "label": "Automatic Retry System - Inngest handles failed uploads with exponential backoff (up to 10 attempts), distinguishing between retryable errors and permanent failures" },
      { "icon": "upload-cloud", "label": "Direct Edge Uploads - Secure signed URLs enable browser-to-CDN uploads bypassing server bottlenecks, with 60-second expiration and global performance" },
      { "icon": "activity", "label": "Real-Time Dashboard Updates - Convex subscriptions eliminate polling, delivering instant UI updates when receipts finish processing with reactive data flow" },
      { "icon": "database", "label": "Structured Data Storage - Typed arrays for line items enable complex queries, aggregations, and CSV exports without JSON parsing" },
      { "icon": "pie-chart", "label": "Expense Analytics - Automated categorization with visual reporting including pie charts, spending trends, merchant analysis, and repeat purchase tracking" },
      { "icon": "credit-card", "label": "Metered Billing System - Two-layer defense with frontend gatekeeper and backend accountant, only counting successful scans to build user trust" },
      { "icon": "layers", "label": "Tiered Pricing Model - Free (10 scans/month), Basic, and Pro plans with usage-based limits, AI summaries for Pro users, and fair quota management" },
      { "icon": "alert-circle", "label": "Smart Error Handling - Graceful failures with retry logic for network errors/rate limits, fast-fail for validation errors, and clear user-facing error messages" },
      { "icon": "check-square", "label": "Type-Safe Schema Validation - Zod validates AI outputs before database persistence, catching hallucinations and bad data with exact error logging" },
      { "icon": "bar-chart-3", "label": "Usage Tracking - Schematic integration tracks feature usage, manages entitlements, and prevents free-tier abuse with backend verification" },
      { "icon": "file-output", "label": "CSV Export Integration - One-click export to QuickBooks/Xero with properly structured data ready for accounting software" },
      { "icon": "shield-lock", "label": "Security First - Clerk authentication, authorization ensuring users only see their receipts, signed upload URLs, and validation at every layer" }
    ],
    "blogs": [
      {
        "title": "From Spreadsheet Hell to Building an AI-Powered Receipt Tracker SaaS",
        "url": "https://sudarshandhakal.com.np/blog/from-spreadsheet-hell-to-building-an-ai-powered-receipt-tracker-saas"
      }
    ],
    "demoUrl": "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7402433434167730176?compact=1",
    "journey": [
      {
        "milestone": "Problem Identification & Solution Design",
        "details": [
          "Identified pain point: Monthly ritual of manual receipt entry into spreadsheets for tax season",
          "Researched existing solutions: Most were demos, not production-ready SaaS products",
          "Designed 'Drop & Forget' user experience: Upload → Process → Export workflow",
          "Architected async processing model to separate upload from AI processing",
          "Planned multi-agent system for coordinated extraction and validation",
          "Chose Gemini 2.0 Flash Lite over GPT-4 Vision for 2s vs 15s processing and $8 vs $120 per 1000 receipts",
          "Decision: Build real SaaS with auth, async processing, usage limits, and scalability from day one"
        ]
      },
      {
        "milestone": "Core Architecture & Backend Setup",
        "details": [
          "Set up Convex as serverless backend eliminating PostgreSQL, migrations, and ORMs",
          "Designed schema with critical status field: 'pending' | 'proceed' | 'error' driving entire UX",
          "Implemented structured data storage with typed arrays for line items enabling advanced queries",
          "Integrated Inngest for reliable background job processing with automatic retries",
          "Built direct edge upload system using signed URLs bypassing server bottlenecks",
          "Configured Convex file storage with global CDN for worldwide performance",
          "Established type-safe database schema generating instant TypeScript types",
          "Avoided connection pools, DevOps complexity with Convex's managed infrastructure"
        ]
      },
      {
        "milestone": "Multi-Agent AI System Development",
        "details": [
          "Built Supervisor Agent to coordinate tasks between specialized agents",
          "Created Scanner Agent for AI-powered receipt processing with Gemini 2.0",
          "Developed Database Agent for Zod validation and Convex persistence",
          "Implemented agent network communication and workflow termination logic",
          "Designed prompts forcing exact JSON schema output for structured data",
          "Added OCR error handling for blurry images and multi-page receipts",
          "Integrated Schematic usage tracking within Database Agent for billing",
          "Achieved clear debugging with isolated agent failures (Scanner vs Database)"
        ]
      },
      {
        "milestone": "Upload Flow & Security Implementation",
        "details": [
          "Implemented generateUploadUrl() for temporary signed URLs with 60-second expiration",
          "Built browser-to-edge direct upload eliminating server bandwidth costs",
          "Created metadata persistence immediately after upload for user feedback",
          "Triggered Inngest background jobs after successful file storage",
          "Secured uploads with scoped, time-limited tokens preventing abuse",
          "Optimized global performance with Convex edge storage CDN",
          "Ensured server never touches large files reducing bottlenecks and timeouts",
          "Added validation for file size limits and supported formats (images, PDFs)"
        ]
      },
      {
        "milestone": "Real-Time UI & User Experience",
        "details": [
          "Replaced polling with Convex real-time subscriptions for instant updates",
          "Implemented status-driven UI: pending → spinner, proceed → data display, error → retry button",
          "Built reactive dashboard that updates automatically when receipts finish processing",
          "Added optimistic UI updates for immediate user feedback",
          "Created visual state transitions with loading indicators and success confirmations",
          "Eliminated refresh buttons with automatic reactive data flow",
          "Developed 'magic' UX where status changes appear instantly across all connected clients",
          "Added extended status values: 'retrying' and 'expired' for comprehensive state management"
        ]
      },
      {
        "milestone": "Monetization & Usage Controls",
        "details": [
          "Integrated Stripe for payment processing and subscription management",
          "Implemented Schematic for feature flags and usage metering",
          "Built two-layer defense: frontend gatekeeper using useSchematicEntitlement and backend accountant",
          "Created tiered pricing: Free (10 scans/month), Basic, Pro with AI summaries",
          "Tracked only successful scans preventing users from paying for system failures",
          "Added upgrade modals when free tier limits exceeded",
          "Prevented abuse: One user creating multiple accounts with temp emails blocked",
          "Calculated sustainable economics: $0.01 per scan covering AI costs at scale"
        ]
      },
      {
        "milestone": "Error Handling & Reliability Engineering",
        "details": [
          "Designed smart retry strategy distinguishing retryable vs permanent failures",
          "Configured Inngest exponential backoff: immediate, 1s, 2s, 4s... up to 10 attempts",
          "Implemented fast-fail for validation errors, corrupted files, permission issues",
          "Added comprehensive error logging with exact validation error messages",
          "Built error boundaries preventing cascading failures",
          "Created user-facing error messages with actionable guidance",
          "Handled edge cases: file too large, unsupported format, network timeout, blurry images",
          "Achieved 99.2% extraction accuracy with graceful failure handling"
        ]
      },
      {
        "milestone": "Analytics Dashboard & Data Visualization",
        "details": [
          "Built expense analytics answering: spending this month, most visited merchant, repeat purchases",
          "Integrated Recharts for pie charts and spending trend visualizations",
          "Implemented automated categorization for meals, travel, supplies",
          "Created real-time dashboard updates without polling using Convex subscriptions",
          "Added merchant frequency analysis showing visit counts",
          "Built item-level insights for repeated purchases (e.g., 'Oat milk lattes')",
          "Designed visual feedback: badge changes yellow → green on completion",
          "Enabled CSV export for QuickBooks/Xero integration"
        ]
      },
      {
        "milestone": "Production Launch & Results",
        "details": [
          "Deployed to Vercel with automatic scaling and edge optimization",
          "Completed security audit: Clerk auth, authorization, signed URLs, Zod validation",
          "Verified performance: direct uploads, async processing, real-time subscriptions",
          "Confirmed reliability: automatic retries, error boundaries, status tracking, monitoring",
          "Validated business model: usage metering, upgrade flows, analytics, cost alerts",
          "Achieved results after 3 months: 2,847 users, 10,349 receipts processed, $127 AI costs",
          "Received 4.8/5 star rating with feedback: 'Feels instant', 'Just works', 'Never seen receipts this organized'",
          "Proved architecture scalability: Sustainable at $0.01/scan, handles 10,000+ receipts without breaking"
        ]
      }
    ],
    "gallery": [
      "https://media.licdn.com/dms/image/v2/D5622AQHExMlxyp0DpQ/feedshare-shrink_2048_1536/B56ZsYlBV2IcAw-/0/1765643918265?e=1770854400&v=beta&t=pdl1DDWgF2zCgkK3DY2m4Fy25gd19cYIse5sLcdXddg",
      "https://media.licdn.com/dms/image/v2/D5622AQHOjZXhAqb76g/feedshare-shrink_1280/B56ZsYlBVyJEAw-/0/1765643918152?e=1770854400&v=beta&t=Ei5Ae5kYJa6lTTUtxqdlP89tBupQqWWRjM8783MSuio",
      "https://media.licdn.com/dms/image/v2/D5622AQEzu-UEAkIyKQ/feedshare-shrink_2048_1536/B56ZsYlBUeGkA0-/0/1765643917925?e=1770854400&v=beta&t=b6FZa7_RPuMpI3apH4zX9eOkHxyvKtyPzNulz2XHm7o",
      "https://media.licdn.com/dms/image/v2/D5622AQECBaDaOr5T3g/feedshare-shrink_2048_1536/B56ZsYlBUaIkA0-/0/1765643917740?e=1770854400&v=beta&t=DpSCkL0QJ-ekFB9XK1qkqffcVjXvcC08Wo0P3Q_tPR8",
      "https://media.licdn.com/dms/image/v2/D5622AQGMWdUFrlMQHg/feedshare-shrink_2048_1536/B56ZsYlBUKI8Aw-/0/1765643917923?e=1770854400&v=beta&t=nQOO9sbWbxhnmfM1huz6wfRYfsZnD9B6vNlwUhSg_7I",
      "https://media.licdn.com/dms/image/v2/D5622AQEU6LGy3J6WBQ/feedshare-shrink_2048_1536/B56ZsYlBVkI0Aw-/0/1765643917954?e=1770854400&v=beta&t=X_ScPB4Sz0E6LEmfiSolZS5L-2OjXxcoQCET2WS82yA",
      "https://media.licdn.com/dms/image/v2/D5622AQFbxd5B1CXIBQ/feedshare-shrink_2048_1536/B56ZsYlBUTGkAw-/0/1765643917728?e=1770854400&v=beta&t=DLV_nFWv307UEwvVhZVFCkEa38k9_G5u66bo98IxVyM",
      "https://www.sudarshandhakal.com.np/images/receipt_tracker_blog/automatic_retry.png",
      "https://www.sudarshandhakal.com.np/images/receipt_tracker_blog/sm_main_img.png",
      
    ],
    "build": { "Git": "https://github.com/realsudarshan/extracter", "WebDemo": "https://reciept-extracter.vercel.app", "AndroidDemo": null }
  },
  {
    "id": 5,
    "title": "Sero_fero",
    "tagline": "Social media platform",
    "gradient": "from-green-400 via-blue-500 to-purple-600",
    "summary": "Sero-Fero is a full-stack, self-hosted, production-ready social media platform that represents the complete journey from simple concept to enterprise-grade infrastructure. Built through multiple backend migrations (Node.js → Firebase → Appwrite Cloud → Self-hosted Appwrite), the platform demonstrates mastery of Docker orchestration, SSL/TLS security, Cloudflare Tunnels, reverse proxies, and the complex realities of self-hosting. It's a battle-tested application that survived Docker networking nightmares, endless container restarts, and merge conflicts to emerge as a secure, scalable social platform.",
    "techstack": [
      "React 19 - Latest version with concurrent features and improved rendering performance",
      "TypeScript - End-to-end type safety for maintainable, error-resistant code across frontend and backend",
      "Vite - Lightning-fast build tool with hot module replacement and optimized production builds",
      "Tailwind CSS - Utility-first CSS framework for rapid, responsive design development",
      "shadcn/ui - Accessible, customizable component library built on Radix UI primitives",
      "TanStack Query (React Query) - Powerful data fetching, caching, and state management for server state",
      "React Router v7 - Client-side routing with data loading and nested route support",
      "React Hook Form - Performant form handling with minimal re-renders and easy validation",
      "Zod - Runtime schema validation for input sanitization and type-safe API contracts",
      "Lucide React - Beautiful, consistent icon library for modern UI design",
      "Sonner - Toast notification library for user feedback and alerts",
      "Dropzone - File upload component with drag-and-drop support for media uploads",
      "Appwrite 1.8.0 (Self-hosted) - Open-source Backend-as-a-Service providing authentication, database, storage, and functions",
      "MariaDB - Production database engine for relational data storage within Appwrite",
      "Redis - In-memory caching layer for session management and performance optimization",
      "Docker Compose - Multi-container orchestration for Appwrite services, database, and Redis",
      "Traefik - Modern reverse proxy and load balancer handling SSL termination and routing",
      "GCP (Google Cloud Platform) VM - Compute instance with static IP hosting the self-hosted infrastructure",
      "Cloudflare DNS + CDN - Global content delivery network with DDoS protection and edge caching",
      "Cloudflare Tunnel - Secure, zero-trust access eliminating need for open ports and providing SSL/TLS",
      "Firebase Hosting - Frontend static site hosting with global CDN and automatic SSL",
      "Vitest - Fast unit testing framework compatible with Vite ecosystem"
    ],
    "features": [
      { "icon": "server", "label": "Self-Hosted Backend Infrastructure - Complete Appwrite 1.8.0 deployment on GCP VM with Docker Compose orchestration, MariaDB database, Redis caching, and Traefik reverse proxy" },
      { "icon": "shield-check", "label": "Zero-Port Security Architecture - Cloudflare Tunnel eliminates exposed ports while providing SSL/TLS termination, DDoS protection, and secure external access" },
      { "icon": "fingerprint", "label": "User Authentication System - Secure registration, login, and session management powered by Appwrite with JWT tokens and refresh token rotation" },
      { "icon": "refresh-cw", "label": "Real-Time Social Feed - Infinite scroll implementation with TanStack Query for optimized data fetching, caching, and background updates" },
      { "icon": "pencil-line", "label": "Post Creation & Management - Rich text posts with image uploads via Dropzone, edit/delete functionality, and real-time updates" },
      { "icon": "hard-drive", "label": "Media Upload & Storage - Secure file handling with Appwrite Storage, image optimization, and CDN delivery through Cloudflare" },
      { "icon": "user-circle", "label": "User Profiles - Customizable profiles with avatar uploads, bio editing, and user-specific post feeds" },
      { "icon": "heart", "label": "Interaction Features - Like, comment, and share functionality with optimistic updates and cache invalidation" },
      { "icon": "form-input", "label": "Input Validation & Sanitization - Client-side validation with Zod schemas and React Hook Form, server-side validation preventing injection attacks" },
      { "icon": "gauge", "label": "Rate Limiting - API rate limiting protecting against abuse and ensuring fair resource usage" },
      { "icon": "smartphone", "label": "Responsive Design - Mobile-first UI built with Tailwind CSS adapting seamlessly across devices" },
      { "icon": "message-square", "label": "Toast Notifications - User feedback system using Sonner for success messages, errors, and confirmations" },
      { "icon": "test-tube", "label": "Production Testing - Comprehensive test suite with Vitest ensuring reliability and catching regressions" },
      { "icon": "terminal", "label": "Environment Configuration - Docker Compose environment variables properly referenced for secure credential management" },
      { "icon": "lock", "label": "SSL/TLS Everywhere - End-to-end encryption via Cloudflare Tunnel and Firebase Hosting, no mixed content warnings" },
      { "icon": "zap", "label": "Performance Optimization - TanStack Query caching, lazy loading, code splitting, and optimized bundle sizes" },
      { "icon": "alert-triangle", "label": "Error Boundaries - Graceful error handling preventing entire app crashes from component failures" }
    ],
    "blogs": [
      {
        "title": "Sero Fero: Building a Production-Ready Social Media Platform",
        "url": "https://sudarshandhakal.com.np/blog/sero-fero-social-media-platform"
      }
    ],
    "demoUrl": "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7400712768846475264?compact=1",

    "journey": [
      {
        "milestone": "Concept & Initial Node.js API Development",
        "details": [
          "Started with simple social media concept: users, posts, likes, comments",
          "Built REST API using Node.js and Express for backend services",
          "Implemented basic authentication with JWT tokens",
          "Created PostgreSQL database schema for users and posts",
          "Developed CRUD operations for social features",
          "Quickly hit scaling challenges and maintenance overhead",
          "Realized managing custom backend was slowing down feature development",
          "Decision: Migrate to managed backend service for faster iteration"
        ]
      },
      {
        "milestone": "Migration to Firebase Backend",
        "details": [
          "Migrated from Node.js API to Firebase for serverless backend",
          "Implemented Firebase Authentication for user management",
          "Switched to Firestore NoSQL database for real-time data sync",
          "Set up Firebase Storage for image and media uploads",
          "Configured security rules for data access control",
          "Experienced Firebase's convenience but felt vendor lock-in concerns",
          "Hit Firebase pricing concerns as user base grew",
          "Learned lessons about Firebase SDK and real-time listener patterns"
        ]
      },
      {
        "milestone": "Transition to Appwrite Cloud",
        "details": [
          "Discovered Appwrite as open-source Firebase alternative",
          "Migrated authentication system to Appwrite Cloud",
          "Rebuilt database collections with Appwrite Database",
          "Transitioned file storage to Appwrite Storage buckets",
          "Experienced merge conflicts switching between SDKs",
          "Dealt with cache bugs during migration process",
          "Appreciated Appwrite's developer-friendly APIs",
          "Recognized desire for complete infrastructure control"
        ]
      },
      {
        "milestone": "Self-Hosting Infrastructure Setup",
        "details": [
          "Provisioned GCP VM instance with static IP for stability",
          "Installed Docker and Docker Compose for container orchestration",
          "Deployed Appwrite 1.8.0 using official Docker Compose configuration",
          "Set up MariaDB as production database engine",
          "Configured Redis for session caching and performance",
          "Installed Traefik as reverse proxy for SSL termination and routing",
          "Wrestled with Docker networking issues and container communication",
          "Fought endless container restart loops debugging configuration issues"
        ]
      },
      {
        "milestone": "Cloudflare Tunnel & SSL Configuration",
        "details": [
          "Configured Cloudflare DNS pointing to GCP VM static IP",
          "Installed and configured Cloudflare Tunnel (cloudflared daemon)",
          "Eliminated need for open firewall ports with zero-trust tunnel",
          "Set up SSL/TLS termination at Cloudflare edge",
          "Solved mixed-content errors ensuring HTTPS everywhere",
          "Configured DDoS protection and rate limiting at CDN level",
          "Debugged Cloudflare Tunnel authentication and routing",
          "Achieved secure external access without exposing infrastructure"
        ]
      },
      {
        "milestone": "Docker Compose Environment & Configuration Hell",
        "details": [
          "Struggled with environment variable referencing in Docker Compose",
          "Debugged .env file loading and variable substitution issues",
          "Fixed Appwrite environment configuration for production deployment",
          "Configured correct database connection strings and credentials",
          "Set up Redis connection parameters and session configuration",
          "Resolved Docker network conflicts between services",
          "Implemented proper secret management practices",
          "Learned critical importance of correct env file structure and referencing"
        ]
      },
      {
        "milestone": "Frontend Development & Integration",
        "details": [
          "Built modern React 19 frontend with TypeScript and Vite",
          "Implemented component library using shadcn/ui and Tailwind CSS",
          "Integrated TanStack Query for server state management and caching",
          "Set up React Router v7 for client-side navigation with nested routes",
          "Built forms with React Hook Form for performant validation",
          "Implemented Zod schemas for type-safe input validation",
          "Added infinite scroll for social feed using intersection observer",
          "Integrated Dropzone for intuitive image upload UX",
          "Deployed frontend to Firebase Hosting with automatic SSL"
        ]
      },
      {
        "milestone": "Security Hardening & Production Readiness",
        "details": [
          "Implemented comprehensive input validation with Zod on client and server",
          "Added input sanitization preventing XSS and injection attacks",
          "Configured rate limiting on API endpoints to prevent abuse",
          "Set up CORS policies restricting unauthorized domain access",
          "Implemented CSP (Content Security Policy) headers",
          "Added authentication checks on all protected routes and API calls",
          "Configured proper SSL/TLS with no mixed content warnings",
          "Set up monitoring and logging for security events",
          "Reviewed and locked down Appwrite permissions and security rules"
        ]
      },
      {
        "milestone": "Testing & Quality Assurance",
        "details": [
          "Set up Vitest testing framework compatible with Vite ecosystem",
          "Wrote unit tests for critical components and utilities",
          "Created integration tests for authentication flows",
          "Tested API interactions and error handling scenarios",
          "Implemented test coverage reporting and CI integration",
          "Performed manual testing across devices and browsers",
          "Load tested self-hosted infrastructure under simulated traffic",
          "Fixed bugs discovered through comprehensive testing process"
        ]
      },
      {
        "milestone": "Production Launch & Lessons Learned",
        "details": [
          "Deployed complete self-hosted infrastructure to production",
          "Configured monitoring, alerting, and backup strategies",
          "Optimized Docker resource limits for cost-effective operation",
          "Implemented automated deployment pipeline",
          "Documented infrastructure setup and disaster recovery procedures",
          "Key Lesson 1: Self-hosting exposes infrastructure truths - SSL is non-negotiable",
          "Key Lesson 2: Docker env files must be referenced correctly or nothing works",
          "Key Lesson 3: Testing and security aren't optional, they're survival",
          "Key Lesson 4: Control vs convenience trade-off - self-hosting gives control but demands expertise",
          "Key Lesson 5: Migration teaches more than building from scratch - experienced 4 different backend paradigms"
        ]
      }
    ],
    "gallery": [
      "https://www.sudarshandhakal.com.np/images/fromideatodeploymentsero-fero/artitecture.png",
      "https://www.sudarshandhakal.com.np/images/fromideatodeploymentsero-fero/appwriteconsole.png",
      "https://www.sudarshandhakal.com.np/images/fromideatodeploymentsero-fero/frontend.png",
      "https://media.licdn.com/dms/image/v2/D5622AQF4eOYr-tWC0w/feedshare-shrink_2048_1536/B56ZrYgJg5HYAw-/0/1764568898986?e=1770854400&v=beta&t=s2-8ycqFTlzI81pZfQUBj5N21huLM46GQEbdPr4k9Dk",
      "https://media.licdn.com/dms/image/v2/D5622AQG_6BTceh74sg/feedshare-shrink_2048_1536/B56ZrYgJh7KACM-/0/1764568899113?e=1770854400&v=beta&t=AjVfgHMhyURW4E0_qW3zMitqbEwXRzn61-ydGDxtdt0",
      "https://media.licdn.com/dms/image/v2/D5622AQEsBCApKPH_Rg/feedshare-shrink_2048_1536/B56ZrYgJiZJUAw-/0/1764568898752?e=1770854400&v=beta&t=hhwmaVtMCaCTb-9K6kl6lmii2EcA5Z6_av_ICDLi2WM",
      "https://media.licdn.com/dms/image/v2/D5622AQFml5kcgpv9JA/feedshare-shrink_2048_1536/B56ZrYgJhyLAAw-/0/1764568899237?e=1770854400&v=beta&t=dCdDdoX4vQG6MBnCYb2B4whcbYPq1so1Q6iDUatwUNU",
      "https://media.licdn.com/dms/image/v2/D5622AQGX-mG0U__7TA/feedshare-shrink_2048_1536/B56ZrYgJijHIAw-/0/1764568899221?e=1770854400&v=beta&t=M5jFN3kQi4k_oI3DFTS6QP4q3cqsVDkSJUcXdXaYnH0",
      "https://media.licdn.com/dms/image/v2/D5622AQF0qWonIvFJvw/feedshare-shrink_800/B56ZrYgJh7KAAg-/0/1764568898503?e=1770854400&v=beta&t=xg-37FnERmxTxZhE9jxkyMmwJfwvJUVrgB-_cuMHKXE",
      "https://media.licdn.com/dms/image/v2/D5622AQEyt1XnmL4hjw/feedshare-shrink_2048_1536/B56ZrYgJh3HQAw-/0/1764568899242?e=1770854400&v=beta&t=3-6-IIjt8yVOI3dmRCmDmwSIDqb7BQKAFBzUnZV_i84",
      "https://media.licdn.com/dms/image/v2/D5622AQEAVGj1bNgO3Q/feedshare-shrink_2048_1536/B56ZrYgJivG4A0-/0/1764568899059?e=1770854400&v=beta&t=rmkUcHMhc9X434rJrNLPP5FZsupmeIkd8w3eD_oFOKU",
      
    ],
    "build": { "Git": "https://github.com/realsudarshan/social_media", "WebDemo": "https://sero-fero.web.app/sign-in", "AndroidDemo": null }
  },
  {
    "id": 6,
    "title": "CrimeLedger", 
    "tagline": "Blockchain based crime management platform",
    "gradient": "from-gray-700 via-gray-900 to-black",
    "summary": "CyberLedger (Crime Ledger) is a blockchain-powered criminal record management portal designed for police authorities to ensure transparency, prevent unauthorized tampering, and maintain data integrity. The system implements a four-stage workflow where operational officers create reports, senior officers review and approve them, approved records are hashed and stored on Ethereum Sepolia blockchain, and validation mechanisms verify data authenticity by comparing MongoDB records with blockchain hashes. This immutable architecture prevents deletion or modification of crime records, creating an auditable trail for law enforcement agencies.",
    "techstack": [
      "React.js - Modern frontend library for building interactive user interfaces with component-based architecture",
      "Node.js - JavaScript runtime powering the backend server and API endpoints",
      "Express.js - Minimal web framework for Node.js handling routing, middleware, and HTTP requests",
      "MongoDB - NoSQL database storing detailed crime records, suspect profiles, and case information",
      "Solidity - Smart contract programming language for Ethereum blockchain integration",
      "Ethereum Sepolia Testnet - Ethereum test network for deploying and testing smart contracts without real ETH",
      "Hardhat - Ethereum development environment for compiling, deploying, testing, and debugging smart contracts",
      "Alchemy - Web3 infrastructure provider offering RPC endpoints for Ethereum network connectivity",
      "Metamask - Browser-based cryptocurrency wallet for signing transactions and interacting with blockchain",
      "Ethers.js - JavaScript library for interacting with Ethereum blockchain and smart contracts",
      "Cryptographic Hashing (SHA-256) - Algorithm generating unique fingerprints of crime records for blockchain verification",
      "Web3.js/Ethers.js - Libraries enabling frontend-blockchain communication for transaction signing and contract interaction"
    ],
    "features": [
      { "icon": "shield", "label": "Immutable Crime Record Storage - Records stored on Ethereum blockchain with cryptographic hashes prevent unauthorized deletion or modification, ensuring permanent audit trail" },
      { "icon": "workflow", "label": "Four-Stage Workflow System - Operational officers create reports → Senior officers review → Blockchain integration → Validation ensures quality control and accountability" },
      { "icon": "layers", "label": "Dual-Layer Data Architecture - Detailed records in MongoDB for searchability, cryptographic hashes on blockchain for immutability and verification" },
      { "icon": "key", "label": "Senior Officer PIN Security - Additional authentication layer requiring PIN code for senior officer access, preventing unauthorized approvals" },
      { "icon": "fingerprint", "label": "Cryptographic Hash Validation - Data integrity verification by comparing MongoDB record hash with blockchain-stored hash, detecting any tampering attempts" },
      { "icon": "file-code", "label": "Smart Contract Integration - Solidity smart contracts store report hashes and MongoDB IDs on Ethereum, creating verifiable link between off-chain and on-chain data" },
      { "icon": "file-text", "label": "Detailed Crime Record Management - Comprehensive forms capturing suspect profiles, case descriptions, evidence details, dates, locations, and officer information" },
      { "icon": "search", "label": "Search, Filter, and Sort Capabilities - Efficient crime record retrieval with multiple search parameters and sorting options for case management" },
      { "icon": "users", "label": "Role-Based Access Control - Operational officers create reports, senior officers approve, distinct permissions ensuring proper authorization hierarchy" },
      { "icon": "layout-dashboard", "label": "Blockchain Verification Dashboard - Real-time validation interface showing blockchain transaction status, hash comparisons, and data integrity confirmations" },
      { "icon": "check-circle", "label": "Report Review System - Senior officers can approve or reject reports with feedback mechanism, rejected reports return to operational officers for corrections" },
      { "icon": "link-2", "label": "Ethereum Sepolia Integration - Test network deployment allowing development and testing without financial risk using free testnet ETH" },
      { "icon": "history", "label": "Transaction History Tracking - Blockchain explorer integration showing all report submissions, approvals, and validation checks with transaction IDs" },
      { "icon": "alert-triangle", "label": "Tamper-Evident Architecture - Any modification to MongoDB records breaks hash match, immediately flagging data integrity violations" },
      { "icon": "binary", "label": "Automated Hash Generation - System automatically generates SHA-256 hashes of approved reports before blockchain submission, ensuring consistency" }
    ],
    "blogs": [
      {
        "title": "CyberLedger: Securing Crime Records with Blockchain README from github",
        "url": "https://github.com/realsudarshan/Criminalreportsystemusingblockchain/blob/main/README.md"
      }
    ],
    "demoUrl": undefined,

    "journey": [
      {
        "milestone": "Problem Analysis & Solution Design",
        "details": [
          "Identified problem: Traditional crime record systems vulnerable to unauthorized modifications and deletions",
          "Researched blockchain immutability for law enforcement applications",
          "Designed four-stage workflow: Creation → Review → Blockchain → Validation",
          "Chose dual-layer architecture: MongoDB for detailed data, Ethereum for verification hashes",
          "Selected Ethereum Sepolia testnet for cost-free development and testing",
          "Planned role-based access: Operational officers vs Senior officers",
          "Defined security requirements: PIN authentication for approvals, cryptographic validation",
          "Architected hash-based verification system preventing undetected tampering"
        ]
      },
      {
        "milestone": "Backend Development & MongoDB Integration",
        "details": [
          "Set up Node.js and Express.js server with RESTful API architecture",
          "Designed MongoDB schema for crime records with comprehensive fields",
          "Created schemas for suspect profiles, case descriptions, evidence details",
          "Implemented CRUD operations for operational officers to create and edit reports",
          "Built senior officer review endpoints with approve/reject functionality",
          "Developed search, filter, and sort APIs for efficient record retrieval",
          "Added data validation and sanitization for all input fields",
          "Configured MongoDB Atlas cloud database with proper indexing"
        ]
      },
      {
        "milestone": "Smart Contract Development with Solidity",
        "details": [
          "Wrote Solidity smart contract for storing crime record hashes",
          "Implemented struct to hold MongoDB document ID and cryptographic hash",
          "Created addReport function for blockchain record insertion",
          "Built getReport function retrieving hash by MongoDB ID for validation",
          "Added event emissions for tracking blockchain transactions",
          "Implemented access control ensuring only authorized addresses can add records",
          "Tested contract functions using Hardhat testing framework",
          "Optimized gas costs for efficient blockchain operations"
        ]
      },
      {
        "milestone": "Ethereum Infrastructure Setup",
        "details": [
          "Created Alchemy account and obtained Sepolia RPC endpoint URL",
          "Installed and configured Metamask browser extension",
          "Set up Ethereum wallet and switched to Sepolia testnet",
          "Acquired free Sepolia ETH from testnet faucets for deployment",
          "Configured Hardhat development environment with network settings",
          "Set up .env file with RPC_URL and PRIVATE_KEY for secure credential storage",
          "Installed ethers.js for blockchain interaction from Node.js backend",
          "Tested RPC connectivity and wallet balance before deployment"
        ]
      },
      {
        "milestone": "Smart Contract Deployment & Integration",
        "details": [
          "Compiled Solidity smart contract using Hardhat compiler",
          "Wrote deployment script with proper network configuration",
          "Deployed contract to Sepolia testnet using 'npx hardhat run scripts/deploy.js --network sepolia'",
          "Captured deployed contract address from console output",
          "Verified contract on Etherscan Sepolia block explorer",
          "Integrated contract address into backend environment variables",
          "Created backend functions calling smart contract methods using ethers.js",
          "Tested blockchain writes and reads from Express API endpoints"
        ]
      },
      {
        "milestone": "Cryptographic Hash System Implementation",
        "details": [
          "Implemented SHA-256 hashing algorithm for crime record data",
          "Created hash generation function combining all critical report fields",
          "Built automatic hash generation on senior officer approval",
          "Developed blockchain submission workflow after approval",
          "Stored MongoDB document ID and hash together in smart contract",
          "Created validation endpoint comparing MongoDB hash with blockchain hash",
          "Handled hash mismatch scenarios flagging data integrity violations",
          "Logged all hash operations for audit trail and debugging"
        ]
      },
      {
        "milestone": "Frontend Development with React",
        "details": [
          "Built React application with component-based architecture",
          "Created operational officer dashboard for report submission",
          "Designed multi-step crime record creation form with validation",
          "Developed senior officer dashboard with PIN authentication",
          "Built report review interface showing pending approvals",
          "Implemented approve/reject buttons with feedback mechanisms",
          "Created validation dashboard displaying hash comparison results",
          "Added search, filter, sort UI components for record management",
          "Integrated blockchain transaction status display showing confirmations"
        ]
      },
      {
        "milestone": "Security & Access Control Implementation",
        "details": [
          "Implemented role-based authentication distinguishing officer types",
          "Added PIN security layer for senior officer dashboard access",
          "Built authorization middleware preventing unauthorized API access",
          "Configured CORS policies restricting backend access to frontend domain",
          "Added input validation preventing injection attacks and malformed data",
          "Implemented secure session management with JWT tokens",
          "Stored private keys securely in environment variables, never in code",
          "Added .gitignore entries ensuring credentials never committed to repository"
        ]
      },
      {
        "milestone": "Testing & Validation System",
        "details": [
          "Created test crime records through operational officer interface",
          "Verified senior officer approval workflow with PIN authentication",
          "Tested blockchain submission process with Sepolia testnet transactions",
          "Validated hash generation consistency across multiple reports",
          "Performed validation checks comparing MongoDB and blockchain hashes",
          "Tested tamper detection by manually modifying MongoDB records",
          "Verified hash mismatch correctly flagged as data integrity violation",
          "Checked Sepolia block explorer confirming all transactions visible on-chain",
          "Load tested system with multiple concurrent report submissions"
        ]
      },
      {
        "milestone": "Deployment & Documentation",
        "details": [
          "Created comprehensive README with local setup instructions",
          "Documented Alchemy RPC URL setup process step-by-step",
          "Wrote Metamask installation and configuration guide",
          "Provided private key extraction instructions with security warnings",
          "Listed Sepolia testnet faucet resources for obtaining free ETH",
          "Created .env.example template showing required environment variables",
          "Documented smart contract compilation and deployment commands",
          "Added Mermaid flowchart visualizing entire system process",
          "Included screenshots of homepage, forms, dashboards, and PIN security",
          "Published project to GitHub with proper .gitignore for security"
        ]
      }
    ],
    "gallery": [
      "https://github.com/realsudarshan/Criminalreportsystemusingblockchain/raw/main/assests/homepage.jpeg",
      "https://github.com/realsudarshan/Criminalreportsystemusingblockchain/blob/main/assests/oo2.jpeg?raw=true",
      "https://github.com/realsudarshan/Criminalreportsystemusingblockchain/blob/main/assests/oo1.jpeg?raw=true",
      "https://github.com/realsudarshan/Criminalreportsystemusingblockchain/blob/main/assests/oo3.jpeg?raw=true",
      "https://github.com/realsudarshan/Criminalreportsystemusingblockchain/blob/main/assests/oodashboard.jpeg?raw=true",
      "https://github.com/realsudarshan/Criminalreportsystemusingblockchain/blob/main/assests/sopin.jpeg?raw=true",
     
    ],
    "build": { "Git": "https://github.com/realsudarshan/Criminalreportsystemusingblockchain", "WebDemo": "", "AndroidDemo": null }
  }






];