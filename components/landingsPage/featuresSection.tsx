"use client"

import { useScopedI18n } from "@/locales/client";
import { faArrowRight, faBookReader, faBrain, faBriefcase, faBullseye, faChartLine, faCheck, faCheckCircle, faClipboardCheck, faComments, faDatabase, faGlobe, faGraduationCap, faHeartbeat, faLanguage, faLaptopCode, faMagic, faMicrophone, faMobileAlt, faPuzzlePiece, faRoute, faSchool, faSearch, faTasks, faTools, faUser, faUserCircle, faVideo } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";







export const FeatureSection = () => {
    const t = useScopedI18n("landngPage.FeatureSection")
      // On récupère les différents ensembles de données traduits
//   const coreFeatures = t("coreFeatures");
//   const keyCapabilities = t("keyCapabilities");
//   const persistentMemory = t("persistentMemory");
//   const mentors = t("mentors");
    // 
const mentors = {
    title: t("mentors.title"),
    subTitle: t("mentors.subTitle"),
    description: t("mentors.description"),
    mentorsCards: [
        {
            icon: faLanguage,
            title: t("mentors.mentorsCards.0.title"),
            description:t("mentors.mentorsCards.0.description"),
            lists: [
                {
                    icon: faCheck,
                    text: t("mentors.mentorsCards.0.lists.0.text")
                },
                {
                    icon: faCheck,
                    text: t("mentors.mentorsCards.0.lists.1.text")
                },
                {
                    icon: faCheck,
                    text: t("mentors.mentorsCards.0.lists.2.text")
                },

            ],
            type : t("mentors.mentorsCards.0.type"),



        },
        {
            icon: faSchool,
            title: t("mentors.mentorsCards.1.title"),
            description:t("mentors.mentorsCards.1.description"),
            lists: [
                {
                    icon: faCheck,
                    text: t("mentors.mentorsCards.1.lists.0.text")
                },
                {
                    icon: faCheck,
                    text: t("mentors.mentorsCards.1.lists.1.text")
                },
                {
                    icon: faCheck,
                    text: t("mentors.mentorsCards.1.lists.2.text")
                },

            ],
            type : t("mentors.mentorsCards.1.type"),



        },
        {
            icon: faBriefcase,
            title: t("mentors.mentorsCards.2.title"),
            description:t("mentors.mentorsCards.2.description"),
            lists: [
                {
                    icon: faCheck,
                    text: t("mentors.mentorsCards.2.lists.0.text")
                },
                {
                    icon: faCheck,
                    text: t("mentors.mentorsCards.2.lists.1.text")
                },
                {
                    icon: faCheck,
                    text: t("mentors.mentorsCards.2.lists.2.text")
                },

            ],
            type : t("mentors.mentorsCards.2.type"),


        },
        {
            icon: faBookReader,
            title: t("mentors.mentorsCards.3.title"),
            description:t("mentors.mentorsCards.3.description"),
            lists: [
                {
                    icon: faCheck,
                    text: t("mentors.mentorsCards.3.lists.0.text")
                },
                {
                    icon: faCheck,
                    text: t("mentors.mentorsCards.3.lists.1.text")
                },
                {
                    icon: faCheck,
                    text: t("mentors.mentorsCards.3.lists.2.text")
                },

            ],
            type : t("mentors.mentorsCards.3.type"),


        },
        {
            icon: faGraduationCap,
            title: t("mentors.mentorsCards.4.title"),
            description:t("mentors.mentorsCards.4.description"),
            lists: [
                {
                    icon: faCheck,
                    text: t("mentors.mentorsCards.4.lists.0.text")
                },
                {
                    icon: faCheck,
                    text: t("mentors.mentorsCards.4.lists.1.text")
                },
                {
                    icon: faCheck,
                    text: t("mentors.mentorsCards.4.lists.2.text")
                },

            ],
            type : t("mentors.mentorsCards.4.type"),



        },
        {
            icon: faClipboardCheck,
            title: t("mentors.mentorsCards.5.title"),
            description:t("mentors.mentorsCards.5.description"),
            lists: [
                {
                    icon: faCheck,
                    text: t("mentors.mentorsCards.5.lists.0.text")
                },
                {
                    icon: faCheck,
                    text: t("mentors.mentorsCards.5.lists.1.text")
                },
                {
                    icon: faCheck,
                    text: t("mentors.mentorsCards.5.lists.2.text")
                },

            ],
            type : t("mentors.mentorsCards.5.type"),



        },
        {
            icon: faHeartbeat,
            title: t("mentors.mentorsCards.6.title"),
            description:t("mentors.mentorsCards.6.description"),
            lists: [
                {
                    icon: faCheck,
                    text: t("mentors.mentorsCards.6.lists.0.text")
                },
                {
                    icon: faCheck,
                    text: t("mentors.mentorsCards.6.lists.1.text")
                },
                {
                    icon: faCheck,
                    text: t("mentors.mentorsCards.6.lists.2.text")
                },

            ],
            type : t("mentors.mentorsCards.6.type"),


        },
        {
            icon: faLaptopCode,
            title: t("mentors.mentorsCards.7.title"),
            description:t("mentors.mentorsCards.7.description"),
            lists: [
                {
                    icon: faCheck,
                    text: t("mentors.mentorsCards.7.lists.0.text")
                },
                {
                    icon: faCheck,
                    text: t("mentors.mentorsCards.7.lists.1.text")
                },
                {
                    icon: faCheck,
                    text: t("mentors.mentorsCards.7.lists.2.text")
                },

            ],
            type : t("mentors.mentorsCards.7.type"),



        },
    ],
    action: {
        icon: faArrowRight,
        text: t("mentors.action.text")
    }
}

// 
const keyCapabilities = {
    title: t("keyCapabilities.title"),
    // description: "Enhance your learning experience with these powerful features",
    capabilities: [
        {
            icon: faCheckCircle,
            title: t("keyCapabilities.capabilities.0.title"),
            description:t("keyCapabilities.capabilities.0.description"),

        },
        {
            icon: faBrain,
            title: t("keyCapabilities.capabilities.1.title"),
            description:t("keyCapabilities.capabilities.1.description"),

        },
        {
            icon: faSearch,
            title: t("keyCapabilities.capabilities.2.title"),
            description:t("keyCapabilities.capabilities.2.description"),

        },
    ],

};
// 
const coreFeatures = {
    title: t("coreFeatures.title"),
    description: t("coreFeatures.description"),
    features: [
        {
            icon: faComments,
            title: t("coreFeatures.features.0.title"),
            description: t("coreFeatures.features.0.description"),
        },
        {
            icon: faMicrophone,
            title: t("coreFeatures.features.1.title"),
            description: t("coreFeatures.features.1.description"),
        },
        {
            icon: faUserCircle,
            title: t("coreFeatures.features.2.title"),
            description: t("coreFeatures.features.2.description"),
        },
    ],
};
    return (
        <section id="features" className="py-12 sm:py-16 bg-[var(--bg-color)] px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">
                    <span className="text-[var(--accent-color)] font-semibold">{coreFeatures.title}</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-color)] mt-2">{coreFeatures.description}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {
                        coreFeatures.features.map((feat: any, index: number) => {
                            return (
                                <div key={index} className="feature-card bg-[var(--bg-color)] p-6 rounded-lg shadow-md border border-[var(--border-color)]">
                                    <h3 className="text-xl font-semibold text-[var(--text-color)] mb-3">
                                        <FontAwesomeIcon icon={feat.icon} className="mr-2 text-[var(--accent-color)]" /> {feat.title}
                                        {/* <i className="fas fa-comments mr-2 text-[var(--accent-color)]"></i> */}
                                    </h3>
                                    <p className="text-[var(--text-color)] opacity-80">
                                        {feat.description}
                                    </p>
                                </div>
                            )
                        })
                    }

                </div>

                {/* <!-- Key Capabilities --> */}
                <div className="mt-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-[var(--text-color)]">{keyCapabilities.title}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {
                            keyCapabilities.capabilities.map((cap: any, index: number) => {
                                return (
                                    <div key={index} className="bg-[var(--bg-color)] p-6 rounded-lg shadow-md border border-[var(--border-color)]">
                                        <h3 className="text-xl font-semibold text-[var(--text-color)] mb-3">
                                            <FontAwesomeIcon icon={cap.icon} className="mr-2 text-[var(--accent-color)]" /> {cap.title}
                                            {/* <i className="fas fa-check-circle mr-2 text-[var(--accent-color)]"></i> */}
                                        </h3>
                                        <p className="text-[var(--text-color)] opacity-80">
                                            {cap.description}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                {/* <!-- Persistent Memory --> */}
                <div className="bg-[var(--bg-color)] mt-4 p-6 rounded-lg shadow-md border border-[var(--border-color)]">
                    <h3 className="text-xl font-semibold text-[var(--text-color)] mb-3">
                        <FontAwesomeIcon icon={faDatabase} className="mr-2 text-[var(--accent-color)]"/>
                        {/* <i className="fas fa-database mr-2 text-[var(--accent-color)]"></i> */}
                        {t("persistentMemory.title")}
                    </h3>
                    <p className="text-[var(--text-color)] opacity-80">
                    {t("persistentMemory.description")}
                    </p>
                </div>


                {/* <!-- Mentor Types Section --> */}
                <div className="mt-24">
                    <div className="text-center mb-12">
                        <span className="text-[var(--accent-color)] font-semibold">{mentors.subTitle}</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-color)] mt-2">{mentors.title}</h2>
                        <p className="mt-4 text-[var(--text-color)] opacity-80">{mentors.description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            mentors.mentorsCards.map((mentor, index: number) => {
                                return (
                                    <div key={index} className="bg-[var(--bg-color)] p-6 rounded-xl shadow-md border border-[var(--border-color)] hover:shadow-lg transition-all duration-300">
                                        <div className="flex items-center mb-4">
                                            {/* <i className="fas fa-language text-2xl text-[var(--accent-color)]"></i> */}
                                            <FontAwesomeIcon icon={mentor.icon} className="text-2xl text-[var(--accent-color)]" />
                                            <h3 className="text-xl font-semibold text-[var(--text-color)] ml-3">{mentor.title}</h3>
                                        </div>
                                        <p className="text-[var(--text-color)] opacity-80 mb-4">{mentor.description}</p>
                                        <ul className="mb-4 space-y-2">
                                            {
                                                mentor.lists.map((li, jIndex: number) => {
                                                    return (
                                                        <li key={jIndex} className="flex items-center text-[var(--text-color)] opacity-80">
                                                            <FontAwesomeIcon icon={li.icon} className="mr-2 text-[var(--accent-color)]" /> {li.text}
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        <Link href={"/mentor?type="+ mentor.type} className="inline-flex items-center text-[var(--accent-color)] hover:text-[var(--accent-dark)]"> {mentors.action.text} <FontAwesomeIcon icon={mentors.action.icon} className="ml-2 " />  </Link>
                                        {/* <a href="#"
                                            onClick="openMentor('language')"
                                            class="inline-flex items-center text-[var(--accent-color)] hover:text-[var(--accent-dark)]">
                                            Start Learning <i className="fas fa-arrow-right ml-2"></i>
                                        </a> */}
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </div>
        </section>
    )
}