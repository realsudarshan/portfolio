'use client'

import { ArrowUpRight, BookMarked, Blocks, FileCode2 } from 'lucide-react'
import Link from 'next/link'

const destinations = [
  {
    number: '01',
    title: 'Component Library',
    href: 'http://components.sudarshandhakal.com.np/',
    icon: Blocks,
    tone: 'coral',
    description: 'Reusable interface pieces for faster, clearer builds.',
  },
  {
    number: '02',
    title: 'skill.md Library',
    href: 'https://skills.sudarshandhakal.com.np/',
    icon: FileCode2,
    tone: 'lime',
    description: 'Practical skills and patterns collected for daily work.',
  },
  {
    number: '03',
    title: 'Curated Notes',
    href: 'https://notes.sudarshandhakal.com.np/',
    icon: BookMarked,
    tone: 'blue',
    description: 'Thoughts, references, and ideas worth returning to.',
  },
]

export function Toolkit() {
  return (
    <section className="destination-section max-w-7xl mx-auto px-6 py-16" aria-labelledby="archive-heading">
      <div className="section-label">
        <span id="archive-heading">A personal toolkit</span>
        <span className="section-line" />
        <span>Open to everyone</span>
      </div>
      <div className="destination-grid">
        {destinations.map((destination) => {
          const Icon = destination.icon
          return (
            <Link 
              className={`destination-card card-${destination.tone}`} 
              href={destination.href} 
              key={destination.number}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card-topline">
                <span className="card-index">{destination.number}</span>
                <span className="card-arrow"><ArrowUpRight aria-hidden="true" /></span>
              </div>
              <div className="card-copy">
                <div className="card-heading">
                  <Icon className="card-icon" aria-hidden="true" />
                  <h2>{destination.title}</h2>
                </div>
                <p>{destination.description}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
