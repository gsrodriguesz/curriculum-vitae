import React from 'react';

export function ExperienceItem({ role, company, period, tasks }) {
    return (
        <div className="border border-brand-border bg-brand-card rounded-lg p-5 group hover:border-brand-neon/50 transition-colors duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                    <h3 className="text-xl font-bold uppercase tracking-wide text-white">{company}</h3>
                    <p className="text-brand-neon font-medium uppercase text-sm mt-1">{role}</p>
                </div>
                <div className="mt-2 md:mt-0 px-3 py-1 bg-white/5 border border-white/10 rounded-md text-gray-300 text-xs font-semibold uppercase tracking-wider self-start md:self-end">
                    {period}
                </div>
            </div>

            {tasks && tasks.length > 0 && (
                <ul className="text-gray-400 space-y-2 mt-4 text-sm leading-relaxed">
                    {tasks.map((task, idx) => (
                        <li key={idx} className="flex gap-2">
                            <span className="text-brand-neon opacity-70 mt-1">▸</span>
                            <span>{task}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
