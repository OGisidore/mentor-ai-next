/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  faChartLine,
  faChevronLeft,
  faChevronRight,
  faCircle,
  faComments,
  faGlobe,
  faGraduationCap,
  faLanguage,
  faMicrophone,
  faPaperclip,
  faPaperPlane,
  faTasks,
  faUser,
  faUserCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import "./agent.css";
import { AgenthHeader } from "./components/header";
import { Pannel } from "./components/sugestionPannel";
import useWebRTCAudioSession from "@/hooks/use-webrtc";
import Transcriber from "../ai-transcriber/components/transcriber";
import InteractiveAvatar from "@/components/avatars/InteractiveAvatar";
// user message format


// bot message format
const BotMessage = ({ message }: { message: string }) => (
  <div className="flex items-start max-w-3xl">
    <div className="flex-shrink-0">
      <div
        className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center"
      >
        {/* <Languages className="text-primary-600" /> */}
        <FontAwesomeIcon icon={faLanguage} className="text-gray-600" />
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
  const [messages, setMessages] = useState<
    { type: "user" | "bot"; content: string }[]
  >([]);
  const [mode , setMode] = useState<"chat" | "avatar">("chat")
  // Références pour les éléments du DOM manipulés
  const chatMessagesRef = useRef<HTMLDivElement>(null);
  const messageInputRef = useRef<HTMLInputElement>(null);
  const sendButtonRef = useRef<HTMLButtonElement>(null);
  const micButtonRef = useRef<HTMLButtonElement>(null);
  const [ closeSession, setCloseSession] = useState(false)
  const { handleStartStopClick, isSessionActive, conversation, msgs } = useWebRTCAudioSession('alloy');



  // Clé API (attention : ne jamais exposer une clé en production)
  const API_KEY = "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"; // Clé tronquée pour l'exemple
 
  const stopListening = ()=>{
    if (mode === "avatar") {
      setCloseSession(true)
      
    }
    handleStartStopClick
  }

  // Classe d'intégration du chat (utilisant les refs)
  class ChatIntegration {
    messageInput!: HTMLInputElement;
    sendButton!: HTMLElement;
    chatMessages!: HTMLElement;

    constructor() {
      if (
        messageInputRef.current &&
        sendButtonRef.current &&
        chatMessagesRef.current
      ) {
        this.messageInput = messageInputRef.current;
        this.sendButton = sendButtonRef.current;
        this.chatMessages = chatMessagesRef.current;
        this.setupEventListeners();
      }
    }

    setupEventListeners() {
      this.messageInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          this.sendMessage();
        }
      });

      this.sendButton.addEventListener("click", () => this.sendMessage());
    }

    async sendMessage() {
      const message = this.messageInput.value.trim();
      if (!message) return;

      try {
        // Ajoute le message de l'utilisateur dans le chat
        // Ajout du message utilisateur
        setMessages((prev) => [...prev, { type: "user", content: message }]);
        // this.addMessageToChat(message, true);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
        this.messageInput.value = "";

        // Récupère la réponse de l'IA
        const response = await this.getAIResponse(message);
        setMessages((prev) => [...prev, { type: "bot", content: response }]);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
        // this.addMessageToChat(response, false);
      } catch (error) {
        console.error("Error sending message:", error);
        setMessages((prev) => [...prev, { type: "bot", content: "Sorry, there was an error processing your message." }]);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
        // this.addMessageToChat(
        //   "Sorry, there was an error processing your message.",
        //   false
        // );
      }
    }

    async getAIResponse(message: string) {
      try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "system",
                content: `You are a language learning assistant. 
If the user speaks in French, respond in French and provide corrections.
If the user speaks in English, first respond in English, then provide the French translation.
Be friendly and helpful.`,
              },
              {
                role: "user",
                content: message,
              },
            ],
          }),
        });
        const data = await response.json();
        return data.choices[0].message.content;
      } catch (error) {
        console.error("API Error:", error);
        throw error;
      }
    }


  }

  useEffect(() => {
    // Initialisation du ChatIntegration
    const chatIntegration = new ChatIntegration();
    (window as any).chatIntegration = chatIntegration;

    // On fait défiler les messages jusqu'en bas
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop =
        chatMessagesRef.current.scrollHeight;
    }







    // Initialise l'état du panneau de suggestions
    const panel = document.getElementById("suggestionsPanel");
    if (panel) {
      panel.classList.add("translate-x-full");
    }


  }, []);
  
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <AgenthHeader setShowSuggestions={() => setShowSuggestions(!showSuggestions)} />
      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
        {/* Section Chat */}
        <div className="flex-1 flex flex-col items-center bg-white mobile-chat-container">
          {
            mode === "chat" ? <div className="flex-1 overflow-y-auto p-4 space-y-4 chat-messages" ref={chatMessagesRef}>


            <Transcriber conversation={conversation} />

            {messages.map((msg, index) =>
              msg.type === "user" ? (
                <div key={index} className="flex w-full justify-end items-start max-w-3xl ml-auto">
                  <div className="mr-3 bg-primary-100 rounded-lg p-4">
                    <p className="text-gray-800">
                      {msg.content}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div
                      className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
                    >
                      <FontAwesomeIcon icon={faUser} className="text-gray-600" />
                      {/* <User className="text-gray-600" /> */}
                    </div>
                  </div>
                </div>
                // <UserMessage key={index} message={msg.content} />
              ) : (
                <BotMessage key={index} message={msg.content} />
              )
            )}
          </div> : <InteractiveAvatar conversation={conversation} closeSession={true} />
          }
          

          {/* Zone d'input du chat */}
          <div className="border-t border-gray-200 p-4 bg-white chat-input">
            <div className=" w-[90vw] md:max-w-3xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type your message here..."
                  className="w-full border border-gray-300 rounded-2xl px-4 py-3 pr-32 focus:outline-none focus:border-gray-400 focus:ring-0"
                  ref={messageInputRef}
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <FontAwesomeIcon icon={faPaperclip} />
                  </button>
                  <div className="relative">
                    <button
                      type="button"
                      className={isSessionActive ? "listening " : " " + " cursor-pointer p-2 text-gray-400 hover:text-gray-600"}
                      id="micButton"
                      onClick={handleStartStopClick}
                      ref={micButtonRef}
                    >
                      <FontAwesomeIcon icon={faMicrophone} />
                    </button>
                    <div onClick={handleStartStopClick}
                      className={isSessionActive ? "" : "hidden " + "mic-waves p-2 "}>
                      <div className="mic-wave"></div>
                      <div className="mic-wave"></div>
                      <div className="mic-wave"></div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={()=> setMode("avatar")}
                    className="p-2 text-gray-400 hover:text-gray-600"
                  >
                    <FontAwesomeIcon icon={faUserCircle} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600" ref={sendButtonRef}>
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </button>
                </div>
              </div>
              <div className="flex gap-2 mt-2 relative">
                <div className="absolute left-0 top-0 h-full flex items-center pointer-events-none z-10">
                  <div className="h-full w-12 bg-gradient-to-r from-white to-transparent flex items-center">
                    <FontAwesomeIcon icon={faChevronLeft} className="text-gray-400 ml-1" />
                  </div>
                </div>
                <div className="w-full overflow-x-auto flex gap-2 scrollbar-hide px-8">
                  <button className="px-4 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 flex items-center gap-2 whitespace-nowrap flex-shrink-0">
                    <FontAwesomeIcon icon={faGraduationCap} />
                    Start English Learning Path
                  </button>
                  <button className="px-4 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 flex items-center gap-2 whitespace-nowrap flex-shrink-0">
                    <FontAwesomeIcon icon={faChartLine} />
                    Professional Language Skills
                  </button>
                  <button className="px-4 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 flex items-center gap-2 whitespace-nowrap flex-shrink-0">
                    <FontAwesomeIcon icon={faGlobe} />
                    Cultural Immersion Practice
                  </button>
                  <button className="px-4 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 flex items-center gap-2 whitespace-nowrap flex-shrink-0">
                    <FontAwesomeIcon icon={faComments} />
                    Conversation Scenarios
                  </button>
                  <button className="px-4 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 flex items-center gap-2 whitespace-nowrap flex-shrink-0">
                    <FontAwesomeIcon icon={faTasks} />
                    Set Learning Goals
                  </button>
                </div>
                <div className="absolute right-0 top-0 h-full flex items-center pointer-events-none z-10">
                  <div className="h-full w-12 bg-gradient-to-l from-white to-transparent flex items-center justify-end">
                    <FontAwesomeIcon icon={faChevronRight} className="text-gray mr-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="speech-feedback" id="speechFeedback">
            <div className="flex items-center gap-3">
              <div className="animate-pulse">
                <FontAwesomeIcon icon={faCircle} className="text-red-500" />
              </div>
              <span id="speechFeedbackText" className="text-gray-800">
                Listening...
              </span>
            </div>
          </div>
        </div>

        <Pannel showSuggestions={showSuggestions} setShowSuggestions={() => setShowSuggestions(!showSuggestions)} />

        <div id="avatarView" className="avatar-view hidden">
          <div className="avatar-main">
            <div className="avatar-placeholder">
              <FontAwesomeIcon icon={faUserCircle} />
              <p>Avatar Coming Soon</p>
            </div>
            <div className="avatar-controls">
              <button className="control-button" id="startAvatarButton">
                <FontAwesomeIcon icon={faMicrophone} />
                Start Speaking
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
