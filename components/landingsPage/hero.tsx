"use client"

import Link from "next/link"
import { CustomIcon } from "../custumcon/icon"
import { useScopedI18n } from "@/locales/client"

export const Hero = () => {
    const heroT = useScopedI18n("landngPage.hero")
    return (
        <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                {heroT("title")}
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 opacity-90 mb-8">
                {heroT("descriptionParagraph")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/agents" className="px-6 py-3 bg-green-500 flex items-center hover:bg-green-700 text-white font-semibold rounded-lg transition">
                    <i className="fas fa-play mr-2"></i> {heroT("start_linkText")}
                </Link>
                <Link href="https://github.com/prashantsingh2408/mentor-ai" className="px-6 py-3 flex items-center gap-4 bg-gray-100 hover:bg-gray-200 text-green-500 font-semibold rounded-lg transition">
                    <CustomIcon name="Github" size={24}/> {heroT("github_linkText")}
                </Link>
            </div>
        </div>
    )
}
