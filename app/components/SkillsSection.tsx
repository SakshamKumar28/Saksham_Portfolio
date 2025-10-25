"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, AppWindow, Server, Database, Cpu, Code } from 'lucide-react';
import { Section } from './Section';

// Skills data based on resume [cite: uploaded:Saksham_resume.pdf]
const skillCategories = [
    { name: "Frontend", skills: ["React", "JavaScript (ES6+)", "HTML", "Tailwind CSS"], icon: AppWindow },
    { name: "Backend", skills: ["Node.js", "Express.js", "REST", "JWT", "WEBRTC"], icon: Server },
    { name: "Databases", skills: ["MongoDB", "PostgreSQL", "SQL"], icon: Database },
    { name: "AI/ML", skills: ["Python", "TensorFlow", "Keras", "Scikit-Learn", "Pandas", "Numpy", "NLP"], icon: Cpu },
    { name: "DevOps & Tools", skills: ["Git", "GitHub", "Docker", "Postman", "Agile", "AWS", "Azure"], icon: Code },
    { name: "Languages", skills: ["Java", "C/C++"], icon: Code },
];

const SkillsSection = () => {
    const skillTagVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: (i: number) => ({
            opacity: 1,
            scale: 1,
            transition: { delay: i * 0.05, duration: 0.3 }
        })
    };

    return (
        <Section id="skills" title="Skills" icon={Lightbulb}>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {skillCategories.map((category, categoryIndex) => (
                    <motion.div
                        key={category.name}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: {
                                opacity: 1, y: 0,
                                transition: {
                                    delay: categoryIndex * 0.1, duration: 0.5,
                                    delayChildren: 0.2 + categoryIndex * 0.1, staggerChildren: 0.05
                                }
                             }
                        }}
                        // initial/animate handled by parent Section
                        className="bg-card dark:bg-secondary/20 p-6 rounded-lg shadow-sm border border-border/10 flex flex-col"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <category.icon className="h-5 w-5 text-primary" />
                            <h3 className="text-lg font-semibold text-foreground">{category.name}</h3>
                        </div>
                        <motion.ul
                            className="flex flex-wrap gap-2"
                            initial="hidden"
                            animate="visible" // Will inherit control from parent Section
                            // Variants for stagger are in parent motion.div
                        >
                            {category.skills.map((skill, skillIndex) => (
                                <motion.li
                                    key={skill}
                                    custom={skillIndex}
                                    variants={skillTagVariants}
                                    className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground/80 px-3 py-1 rounded-full text-xs font-medium"
                                >
                                    {skill}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default SkillsSection;

