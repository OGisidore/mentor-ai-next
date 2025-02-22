"use client";
import { useState } from "react";
import Link from "next/link";
import { CustomIcon } from "../custumcon/icon";
import DarkModeSwitcher from "../custumThemeSwitcher";
import { useScopedI18n } from "@/locales/client";
import { LocalSelect } from "@/app/LocalSelect";
import { LucideLanguages, Menu, X } from "lucide-react";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const headerT = useScopedI18n("header");

    return (
        <header className="sticky top-0 left-0 right-0 bg-white border-b shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                <Link href={"/"} className="flex items-center">
                    <LucideLanguages className="text-green-600 text-2xl sm:text-4xl mr-2" />
                    <span className="text-lg sm:text-2xl font-bold text-gray-800">Language Mentor AI</span>
                </Link>
                
                {/* Menu pour les grands écrans */}
                <nav className="hidden md:flex items-center space-x-6">
                    <Link href="#features" className="text-gray-800 hover:text-green-500">{headerT("navElement.features")}</Link>
                    <Link href="/vision" className="text-gray-800 hover:text-green-500">{headerT("navElement.our_vision")}</Link>
                    <Link href="https://github.com/prashantsingh2408/mentor-ai" target="_blank" className="text-gray-800 hover:text-green-500">
                        <CustomIcon name="Github" size={24} />
                    </Link>
                    <LocalSelect />
                    <DarkModeSwitcher />
                    <Link href="agent" className="px-4 py-2 bg-green-500 hover:bg-green-700 text-white font-semibold rounded-lg transition">
                        {headerT("navElement.start_learning")}
                    </Link>
                </nav>
                
                {/* Bouton de menu pour les petits écrans */}
                <button className="md:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
            
            {/* Menu mobile */}
            {isOpen && (
                <nav className="md:hidden bg-white border-t p-4 flex flex-col space-y-4">
                    <Link href="#features" className="text-gray-800 hover:text-green-500" onClick={() => setIsOpen(false)}>{headerT("navElement.features")}</Link>
                    <Link href="/vision" className="text-gray-800 hover:text-green-500" onClick={() => setIsOpen(false)}>{headerT("navElement.our_vision")}</Link>
                    <Link href="https://github.com/prashantsingh2408/mentor-ai" target="_blank" className="text-gray-800 hover:text-green-500" onClick={() => setIsOpen(false)}>
                        <CustomIcon name="Github" size={24} />
                    </Link>
                    <LocalSelect />
                    <DarkModeSwitcher />
                    <Link href="agent" className="px-4 py-2 bg-green-500 hover:bg-green-700 text-white font-semibold rounded-lg transition" onClick={() => setIsOpen(false)}>
                        {headerT("navElement.start_learning")}
                    </Link>
                </nav>
            )}
        </header>
    );
};
