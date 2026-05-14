import React from 'react';
import { SectionHeader } from './components/SectionHeader';
import { SkillBadge } from './components/SkillBadge';
import { ExperienceItem } from './components/ExperienceItem';
import { ProjectItem } from './components/ProjectItem';
import { EducationItem } from './components/EducationItem';

function App() {
    return (
        <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-neon selection:text-black">

            <header className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--color-brand-neon)_0%,_transparent_50%)] opacity-5 pointer-events-none"></div>

                <div className="max-w-5xl mx-auto px-6 md:px-12">
                    <div className="flex justify-between items-start">
                        <div className="w-full">
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
                                Gustavo<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 pr-3">Rodrigues</span>
                            </h1>

                            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm md:text-base text-gray-400 font-medium mb-10">
                                <span className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-brand-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    Vargem, SP
                                </span>
                                <span className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-brand-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    gustavoluizdsrodriguez@gmail.com
                                </span>
                                <span className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-brand-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    (11) 99509-5240
                                </span>
                                <a href="https://linkedin.com/in/gsrodriguesz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                                    <svg className="w-4 h-4 text-brand-neon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                    linkedin.com/in/gsrodriguesz
                                </a>
                                <a href="https://github.com/gsrodriguesz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                                    <svg className="w-4 h-4 text-brand-neon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                    github.com/gsrodriguesz
                                </a>
                            </div>

                            <div className="mt-8 pt-8 border-t border-brand-border">
                                <p className="text-gray-300 leading-relaxed md:text-lg max-w-3xl">
                                    Sou desenvolvedor com formação técnica em Informática pelo IFSP – Bragança Paulista e atualmente cursando Análise e Desenvolvimento de Sistemas na mesma instituição. Tenho experiência prática no desenvolvimento de aplicações web full stack com <span className="text-white font-semibold">Python, TypeScript, React e Next.js</span>, além de conhecimentos sólidos em infraestrutura de redes, administração Linux, hardware e banco de dados.
                                </p>
                                <p className="text-gray-300 leading-relaxed md:text-lg max-w-3xl mt-4">
                                    Desenvolvi projetos próprios do zero, como o <strong>Codex</strong>, uma plataforma de competições de programação. Fui 1º lugar local e 7º nacional na INTERIF, e 1º lugar no Desafio de Programação IFSP-BRA. Busco contribuir em times que valorizem boas práticas e aprendizado contínuo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* MAIN CONTENT */}
            <main className="max-w-5xl mx-auto px-6 md:px-12 pb-24">

                {/* SKILLS */}
                <section className="mb-20">
                    <SectionHeader subtitle="Arsenal Principal" title="Skills & Tecnologias" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-white uppercase tracking-wider font-bold mb-4 flex items-center gap-2">
                                Programação & Web
                            </h3>
                            <hr className='border-brand-neon py-2' />
                            <div className="flex flex-wrap gap-2 md:gap-3">
                                <SkillBadge label="React" variant="highlight" />
                                <SkillBadge label="Next.js" variant="highlight" />
                                <SkillBadge label="TypeScript" variant="highlight" />
                                <SkillBadge label="Python" />
                                <SkillBadge label="JavaScript" />
                                <SkillBadge label="HTML/CSS" />
                                <SkillBadge label="SQL" />
                            </div>
                        </div>

                        <div>
                            <h3 className="text-white uppercase tracking-wider font-bold mb-4 flex items-center gap-2">
                                Infra & Ferramentas
                            </h3>
                            <hr className='border-brand-neon py-2' />
                            <div className="flex flex-wrap gap-2 md:gap-3">
                                <SkillBadge label="Linux" />
                                <SkillBadge label="Windows Server" />
                                <SkillBadge label="Active Directory" />
                                <SkillBadge label="Redes (TCP/IP)" />
                                <SkillBadge label="VirtualBox/VMware" />
                                <SkillBadge label="ITSM / Suporte" />
                                <SkillBadge label="Hardware" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* PROJECTS */}
                <section className="mb-20">
                    <SectionHeader subtitle="Portfólio" title="Últimos Projetos" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ProjectItem
                            title="Codex – Plataforma de Competições de Programação"
                            description="Desenvolvedor (Projeto Pessoal). Configurei e administrei o ambiente de servidor da plataforma, implementando arquitetura cliente-servidor com API REST, autenticação de usuários e avaliação automática de código."
                            tags={['TypeScript', 'NestJS', 'React', 'Next.js', 'SQL']}
                        />
                        <ProjectItem
                            title="DinHero – Plataforma de Educação Financeira"
                            description="Desenvolvedor (Projeto Integrador – IFSP). Desenvolvi e implantei plataforma web. Projeto publicado na página oficial da feira de ciências Bragantec do IFSP-BRA."
                            tags={['React', 'Vite', 'Python', 'Flask', 'PostgreSQL']}
                        />
                    </div>
                </section>

                {/* EXPERIENCE */}
                <section className="mb-20">
                    <SectionHeader subtitle="Trajetória" title="Experiência Profissional" />

                    <div className="space-y-6">
                        <ExperienceItem
                            company="Freelancer"
                            role="Desenvolvedor Full Stack & Suporte"
                            period="2023 – Presente"
                            tasks={[
                                'Desenvolvimento de aplicações web, landing pages e sistemas customizados.',
                                'Configuração de servidores, suporte técnico de TI e manutenção de hardware/redes.'
                            ]}
                        />

                        <ExperienceItem
                            company="Feira de Ciências IFSP-BRA"
                            role="Monitor Voluntário de Laboratório de Informática"
                            period="2025"
                            tasks={[
                                'Prestei suporte técnico a visitantes e à organização no laboratório de informática durante o evento.',
                                'Desenvolvi um website gamificado usando Vite, React e MongoDB para apresentação do curso ao público, garantindo funcionamento contínuo.'
                            ]}
                        />
                    </div>
                </section>

                {/* EDUCATION */}
                <section className="mb-10">
                    <SectionHeader subtitle="Conquistas" title="Educação" />

                    <div className="space-y-8 mt-8">
                        <EducationItem
                            course="Tecnólogo em Análise e Desenvolvimento de Sistemas"
                            institution="IFSP – Bragança Paulista, SP"
                            period="Jan 2026 – Atual"
                            items={[]}
                        />

                        <EducationItem
                            course="Técnico em Informática Integrado ao Ensino Médio"
                            institution="IFSP – Bragança Paulista, SP"
                            period="Jan 2023 – Dez 2025"
                            items={[
                                'Eletricidade Aplicada e Hardware (60 h): componentes, dispositivos e manutenção prática.',
                                'Sistemas Operacionais (60 h): instalação e configuração de Windows e Linux, drivers, particionamento.',
                                'Redes de Computadores 1 e 2 (180 h): cabeamento, IP, DHCP, DNS, servidores Linux, proxy, firewall.'
                            ]}
                        />
                    </div>
                </section>

                <section>
                    {/* Dois botões, um para contato e um para o site de portifolio. o segundo botão em cor brand-neon e o primeiro com bordas brand-neon */}
                    <div className="flex gap-6 mt-20 justify-center">
                        <a
                            href="mailto:gustavoluizdsrodriguez@gmail.com"
                            className="border-2 border-brand-neon text-brand-neon hover:bg-brand-neon hover:text-black transition-colors duration-300 py-2 px-4 rounded-lg w-[50%] text-center font-semibold"
                        >
                            Contato
                        </a>
                        <a
                            href="https://gsrodriguesz.me/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-brand-neon text-black hover:bg-brand-neon/80 transition-colors duration-300 py-2 px-4 rounded-lg w-[50%] text-center font-semibold"
                        >
                            Portfólio
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
