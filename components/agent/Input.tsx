export default function ChatInput() {
    return (
      <div className="border-t border-gray-200 p-4 bg-white">
        <div className="max-w-3xl mx-auto relative">
          <input
            type="text"
            placeholder="Type your message..."
            className="w-full border border-gray-300 rounded-2xl px-4 py-3 pr-32 focus:outline-none focus:border-gray-400"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
            {/* <SpeechRecognitionButton 
              isListening={isListening} 
              toggleListening={toggleListening}
            /> */}
          </div>
        </div>
      </div>
    );
  }