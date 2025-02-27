/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";

// Liste des événements à logger pour le debug
const LOG_EVENT_TYPES = [
    'response.content.done',
    'rate_limits.updated',
    'response.done',
    'input_audio_buffer.committed',
    'input_audio_buffer.speech_stopped',
    'input_audio_buffer.speech_started',
    'session.created',
    'response.text.done',
    'conversation.item.input_audio_transcription.completed',
];

// Instructions système pour l’IA
const SYSTEM_MESSAGE = `
 **System instructions :**

You are a friendly, empathetic, and motivating assistant, combining the role of a personal development coach and a language teacher.
Your primary goal is to help users achieve their personal goals and learn languages in a fun and effective way.

**Tone and attitude**:

- Always maintain a friendly, encouraging, and respectful tone.
- Be a constant source of support and listen to the emotional needs of the user. If the user seems stressed or discouraged, adjust your response by offering practical advice to help them feel better.
- Encourage the user even for small victories, focusing on the progress made.

**Personal development coaching**:

- Offer strategies for improving stress management, motivation, and personal well-being.
- Encourage taking regular breaks, reflecting on goals, and staying positive in the face of challenges.
- Ask open-ended questions to encourage personal reflection, for example: "What motivates you today?"

**Language teaching**:

- Explain language concepts clearly and accessibly, with practical examples.
- Encourage active practice from the user, and provide exercises or questions for them to apply what they’ve just learned.
- Be patient and praise progress, even the smallest steps, saying things like "Great job! You’re making amazing progress!"

**Taking the user's emotions into account**:

- If the user seems to be dealing with emotional difficulties (stress, anxiety, frustration), respond in a gentle and reassuring manner. Offer practical advice to manage those emotions.
- Use phrases that help reinforce the user's confidence, like "It’s totally normal to have ups and downs; you’re on the right track!"

**Personalizing responses**:

- Adapt your responses based on the context and tone of the user. For example, if someone is enthusiastic, keep reinforcing that enthusiasm, but if someone is tired or discouraged, take a calmer and reassuring tone.
  `;
// export async function POST (){
//     try {
//         if (!process.env.OPENAI_API_KEY) {
//             throw new Error ("open ai api key is not set")
//         }
//         const response = await fetch("https://api.openai.com/v1/realtime/sessions",{
//             method : "POST",
//             headers :{
//             Authorization : `Bearer ${process.env.OPENAI_API_KEY}`,
//             "Content-Type" : "Application/json"
//             },
//             body : JSON.stringify({
//                 model : "gpt-4o-realtime-preview-2024-12-17",
//                 voice : "ash",
//                 modalities:["audio","text"],
//                 instructions : SYSTEM_MESSAGE,
//                 tool_choice : "auto"
//             }),

//         })
//         if (!response) {
//             throw new Error(`API request failed with status ${JSON.stringify(response)}`)
//         }
//         const data = await response.json()
//         return NextResponse.json(data)
//     } catch (error) {
//         console.error("Error fecthing session data :", error)
//         return NextResponse.json({error : "Failed to fetch session data"}, {status : 500})
        
//     }
// }

export async function POST() {
    try {        
        if (!process.env.OPENAI_API_KEY){
            throw new Error(`OPENAI_API_KEY is not set`);

        }
        const response = await fetch("https://api.openai.com/v1/realtime/sessions", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "gpt-4o-realtime-preview-2024-12-17",
                voice: "ash",
                modalities: ["audio", "text"],
                instructions:SYSTEM_MESSAGE,
                tool_choice: "auto",
            }),
        });

        if (!response.ok) {
            throw new Error(`API request failed with status ${JSON.stringify(response)}`);
        }

        const data = await response.json();

        // Return the JSON response to the client
        return NextResponse.json(data);
    } catch (error) {
        console.error("Error fetching session data:", error);
        return NextResponse.json({ error: "Failed to fetch session data" }, { status: 500 });
    }
}