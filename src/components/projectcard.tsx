/**
 * File: ProjectCard.tsx
 * Purpose: Small card component to represent a project in the grid.
 */

import React from 'react'

export interface ProjectCardProps {
  title: string
  subtitle?: string
  excerpt: string
  img?: string
  onOpen: () => void
  tags?: string[]
}

/**
 * ProjectCard component
 * Displays a compact preview of a project and triggers open action.
 */
export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  excerpt,
  img,
  onOpen,
  tags = [],
}) => {
  return (
    <article className="bg-white rounded-lg shadow hover:shadow-md overflow-hidden">
      <div className="h-36 md:h-44 w-full bg-slate-100">
        <img src={img ?? 'https://pub-cdn.sider.ai/u/U0X7H47R6WA/web-coder/6a441b8052b1a03547268df4/resource/e6b2e0a9-f48b-4a63-9fc4-4899e7eb64a3.jpg'} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h4 className="font-semibold text-slate-900">{title}</h4>
        {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
        <p className="mt-2 text-sm text-slate-600">{excerpt}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex gap-2">
            {tags.slice(0, 3).map((t) => (
              <span key={t} className="text-xs bg-slate-100 px-2 py-1 rounded">
                {t}
              </span>
            ))}
          </div>
          <button onClick={onOpen} className="text-sm text-teal-600 hover:underline">
            Read
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
