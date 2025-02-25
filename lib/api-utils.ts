const API_KEY = "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";

// class ChatAPI {
//     constructor() {
//         this.systemPrompt = '';
//     }

//     setSystemPrompt(prompt) {
//         this.systemPrompt = prompt;
//     }

//     async getAIResponse(message) {
//         try {
//             const response = await fetch('https://api.openai.com/v1/chat/completions', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${API_KEY}`
//                 },
//                 body: JSON.stringify({
//                     model: 'gpt-3.5-turbo',
//                     messages: [
//                         {
//                             role: 'system',
//                             content: this.systemPrompt || `You are a language learning assistant. 
//                             If the user speaks in French, respond in French and provide corrections.
//                             If the user speaks in English, first respond in English, then provide the French translation.
//                             Be friendly and helpful.`
//                         },
//                         {
//                             role: 'user',
//                             content: message
//                         }
//                     ]
//                 })
//             });

//             const data = await response.json();
//             return data.choices[0].message.content;
//         } catch (error) {
//             console.error('API Error:', error);
//             throw error;
//         }
//     }
// }

// // Export the ChatAPI class
// export default ChatAPI; 

interface ChatMessage {
    role: 'system' | 'user' | 'assistant';
    content: string;
}

interface APIResponse {
    choices: { message: { content: string } }[];
}

class ChatAPI {
    private systemPrompt: string;
    private readonly apiUrl: string = 'https://api.openai.com/v1/chat/completions';
    private readonly apiKey: string;

    constructor() {
        this.systemPrompt = '';
        this.apiKey = API_KEY;
    }

    setSystemPrompt(prompt: string): void {
        this.systemPrompt = prompt;
    }

    async getAIResponse(message: string): Promise<string> {
        try {
            const payload = {
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'system',
                        content: this.systemPrompt || `You are a language learning assistant. 
                        If the user speaks in French, respond in French and provide corrections.
                        If the user speaks in English, first respond in English, then provide the French translation.
                        Be friendly and helpful.`
                    },
                    {
                        role: 'user',
                        content: message
                    }
                ] as ChatMessage[]
            };

            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.apiKey}`
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }

            const data: APIResponse = await response.json();
            return data.choices[0].message.content;
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }
}

export default ChatAPI;