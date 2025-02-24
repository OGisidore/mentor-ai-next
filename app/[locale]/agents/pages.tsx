"use client"
import { History, Languages, LanguagesIcon, Lightbulb, Mic, Paperclip, PlaneTakeoffIcon, User, UserCircle } from "lucide-react";
import { useState } from "react";
import SpeechChatbot from "./speach";
import { SuggestionsPanel } from "@/components/agent/sugestionPanel";
import Link from "next/link";
import "./agent.css";


// user message format
const UserMessage = ( message: string) => (
    <div  className="flex w-full justify-end items-start max-w-3xl ml-auto">
        <div className="mr-3 bg-primary-100 rounded-lg p-4">
            <p className="text-gray-800">
                {message}
            </p>
        </div>
        <div className="flex-shrink-0">
            <div
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
            >
                <User className="text-gray-600" />
            </div>
        </div>
    </div>
)

// bot message format
const BotMessage = (message : string) => (
    <div className="flex items-start max-w-3xl">
        <div className="flex-shrink-0">
            <div
                className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center"
            >
                <Languages className="text-primary-600" />
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
    const [showSuggestions, setShowSuggestions] = useState(true);
    const [messages, setMessages] = useState<any[]>([]);
    const toggleSuggestions = () => {
        console.log("click");

        setShowSuggestions(!showSuggestions);
    };

    return (
        <>
            <header className=" header shadow-sm flex-none">
                <nav className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
                    <Link href={"/"} className="flex items-center">
                        {/* <FontAwesomeIcon icon={faLanguage} className="text-2xl text-gray-700 mr-2" /> */}
                        <span className="text-xl font-semibold">Language Mentor AI Agent</span>
                    </Link>
                    <div className="flex items-center gap-3">
                        <button onClick={toggleSuggestions} className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg" >
                            {/* <FontAwesomeIcon icon={faLightbulb} /> */}
                            <Lightbulb />
                        </button>
                        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                            <History />
                            {/* <FontAwesomeIcon icon={faHistory} /> */}
                        </button>
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                            {/* <FontAwesomeIcon icon={faUser} className="text-gray-600" /> */}
                            <User />
                        </div>
                    </div>
                </nav>
            </header>
            <div className="screnMinusHeader flex flex-col bg-gray-50">

                {/* <Header toggleSuggestions={toggleSuggestions} /> */}
                <main className="flex-1 flex flex-col  lg:flex-row overflow-hidden relative">
                    {/* <!-- Chat Section --> */}
                    <div className=" flex-1 flex flex-col items-center bg-white mobile-chat-container">
                        {/* <!-- Chat Messages --> */}
                        <div className="flex-1 overflow-y-auto no-scrollbar p-4 w-[70%] space-y-4 chat-messages">
                            {/* <!-- Initial Bot Message --> */}
                            <div className="flex items-start max-w-3xl">
                                <div className="flex-shrink-0">
                                    <div
                                        className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center"
                                    >
                                        <LanguagesIcon className="text-primary-600" />
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


                            {/* <!-- Bot Response --> */}

                            <div className="chat-messages">
                                {messages.map((msg, index) => (
                                    msg.role === 'user' ? <div key={index} className="">{UserMessage(msg.content)} </div>  : <div key={index} className="">{BotMessage(msg.content)}</div>
                                ))}
                            </div>
                        </div>
                        {/* <SpeechChatbot /> */}
                        {/* <!-- Chat Input --> */}
                        <div className="border-t border-gray-200 p-4 bg-white chat-input">
                            <div className="max-w-3xl mx-auto">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Type your message..."
                                        className="w-full border border-gray-300 rounded-2xl px-4 py-3 pr-32 focus:outline-none focus:border-gray-400 focus:ring-0"
                                    />
                                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                        <button className="p-2 text-gray-400 hover:text-gray-600">
                                            <Paperclip />
                                        </button>
                                      
                                        <SpeechChatbot messages={messages} setMessages={(messages) => setMessages(messages)} />
                                        <button
                                            type="button"
                                            className="p-2 text-gray-400 hover:text-gray-600"
                                            id="avatarButton"
                                            onClick={toggleSuggestions}
                                        >
                                            <UserCircle />
                                        </button>
                                        <button className="p-2 text-gray-400 hover:text-gray-600">
                                            <PlaneTakeoffIcon />
                                            <i className="fas fa-paper-plane"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex gap-2 mt-2 relative">
                                    {/* <!-- Left fade indicator with icon --> */}
                                    <div className="absolute left-0 top-0 h-full flex items-center pointer-events-none z-10">
                                        <div className="h-full w-12 bg-gradient-to-r from-white to-transparent flex items-center">
                                            <i className="fas fa-chevron-left text-gray-400 ml-1"></i>
                                        </div>
                                    </div>

                                    {/* <!-- Single scrollable container for all buttons --> */}
                                    <div className="w-full overflow-x-auto flex gap-2 scrollbar-hide px-8">
                                        <button className="px-4 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 flex items-center gap-2 whitespace-nowrap flex-shrink-0">
                                            <i className="fas fa-graduation-cap"></i>
                                            Start English Learning Path
                                        </button>
                                        <button className="px-4 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 flex items-center gap-2 whitespace-nowrap flex-shrink-0">
                                            <i className="fas fa-chart-line"></i>
                                            Professional Language Skills
                                        </button>
                                        <button className="px-4 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 flex items-center gap-2 whitespace-nowrap flex-shrink-0">
                                            <i className="fas fa-globe"></i>
                                            Cultural Immersion Practice
                                        </button>
                                        <button className="px-4 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 flex items-center gap-2 whitespace-nowrap flex-shrink-0">
                                            <i className="fas fa-comments"></i>
                                            Conversation Scenarios
                                        </button>
                                        <button className="px-4 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 flex items-center gap-2 whitespace-nowrap flex-shrink-0">
                                            <i className="fas fa-tasks"></i>
                                            Set Learning Goals
                                        </button>
                                    </div>

                                    {/* <!-- Right fade indicator with icon --> */}
                                    <div className="absolute right-0 top-0 h-full flex items-center pointer-events-none z-10">
                                        <div className="h-full w-12 bg-gradient-to-l from-white to-transparent flex items-center justify-end">
                                            <i className="fas fa-chevron-right text-gray-400 mr-1"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="speech-feedback" id="speechFeedback">
                            <div className="flex items-center gap-3">
                                <div className="animate-pulse">
                                    <i className="fas fa-circle text-red-500"></i>
                                </div>
                                <span id="speechFeedbackText" className="text-gray-800">Listening...</span>
                            </div>
                        </div>
                    </div>
                    <SuggestionsPanel toggleSuggestions={() => setShowSuggestions(!showSuggestions)} showSuggestions={showSuggestions} />
                    <div id="avatarView" className="avatar-view hidden">
                        <div className="avatar-main">
                            <div className="avatar-placeholder">
                                <i className="fas fa-user-circle"></i>
                                <p>Avatar Coming Soon</p>
                            </div>
                            <div className="avatar-controls">
                                <button className="control-button" id="startAvatarButton">
                                    <i className="fas fa-microphone"></i>
                                    Start Speaking
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
