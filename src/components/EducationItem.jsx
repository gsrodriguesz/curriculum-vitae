import React from 'react';

export function EducationItem({ course, institution, period, items }) {
    return (
        <div className="border-l-2 border-brand-neon/30 pl-4 md:pl-6 py-1 relative">
            <div className="absolute w-3 h-3 bg-brand-neon rounded-full -left-[7px] top-2"></div>

            <h3 className="text-lg font-bold uppercase">{course}</h3>
            <p className="text-gray-400 text-sm mt-1 mb-2">{institution} • {period}</p>

            {items && items.length > 0 && (
                <ul className="text-gray-400 text-sm space-y-1.5 mt-3">
                    {items.map((item, idx) => (
                        <li key={idx} className="flex gap-2">
                            <span className="text-brand-neon opacity-70">▹</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
