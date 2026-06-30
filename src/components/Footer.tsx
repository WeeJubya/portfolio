/**
 * File: Footer.tsx
 * Purpose: Footer with contact and small site details.
 */

import React from 'react'

/**
 * FooterProps interface
 * @interface
 * @property email - contact email address
 */
export interface FooterProps {
  email: string
}

/**
 * Footer component
 * Renders contact info and small copyright.
 */
export const Footer: React.FC<FooterProps> = ({ email }) => {
  return (
    <footer className="w-full border-t py-8 px-6 md:px-12 bg-slate-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-700">
          © {new Date().getFullYear()} Glynn Williams — eLearning Portfolio
        </div>
        <div className="text-sm">
          <a href={`mailto:${email}`} className="text-teal-600 hover:underline">
            {email}
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
