"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Section } from './Section';
import { Button } from "@/components/ui/button";

const ContactSection = () => {
    // Based on resume info [cite: uploaded:Saksham_resume.pdf]
    const email = "kumarsaksham863@gmail.com";
    const phone = "+91-7818077835";
    const location = "Agra, Uttar Pradesh";

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
    };

    return (
        <Section id="contact" title="Get In Touch" icon={Mail}>
            <div className="text-center max-w-xl mx-auto">
                 <motion.p
                     className="text-muted-foreground text-base sm:text-lg mb-8"
                     variants={itemVariants}
                     // initial/animate handled by parent Section
                 >
                    I'm actively seeking Software Development Engineer internship opportunities and enjoy collaborating on interesting projects. Feel free to reach out via email or connect with me!
                </motion.p>
                <motion.div
                    variants={itemVariants}
                    // initial/animate handled by parent Section
                >
                    <Button
                        asChild
                        size="lg"
                        className="font-semibold shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        >
                        <a href={`mailto:${email}`}>
                            <Mail className="mr-2 h-4 w-4" /> {email}
                        </a>
                    </Button>
                </motion.div>
            </div>
        </Section>
    );
};

export default ContactSection;

