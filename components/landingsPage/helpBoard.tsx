"use client"

import ChatAPI from "@/lib/api-utils";
import { faQuestionCircle, faGraduationCap, faCode, faPalette } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRef, useState, useEffect } from "react";

export const HelpBoard = () => {
    const chatAPI = useRef(new ChatAPI());
    const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>(
      []
    );
    const chatContainerRef = useRef<HTMLDivElement | null>(null);
  
  
  
    const sendMessage = async () => {
      const input = document.getElementById("user-input") as HTMLInputElement;
      const message = input.value.trim();
      if (!message) return;
  
      input.value = "";
  
      setMessages((prev) => [...prev, { text: message, isUser: true }]);
  
      try {
        const response = await chatAPI.current.getAIResponse(message);
        setMessages((prev) => [...prev, { text: response, isUser: false }]);
      } catch (error) {
        console.error("Error:", error);
        setMessages((prev) => [
          ...prev,
          { text: "Sorry, there was an error processing your message.", isUser: false },
        ]);
      }
    }
    useEffect(() => {
        const handleHelpClick = (e: Event) => {
          e.stopPropagation();
          const helpContent = document.querySelector(".help-content");
          helpContent?.classList.toggle("show");
        };
    
        const handleDocumentClick = (e: MouseEvent) => {
          const helpContent = document.querySelector(".help-content");
          const helpBoard = document.querySelector(".help-board");
          if (helpBoard && !helpBoard.contains(e.target as Node)) {
            helpContent?.classList.remove("show");
          }
        };
    
        document
          .querySelector(".help-icon")
          ?.addEventListener("click", handleHelpClick);
        document.addEventListener("click", handleDocumentClick);
    
        return () => {
          document
            .querySelector(".help-icon")
            ?.removeEventListener("click", handleHelpClick);
          document.removeEventListener("click", handleDocumentClick);
        };
      }, []);
    
      const selectMentor = (mentorType: string) => {
        const mentorPrompts: Record<string, string> = {
          academic:
            "You are now an academic mentor focused on structured learning and academic subjects. Help the student with their academic questions.",
          technical:
            "You are now a technical mentor specializing in programming and technical skills. Help the student with their technical questions.",
          creative:
            "You are now a creative mentor focused on arts and creative projects. Help the student explore their creative potential.",
        };
    
        chatAPI.current.setSystemPrompt(mentorPrompts[mentorType]);
        document.querySelector(".help-content")?.classList.remove("show");
        initializeChat();
      };
    
      const initializeChat = () => {
        if (!chatContainerRef.current) {
          chatContainerRef.current = document.createElement("div");
          chatContainerRef.current.id = "chat-interface";
          document.body.appendChild(chatContainerRef.current);
        }
      };
    return (
        <div className="help-board">
            <div className="help-icon">
                <FontAwesomeIcon icon={faQuestionCircle} className='text-white text-2xl' />
                {/* <i className="fas fa-question-circle"></i> */}
            </div>
            <div className="help-content">
                <h3>Choose Your Learning Mentor</h3>
                <div className="mentor-options">
                    <div className="mentor-card" onClick={() => selectMentor('academic')}>
                        <FontAwesomeIcon icon={faGraduationCap} className='text-[#007bff] text-xl mb-[10px]' />
                        {/* <i className="fas fa-graduation-cap"></i> */}
                        <h4>Academic Mentor</h4>
                        <p>Perfect for structured learning and academic subjects</p>
                    </div>
                    <div className="mentor-card" onClick={() => selectMentor('technical')}>
                        <FontAwesomeIcon icon={faCode} className='text-[#007bff] text-xl mb-[10px]' />
                        {/* <i className="fas fa-code"></i> */}
                        <h4>Technical Mentor</h4>
                        <p>Ideal for programming and technical skills</p>
                    </div>
                    <div className="mentor-card" onClick={() => selectMentor('creative')}>
                        <FontAwesomeIcon icon={faPalette} className='text-[#007bff] text-xl mb-[10px]' />
                        {/* <i className="fas fa-palette"></i> */}
                        <h4>Creative Mentor</h4>
                        <p>Best for arts and creative projects</p>
                    </div>
                </div>
            </div>
        </div>
    )
}