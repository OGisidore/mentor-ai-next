"use client"

import Link from "next/link"
import { CustomIcon } from "../custumcon/icon"
import { useScopedI18n } from "@/locales/client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay } from "@fortawesome/free-solid-svg-icons"

export const Hero = () => {
    const heroT = useScopedI18n("landngPage.hero")
    return (
        <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-theme mb-6 leading-tight">
                {heroT("title")}
            </h1>
            <p className="text-lg sm:text-xl text-theme opacity-90 mb-8">
                {heroT("descriptionParagraph")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/agents" className="w-full sm:w-auto inline-flex no-underline items-center justify-center px-6 py-3 bg-[var(--accent-color)] hover:bg-[var(--accent-dark)] text-white font-semibold rounded-lg transition duration-300">
                    <FontAwesomeIcon icon={faPlay} className="mr-2"/> {heroT("start_linkText")}
                </Link>
                <Link href="https://github.com/prashantsingh2408/mentor-ai" className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-[var(--accent-color)] font-semibold rounded-lg transition duration-300">
                    <CustomIcon name="Github" size={24} className="mr-2"/> {heroT("github_linkText")}
                </Link>
            </div>
        </div>
    )
}
