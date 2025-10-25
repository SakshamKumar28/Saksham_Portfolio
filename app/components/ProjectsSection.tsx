"use client";

import React from 'react';
// Correct import path for next/image
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Briefcase, Cpu, Server, Lightbulb } from 'lucide-react';
import { Section } from './Section';

// Data based on resume [cite: uploaded:Saksham_resume.pdf]
const projectsData = [
    {
        title: "MicroX-AI: Medical Image Analysis Platform",
        description: "Engineered a full-stack MERN medical imaging platform integrating real-time AI analysis (TensorFlow/Keras). Features secure Cloudinary storage and Vite optimization.",
        tags: ["MERN", "TensorFlow", "Keras", "Cloudinary", "Vite", "Node.js", "React"],
        icon: Cpu,
        imageUrl: `https://i.pinimg.com/1200x/3c/24/51/3c2451c59d860a15ff1f3f315f55c7a6.jpg`,
        link: "#"
    },
    {
        title: "Telemedicine Platform - SIH 2025",
        description: "Architected a scalable backend for 1000+ concurrent users, built secure REST APIs, and created an NLP-based AI symptom checker for the Smart India Hackathon.",
        tags: ["Node.js", "Express.js", "REST API", "NLP", "AI", "Security", "Scalability"],
        icon: Server,
        imageUrl: `https://i.pinimg.com/1200x/3c/24/51/3c2451c59d860a15ff1f3f315f55c7a6.jpg`,
        link: "#"
    },
    {
        title: "Fake News Detection System",
        description: "Developed an NLP classification model (92% accuracy) by processing 20k+ articles, implementing a full ML pipeline from data cleaning to deployment.",
        tags: ["Machine Learning", "NLP", "Python", "Scikit-Learn", "Pandas", "Data Cleaning"],
        icon: Lightbulb,
        imageUrl: `https://i.pinimg.com/1200x/3c/24/51/3c2451c59d860a15ff1f3f315f55c7a6.jpg`,
        link: "#"
    },
];

const ProjectsSection = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: (i: number) => ({
            opacity: 1, y: 0, scale: 1,
            transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
        })
    };

    return (
        <Section id="projects" title="Projects" icon={Briefcase}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
                {projectsData.map((project, index) => (
                    <motion.div
                        key={project.title}
                        custom={index}
                        variants={cardVariants}
                        // initial/animate handled by parent Section
                        whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                        className="bg-card dark:bg-secondary/20 rounded-lg overflow-hidden shadow-md border border-border/10 flex flex-col group transition-all duration-300"
                    >
                         <div className="relative h-48 w-full overflow-hidden">
                            <a href={project.link || '#'} target="_blank" rel="noopener noreferrer" aria-label={`View project: ${project.title}`}>
                                <Image
                                    src={project.imageUrl || `https://placehold.co/600x400/cccccc/ffffff?text=${project.title.split(':')[0]}`}
                                    alt={project.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    sizes="(max-width: 768px) 100vw, 50vw" // Adjusted sizes
                                    className="transition-transform duration-300 group-hover:scale-105"
                                    onError={(e) => { e.currentTarget.src = `https://placehold.co/600x400/cccccc/ffffff?text=Image+Error`; }}
                                />
                             </a>
                        </div>
                        <div className="p-5 flex flex-col flex-grow">
                             <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                             <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/10">
                                {project.tags.map(tag => (
                                    <span key={tag} className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground/80 px-2.5 py-0.5 rounded-full text-xs font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                         </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default ProjectsSection;

