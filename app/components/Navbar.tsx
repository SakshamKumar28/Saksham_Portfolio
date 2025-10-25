"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ModeToggle } from '@/app/utils/ModeToggle';
import LogoDark from '@/public/logo-dark.png';
import LogoLight from '@/public/logo-light.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.2,
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
      transition: {
        duration: 0.3,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
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
    closed: { 
      opacity: 0, 
      x: 50,
      transition: { duration: 0.2 }
    },
    open: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const navLinks = ["Home", "About", "Projects", "Contact"];

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        className='flex justify-between items-center px-4 sm:px-4 md:px-2 lg:px-5 h-16 sm:h-15 md:h-16 w-full py-1.5 sm:py-3 relative z-50'
      >
        <motion.div variants={logoVariants} className='flex items-center h-[4vw] overflow-hidden'>
          <Image
            src={LogoDark}
            alt="Logo"
            className='hidden dark:block h-12 w-6 sm:h-16 sm:w-8 md:h-20 md:w-10 lg:h-24 lg:w-12 object-contain'
          />
          <Image
            src={LogoLight}
            alt="Logo"
            className='block dark:hidden h-12 w-6 sm:h-16 sm:w-8 md:h-20 md:w-10 lg:h-24 lg:w-12 object-contain'
          />
        </motion.div>

        <div className='hidden md:flex items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 font-medium'>
          <ul className='flex gap-3 md:gap-4 text-sm lg:text-base'>
            {navLinks.map((link, i) => (
              <motion.li
                key={link}
                custom={i}
                variants={navItemVariants}
                whileHover={{ scale: 1.05 }}
                className='cursor-pointer hover:text-pink-500 transition-colors'
              >
                {link}
              </motion.li>
            ))}
          </ul>
          <motion.div
            variants={navItemVariants}
            custom={navLinks.length}
          >
            <ModeToggle />
          </motion.div>
        </div>

        <motion.button
          className='md:hidden relative w-10 h-10 flex items-center justify-center z-50'
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.5 } }
          }}
        >
          <div className='w-6 h-5 flex flex-col justify-between'>
            <motion.span
              className='w-full h-0.5 bg-black dark:bg-white rounded-full'
              animate={isOpen ? { 
                rotate: 45, 
                y: 9,
                transition: { duration: 0.3 }
              } : { 
                rotate: 0, 
                y: 0,
                transition: { duration: 0.3 }
              }}
            />
            <motion.span
              className='w-full h-0.5 bg-black dark:bg-white rounded-full'
              animate={isOpen ? { 
                opacity: 0,
                x: -20,
                transition: { duration: 0.2 }
              } : { 
                opacity: 1,
                x: 0,
                transition: { duration: 0.3, delay: 0.1 }
              }}
            />
            <motion.span
              className='w-full h-0.5 bg-black dark:bg-white rounded-full'
              animate={isOpen ? { 
                rotate: -45, 
                y: -9,
                transition: { duration: 0.3 }
              } : { 
                rotate: 0, 
                y: 0,
                transition: { duration: 0.3 }
              }}
            />
          </div>
        </motion.button>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden'
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className='fixed top-0 right-0 h-screen w-[75%] max-w-sm bg-white dark:bg-gray-900 shadow-2xl z-40 md:hidden'
            >
              <div className='flex flex-col h-full pt-24 px-8'>
                <nav className='flex-1'>
                  <ul className='space-y-6'>
                    {navLinks.map((link, i) => (
                      <motion.li
                        key={link}
                        variants={menuItemVariants}
                        whileHover={{ x: 10, color: '#ec4899' }}
                        className='text-2xl font-semibold cursor-pointer transition-colors'
                        onClick={() => setIsOpen(false)}
                      >
                        <span className='text-pink-500 mr-2'>0{i + 1}</span>
                        {link}
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                <motion.div
                  variants={menuItemVariants}
                  className='pb-8 space-y-4'
                >
                  <motion.div
                    className='flex items-center justify-center w-full'
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className='w-[45vw]'>
                      <ModeToggle />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                    className='h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full'
                  />
                </motion.div>
              </div>
              <div className='absolute top-10 right-10 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl' />
              <div className='absolute bottom-20 left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl' />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;