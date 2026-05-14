import React from 'react';

export function SectionHeader({ title, subtitle, className = '' }) {
    return (
        <div className={`mb-8 ${className} flex flex-col items-start`}>
            {subtitle && (
                <span className="inline-block bg-brand-neon text-black text-xs font-bold px-2 py-1 uppercase tracking-wider mb-2">
                    {subtitle}
                </span>
            )}
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight relative inline-block">
                {title}
                <div className="absolute -bottom-2 left-0 h-1 w-full bg-brand-neon/30">
                    <div className="h-full bg-brand-neon w-1/3"></div>
                </div>
            </h2>
        </div>
    );
}
