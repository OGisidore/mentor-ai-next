import { streamFromOpenAI } from '@/lib/api-Ai';
import { Mic } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const SpeechChatbot = ({ messages, setMessages }: { messages: any, setMessages: (message: any[]) => void }) => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState('');
  // const [messages, setMessages] = useState<any[]>([]);

  let recognition: any = null;
  let speechSynthesisInstance = (window as any).speechSynthesis;
  let speechUtterance = new SpeechSynthesisUtterance();

  useEffect(() => {
    initializeSpeechRecognition();
  }, []);

  const initializeSpeechRecognition = () => {
    try {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        recognition = new SpeechRecognition();
      } else {
        console.error("Speech recognition is not supported in this browser.");
      }

      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';
      recognition.onresult = handleSpeechResult;
      recognition.onerror = handleSpeechError;
      recognition.onend = handleSpeechEnd;
    } catch (error) {
      console.error('Speech recognition initialization failed:', error);
    }
  };

  const handleMicClick = () => {
    if (!recognition) {
      initializeSpeechRecognition();
    }
    if (!isListening) {
      startListening();
    } else {
      stopListening();
    }
  };

  const startListening = () => {
    try {
      recognition.start();
      setIsListening(true);
    } catch (error) {
      console.error('Failed to start listening:', error);
    }
  };

  const stopListening = () => {
    recognition.stop();
    setIsListening(false);
  };

  const handleSpeechResult = async (event: { results: string | any[]; }) => {
    const text = event.results[event.results.length - 1][0].transcript.trim();
    setTranscript(text);
    if (text.toLowerCase() === 'stop') {
      stopListening();
    } else {
      setMessages([...messages, { role: 'user', content: text }]);
      const responseText = await streamFromOpenAI(text);
      if (responseText) {
        speakText(responseText);
        setMessages([...messages, { role: 'assistant', content: responseText }]);
      }
    }
  };

  const handleSpeechError = (event: { error: any; }) => {
    console.error('Speech recognition error:', event.error);
    stopListening();
  };

  const handleSpeechEnd = () => {
    if (isListening) {
      recognition.start();
    }
  };


  const speakText = (text: string) => {
    speechSynthesisInstance.cancel();
    speechUtterance.text = text;
    setIsSpeaking(true);
    speechSynthesisInstance.speak(speechUtterance);
    speechUtterance.onend = () => setIsSpeaking(false);
  };

  return (
    <div>

      <div className="relative">
        <button
          type="button"
          onClick={handleMicClick}
          className={(isListening ? "listening " : "") + "p-2   text-gray-400 hover:text-gray-600"}
          id="micButton"
        >
          <Mic />
        </button>
        <div className="mic-waves ">
          <div className="mic-wave"></div>
          <div className="mic-wave"></div>
          <div className="mic-wave"></div>
        </div>
      </div>
      {/* <button onClick={handleMicClick}>{isListening ? 'Stop' : 'Start'} Listening</button> */}
      {/* <p>{transcript}</p> */}
    </div>
  );
};

export default SpeechChatbot;
