/**
 * File: Home.tsx
 * Purpose: Single-page home that contains all sections of the portfolio.
 */

import React, { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import Footer from '../components/Footer'
import { PROJECTS, SITE } from '../data/portfolio'
import type { Project } from '../data/portfolio'

/**
 * Home component
 * Main single-page layout combining hero, about, skills, projects and contact.
 */
export default function Home() {
  const [selected, setSelected] = useState<Project | null>(null)

  /**
   * openProject - set selected project to open the modal
   * @param id - project id
   */
  function openProject(id: string) {
    const p = PROJECTS.find((x) => x.id === id) ?? null
    setSelected(p)
  }

  /**
   * closeModal - reset selection to close modal
   */
  function closeModal() {
    setSelected(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-white text-slate-900">
      <Header onContactClick={() => (window.location.href = `mailto:${SITE.contactEmail}`)} />
      <Hero title={SITE.title} subtitle={SITE.heroSubtitle} img="https://pub-cdn.sider.ai/u/U0X7H47R6WA/web-coder/6a441b8052b1a03547268df4/resource/da1b8651-6da7-4ac7-9619-07ff1241d2ef.jpg" />

      <Section id="about" title="About">
        <p className="text-slate-700">{SITE.about}</p>
      </Section>

      <Section id="skills" title="Skills & Technologies">
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
          {SITE.skills.map((s) => (
            <div key={s} className="bg-white rounded-md p-3 text-sm shadow">
              {s}
            </div>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <ProjectCard
              key={p.id}
              title={p.title}
              subtitle={p.subtitle}
              excerpt={p.excerpt}
              img={p.img}
              tags={p.tags}
              onOpen={() => openProject(p.id)}
            />
          ))}
        </div>
      </Section>

      <Section id="testimonials" title="Testimonials">
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {SITE.testimonials.map((t) => (
            <blockquote key={t.author} className="bg-white p-4 rounded shadow text-slate-700">
              <p className="text-sm">“{t.text}”</p>
              <footer className="mt-3 text-xs text-slate-500">— {t.author}</footer>
            </blockquote>
          ))}
        </div>
      </Section>

      <Footer email={SITE.contactEmail} />

      <ProjectModal project={selected} onClose={closeModal} />
    </div>
  )
}
