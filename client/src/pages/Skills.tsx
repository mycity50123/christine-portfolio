/**
 * Skills Page - Deep Tech Minimalism with Hover Effects
 * 
 * Features:
 * - Categorized skill cards (Frontend, Backend, Design, Tools)
 * - Hover animations with glow effects
 * - Icon support for each skill
 * - Responsive grid layout
 */

import { useState } from 'react';
import { Code2, Database, Palette, Wrench } from 'lucide-react';

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      id: 'frontend',
      title: '前端技術',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      borderColor: 'border-blue-500',
      skills: [
        { name: 'React', icon: '⚛️' },
        { name: 'Next.js', icon: '▲' },
        { name: 'TypeScript', icon: 'TS' },
        { name: 'Tailwind CSS', icon: '🎨' },
        { name: 'Framer Motion', icon: '✨' },
        { name: 'HTML5', icon: '📄' },
        { name: 'CSS3', icon: '🎭' },
        { name: 'JavaScript', icon: '⚡' },
      ]
    },

    {
      id: 'design',
      title: '設計工具',
      icon: Palette,
      color: 'from-purple-500 to-pink-500',
      borderColor: 'border-purple-500',
      skills: [
        { name: 'Figma', icon: '🎨' },
        { name: 'Adobe XD', icon: '🎯' },
        { name: 'Photoshop', icon: '📸' },
        { name: 'Illustrator', icon: '✏️' },
        { name: 'UI Design', icon: '🖼️' },
        { name: 'UX Design', icon: '🎭' },
        { name: 'Prototyping', icon: '🚀' },
        { name: 'Design Systems', icon: '📐' },
      ]
    },
    {
      id: 'tools',
      title: '其他工具',
      icon: Wrench,
      color: 'from-orange-500 to-red-500',
      borderColor: 'border-orange-500',
      skills: [
        { name: 'Git', icon: '📦' },
        { name: 'GitHub', icon: '🐙' },
        { name: 'VS Code', icon: '💻' },
        { name: 'Notion', icon: '📝' },
        { name: 'Jira', icon: '📊' },
        { name: 'Vite', icon: '⚡' },
        { name: 'SEO', icon: '🔍' },
        { name: 'Responsive Design', icon: '📱' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="content-wrapper mx-auto max-w-6xl px-4">
        {/* Page Title */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-foreground mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
            我的 <span className="text-accent">技能</span>
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-accent to-primary mt-4"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            我整合了超過 10+ 年的專業經驗，擅長使用各種現代技術與設計工具來解決複雜的產品挑戰
          </p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.id}>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-1 h-8 bg-gradient-to-b ${category.color} rounded-full`}></div>
                  <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {category.title}
                  </h2>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className={`
                        p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer
                        flex flex-col items-center justify-center gap-3 min-h-32
                        hover:scale-105 hover:shadow-lg
                        ${hoveredSkill === skill.name
                          ? `border-accent bg-card shadow-lg shadow-accent/30 ${category.borderColor}`
                          : `border-border hover:border-accent/50 bg-background/50`
                        }
                      `}
                    >
                      {/* Icon */}
                      <div className="text-4xl">{skill.icon}</div>

                      {/* Skill Name */}
                      <span
                        className={`font-semibold text-center transition-colors duration-300 ${
                          hoveredSkill === skill.name ? 'text-accent' : 'text-foreground'
                        }`}
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {skill.name}
                      </span>

                      {/* Glow Effect */}
                      {hoveredSkill === skill.name && (
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-br opacity-0 pointer-events-none"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Proficiency Summary */}
        <div className="mt-16 p-8 rounded-lg border border-border bg-card/30">
          <h3 className="text-xl font-bold text-foreground mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Proficiency Summary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-foreground font-semibold">Frontend Development</span>
                <span className="text-accent">95%</span>
              </div>
              <div className="h-2 bg-border rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-foreground font-semibold">UI/UX Design</span>
                <span className="text-accent">90%</span>
              </div>
              <div className="h-2 bg-border rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-foreground font-semibold">Backend Development</span>
                <span className="text-accent">80%</span>
              </div>
              <div className="h-2 bg-border rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-foreground font-semibold">DevOps & Tools</span>
                <span className="text-accent">75%</span>
              </div>
              <div className="h-2 bg-border rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
