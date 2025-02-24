"use client"

import Link from "next/link"
import { CustomIcon } from "@/components/custumcon/icon";
import { useScopedI18n } from "@/locales/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
    const footerT = useScopedI18n("footer");

    const social_medias = [
        { icon: faGithub, link: "" },
        { icon: faTwitter, link: "" },
        { icon: faLinkedin, link: "" }
    ];

    const footerData = [
        {
            name: footerT("sections.quick_links"),
            links: [
                { linkName: footerT("links.about"), link: "" },
                { linkName: footerT("links.join_us"), link: "Join Us" },
                { linkName: footerT("links.ideation"), link: "" },
                { linkName: footerT("links.hackathons"), link: "" }
            ]
        },
        {
            name: footerT("sections.community"),
            links: [
                { linkName: footerT("links.members"), link: "" },
                { linkName: footerT("links.connect"), link: " " }
            ]
        }
    ];

    return (
        
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faLanguage} className='text-[var(--accent-light)] text-2xl mr-3' />
                        {/* <i className="fas fa-language text-primary-600 text-2xl sm:text-4xl mr-2"></i> */}
                        <Link href={"/"} >Language Mentor AI</Link>
                    </div>
                        <p className="text-gray-400">Empowering language learning through AI-powered conversations.</p>
                    </div>
                    {footerData.map((data, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-lg mb-4 text-white">{data.name}</h3>
                            <ul className="space-y-2">
                                {data.links.map((current_link, index) => (
                                    <li key={index}>
                                        <Link href={current_link.link} className="text-gray-400 hover:text-[var(--accent-light)] transition duration-300">
                                            {current_link.linkName}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                   
                    <div>
                        <h3 className="font-semibold text-lg mb-4 text-white">{footerT("connect_with_us")}</h3>
                        <div className="flex space-x-4">
                            {social_medias.map((social, index) => (
                                <Link key={index} href={social.link} className="text-gray-400 hover:text-[var(--accent-light)] transition duration-300">
                                    <FontAwesomeIcon icon={social.icon} className="text-xl" />
                                </Link>
                            ))}

                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 py-6 text-center text-gray-400">
                    <p>&copy; 2025 <a href="https://hackathons-circle.vercel.app/"
                        target="_blank"
                        className="hover:text-[var(--accent-light)] transition duration-300">Hackathon Circle</a>. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
