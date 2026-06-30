/**
 * File: Hero.tsx
 * Purpose: Hero section component for the portfolio site.
 */

import React from 'react'

/**
 * HeroProps interface
 * @interface
 * @property title - main title text
 * @property subtitle - supporting subtitle text
 * @property img - optional image src for visual
 */
export interface HeroProps {
  title: string
  subtitle: string
  img?: string
}

/**
 * Hero component
 * Large visual introduction with title, subtitle and action buttons.
 */
export const Hero: React.FC<HeroProps> = ({ title, subtitle, img }) => {
  return (
    <section className="w-full py-12 px-6 md:px-12 bg-slate-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            {title}
          </h2>
          <p className="mt-4 text-lg text-slate-700">{subtitle}</p>

          <div className="mt-6 flex gap-3">
            <a
              href="#projects"
              className="rounded-md bg-teal-600 px-4 py-2 text-white shadow hover:bg-teal-700"
            >
              View Projects
            </a>
            <a
              href="#about"
              className="rounded-md border border-slate-200 px-4 py-2 text-slate-700 hover:bg-slate-100"
            >
              About
            </a>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg bg-white">
          <img
            src={img ?? 'https://pub-cdn.sider.ai/u/U0X7H47R6WA/web-coder/6a441b8052b1a03547268df4/resource/4382ed6f-d4d8-460c-a4e7-817e62ec7e89.jpg'}
            alt="Portfolio visual"
            className="w-full h-64 object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
