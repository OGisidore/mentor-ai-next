"use client"

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBrain, faGlobe, faTools, faMobileAlt, faUser, faChartLine, faMagic, faVideo, faMicrophone, faBook, faRoute, faPuzzlePiece, faBullseye, faClipboardCheck, faTasks, faComments, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

// 
const futureScope = {
    title: "Future Development Scope",
    subTitle: "Exciting features and improvements on our roadmap",
    description: "Explore the exciting developments we have planned for the future.",
    features: [
        {
            icon: faBrain,
            title: "Enhanced AI Models",
            description: "Integration of more advanced language models and specialized domain expertise",
        },
        {
            icon: faGlobe,
            title: "Global Language Support",
            description: "Expanding to support more languages and regional learning styles",
        },
        {
            icon: faTools,
            title: "Advanced Learning Tools",
            description: "New interactive exercises, quizzes, and practical assignments",
        },
        {
            icon: faMobileAlt,
            title: "Mobile Application",
            description: "Native mobile apps for iOS and Android with offline learning capabilities",
        },
        {
            icon: faUser,
            title: "Community Learning",
            description: "Peer-to-peer learning, discussion forums, and collaborative projects",
        },
        {
            icon: faChartLine,
            title: "Advanced Analytics",
            description: "Detailed progress tracking, performance metrics, and personalized recommendations",
        },
        {
            icon: faMagic,
            title: "AI Content Generation",
            description: "Automated creation of personalized learning materials",
            lists: [
                {
                    icon: faVideo,
                    text: "Educational video generation",
                },
                {
                    icon: faMicrophone,
                    text: "AI-powered podcast creation",
                },
                {
                    icon: faBook,
                    text: "Interactive learning materials",
                },
            ],
        },
        {
            icon: faRoute,
            title: "Smart Learning Paths",
            description: "AI-driven customized learning journeys",
            lists: [
                {
                    icon: faChartLine,
                    text: "Progress-based recommendations",
                },
                {
                    icon: faPuzzlePiece,
                    text: "Adaptive learning modules",
                },
                {
                    icon: faBullseye,
                    text: "Goal-oriented curriculum",
                },
            ],
        },
        {
            icon: faClipboardCheck,
            title: "Smart Assessment",
            description: "Continuous evaluation and feedback system",
            lists: [
                {
                    icon: faTasks,
                    text: "Dynamic skill assessment",
                },
                {
                    icon: faComments,
                    text: "Real-time feedback",
                },
                {
                    icon: faGraduationCap,
                    text: "Performance analytics",
                },
            ],
        },
    ],
};
export const FutureScope = () => {
    return (
        <section className="py-16 bg-[var(--bg-color)] px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <span className="text-[var(--accent-color)] font-semibold">What's Next</span>
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
                    <p className="text-[var(--text-color)] opacity-80 mb-6">Want to contribute or suggest new features?</p>
                    <Link href="https://github.com/prashantsingh2408/mentor-ai"
                        className="inline-flex items-center px-6 py-3 bg-[var(--accent-color)] hover:bg-[var(--accent-dark)] text-white font-semibold rounded-lg transition duration-300">
                            <FontAwesomeIcon icon={faGithub}  className="mr-2"/>
                        Join Our GitHub Community
                    </Link>
                </div>
            </div>
        </section>
    )
}