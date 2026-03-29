import React from 'react';
import { motion } from 'motion/react';
import { Scissors, ArrowDown, Terminal, Cpu, Code2 } from 'lucide-react';
import { DottedLine } from './ui/DottedLine';
import { BarcodeSection } from './ui/BarcodeSection';
import { SectionHeader } from './ui/SectionHeader';
import { ProjectItem } from './ui/ProjectItem';
import { SkillIcon } from './ui/SkillIcon';

export default function Resume() {
  const currentDate = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit'
  }).replace(/\//g, '.');

  const spawnHeart = (e: React.MouseEvent) => {
    const numHearts = 3 + Math.floor(Math.random() * 3); // Spawn 3 to 5 hearts
    
    for (let i = 0; i < numHearts; i++) {
      setTimeout(() => {
        const heart = document.createElement('pre');
        heart.innerHTML = ` _  _ \n/ \\/ \\\n\\    /\n \\  / \n  \\/  `;
        heart.style.position = 'fixed';
        heart.style.left = `${e.clientX - 20}px`;
        heart.style.top = `${e.clientY - 20}px`;
        heart.style.fontSize = `${6 + Math.random() * 4}px`;
        heart.style.lineHeight = '1';
        heart.style.fontFamily = 'monospace';
        heart.style.color = 'black';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        heart.style.transition = `all ${1.5 + Math.random()}s cubic-bezier(0.25, 1, 0.5, 1)`;
        document.body.appendChild(heart);
        
        const driftX = (Math.random() - 0.5) * 150;
        const driftY = -100 - Math.random() * 150;
        const rotate = (Math.random() - 0.5) * 60;

        requestAnimationFrame(() => {
          heart.style.transform = `translate(${driftX}px, ${driftY}px) scale(${1 + Math.random()}) rotate(${rotate}deg)`;
          heart.style.opacity = '0';
        });

        setTimeout(() => heart.remove(), 3000);
      }, i * 100); // Stagger the spawns slightly
    }
  };

  return (
    <>
      <div className="thermal-paper w-full max-w-[800px] p-8 md:p-12 border-x border-black/5">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div className="text-[10px] 2xl:text-xs font-bold">
            NO. 122 <br />
            {currentDate}
          </div>
          <div className="text-right">
            <div className="flex gap-1 justify-end mb-1">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-[2px] h-4 bg-black" style={{ height: `${Math.random() * 10 + 10}px` }} />
              ))}
            </div>
            <span className="text-[8px] 2xl:text-[10px] font-bold">9 786175 257665</span>
          </div>
        </div>

        <h1 className="text-4xl 2xl:text-5xl font-bold tracking-tighter mb-8 leading-none border-y-2 border-black py-4 text-center">
          PORTFOLIO
        </h1>

        {/* Profile Section */}
        <div className="flex gap-6 mb-8">
          <div className="w-40 h-40 border-2 border-black relative overflow-hidden shrink-0">
            <img 
              src="https://picsum.photos/seed/portrait/300/300?grayscale" 
              alt="Profile" 
              className="w-full h-full object-cover grayscale contrast-200 brightness-125"
              style={{ imageRendering: 'pixelated' }}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 dither-bg opacity-30 pointer-events-none" />
          </div>
          <div className="flex flex-col justify-center">
            <SectionHeader title="PROFILE" />
            <h2 className="text-2xl 2xl:text-3xl font-bold leading-none mb-2 uppercase">Justine Llamera</h2>
            <p 
              className="text-[10px] 2xl:text-xs leading-tight font-bold opacity-70 cursor-pointer hover:opacity-100 transition-opacity select-none"
              onClick={spawnHeart}
            >
              "I'm broke, either try hard or die not trying :((  Click this for some hearts &lt;3."
            </p>
            <div className="mt-4 flex flex-col gap-1 text-[10px] 2xl:text-xs font-bold">
              <a href="https://github.com/CallMeLlms" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-2">
                [GITHUB] github.com/CallMeLlms
              </a>
              <a href="https://www.linkedin.com/in/justine-llamera-4107842a3/" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-2">
                [LINKEDIN] justine-llamera
              </a>
            </div>
          </div>
        </div>

        <DottedLine />

        {/* Work Experience */}
        <div className="mb-8">
          <SectionHeader title="WORK EXPERIENCE" />
          <div className="flex flex-col items-center justify-center py-4 opacity-60">
            <pre className="font-mono text-[10px] 2xl:text-xs leading-tight text-center">
{`  .-""""-.
 /  o  o  \\
|          |
|   .--.   |
 \\        /
  \`"----"\``}
            </pre>
            <p className="mt-4 text-[10px] 2xl:text-xs font-bold uppercase tracking-widest">No Data Found</p>
          </div>
        </div>

        <DottedLine />

        {/* Internship Experience */}
        <div className="mb-8">
          <SectionHeader title="INTERNSHIP EXPERIENCE" />
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold uppercase text-sm">MoodLearning Inc. (Student Intern)</h3>
                <span className="text-[10px] 2xl:text-xs font-bold shrink-0 text-right">OCT 2025 - APR 2026<br/>(500 HRS)</span>
              </div>
              <div className="text-[10px] 2xl:text-xs font-bold mb-2 opacity-90">Front-end and backend development</div>
              <div className="text-[10px] 2xl:text-xs font-bold mb-1 opacity-80">NHWR (National Health Workforce Registry) – Feature Dev & Optimization:</div>
              <ul className="text-[10px] 2xl:text-xs leading-tight opacity-80 space-y-1">
                <li className="flex gap-2"><span className="shrink-0">-</span><span>Developed role-based access impersonation to enable secure delegation of account authority.</span></li>
                <li className="flex gap-2"><span className="shrink-0">-</span><span>Optimized dashboard performance through efficient data queries, caching layers, and indexing for large-scale visualizations.</span></li>
                <li className="flex gap-2"><span className="shrink-0">-</span><span>Implemented facility admin conflict resolution workflow:</span></li>
                <li className="flex gap-2 ml-4"><span className="shrink-0">*</span><span>Supports transfer of facility ownership when a new admin registers for an existing facility.</span></li>
                <li className="flex gap-2 ml-4"><span className="shrink-0">*</span><span>Handles submission of proof (PDF, PNG, JPG) and review by Master/Super Admin.</span></li>
                <li className="flex gap-2 ml-4"><span className="shrink-0">*</span><span>Ensures seamless reversion of previous admin accounts after ownership transfer.</span></li>
                <li className="flex gap-2"><span className="shrink-0">-</span><span>Enhanced Mailhog SMTP verification with a new check for existing accounts, restricting uploads to supported formats.</span></li>
                <li className="flex gap-2"><span className="shrink-0">-</span><span>Improved UI and UX for more intuitive navigation, streamlined workflows, and clearer user interactions.</span></li>
              </ul>
            </div>
          </div>
        </div>

        <DottedLine />

        {/* Projects */}
        <div className="mb-8">
          <SectionHeader title="PROJECTS" />
          <div 
            className="max-h-[360px] overflow-y-auto pr-4"
            style={{ 
              scrollbarWidth: 'thin', 
              scrollbarColor: 'rgba(0,0,0,0.3) transparent' 
            }}
          >
            <ProjectItem 
              title="Learning Management System - Web Mobile (MathSync)" 
              role="Full-Stack Developer | Focus: UI/UX, Responsive Design, Zustand State Management"
              stack="ReactJS, React Native, Express, Tailwind (Nativewind), Zustand, Mongo DB"
              bullets={[
                "Engineered cross-platform applications using React and React Native, ensuring a unified codebase and consistent user experience across web and mobile.",
                "Architected efficient frontend state management using Zustand, reducing boilerplate code and improving app performance compared to standard Prop Drilling.",
                "Developed responsive, high-fidelity interfaces using Tailwind CSS and Nativewind, focusing on intuitive navigation and user engagement.",
                "Integrated a robust Express.js backend to handle data flow, ensuring seamless communication between the client-side UI and server-side logic."
              ]}
              qty="01" 
              tags="REACT / NATIVE / EXPRESS" 
            />
            <ProjectItem 
              title="batumBAKAL [ONGOING]" 
              role="Full-Stack Developer | Focus: Backend Architecture, Authentication, Mobile Product Engineering"
              stack="Node.js, Express, PostgreSQL, Prisma, JWT, React Native, Expo, Zustand, Axios, Tailwind (NativeWind)"
              bullets={[
                "Engineered a robust backend architecture with Prisma and PostgreSQL, modeling users, refresh tokens, verification codes, programs, and nested workout days with indexed relationships and cascade-delete behavior to ensure data integrity.",
                "Implemented secure authentication flows using JWT access tokens with short expiry, rotating refresh tokens, and hashed password storage, including automatic client-side request replay after token renewal for seamless session continuity.",
                "Developed a mobile-first workout management system with Expo Router, featuring guarded routes, a five-tab navigation model, and a draft-driven program builder allowing staged creation of full workout programs before final submission.",
                "Architected structured state and API layers using Zustand for client-side authentication state and Axios interceptors for request handling, refresh token management, and local JWT persistence, separating UI from transport concerns.",
                "Built intuitive and cohesive UI components, reusable layouts, bottom sheets, Skia-based charting, and animated native elements, reinforcing a dark, high-contrast fitness theme across mobile platforms.",
                "Supported web frontend development with a responsive Next.js auth shell and reusable form components, showcasing component reuse, responsive layouts, and app-router structure.",
                "Strengthened workflow logic by enforcing user-scoped program retrieval, ordered workout-day submission, and staged data persistence, transforming a generic CRUD interface into a practical fitness management tool.",
                "Technical Skills: Node.js, Express, PostgreSQL, Prisma, JWT, bcrypt, CORS, dotenv, Axios, React Native, Expo, Expo Router, TypeScript, Zustand, React Hook Form, NativeWind, Tailwind-style styling, React Navigation, Reanimated, Skia, @gorhom/bottom-sheet, Next.js, shadcn-style UI components"
              ]}
              qty="02" 
              tags="NODE.JS / POSTGRESQL / EXPO" 
            />
          </div>
        </div>

        <DottedLine />

        {/* Skills */}
        <div className="mb-8">
          <SectionHeader title="SKILLS" />
          <div className="space-y-2 text-xs 2xl:text-sm leading-tight">
            <div className="flex gap-4">
              <span className="font-bold uppercase w-[180px] shrink-0">Languages:</span>
              <span className="opacity-80">Python, SQL, JavaScript, TypeScript, Java, HTML, CSS</span>
            </div>
            <div className="flex gap-4">
              <span className="font-bold uppercase w-[180px] shrink-0">Frameworks:</span>
              <span className="opacity-80">Express, Next.js, React Native, React, Bootstrap, Tailwind, Laravel, Prisma</span>
            </div>
            <div className="flex gap-4">
              <span className="font-bold uppercase w-[180px] shrink-0">Runtime/Environments:</span>
              <span className="opacity-80">Node.js</span>
            </div>
            <div className="flex gap-4">
              <span className="font-bold uppercase w-[180px] shrink-0">Developer Tools:</span>
              <span className="opacity-80">Git</span>
            </div>
            <div className="flex gap-4">
              <span className="font-bold uppercase w-[180px] shrink-0">Design Tools:</span>
              <span className="opacity-80">Figma, Photoshop</span>
            </div>
          </div>
        </div>

        <DottedLine />

        {/* Footer */}
        <div className="text-center">
          <div className="text-sm 2xl:text-base font-bold mb-4 uppercase tracking-widest">
            [TOTAL PROJECTS: 02]
          </div>
          
          <BarcodeSection value="JUSTINE_LLAMERA_RESUME_2026" label={currentDate} />
          
          <div className="flex justify-center gap-4 mt-8 opacity-20">
            <Scissors size={16} />
            <div className="flex-1 border-b border-dashed border-black h-2" />
          </div>
          
          <div className="mt-4 text-[8px] 2xl:text-[10px] font-bold opacity-40 uppercase">
            Thank you for your visit // Serial: 0x8823-FF21
          </div>
        </div>
      </div>
    </>
  );
}
