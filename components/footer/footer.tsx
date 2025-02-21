"use client"

import Link from "next/link"
import { CustomIcon } from "@/components/custumcon/icon";
import { useScopedI18n } from "@/locales/client";

export const Footer =  () => {
    const footerT =  useScopedI18n("footer");

    const social_medias = [
        { name: "Github", link: "" },
        { name: "X", link: "" },
        { name: "LinkedIn", link: "" }
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
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
                {footerData.map((data, index) => (
                    <div key={index}>
                        <h3 className="font-semibold text-lg mb-4 text-white">{data.name}</h3>
                        <ul className="space-y-2">
                            {data.links.map((current_link, index) => (
                                <li key={index}>
                                    <Link href={current_link.link} className="text-gray-400 hover:text-green-300 transition">
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
                            <Link key={index} href={social.link}>
                                <CustomIcon name={social.name as "Github" | "X"} size={26} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-800 py-6 text-center text-gray-400">
                <p>
                    &copy; 2024 <a href="https://hackathons-circle.vercel.app/" target="_blank" className="hover:text-green-300 transition">
                        Hackathon Circle
                    </a>. {footerT("all_rights_reserved")}
                </p>
            </div>
        </footer>
    );
};
