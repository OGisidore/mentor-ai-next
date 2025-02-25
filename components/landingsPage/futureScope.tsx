"use client"

import { useScopedI18n } from "@/locales/client";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBrain, faGlobe, faTools, faMobileAlt, faUser, faChartLine, faMagic, faVideo, faMicrophone, faBook, faRoute, faPuzzlePiece, faBullseye, faClipboardCheck, faTasks, faComments, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

// 

export const FutureScope = () => {
    const t = useScopedI18n("landngPage.FutureScopeSection")

    const futureScope = {
        title: t("futureScope.title"),
        subTitle: t("futureScope.subTitle"),
        description: t("futureScope.description"),
        features: [
            {
                icon: faBrain,
                title: t("futureScope.features.0.title"),
                description: t("futureScope.features.0.description"),
            },
            {
                icon: faGlobe,
                title: t("futureScope.features.1.title"),
                description: t("futureScope.features.1.description"),
            },
            {
                icon: faTools,
                title: t("futureScope.features.2.title"),
                description: t("futureScope.features.2.description"),
            },
            {
                icon: faMobileAlt,
                title: t("futureScope.features.3.title"),
                description: t("futureScope.features.3.description"),
            },
            {
                icon: faUser,
                title: t("futureScope.features.4.title"),
                description: t("futureScope.features.4.description"),
            },
            {
                icon: faChartLine,
                title: t("futureScope.features.5.title"),
                description: t("futureScope.features.5.description"),
            },
            {
                icon: faMagic,
                title: t("futureScope.features.6.title"),
                description: t("futureScope.features.6.description"),
                lists: [
                    {
                        icon: faVideo,
                        text: t("futureScope.features.6.lists.0.text"),
                    },
                    {
                        icon: faMicrophone,
                        text: t("futureScope.features.6.lists.1.text"),
                    },
                    {
                        icon: faBook,
                        text: t("futureScope.features.6.lists.2.text"),
                    },
                ],
            },
            {
                icon: faRoute,
                title: t("futureScope.features.7.title"),
                description: t("futureScope.features.7.description"),
                lists: [
                    {
                        icon: faVideo,
                        text: t("futureScope.features.7.lists.0.text"),
                    },
                    {
                        icon: faMicrophone,
                        text: t("futureScope.features.7.lists.1.text"),
                    },
                    {
                        icon: faBook,
                        text: t("futureScope.features.7.lists.2.text"),
                    },
                ],
            },
            {
                icon: faClipboardCheck,
                title: t("futureScope.features.8.title"),
                description: t("futureScope.features.8.description"),
                lists: [
                    {
                        icon: faVideo,
                        text: t("futureScope.features.8.lists.0.text"),
                    },
                    {
                        icon: faMicrophone,
                        text: t("futureScope.features.8.lists.1.text"),
                    },
                    {
                        icon: faBook,
                        text: t("futureScope.features.8.lists.2.text"),
                    },
                ],
            },
        ],
        action : {
            desciption :t("futureScope.action.desciption"),
            btnText : t("futureScope.action.btnText")
        }
    };
    return (
        <section className="py-16 bg-[var(--bg-color)] px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <span className="text-[var(--accent-color)] font-semibold">{futureScope.description}</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-color)] mt-2">{futureScope.title}</h2>
                    <p className="mt-4 text-[var(--text-color)] opacity-80">{futureScope.subTitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        futureScope.features.map((feat, index: number) => {
                            return (
                                <div key={index} className="bg-[var(--bg-color)] p-6 rounded-xl shadow-md border border-[var(--border-color)] hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-center mb-4">
                                        <FontAwesomeIcon icon={feat.icon} className="text-2xl text-[var(--accent-color)]" />
                                        {/* <i className="fas fa-brain text-2xl text-[var(--accent-color)]"></i> */}
                                        <h3 className="text-xl font-semibold text-[var(--text-color)] ml-3">{feat.title}</h3>
                                    </div>
                                    <p className="text-[var(--text-color)] opacity-80">{feat.description}</p>
                                    {feat.lists && feat.lists.length > 0 && <ul className="mt-4 space-y-2 text-sm">
                                        {
                                            feat.lists.map((li, indexB: number) => {
                                                return (
                                                    <li key={index + "." + indexB} className="flex items-center text-[var(--text-color)] opacity-80">
                                                        <FontAwesomeIcon icon={li.icon} className="mr-2 text-[var(--accent-color)]" /> {li.text}
                                                        {/* <i className="fas fa-video text-[var(--accent-color)] mr-2"></i> */}
                                                    </li>
                                                )
                                            })
                                        }

                                    </ul>
                                    }
                                </div>
                            )
                        })
                    }
                    
                </div>

                {/* <!-- Call to Action --> */}
                <div className="mt-12 text-center">
                    <p className="text-[var(--text-color)] opacity-80 mb-6">{futureScope.action.desciption}</p>
                    <Link href="https://github.com/prashantsingh2408/mentor-ai"
                        className="inline-flex items-center no-underline px-6 py-3 bg-[var(--accent-color)] hover:bg-[var(--accent-dark)] text-white font-semibold rounded-lg transition duration-300">
                            <FontAwesomeIcon icon={faGithub}  className="mr-2"/>
                            {futureScope.action.btnText}
                    </Link>
                </div>
            </div>
        </section>
    )
}