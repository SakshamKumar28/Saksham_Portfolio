"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { Section } from './Section';

const AboutSection = () => {
    // Content based on resume summary [cite: uploaded:Saksham_resume.pdf]
    const summary = `I am a third-year Computer Science student specializing in full-stack MERN development and AI/ML applications. With experience building production-ready applications focusing on scalable backends, secure authentication, and real-time data processing, including medical AI platforms and hackathon projects. Eager to contribute technical expertise in a collaborative environment.`;

    const paragraphVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
    };

    return (
        <Section id="about" title="About Me" icon={User}>
            <motion.p
                className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl mx-auto text-center"
                variants={paragraphVariants}
                // initial/animate are handled by the parent Section
            >
                {summary}
            </motion.p>
            {/* Optional: Add button */}
            {/* <motion.div className="mt-8 text-center" variants={paragraphVariants}> */}
            {/* <Button>Download Resume</Button> */}
            {/* </motion.div> */}
        </Section>
    );
};

export default AboutSection;

