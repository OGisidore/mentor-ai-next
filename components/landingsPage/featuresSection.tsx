"use client"

import { useScopedI18n } from "@/locales/client";
import { faArrowRight, faBookReader, faBrain, faBriefcase, faBullseye, faChartLine, faCheck, faCheckCircle, faClipboardCheck, faComments, faGlobe, faGraduationCap, faHeartbeat, faLanguage, faLaptopCode, faMagic, faMicrophone, faMobileAlt, faPuzzlePiece, faRoute, faSchool, faSearch, faTasks, faTools, faUser, faUserCircle, faVideo } from "@fortawesome/free-solid-svg-icons"
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
    title: " Specialized Mentors",
    subTitle: "Choose Your Mentor",
    description: "Select from our diverse range of expert mentors",
    mentorsCards: [
        {
            icon: faLanguage,
            title: "Language Mentor",
            description: "Master new languages with personalized guidance and conversation practice",
            lists: [
                {
                    icon: faCheck,
                    text: "Real-time pronunciation feedback"
                },
                {
                    icon: faCheck,
                    text: "Interactive conversation practice"
                },
                {
                    icon: faCheck,
                    text: "Grammar and vocabulary building"
                },

            ],
            type : "language",



        },
        {
            icon: faSchool,
            title: "High School Mentor",
            description: "Expert guidance for high school subjects and exam preparation",
            type : "highschool",
            lists: [
                {
                    icon: faCheck,
                    text: "Subject-specific tutoring"
                },
                {
                    icon: faCheck,
                    text: "Exam preparation strategies"
                },
                {
                    icon: faCheck,
                    text: "Homework assistance"
                },

            ],



        },
        {
            icon: faBriefcase,
            title: "Career Transition Mentor",
            description: "Expert guidance for career changes and professional developmen",
            type : "career-transition",
            lists: [
                {
                    icon: faCheck,
                    text: "Resume and interview preparation"
                },
                {
                    icon: faCheck,
                    text: "Skill gap analysis and learning paths"
                },
                {
                    icon: faCheck,
                    text: "Industry-specific guidance"
                },

            ],



        },
        {
            icon: faBookReader,
            title: "Intermediate Mentor",
            description: "Specialized support for intermediate level students and subjects",
            type : "intermediate",
            lists: [
                {
                    icon: faCheck,
                    text: "Advanced concept explanations"
                },
                {
                    icon: faCheck,
                    text: "Practice problem solving"
                },
                {
                    icon: faCheck,
                    text: "Exam preparation techniques"
                },

            ],



        },
        {
            icon: faGraduationCap,
            title: "College Mentor",
            description: "Advanced academic guidance for college students and research",
            type : "college",
            lists: [
                {
                    icon: faCheck,
                    text: "Research methodology guidance"
                },
                {
                    icon: faCheck,
                    text: "Thesis development support"
                },
                {
                    icon: faCheck,
                    text: "Academic writing assistance"
                },

            ],



        },
        {
            icon: faClipboardCheck,
            title: "Government Exam Mentor",
            type : "government-exam",
            description: "Specialized preparation for government exams and competitive tests",
            lists: [
                {
                    icon: faCheck,
                    text: "Exam pattern analysis"
                },
                {
                    icon: faCheck,
                    text: "Mock test preparation"
                },
                {
                    icon: faCheck,
                    text: "Current affairs updates"
                },

            ],



        },
        {
            icon: faHeartbeat,
            title: "Fitness & Nutrition Mentor",
            type : "fitness-nutrition",
            description: "Personalized guidance for health, fitness, and nutrition planning",
            lists: [
                {
                    icon: faCheck,
                    text: "Customized workout plans"
                },
                {
                    icon: faCheck,
                    text: "Nutrition advice and meal planning"
                },
                {
                    icon: faCheck,
                    text: "Progress tracking and adjustments"
                },

            ],



        },
        {
            icon: faLaptopCode,
            title: "Tech Interview Mentor",
            type : "tech-interview",
            description: "Comprehensive preparation for technical interviews at top tech companies",
            lists: [
                {
                    icon: faCheck,
                    text: "Data Structures & Algorithms practice"
                },
                {
                    icon: faCheck,
                    text: "System Design discussions"
                },
                {
                    icon: faCheck,
                    text: "Mock interviews & feedback"
                },

            ],



        },
    ],
    action: {
        icon: faArrowRight,
        text: " Start Learning"
    }
}

// 
const keyCapabilities = {
    title: "Key Capabilities",
    // description: "Enhance your learning experience with these powerful features",
    capabilities: [
        {
            icon: faCheckCircle,
            title: "Real-Time Pronunciation Feedback",
            description: "Instant correction and examples for mispronounced words with audio demonstrations",

        },
        {
            icon: faBrain,
            title: "Context Awareness",
            description: "Adapts to your learning style and remembers previous interactions for personalized learning",

        },
        {
            icon: faSearch,
            title: "Web Search Integration",
            description: "Access real-time information and resources from the web to enhance learning experience",

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
                                        Chat Mode
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
                        <i className="fas fa-database mr-2 text-[var(--accent-color)]"></i>
                        Persistent Memory
                    </h3>
                    <p className="text-[var(--text-color)] opacity-80">
                        Store and recall user data persistently to provide a more personalized learning experience
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