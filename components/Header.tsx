import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ALL_MODELS } from '../constants';

interface HeaderProps {
    theme: string;
    toggleTheme: () => void;
}

const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
);

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);


const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
    const [isModelDropdownOpen, setModelDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinkClasses = "px-3 py-2 rounded-md text-sm font-medium text-light-text-secondary dark:text-text-secondary hover:bg-light-card dark:hover:bg-card hover:text-light-text-primary dark:hover:text-text-primary transition-colors";
    const activeNavLinkClasses = "bg-light-card dark:bg-card text-light-primary dark:text-primary";
    
    const mobileNavLinkClasses = "block px-3 py-2 rounded-md text-base font-medium text-light-text-secondary dark:text-text-secondary hover:bg-light-card dark:hover:bg-card hover:text-light-text-primary dark:hover:text-text-primary";
    const mobileActiveNavLinkClasses = "bg-light-card dark:bg-card text-light-primary dark:text-primary";

    const closeAllMenus = () => {
        setModelDropdownOpen(false);
        setMobileMenuOpen(false);
    }

    return (
        <header className="sticky top-0 z-50 bg-light-background/80 dark:bg-background/80 backdrop-blur-lg border-b border-light-border dark:border-border">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <NavLink to="/" onClick={closeAllMenus} className="flex-shrink-0 flex items-center gap-2">
                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" className="text-light-primary dark:text-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M2 7L12 12L22 7" stroke="currentColor" className="text-light-primary dark:text-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 12V22" stroke="currentColor" className="text-light-primary dark:text-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="text-xl font-bold text-light-text-primary dark:text-text-primary">Elvisu</span>
                        </NavLink>
                    </div>
                    <div className="hidden md:flex items-center">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <NavLink to="/" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}>Home</NavLink>
                            <div className="relative">
                                <button
                                    onClick={() => setModelDropdownOpen(!isModelDropdownOpen)}
                                    onBlur={() => setTimeout(() => setModelDropdownOpen(false), 200)}
                                    className={navLinkClasses}
                                >
                                    <span>Models</span>
                                    <svg className={`w-4 h-4 inline-block ml-1 transition-transform ${isModelDropdownOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </button>
                                {isModelDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-light-card dark:bg-card rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                                        {ALL_MODELS.map(model => (
                                            <NavLink
                                                key={model}
                                                to={`/models/${encodeURIComponent(model)}`}
                                                onClick={() => setModelDropdownOpen(false)}
                                                className={({ isActive }) => `block px-4 py-2 text-sm text-light-text-secondary dark:text-text-secondary hover:bg-light-background dark:hover:bg-background ${isActive ? 'text-light-primary dark:text-primary' : ''}`}
                                            >
                                                {model}
                                            </NavLink>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <NavLink to="/evaluation" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}>Evaluation</NavLink>
                        </div>
                        <button
                            onClick={toggleTheme}
                            className="ml-6 p-2 rounded-full text-light-text-secondary dark:text-text-secondary hover:bg-light-border dark:hover:bg-border transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
                        </button>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-light-text-secondary dark:text-text-secondary hover:bg-light-border dark:hover:bg-border focus:outline-none"
                        >
                            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </nav>
            {isMobileMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <NavLink to="/" onClick={closeAllMenus} className={({ isActive }) => `${mobileNavLinkClasses} ${isActive ? mobileActiveNavLinkClasses : ''}`}>Home</NavLink>
                        <NavLink to="/evaluation" onClick={closeAllMenus} className={({ isActive }) => `${mobileNavLinkClasses} ${isActive ? mobileActiveNavLinkClasses : ''}`}>Evaluation</NavLink>
                         <div className="border-t border-light-border dark:border-border pt-4 mt-2">
                             <p className="px-3 text-sm font-semibold text-light-text-secondary dark:text-text-secondary">Models</p>
                             <div className="mt-2 space-y-1">
                                {ALL_MODELS.map(model => (
                                    <NavLink
                                        key={model}
                                        to={`/models/${encodeURIComponent(model)}`}
                                        onClick={closeAllMenus}
                                        className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium text-light-text-secondary dark:text-text-secondary hover:bg-light-card dark:hover:bg-card hover:text-light-text-primary dark:hover:text-text-primary ${isActive ? mobileActiveNavLinkClasses : ''}`}
                                    >
                                        {model}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                         <div className="border-t border-light-border dark:border-border pt-4 mt-4 flex justify-between items-center px-3">
                             <span className="font-medium text-light-text-secondary dark:text-text-secondary">Switch Theme</span>
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full text-light-text-secondary dark:text-text-secondary hover:bg-light-border dark:hover:bg-border transition-colors"
                                aria-label="Toggle theme"
                            >
                                {theme === 'light' ? <MoonIcon /> : <SunIcon />}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;