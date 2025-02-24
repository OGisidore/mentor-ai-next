"use client"

import { LocalSelect } from "@/app/LocalSelect"
import { faLanguage, faLightbulb, faHistory, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export const AgenthHeader = ({ setShowSuggestions }: { setShowSuggestions: () => void }) => {
    return (
        <header className="bg-white shadow-sm flex-none">
            <nav className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faLanguage} className='text-primary-600 text-2xl sm:text-4xl mr-2' />
                    {/* <i className="fas fa-language text-primary-600 text-2xl sm:text-4xl mr-2"></i> */}
                    <Link href={"/"} className="text-lg sm:text-2xl font-bold text-gray-800">Language Mentor AI</Link>
                </div>
                <div className="flex items-center gap-3">
                    <LocalSelect />
                    <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                        //  onClick="toggleSuggestions()"
                        onClick={setShowSuggestions}

                    >
                        <FontAwesomeIcon icon={faLightbulb} />

                        {/* <i className="fas fa-lightbulb"></i> */}
                    </button>
                    <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                        <FontAwesomeIcon icon={faHistory} />

                        {/* <i className="fas fa-history"></i> */}
                    </button>
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                        <FontAwesomeIcon icon={faUser} />

                        {/* <i className="fas fa-user text-gray-600"></i> */}
                    </div>
                </div>
            </nav>
        </header>
    )
}