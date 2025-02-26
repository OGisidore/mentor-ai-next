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
  // Références pour les éléments du DOM manipulés
  const chatMessagesRef = useRef<HTMLDivElement>(null);
  const messageInputRef = useRef<HTMLInputElement>(null);
  const sendButtonRef = useRef<HTMLButtonElement>(null);
  const micButtonRef = useRef<HTMLButtonElement>(null);
  const speechUtterance = useRef<SpeechSynthesisUtterance | null>(null);
  const recognitionRef = useRef<any>(null);


  // Clé API (attention : ne jamais exposer une clé en production)
  const API_KEY = "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"; // Clé tronquée pour l'exemple

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

    // addMessageToChat(text: string, isUser: boolean) {
    //   const messageDiv = document.createElement("div");
    //   messageDiv.className = `flex items-start max-w-3xl ${isUser ? "ml-auto" : ""
    //     }`;

    //   const messageHTML = isUser
    //     ? `
    //       <div class="mr-3 bg-primary-100 rounded-lg p-4">
    //         <p class="text-gray-800">${text}</p>
    //       </div>
    //       <div class="flex-shrink-0">
    //         <div class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
    //           <i class="fas fa-user text-gray-600"></i>
    //         </div>
    //       </div>
    //     `
    //     : `
    //       <div class="flex-shrink-0">
    //         <div class="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
    //           <i class="fas fa-language text-primary-600"></i>
    //         </div>
    //       </div>
    //       <div class="ml-3 bg-gray-100 rounded-lg p-4">
    //         <p class="text-gray-800">${text}</p>
    //       </div>
    //     `;
    //   messageDiv.innerHTML = messageHTML;
    //   this.chatMessages.appendChild(messageDiv);
    //   this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    // }
  }

  // Gestion de la reconnaissance vocale et de la synthèse vocale
  // const [recognition, setRecognition] = useState<any>(null);
  const [isListening, setIsListening] = useState(false);

  // Configuration de la synthèse vocale
  // const speechUtterance = useRef(new SpeechSynthesisUtterance());
  useEffect(() => {
    if (typeof window !== "undefined" && window.SpeechSynthesisUtterance) {
      const utterance = new SpeechSynthesisUtterance();
      utterance.lang = "en-US";
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      speechUtterance.current = utterance;
    }
    // speechUtterance.current.lang = "en-US";
    // speechUtterance.current.rate = 1.0;
    // speechUtterance.current.pitch = 1.0;
  }, []);

  useEffect(() => {
    function initializeSpeechRecognition() {
      try {
        const SpeechRecognition =
          (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        if (SpeechRecognition) {
          const recog = new SpeechRecognition();
          recog.continuous = true;
          recog.interimResults = true;
          recog.lang = "en-US";
          recog.onresult = handleSpeechResult;
          recog.onerror = handleSpeechError;
          recog.onend = handleSpeechEnd;
          recognitionRef.current = recog;
          console.log("Speech recognition initialized");
        }
      } catch (error) {
        console.error("Speech recognition failed to initialize:", error);
      }
    }

    initializeSpeechRecognition();
    // Ajoutez ici la configuration de vos autres écouteurs, etc.

    // Cleanup si besoin
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []); // effect exécuté une seule fois


  // function initializeSpeechRecognition() {
  //   try {
  //     // Pour TypeScript, on cast window afin d'accéder à SpeechRecognition
  //     const SpeechRecognition =
  //       (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
  //     if (SpeechRecognition) {
  //       const recog = new SpeechRecognition();
  //       recog.continuous = true;
  //       recog.interimResults = true;
  //       recog.lang = "en-US";
  //       recog.onresult = handleSpeechResult;
  //       recog.onerror = handleSpeechError;
  //       recog.onend = handleSpeechEnd;
  //       setRecognition(recog);
  //       console.log("Speech recognition initialized");
  //     }
  //   } catch (error) {
  //     console.error("Speech recognition failed to initialize:", error);
  //   }
  // }

  function startListening() {
    try {
      if (recognitionRef.current) {
        recognitionRef.current.start();
        setIsListening(true);
        updateUIForListening(true);
        console.log("Started listening");
      }
    } catch (error) {
      console.error("Failed to start listening:", error);
      alert("Speech recognition failed to start. Please try again.");
      stopListening();
    }
  }

  function stopListening() {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsListening(false);
    updateUIForListening(false);
    console.log("Stopped listening");
  }

  function handleMicClick(event: { preventDefault: () => void; }) {
    event.preventDefault();
    const micButton = micButtonRef.current;
    const micWaves = micButton?.parentElement?.querySelector(".mic-waves");
    if (!recognitionRef.current) {
      // Si jamais l'initialisation n'a pas encore eu lieu (ce qui ne devrait pas arriver si l'effet est bien exécuté)
      return;
    }
    if (!isListening) {
      startListening();
      micButton?.classList.add("listening");
      micWaves?.classList.remove("hidden");
    } else {
      stopListening();
      micButton?.classList.remove("listening");
      micWaves?.classList.add("hidden");
    }
  }


  function updateUIForListening(active: boolean) {
    const micButton = micButtonRef.current;
    const micWaves = micButton?.parentElement?.querySelector(".mic-waves");
    const speechFeedback = document.getElementById("speechFeedback");
    if (active) {
      micButton?.classList.add("listening");
      micWaves?.classList.remove("hidden");
      if (speechFeedback) speechFeedback.style.display = "flex";
    } else {
      micButton?.classList.remove("listening");
      micWaves?.classList.add("hidden");
      if (speechFeedback) speechFeedback.style.display = "none";
    }
  }

  async function handleSpeechResult(event: { results: string | any[]; }) {
    const transcript = event.results[event.results.length - 1][0].transcript.trim();
    console.log("Speech recognized:", transcript);
    if (transcript) {
      setMessages((prev) => [...prev, { type: "user", content: transcript }]);
      if (chatMessagesRef.current) {
        chatMessagesRef.current.scrollTop =
          chatMessagesRef.current.scrollHeight;
      }
      // displayMessage("user", transcript);
      if (transcript.toLowerCase() === "stop") {
        stopListening();
        return;
      }
      try {
        await streamFromOpenAI(transcript);
      } catch (error) {
        console.error("OpenAI API Error:", error);
        setMessages((prev) => [...prev, { type: "bot", content: "AI is currently unavailable. Please try again later." }]);
        if (chatMessagesRef.current) {
          chatMessagesRef.current.scrollTop =
            chatMessagesRef.current.scrollHeight;
        }

        // displayMessage("assistant", "⚠ AI is currently unavailable. Please try again later.");
      }
    }
  }

  function handleSpeechError(event: { error: unknown; }) {
    console.error("Speech recognition error:", event.error);
    stopListening();
  }

  function handleSpeechEnd() {
    if (isListening && recognitionRef.current) {
      try {
        recognitionRef.current.start();
      } catch (error) {
        console.error("Failed to restart recognition:", error);
        stopListening();
      }
    }
  }

  async function streamFromOpenAI(text: string) {
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: text }],
          stream: true,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`OpenAI Error: ${errorData.error.message}`);
      }

      if (chatMessagesRef.current) {
        const responsePlaceholder = document.createElement("div");
        responsePlaceholder.className = "message assistant";
        responsePlaceholder.innerHTML =
          '<b>AI:</b> <span class="content"></span>';
        chatMessagesRef.current.appendChild(responsePlaceholder);
        const contentSpan = responsePlaceholder.querySelector(".content");

        const reader = response?.body?.getReader();
        const decoder = new TextDecoder();
        let responseText = "";

        while (true) {
          const result = await reader?.read();
          if (!result) break; // Vérifie que result n'est pas undefined
          const { done, value } = result;
          if (done) break;
          const chunk = decoder.decode(value);
          const lines = chunk.split("\n").filter((line) => line.trim());

          for (const line of lines) {
            if (line.startsWith("data: ")) {
              const data = line.slice(6);
              if (data === "[DONE]") continue;
              try {
                const parsed = JSON.parse(data);
                const content = parsed.choices[0]?.delta?.content || "";
                if (content) {
                  responseText += content;
                  if (contentSpan) {
                    contentSpan.textContent = responseText;
                  }
                  chatMessagesRef.current.scrollTop =
                    chatMessagesRef.current.scrollHeight;
                }
              } catch (error) {
                console.error("Error parsing chunk:", error);
              }
            }
          }
        }
        speakText(responseText);
      }
    } catch (error) {
      console.error("Streaming Error:", error);
      setMessages((prev) => [...prev, { type: "bot", content: "⚠ Error in AI response. Please try again." }]);
      if (chatMessagesRef.current) {
        chatMessagesRef.current.scrollTop =
          chatMessagesRef.current.scrollHeight;
      }
    }
  }

  function speakText(text: string) {
    if (!speechUtterance.current) return;
    window.speechSynthesis.cancel();
    speechUtterance.current.text = text;
    window.speechSynthesis.speak(speechUtterance.current);
    speechUtterance.current.onend = () => {
      console.log("Finished speaking");
    };
    speechUtterance.current.onerror = (event) => {
      console.error("Speech synthesis error:", event);
    };

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



    // Ajoute l'écouteur pour le bouton micro
    const micButton = micButtonRef.current;
    micButton?.addEventListener("click", handleMicClick);

    // Configuration de la voix pour la synthèse vocale
    window.speechSynthesis.onvoiceschanged = () => {
      if (!speechUtterance.current) return;
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice =
        voices.find(
          (voice) =>
            voice.lang.includes("en") &&
            (voice.name.includes("Natural") || voice.name.includes("Premium"))
        ) || voices.find((voice) => voice.lang.includes("en"));

      if (preferredVoice) {
        speechUtterance.current.voice = preferredVoice;
        console.log("Selected voice:", preferredVoice.name);
      }
    };

    // Initialise l'état du panneau de suggestions
    const panel = document.getElementById("suggestionsPanel");
    if (panel) {
      panel.classList.add("translate-x-full");
    }

    // Cleanup : supprime l'écouteur lors du démontage
    return () => {
      micButton?.removeEventListener("click", handleMicClick);
    };
  }, []);

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <AgenthHeader setShowSuggestions={() => setShowSuggestions(!showSuggestions)} />
      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
        {/* Section Chat */}
        <div className="flex-1 flex flex-col items-center bg-white mobile-chat-container">
          <div className="flex-1 overflow-y-auto p-4 space-y-4 chat-messages" ref={chatMessagesRef}>
            {/* Message initial du Bot */}
            <div className="flex items-start max-w-3xl">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                  <FontAwesomeIcon icon={faLanguage} className="text-primary-600" />
                </div>
              </div>
              <div className="ml-3 bg-gray-100 rounded-lg p-4">
                <p className="text-gray-800">
                  Welcome to Mentor Mind&apos;s Language Learning! I&apos;m your AI Language Mentor, designed to provide personalized learning experiences. I can help you with:
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

            {/* Exemple de message utilisateur */}
            <div className="flex items-start max-w-3xl ml-auto">
              <div className="mr-3 bg-primary-100 rounded-lg p-4">
                <p className="text-gray-800">
                  I&apos;d like to practice travel-related phrases in French.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <FontAwesomeIcon icon={faUser} className="text-gray-600" />
                </div>
              </div>
            </div>

            {/* Exemple de réponse du Bot */}
            <div className="flex items-start max-w-3xl">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                  <FontAwesomeIcon icon={faLanguage} className="text-primary-600" />
                </div>
              </div>
              <div className="ml-3 bg-gray-100 rounded-lg p-4">
                <p className="text-gray-800">
                  Perfect! Let&apos;s start with some essential travel phrases. I&apos;ll help you with both pronunciation and meaning. Try saying this:
                </p>
                <p className="mt-2 font-medium text-primary-600">
                  Excusez-moi, où est la gare ?&quot;
                </p>
                <p className="mt-2 text-gray-600 italic">
                  (Excuse me, where is the train station?)
                </p>
                <p className="mt-2 text-gray-700">
                  Click the microphone icon to practice pronouncing this phrase, and I&apos;ll give you feedback.
                </p>
              </div>
            </div>
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
          </div>

          {/* Zone d'input du chat */}
          <div className="border-t border-gray-200 p-4 bg-white chat-input">
            <div className="max-w-3xl mx-auto">
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
                      className="p-2 text-gray-400 hover:text-gray-600"
                      id="micButton"
                      ref={micButtonRef}
                    >
                      <FontAwesomeIcon icon={faMicrophone} />
                    </button>
                    <div className="mic-waves hidden">
                      <div className="mic-wave"></div>
                      <div className="mic-wave"></div>
                      <div className="mic-wave"></div>
                    </div>
                  </div>
                  <Link
                    href={"https://mentor-ai-avatar-front-end.vercel.app/"}
                    className="p-2 text-gray-400 hover:text-gray-600"
                  >
                    <FontAwesomeIcon icon={faUserCircle} />
                  </Link>
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
