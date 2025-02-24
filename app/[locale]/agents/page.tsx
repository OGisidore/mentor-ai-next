"use client"
import { useState } from "react";
import "./agent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faChartLine, faCheckDouble, faChevronLeft, faChevronRight, faCircle, faComments, faFire, faGlobe, faGraduationCap, faHistory, faLanguage, faLightbulb, faMicrophone, faPaperclip, faPaperPlane, faStar, faTasks, faTimes, faUser, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { AgenthHeader } from "./components/header";
import { Pannel } from "./components/sugestionPannel";
import { Link } from "lucide-react";


// user message format
const UserMessage = (message: string) => (
    <div className="flex w-full justify-end items-start max-w-3xl ml-auto">
        <div className="mr-3 bg-primary-100 rounded-lg p-4">
            <p className="text-gray-800">
                {message}
            </p>
        </div>
        <div className="flex-shrink-0">
            <div
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
            >
                {/* <User className="text-gray-600" /> */}
            </div>
        </div>
    </div>
)

// bot message format
const BotMessage = (message: string) => (
    <div className="flex items-start max-w-3xl">
        <div className="flex-shrink-0">
            <div
                className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center"
            >
                {/* <Languages className="text-primary-600" /> */}
                <i className="fas fa-language text-primary-600"></i>
            </div>
        </div>
        <div className="ml-3 bg-gray-100 rounded-lg p-4">
            <p className="text-gray-800">
                {message}
            </p>

        </div>

    </div>
)

export default function Agent() {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [messages, setMessages] = useState<any[]>([]);
    

    return (
        <div className="h-screen flex flex-col  bg-gray-50">

            <AgenthHeader setShowSuggestions={()=>setShowSuggestions(!showSuggestions)} />
            {/* <!-- Main Content --> */}
            <main className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
                {/* <!-- Chat Section --> */}
                <div className="flex-1 flex flex-col items-center bg-white mobile-chat-container">
                    {/* <!-- Chat Messag/es --> */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 chat-messages">
                        {/* <!-- Initial Bot Message --> */}
                        <div className="flex items-start max-w-3xl">
                            <div className="flex-shrink-0">
                                <div
                                    className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center"
                                >
                                    <FontAwesomeIcon icon={faLanguage} className="text-primary-600" />

                                    {/* <i className="fas fa-language text-primary-600"></i> */}
                                </div>
                            </div>
                            <div className="ml-3 bg-gray-100 rounded-lg p-4">
                                <p className="text-gray-800">
                                    Welcome to Mentor Mind's Language Learning! I'm your AI Language Mentor, designed to provide personalized learning experiences. I can help you with:
                                </p>
                                <ul className="mt-2 space-y-1 text-gray-700">
                                    <li>• Interactive conversations in multiple languages</li>
                                    <li>• Real-time pronunciation feedback</li>
                                    <li>• Personalized vocabulary building</li>
                                    <li>• Goal-oriented learning paths</li>
                                    <li>• Cultural context and practical usage</li>
                                </ul>
                                <p className="mt-3 text-gray-600">
                                    What would you like to focus on today?
                                </p>
                            </div>
                        </div>

                        {/* <!-- User Message --> */}
                        <div className="flex items-start max-w-3xl ml-auto">
                            <div className="mr-3 bg-primary-100 rounded-lg p-4">
                                <p className="text-gray-800">
                                    I'd like to practice travel-related phrases in French.
                                </p>
                            </div>
                            <div className="flex-shrink-0">
                                <div
                                    className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
                                >
                                    <FontAwesomeIcon icon={faUser} className="text-gray-600" />

                                    {/* <i className="fas fa-user text-gray-600"></i> */}
                                </div>
                            </div>
                        </div>

                        {/* <!-- Bot Response --> */}
                        <div className="flex items-start max-w-3xl">
                            <div className="flex-shrink-0">
                                <div
                                    className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center"
                                >
                                    <FontAwesomeIcon icon={faLanguage} className="text-primary-600" />

                                    {/* <i className="fas fa-language text-primary-600"></i> */}
                                </div>
                            </div>
                            <div className="ml-3 bg-gray-100 rounded-lg p-4">
                                <p className="text-gray-800">
                                    Perfect! Let's start with some essential travel phrases. I'll help you with both pronunciation and meaning. Try saying this:
                                </p>
                                <p className="mt-2 font-medium text-primary-600">
                                    "Excusez-moi, où est la gare?"
                                </p>
                                <p className="mt-2 text-gray-600 italic">
                                    (Excuse me, where is the train station?)
                                </p>
                                <p className="mt-2 text-gray-700">
                                    Click the microphone icon to practice pronouncing this phrase, and I'll give you feedback.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Chat Input --> */}
                    <div className="border-t border-gray-200 p-4 bg-white chat-input">
                        <div className="max-w-3xl mx-auto">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Type your message here..."
                                    className="w-full border border-gray-300 rounded-2xl px-4 py-3 pr-32 focus:outline-none focus:border-gray-400 focus:ring-0"
                                />
                                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                    <button className="p-2 text-gray-400 hover:text-gray-600">
                                        <FontAwesomeIcon icon={faPaperclip} />

                                        {/* <i className="fas fa-paperclip"></i> */}
                                    </button>
                                    <div className="relative">
                                        <button
                                            type="button"
                                            className="p-2 text-gray-400 hover:text-gray-600"
                                            id="micButton"
                                        >
                                            <FontAwesomeIcon icon={faMicrophone} />

                                            {/* <i className="fas fa-microphone"></i> */}
                                        </button>
                                        <div className="mic-waves hidden">
                                            <div className="mic-wave"></div>
                                            <div className="mic-wave"></div>
                                            <div className="mic-wave"></div>
                                        </div>
                                    </div>
                                    {/* <!-- onclick="toggleAvatarMode()" --> */}
                                    <button
                                        type="button"
                                        className="p-2 text-gray-400 hover:text-gray-600"
                                        id="avatarButton"
                                        onClick={() => console.log()}
                                        


                                    // onClick="window.location.href='https://mentor-ai-avatar-front-end.vercel.app/'"
                                    >
                                        {/* <Link href="https://mentor-ai-avatar-front-end.vercel.app/"> */}
                                        <FontAwesomeIcon icon={faUserCircle} />
                                        {/* </Link> */}
                                        

                                        {/* <i className="fas fa-user-circle"></i> */}
                                    </button>
                                    <button className="p-2 text-gray-400 hover:text-gray-600">
                                        <FontAwesomeIcon icon={faPaperPlane} />
                                        {/* <i className="fas fa-paper-plane"></i> */}
                                    </button>
                                </div>
                            </div>
                            <div className="flex gap-2 mt-2 relative">
                                {/* <!-- Left fade indicator with icon --> */}
                                <div className="absolute left-0 top-0 h-full flex items-center pointer-events-none z-10">
                                    <div className="h-full w-12 bg-gradient-to-r from-white to-transparent flex items-center">
                                        <FontAwesomeIcon icon={faChevronLeft} className=" text-gray-400 ml-1" />
                                        {/* <i className="fas fa-chevron-left text-gray-400 ml-1"></i> */}
                                    </div>
                                </div>

                                {/* <!-- Single scrollable container for all buttons --> */}
                                <div className="w-full overflow-x-auto flex gap-2 scrollbar-hide px-8">
                                    <button className="px-4 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 flex items-center gap-2 whitespace-nowrap flex-shrink-0">
                                        <FontAwesomeIcon icon={faGraduationCap} />
                                        {/* <i className="fas fa-graduation-cap"></i> */}
                                        Start English Learning Path
                                    </button>
                                    <button className="px-4 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 flex items-center gap-2 whitespace-nowrap flex-shrink-0">
                                        <FontAwesomeIcon icon={faChartLine} />
                                        {/* <i className="fas fa-chart-line"></i> */}
                                        Professional Language Skills
                                    </button>
                                    <button className="px-4 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 flex items-center gap-2 whitespace-nowrap flex-shrink-0">
                                        <FontAwesomeIcon icon={faGlobe} />
                                        {/* <i className="fas fa-globe"></i> */}
                                        Cultural Immersion Practice
                                    </button>
                                    <button className="px-4 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 flex items-center gap-2 whitespace-nowrap flex-shrink-0">
                                        <FontAwesomeIcon icon={faComments} />
                                        {/* <i className="fas fa-comments"></i> */}
                                        Conversation Scenarios
                                    </button>
                                    <button className="px-4 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 flex items-center gap-2 whitespace-nowrap flex-shrink-0">
                                        <FontAwesomeIcon icon={faTasks} />
                                        {/* <i className="fas fa-tasks"></i> */}
                                        Set Learning Goals
                                    </button>
                                </div>

                                <div className="absolute right-0 top-0 h-full flex items-center pointer-events-none z-10">
                                    <div className="h-full w-12 bg-gradient-to-l from-white to-transparent flex items-center justify-end">
                                        <FontAwesomeIcon icon={faChevronRight} className="text-gray mr-1" />
                                        <i className="fas fa-chevron-right text-gray-400 mr-1"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="speech-feedback" id="speechFeedback">
                        <div className="flex items-center gap-3">
                            <div className="animate-pulse">
                                <FontAwesomeIcon icon={faCircle} className="text-red=500" />
                                {/* <i className="fas fa-circle text-red-500"></i> */}
                            </div>
                            <span id="speechFeedbackText" className="text-gray-800">Listening...</span>
                        </div>
                    </div>
                </div>

                <Pannel showSuggestions={showSuggestions} setShowSuggestions={()=>setShowSuggestions(!showSuggestions)}/>

                <div id="avatarView" className="avatar-view hidden">
                    <div className="avatar-main">
                        <div className="avatar-placeholder">
                            <FontAwesomeIcon icon={faUserCircle} />
                            {/* <i className="fas fa-user-circle"></i> */}
                            <p>Avatar Coming Soon</p>
                        </div>
                        <div className="avatar-controls">
                            <button className="control-button" id="startAvatarButton">
                                <FontAwesomeIcon icon={faMicrophone} />
                                {/* <i className="fas fa-microphone"></i> */}
                                Start Speaking
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
