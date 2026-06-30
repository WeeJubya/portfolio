/**
 * File: Section.tsx
 * Purpose: Small reusable section wrapper component.
 */

import React from 'react'

/**
 * SectionProps interface
 * @interface
 * @property id - html id for anchor linking
 * @property title - section title
 * @property children - content nodes
 */
export interface SectionProps {
  id?: string
  title?: string
  children?: React.ReactNode
}

/**
 * Section component
 * Provides consistent spacing and heading for page sections.
 */
export const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {title && <h3 className="text-2xl font-semibold text-slate-900">{title}</h3>}
        <div className="mt-6">{children}</div>
      </div>
    </section>
  )
}

export default Section
