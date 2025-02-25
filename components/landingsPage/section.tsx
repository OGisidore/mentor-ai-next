"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faCheckCircle, faComments, faMicrophone, faUser } from "@fortawesome/free-solid-svg-icons";
import { useScopedI18n } from "@/locales/client"
import { Brain, BrainIcon, CheckCircle, MessageCircleMore, Microchip, Microwave, User } from "lucide-react"

export const SectionFirst = () => {
    const sectionT = useScopedI18n("landngPage.sectionFirst")

    return (
        <section id="features" className="py-12 sm:py-16 bg-[var(--bg-color)] px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="*:text-[var(--accent-color)] font-semibold">{sectionT("see_it_in_action")}</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">{sectionT("watch_how_it_works")}</h2>
                    <div className="mt-8 max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/your-video-id"
                                title="Mentor Mind Demo"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>
                <div className="text-center mb-16">
                    <span className="text-green-500 font-semibold">{sectionT("core_features")}</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">{sectionT("powerful_modes")}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="feature-card bg-[var(--bg-color)] p-6 rounded-lg shadow-md border border-[var(--border-color)]">
                        <h3 className="text-xl font-semibold text-[var(--text-color)] mb-3">
                            <FontAwesomeIcon icon={faComments} className= "mr-2 text-[var(--accent-color)]" />
                            {/* // <i className="fas fa-comments "></i> */}
                            {sectionT("chartMode_title")}
                        </h3>
                        <p className="text-[var(--text-color)] opacity-80">
                            {sectionT("chartMode_desc")}
                        </p>
                    </div>

                    <div className="feature-card bg-[var(--bg-color)] p-6 rounded-lg shadow-md border border-[var(--border-color)]">
                        <h3 className="text-xl font-semibold text-[var(--text-color)] mb-3">
                            {/* <i className="fas fa-microphone mr-2 text-[var(--accent-color)]"></i> */}
                            <FontAwesomeIcon icon={faMicrophone} className= "mr-2 text-[var(--accent-color)]" />

                            {sectionT("voiceMode_title")}
                        </h3>
                        <p className="text-[var(--text-color)] opacity-80">
                            {sectionT("voiceMode_desc")}
                        </p>
                    </div>

                    <div className="feature-card bg-[var(--bg-color)] p-6 rounded-lg shadow-md border border-[var(--border-color)]">
                        <h3 className="text-xl font-semibold text-[var(--text-color)] mb-3">
                            <FontAwesomeIcon icon={faUser} className="mr-2 text-[var(--accent-color)]" />
                            {/* <i className="fas fa-user-circle mr-2 text-[var(--accent-color)]"></i> */}
                            {sectionT("avatarMode_title")}
                        </h3>
                        <p className="text-[var(--text-color)] opacity-80">
                            {sectionT("avatarMode_desc")}
                        </p>
                    </div>
                </div>

                <div className="mt-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-[var(--text-color)]">{sectionT("key_Capabilities")}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-[var(--bg-color)] p-6 rounded-lg shadow-md border border-[var(--border-color)]">
                            <h3 className="text-xl font-semibold text-[var(--text-color)] mb-3">
                                {/* <CheckCircle className=" mr-2 text-[var(--accent-color)]"/> */}
                                <FontAwesomeIcon icon={faCheckCircle} className=" mr-2 text-[var(--accent-color)]" />
                                <i className="fas fa-check-circle mr-2 text-[var(--accent-color)]"></i>
                                {sectionT("Feedback_title")}
                            </h3>
                            <p className="text-[var(--text-color)] opacity-80">
                                {sectionT("Feedback_text")}
                            </p>
                        </div>

                        <div className="bg-[var(--bg-color)] p-6 rounded-lg shadow-md border border-[var(--border-color)]">
                            <h3 className="text-xl flex items-center font-semibold text-[var(--text-color)] mb-3">
                                <FontAwesomeIcon icon={faBrain} className="mr-2 text-[var(--accent-color)]" />
                                {sectionT("context_Awareness")}
                            </h3>
                            <p className="text-[var(--text-color)] opacity-80">
                                {sectionT('context_Awareness_desc')}                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
