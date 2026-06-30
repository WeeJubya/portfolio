/**
 * File: ProjectModal.tsx
 * Purpose: Modal component to show project details without routing.
 */

import React from 'react'
import { X } from 'lucide-react'
import type { Project } from '../data/portfolio'

/**
 * ProjectModalProps interface
 * @interface
 * @property project - selected project to display
 * @property onClose - callback to close modal
 */
export interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

/**
 * ProjectModal component
 * Renders an overlay modal with project content.
 */
export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
    >
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative max-w-3xl w-full bg-white rounded-lg shadow-lg overflow-auto max-h-[90vh]">
        <div className="p-4 border-b flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold">{project.title}</h3>
            {project.subtitle && <p className="text-sm text-slate-500">{project.subtitle}</p>}
          </div>
          <button onClick={onClose} aria-label="Close" className="p-2">
            <X />
          </button>
        </div>

        <div className="p-6">
          <img src={project.img ?? 'https://pub-cdn.sider.ai/u/U0X7H47R6WA/web-coder/6a441b8052b1a03547268df4/resource/15aa662a-2c7c-4d66-a26b-ab6408ecc240.jpg'} alt={project.title} className="w-full h-44 object-cover rounded" />
          <p className="mt-4 text-slate-700">{project.details}</p>

          {project.highlights && (
            <ul className="mt-4 list-disc list-inside text-slate-700">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          )}

          <div className="mt-6 flex justify-end gap-3">
            <button onClick={onClose} className="rounded-md px-4 py-2 border bg-white">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
