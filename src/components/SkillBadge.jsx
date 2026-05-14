import React from 'react';

export function SkillBadge({ icon, label, variant = 'default' }) {
    const baseClass = "flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-semibold rounded-md uppercase tracking-wider";

    if (variant === 'highlight') {
        return (
            <span className={`${baseClass} bg-brand-neon/10 text-brand-neon border border-brand-neon/20`}>
                {icon && <span>{icon}</span>}
                {label}
            </span>
        );
    }

    return (
        <span className={`${baseClass} bg-brand-card border border-brand-border text-gray-300`}>
            {icon && <span className="text-brand-neon">{icon}</span>}
            {label}
        </span>
    );
}
