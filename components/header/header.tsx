"use client"
import Link from "next/link"
import { CustomIcon } from "../custumcon/icon"
import DarkModeSwitcher from "../custumThemeSwitcher"
import { useScopedI18n } from "@/locales/client";
import { LocalSelect } from "@/app/LocalSelect";

export const Header = () => {
    const headerT =  useScopedI18n("header")

    return (
        <header className="sticky top-0 left-0 right-0 bg-white border-b shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                <div className="flex items-center">
                    <i className="fas fa-language text-green-600 text-2xl sm:text-4xl mr-2"></i>
                    <span className="text-lg sm:text-2xl font-bold text-gray-800">Language Mentor AI</span>
                </div>
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
            </div>
        </header>
    )
}
