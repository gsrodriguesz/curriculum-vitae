import React from 'react';

export function ProjectItem({ title, description, tags, link }) {
    return (
        <div className="border border-brand-border bg-brand-card p-6 flex flex-col h-full hover:border-brand-neon/50 transition-colors duration-300">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold uppercase tracking-wide group-hover:text-brand-neon transition-colors">
                    {title}
                </h3>
                {link && (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-neon">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                    </a>
                )}
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {description}
            </p>

            {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-auto">
                    {tags.map((tag, idx) => (
                        <span key={idx} className="text-xs font-semibold px-2 py-1 bg-white/5 border border-white/10 rounded text-gray-300 uppercase">
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}
