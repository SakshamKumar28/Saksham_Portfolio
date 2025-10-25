"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from "@/components/ui/button"; // [cite: uploaded:sakshamkumar28/saksham_portfolio/Saksham_Portfolio-8ed7f14f8d2a50ca9807f8860a131d9e0e6e73bf/components/ui/button.tsx]
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; // [cite: uploaded:sakshamkumar28/saksham_portfolio/Saksham_Portfolio-8ed7f14f8d2a50ca9807f8860a131d9e0e6e73bf/components/ui/dropdown-menu.tsx]
// Corrected relative paths from app/components
import LogoDark from '@/public/logo-dark.png'; // [cite: uploaded:sakshamkumar28/saksham_portfolio/Saksham_Portfolio-8ed7f14f8d2a50ca9807f8860a131d9e0e6e73bf/public/logo-dark.png]
import LogoLight from '@/public/logo-light.png'; // [cite: uploaded:sakshamkumar28/saksham_portfolio/Saksham_Portfolio-8ed7f14f8d2a50ca9807f8860a131d9e0e6e73bf/public/logo-light.png]

// --- Theme Toggle Component (Moved inline for simplicity in multi-file setup) ---
const ModeToggle = () => {
  const { setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="w-10 h-10 border-border/50 bg-background/50 hover:bg-accent/70 dark:bg-secondary/30 dark:hover:bg-secondary/50 dark:border-border/30 backdrop-blur-sm"
          size="icon"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

// --- NavLinks Data ---
const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scroll handler
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // Close menu on click
  };

  // --- Animation Variants ---
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({ // Add index type
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.2, // Stagger animation
        duration: 0.3,
      },
    }),
  };

  const logoVariants = {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.43, 0.13, 0.23, 0.96],
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: 50, transition: { duration: 0.2 } },
    open: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };
  // --- End Animation Variants ---

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        // Sticky navbar with blur background
        className='sticky top-0 flex justify-between items-center px-4 sm:px-6 lg:px-8 h-16 w-full py-2 bg-background/80 dark:bg-background/90 backdrop-blur-md border-b border-border/10 z-50'
      >
        <motion.a // Changed to anchor for home link
            href="#home"
            onClick={(e) => handleScroll(e, "#home")}
            variants={logoVariants}
            className='flex items-center h-full cursor-pointer'
            >
             {/* Adjusted image size */}
            <Image
                src={LogoDark}
                alt="Logo"
                className='hidden dark:block h-8 w-auto object-contain' // Adjusted size
                priority // Add priority for LCP elements
            />
            <Image
                src={LogoLight}
                alt="Logo"
                className='block dark:hidden h-8 w-auto object-contain' // Adjusted size
                 priority
            />
        </motion.a>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-8 font-medium'>
          <ul className='flex gap-5 lg:gap-6 text-sm text-black dark:text-white'>
            {navLinks.map((link, i) => (
              <motion.li
                key={link.name}
                custom={i}
                variants={navItemVariants}
                whileHover={{ y: -2, color: 'var(--color-primary)' }}
                className='cursor-pointer transition-colors'
              >
                <a href={link.href} onClick={(e) => handleScroll(e, link.href)}>
                   {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
          <motion.div variants={navItemVariants} custom={navLinks.length}>
            <ModeToggle />
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className='md:hidden relative w-8 h-8 flex items-center justify-center z-50'
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0}}
          animate={{ opacity: 1, transition: { delay: 0.5 } }}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {/* Animated Hamburger Icon */}
           <div className='w-6 h-5 flex flex-col justify-between'>
                <motion.span
                    className='block w-full h-0.5 bg-foreground rounded-full origin-center'
                    animate={isOpen ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <motion.span
                    className='block w-full h-0.5 bg-foreground rounded-full origin-center'
                    animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                />
                <motion.span
                    className='block w-full h-0.5 bg-foreground rounded-full origin-center'
                    animate={isOpen ? { rotate: -45, y: -4.5 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                />
            </div>
        </motion.button>
      </motion.nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div // Backdrop
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden'
              onClick={() => setIsOpen(false)}
            />
            <motion.div // Menu content
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className='fixed top-0 right-0 h-full w-[80%] max-w-xs bg-background shadow-2xl z-40 md:hidden flex flex-col'
            >
              <div className='flex justify-end p-4'>
                 {/* Optional: Add a close button inside if needed, using the burger logic */}
              </div>
              <nav className='flex-1 flex flex-col justify-center px-8'>
                <ul className='space-y-6'>
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.name}
                      variants={menuItemVariants}
                      whileHover={{ x: 5, color: 'var(--color-primary)'}}
                      className='text-2xl font-semibold cursor-pointer transition-colors'
                      // onClick is handled by the anchor tag now
                    >
                      <a href={link.href} onClick={(e) => handleScroll(e, link.href)}>
                        <span className='text-primary mr-2 text-xl'>0{i + 1}.</span>
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              <motion.div variants={menuItemVariants} className="p-8">
                <ModeToggle />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
