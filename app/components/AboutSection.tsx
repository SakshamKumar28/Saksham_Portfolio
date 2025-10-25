"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { Section } from './Section';

// --- SVG Icons for Skills (Keep these) ---
const ReactIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" {...props}><circle cx="0" cy="0" r="2.05" fill="currentColor"/><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>
);
const NodeJSIcon = (props: React.SVGProps<SVGSVGElement>) => (
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M11.987 1.99a.987.987 0 00-.987.987v3.085a.987.987 0 00.987.987h.026a.987.987 0 00.987-.987V2.977a.987.987 0 00-.987-.987h-.026zm.026 15.043a.987.987 0 00-.987.987v3.085a.987.987 0 00.987.987h.026a.987.987 0 00.987-.987v-3.085a.987.987 0 00-.987-.987h-.026zM5.405 4.31a.987.987 0 00-.855.494L1.465 9.89a.987.987 0 000 .987l3.085 4.936a.987.987 0 00.855.494h.026a.987.987 0 00.855-.494l3.085-4.936a.987.987 0 000-.987L6.286 4.804a.987.987 0 00-.855-.494h-.026zm13.19 0a.987.987 0 00-.855.494l-3.085 4.936a.987.987 0 000 .987l3.085 4.936a.987.987 0 00.855.494h.026a.987.987 0 00.855-.494l3.085-4.936a.987.987 0 000-.987l-3.085-4.936a.987.987 0 00-.855-.494h-.026z"/></svg>
);
const PythonIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.71 14.71c-.39.39-1.02.39-1.41 0l-1.59-1.59c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41zm-6.83-6.83c.39-.39 1.02-.39 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41s-1.02.39-1.41 0l-1.59-1.59c-.39-.39-.39-1.02 0-1.41z"/><path d="M12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6v4c-1.1 0-2 .9-2 2s.9 2 2 2v4z" fill="#FFD43B"/><path d="M12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6v-4c1.1 0 2-.9 2-2s-.9-2-2-2V6z" fill="#306998"/></svg>
);
const DockerIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M22 12.5v-1c0-.3-.1-.5-.3-.7l-2.6-2.3c-.3-.3-.8-.3-1.1 0-.3.3-.3.8 0 1.1l1.1 1v4.8c0 .4-.2.8-.5 1l-3.3 1.9c-.3.2-.7.2-1 0l-3.7-2.1c-.3-.2-.7-.2-1 0l-3.7 2.1c-.3.2-.7.2-1 0l-3.3-1.9c-.3-.2-.5-.6-.5-1v-4.8l1.1-1c.3-.3.3-.8 0-1.1-.3-.3-.8-.3-1.1 0L2.3 8.5c-.2.2-.3.4-.3.7v1c0 .3.1.5.3.7l2.6 2.3v1l-2.6 2.3c-.2.2-.3.4-.3.7v1c0 .3.1.5.3.7l2.6 2.3c.3.3.8.3 1.1 0l3.7-2.1 3.7 2.1c.3.3.8.3 1.1 0l3.7-2.1 3.7 2.1c.3.3.8.3 1.1 0l2.6-2.3c.2-.2.3-.4.3-.7v-1c0-.3-.1-.5-.3-.7l-2.6-2.3v-1zm-6.6-6.1c.3-.3.3-.8 0-1.1-.3-.3-.8-.3-1.1 0l-1.4 1.3-1.4-1.3c-.3-.3-.8-.3-1.1 0-.3.3-.3.8 0 1.1l1.4 1.3-1.4 1.3c-.3.3-.3.8 0 1.1.2.2.4.3.6.3s.4-.1.6-.3l1.4-1.3 1.4 1.3c.2.2.4.3.6.3s.4-.1.6-.3c.3-.3.3-.8 0-1.1l-1.4-1.3z"/></svg>
);
const JavaScriptIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M0 0h24v24H0z" fill="none"/><path d="M1 1v22h22V1H1zm19.1 19.1h-4.4v-2.2h4.4v2.2zm0-4.4h-4.4v-2.2h4.4v2.2zm0-4.4h-4.4v-2.2h4.4v2.2zm-6.6 8.8h-4.4v-2.2h4.4v2.2zm0-4.4h-4.4v-2.2h4.4v2.2zm0-4.4h-4.4v-2.2h4.4v2.2zm0-4.4h-4.4V3.9h4.4v2.2zm-6.6 13.2H3.9v-2.2h4.4v2.2zm0-4.4H3.9v-2.2h4.4v2.2z"/></svg>
);
const MongoDbIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 14.5c-1.78 0-3.35-1.07-4.01-2.65-.2-.48-.05-.96.34-1.22.4-.26.98-.1 1.22.34.45 1.08 1.53 1.83 2.8 1.83s2.35-.75 2.8-1.83c.24-.44.81-.59 1.22-.34.4.26.54.74.34 1.22-.66 1.58-2.23 2.65-4.01 2.65zm4.88-6.12c-.4-.26-.98-.1-1.22.34-.45 1.08-1.53 1.83-2.8 1.83s-2.35-.75-2.8-1.83c-.24-.44-.81-.59-1.22-.34-.4.26-.54.74-.34 1.22.88 2.1 2.91 3.48 5.36 3.48s4.48-1.38 5.36-3.48c.2-.48.05-.96-.34-1.22z"/></svg>
);
const TailwindIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12.001 4.8c-3.033 0-5.485 2.103-5.485 5.925 0 2.213.91 3.998 2.458 4.965.418.257.697.16.827-.184.13-.344.053-.585-.084-.819-.137-.234-.33-.497-.33-.788 0-.417.18-.748.513-.984.512-.367.589-.474.99-.865.4-.391.442-.585.399-1.002-.043-.418-.33-.788-.748-1.002-.418-.214-.99-.344-1.635-.344-1.373 0-2.27.705-2.27 1.954 0 1.045.748 1.635 1.762 1.635.952 0 1.417-.344 1.417-.962 0-.418-.18-.705-.483-.984-.303-.28-.705-.474-1.087-.474-.59 0-1.13.257-1.33.919-.18.618.043 1.54.91 2.146.618.418 1.33.618 2.06.618 1.416 0 2.72-.661 3.515-1.83.795-1.17.953-2.617.953-3.83 0-2.459-1.373-4.18-3.663-4.18zM19.115 4.8c-3.033 0-5.485 2.103-5.485 5.925 0 2.213.91 3.998 2.458 4.965.418.257.697.16.827-.184.13-.344.053-.585-.084-.819-.137-.234-.33-.497-.33-.788 0-.417.18-.748.513-.984.512-.367.589-.474.99-.865.4-.391.442-.585.399-1.002-.043-.418-.33-.788-.748-1.002-.418-.214-.99-.344-1.635-.344-1.373 0-2.27.705-2.27 1.954 0 1.045.748 1.635 1.762 1.635.952 0 1.417-.344 1.417-.962 0-.418-.18-.705-.483-.984-.303-.28-.705-.474-1.087-.474-.59 0-1.13.257-1.33.919-.18.618.043 1.54.91 2.146.618.418 1.33.618 2.06.618 1.416 0 2.72-.661 3.515-1.83.795-1.17.953-2.617.953-3.83 0-2.459-1.373-4.18-3.663-4.18z"/></svg>
);
// --- End SVG Icons ---


// --- Skills Data ---
const skills = [
  // Simplified positioning
  { id: 1, name: "React", Icon: ReactIcon, position: { top: '15%', left: '10%' }, color: 'text-cyan-400' },
  { id: 2, name: "Node.js", Icon: NodeJSIcon, position: { top: '30%', right: '15%' }, color: 'text-green-500' },
  { id: 3, name: "Python", Icon: PythonIcon, position: { bottom: '20%', left: '20%' }, color: 'text-yellow-400' },
  { id: 4, name: "Docker", Icon: DockerIcon, position: { bottom: '15%', right: '25%' }, color: 'text-blue-500' },
  { id: 5, name: "JavaScript", Icon: JavaScriptIcon, position: { top: '55%', left: '5%' }, color: 'text-yellow-500 bg-black rounded-sm p-0.5' },
  { id: 6, name: "MongoDB", Icon: MongoDbIcon, position: { top: '10%', right: '5%' }, color: 'text-green-600' },
  { id: 7, name: "Tailwind", Icon: TailwindIcon, position: { bottom: '8%', left: '45%' }, color: 'text-cyan-500' },
];

const AboutSection = () => {
    // Content based on resume summary [cite: uploaded:Saksham_resume.pdf]
    const summary = `I am a third-year Computer Science student specializing in full-stack MERN development and AI/ML applications. With experience building production-ready applications focusing on scalable backends, secure authentication, and real-time data processing, including medical AI platforms and hackathon projects. Eager to contribute technical expertise in a collaborative environment.`;

    const paragraphVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
    };

    const skillIconVariants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: (i: number) => ({
      opacity: 0.4, // Slightly increased base opacity
      scale: 1,
      transition: {
        delay: 0.8 + i * 0.1,
        duration: 0.5,
      },
    }),
    float: (i: number) => ({
      y: ["0%", "-6%", "0%"],
      // Add subtle rotation
      rotate: [0, 2, -2, 0],
      transition: {
        delay: i * 0.3,
        y: { // Animate y separately for floating
             duration: 3 + Math.random() * 2,
             repeat: Infinity,
             repeatType: "mirror",
             ease: "easeInOut",
        },
        rotate: { // Animate rotation
            duration: 5 + Math.random() * 3, // Slower rotation
             repeat: Infinity,
             repeatType: "mirror",
             ease: "easeInOut",
        }
      },
    }),
  };

    return (
        <Section id="about" className='relative' title="About Me" icon={User}>
            <div className="absolute inset-0 z-0 pointer-events-none">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.id}
                        // Adjusted text size, opacity
                        className={`absolute ${skill.color} text-2xl opacity-40 dark:opacity-70 md:text-4xl lg:text-5xl`}
                        style={{
                          top: skill.position.top ?? 'auto',
                          left: skill.position.left ?? 'auto',
                          right: skill.position.right ?? 'auto',
                          bottom: skill.position.bottom ?? 'auto',
                        }}
                        variants={skillIconVariants}
                        initial="initial"
                        animate={["animate", "float"]}
                        custom={index}
                      >
                         {/* Adjusted icon size */}
                         <skill.Icon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" />
                      </motion.div>
                    ))}
                  </div>
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

