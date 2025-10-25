"use client";

import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="w-full py-6 px-4 sm:px-6 lg:px-8 border-t border-border/10 mt-16 md:mt-24 bg-secondary/20 dark:bg-secondary/10">
            <div className="max-w-4xl mx-auto text-center text-muted-foreground text-xs sm:text-sm">
                © {year} Saksham Kumar. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;

