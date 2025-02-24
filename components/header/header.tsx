"use client";

import { LocalSelect } from "@/app/LocalSelect";
import { useScopedI18n } from "@/locales/client";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMoon, faLeaf, faWater, faGem, faLanguage, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const themeButtons = [
    {
        name: "dark",
        icon: faMoon
    },
    {
        name: "green",
        icon: faLeaf
    },
    {
        name: "blue",
        icon: faWater
    },
    {
        name: "purple",
        icon: faGem
    },

]
export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const headerT = useScopedI18n("header");

    const CONFIG = {
        DEFAULT_THEME: 'light',
    };

    const mobileMenuRef = useRef<HTMLDivElement | null>(null);
    const mobileMenuButtonRef = useRef<HTMLButtonElement | null>(null);
    const applyTheme = (theme: string) => {
        const root = document.documentElement;
        const themeButtons = document.querySelectorAll('.theme-btn');

        // Retirer l'état actif de tous les boutons
        themeButtons.forEach((btn) => btn.classList.remove('ring-2', 'ring-offset-2'));

        // Ajouter l'état actif au bouton du thème sélectionné
        const activeButton = document.querySelector(`[data-theme="${theme}"]`);
        if (activeButton) {
            activeButton.classList.add('ring-2', 'ring-offset-2');
        }

        // Retirer toutes les classes de thème existantes
        root.classList.remove('theme-dark', 'theme-green', 'theme-blue', 'theme-purple');

        // Ajouter la classe du thème sélectionné si ce n'est pas "light"
        if (theme !== 'light') {
            root.classList.add(`theme-${theme}`);
        }

        localStorage.setItem('selected-theme', theme);
    };

    const toggleMobileMenu = () => {
        if (mobileMenuRef.current) {
            mobileMenuRef.current.classList.toggle('hidden');
        }
    };




    useEffect(() => {
        const savedTheme = localStorage.getItem('selected-theme') || CONFIG.DEFAULT_THEME;
        applyTheme(savedTheme);

        const handleAnchorClick = (e: Event) => {
            e.preventDefault();
            const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
            if (targetId) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    mobileMenuRef.current?.classList.add('hidden'); // Ferme le menu mobile
                    const headerHeight = document.querySelector('header')?.offsetHeight || 0;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                }
            }
        };

        const closeMobileMenu = (e: Event) => {
            if (
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(e.target as Node) &&
                mobileMenuButtonRef.current &&
                !mobileMenuButtonRef.current.contains(e.target as Node)
            ) {
                mobileMenuRef.current.classList.add('hidden');
            }
        };

        const anchors = document.querySelectorAll('a[href^="#"]');
        anchors.forEach((anchor) => anchor.addEventListener('click', handleAnchorClick));

        document.addEventListener('click', closeMobileMenu);

        // Ferme le menu mobile quand la fenêtre est redimensionnée (taille >= md)
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                mobileMenuRef.current?.classList.add('hidden');
            }
        };
        window.addEventListener('resize', handleResize);

        return () => {
            anchors.forEach((anchor) => anchor.removeEventListener('click', handleAnchorClick));
            document.removeEventListener('click', closeMobileMenu);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // const openMentor = (type: string) => {
    //     window.location.href = `mentor.html?type=${type}`;
    // };
    return (
        <header className="fixed top-0 left-0 right-0 bg-[var(--bg-color)] border-b border-[var(--border-color)] shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* <!-- Logo --> */}
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faLanguage} className='text-primary-600 text-2xl sm:text-4xl mr-2' />
                        {/* <i className="fas fa-language text-primary-600 text-2xl sm:text-4xl mr-2"></i> */}
                        <Link href={"/"} className="text-lg sm:text-2xl font-bold text-gray-800">Language Mentor AI</Link>
                    </div>

                    {/* <!-- Mobile menu button --> */}
                    <button ref={mobileMenuButtonRef} className="md:hidden p-2 rounded-md text-[var(--text-color)]" onClick={toggleMobileMenu}>
                        <FontAwesomeIcon icon={faBars} className='text-xl' />
                        {/* <i className="fas fa-bars text-xl"></i> */}
                    </button>

                    {/* <!-- Navigation - Desktop --> */}
                    <nav className="hidden md:flex items-center space-x-6">
                        <Link href="#features" className="text-[var(--text-color)] hover:text-[var(--accent-color)] transition-colors">Features</Link>
                        <Link href="/vision" className="text-[var(--text-color)] hover:text-[var(--accent-color)] transition-colors">Our Vision</Link>
                        <Link href="https://github.com/prashantsingh2408/mentor-ai" target="_blank" className="text-[var(--text-color)] hover:text-[var(--accent-color)] transition-colors">
                            <FontAwesomeIcon icon={faGithub} className='mr-1' /> GitHub
                        </Link>

                        <div className="flex items-center space-x-3">
                            {
                                themeButtons.map((btn, index: number) => {
                                    return (
                                        <button
                                        key={index}
                                            className="theme-btn w-10 h-10 border-text rounded-full transition-all duration-200 hover:scale-110 flex items-center justify-center bg-[var(--bg-color)] border-2 shadow-md"
                                            // style="border-color: var(--text-color)"
                                            data-theme={btn.name.toLowerCase()}
                                            onClick={() => applyTheme(btn.name.toLowerCase())}
                                            // onclick="applyTheme('dark')"
                                            title={btn.name + " Theme"}>
                                            <FontAwesomeIcon icon={btn.icon} className=" text-xl text-[var(--text-color)]" />
                                            <i className="fas fa-moon text-xl text-[var(--text-color)]"></i>
                                        </button>
                                    )
                                })
                            }


                        </div>
                        <Link href="/agents" className="px-4 py-2 bg-[var(--accent-color)] hover:bg-[var(--accent-dark)] text-white font-semibold rounded-lg transition duration-300">
                            Start Learning
                        </Link>
                        <LocalSelect />

                        {/* <!-- Theme toggles --> */}

                    </nav>
                </div>
            </div>

            {/* <!-- Mobile Navigation Menu --> */}
            <div id="mobileMenu" ref={mobileMenuRef} className="hidden md:hidden bg-[var(--bg-color)] border-t border-[var(--border-color)]">
                <div className="px-4 py-3 space-y-4">
                    <Link href="#features" className="block text-[var(--text-color)] hover:text-[var(--accent-color)] py-2">Features</Link>
                    <Link href="/vision" className="block text-[var(--text-color)] hover:text-[var(--accent-color)] py-2">Our Vision</Link>
                    <Link href="#team" className="block text-[var(--text-color)] hover:text-[var(--accent-color)] py-2">Join Team</Link>
                    <Link href="https://github.com/yourusername/devai" target="_blank" className="block text-[var(--text-color)] hover:text-[var(--accent-color)] py-2">
                        <FontAwesomeIcon icon={faGithub} className='mr-1' /> GitHub
                    </Link>
                    <Link href="/agents." className="w-full text-left px-4 py-3 bg-[var(--accent-color)] hover:bg-[var(--accent-dark)] text-white font-semibold rounded-lg transition duration-300">
                        Start Learning
                    </Link>

                    {/* <!-- Mobile Theme Toggles --> */}
                    <div className="flex items-center gap-3 py-2">
                        {
                            themeButtons.map((btn, index: number) => {
                                return (
                                    <button
                                    key={index}
                                        className="theme-btn w-8 h-8 border-text rounded-full transition-all duration-200 hover:scale-110 flex items-center justify-center bg-[var(--bg-color)] border-2"
                                        // style="border-color: var(--text-color)"
                                        data-theme={btn.name.toLowerCase()}
                                        onClick={() => applyTheme(btn.name.toLowerCase())}
                                        // onclick="applyTheme('dark')"
                                        title={btn.name + " Theme"}>
                                        <FontAwesomeIcon icon={btn.icon} className=" text-xl text-[var(--text-color)]" />
                                        <i className="fas fa-moon text-xl text-[var(--text-color)]"></i>
                                    </button>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </header>
    );
};
