"use client";

import React from 'react';
import { motion } from 'framer-motion';
// Corrected relative path to the hook
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { cn } from "@/lib/utils"; // Import cn utility

interface SectionProps {
    id: string;
    title: string;
    icon: React.ElementType;
    children: React.ReactNode;
    className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, icon: Icon, children, className }) => {
    const { ref, controls } = useScrollAnimation();

    return (
        <motion.section
            id={id}
            ref={ref}
            className={cn(
                "w-full py-16 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-border/10",
                className
            )}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 } }
            }}
            initial="hidden"
            animate={controls}
        >
            <div className="max-w-3xl mx-auto">
                <motion.div
                    className="flex items-center justify-center gap-3 mb-8 md:mb-12 text-center"
                     variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                    }}
                    // initial/animate are handled by parent stagger
                >
                     <Icon className="h-6 w-6 text-primary sm:h-7 sm:w-7" />
                    <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">{title}</h2>
                </motion.div>
                {children}
            </div>
        </motion.section>
    );
};

