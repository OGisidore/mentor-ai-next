/* eslint-disable @typescript-eslint/no-explicit-any */
// import type { StartAvatarResponse } from "@heygen/streaming-avatar";

import StreamingAvatar, {
  AvatarQuality,
  StreamingEvents, TaskMode, TaskType, VoiceEmotion,
} from "@heygen/streaming-avatar";
// import {
//   Button,
//   Card,
//   CardBody,
//   CardFooter,
//   Divider,
//   Input,
//   Select,
//   SelectItem,
//   Spinner,
//   Chip,
//   Tabs,
//   Tab,
// } from "@nextui-org/react";
import {  usePrevious } from "ahooks";
import { useEffect, useRef, useState } from "react";


import { AVATARS } from "@/lib/constants";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Conversation } from "@/lib/conversations";
// import { useToolsFunctions } from "@/hooks/use-tools";
interface AvatarProps {
  closeSession:boolean,
  conversation: Conversation[];
}
export default function InteractiveAvatar({closeSession , conversation}:AvatarProps) {
  const [isLoadingSession, setIsLoadingSession] = useState(false);
  // const [ setIsLoadingRepeat] = useState(false);
  const [stream, setStream] = useState<MediaStream>();
  // const [debug, setDebug] = useState<string>();
  // const [knowledgeId, setKnowledgeId] = useState<string>("");
  const [avatarId, setAvatarId] = useState<string>(AVATARS[0].avatar_id);
  // const [language, setLanguage] = useState<string>('fr');

  // const [data, setData] = useState<StartAvatarResponse>();
  const [text, setText] = useState<string>("salut comment puis-je t'aider ?");
  const mediaStream = useRef<HTMLVideoElement>(null);
  const avatar = useRef<StreamingAvatar | null>(null);
  // const [chatMode, setChatMode] = useState("text_mode");
  // const [isUserTalking, setIsUserTalking] = useState(false);
  const spokenTextsRef = useRef(new Set());

  // const [voice, setVoice] = useState("ash")
 

  // Get all tools functions
  // const toolsFunctions = useToolsFunctions();
  async function fetchAccessToken() {
    try {
      const response = await fetch("/api/get-access-token", {
        method: "POST",
      });
      const token = await response.text();


      return token;
    } catch (error) {
      console.error("Error fetching access token:", error);
    }

    return "";
  }

  async function startSession() {
    setIsLoadingSession(true);
    const newToken = await fetchAccessToken();

    avatar.current = new StreamingAvatar({
      token: newToken,
    });
    avatar.current.on(StreamingEvents.AVATAR_START_TALKING, (e) => {
      console.log("Avatar started talking", e);
    });
    avatar.current.on(StreamingEvents.AVATAR_STOP_TALKING, (e) => {
      console.log("Avatar stopped talking", e);
    });
    avatar.current.on(StreamingEvents.STREAM_DISCONNECTED, () => {
      console.log("Stream disconnected");
      endSession();
    });
    avatar.current?.on(StreamingEvents.STREAM_READY, (event) => {
      console.log(">>>>> Stream ready:", event.detail);
      setStream(event.detail);
    });
    avatar.current?.on(StreamingEvents.USER_START, (event) => {
      console.log(">>>>> User started talking:", event);
      // setIsUserTalking(true);
    });
    avatar.current?.on(StreamingEvents.USER_STOP, (event) => {
      console.log(">>>>> User stopped talking:", event);
      // setIsUserTalking(false);
    });
    try {
       await avatar.current.createStartAvatar({
        quality: AvatarQuality.Low,
        avatarName: avatarId,
        knowledgeId: "", // knowledgeId, // Or use a custom `knowledgeBase`.
        voice: {
          rate: 1.5, // 0.5 ~ 1.5
          emotion: VoiceEmotion.EXCITED,
          // elevenlabsSettings: {
          //   stability: 1,
          //   similarity_boost: 1,
          //   style: 1,
          //   use_speaker_boost: false,
          // },
        },
        language: "fr", //language,
        disableIdleTimeout: true,
      });

      // setData(res);
      // console.log(data);

      // default to voice mode
      handleSpeak("Hello how can i help you today ?")
      // setChatMode("text_mode");
    } catch (error) {
      console.error("Error starting avatar session:", error);
    } finally {
      setIsLoadingSession(false);
    }
  }
  async function handleSpeak(text: string) {
    // setIsLoadingRepeat(true);
    if (!avatar.current) {
      // setDebug("Avatar API not initialized");

      return;
    }
    console.log("text recu", text);

    // speak({ text: text, task_type: TaskType.REPEAT })
    await avatar.current.speak({ text: text, taskType: TaskType.REPEAT, taskMode: TaskMode.SYNC }).catch((e) => {
      console.log(e.message);
      
      // setDebug(e.message);
    });
    setText("")
    // setIsLoadingRepeat(false);
  }
  // async function handleInterrupt() {
  //   if (!avatar.current) {
  //     setDebug("Avatar API not initialized");

  //     return;
  //   }
  //   await avatar.current
  //     .interrupt()
  //     .catch((e) => {
  //       setDebug(e.message);
  //     });
  // }
  async function endSession() {
    await avatar.current?.stopAvatar();
    setStream(undefined);
  }

 
  const previousText = usePrevious(text);
  useEffect(() => {
    if (!previousText && text) {
      avatar.current?.startListening();
    } else if (previousText && !text) {
      avatar?.current?.stopListening();
    }
  }, [text, previousText]);

  useEffect(() => {
    return () => {
      endSession();
    };
  }, []);

  useEffect(() => {
    if (stream && mediaStream.current) {
      mediaStream.current.srcObject = stream;
      mediaStream.current.onloadedmetadata = () => {
        mediaStream.current!.play();
        // setDebug("Playing");
      };
    }
  }, [mediaStream, stream]);
  useEffect(()=>{
    if (closeSession) {
      endSession()  
    }
  },[closeSession])

  useEffect(() => {
    const lastMessage = [...conversation].reverse().find(
      (message) => message.role === "assistant" && message.isFinal
    );
  
    if (!lastMessage) return;
  
    const textToSpeak = lastMessage.text || "Contactez Isidore pour qu'il vous donne la clé API";
  
    // Vérifier si déjà parlé
    if (!spokenTextsRef.current.has(textToSpeak)) {
      handleSpeak(textToSpeak);
      spokenTextsRef.current.add(textToSpeak); // Ajouter à l'historique
    }
  
    console.log("text", textToSpeak);
    console.log("conversation", conversation);
  }, [conversation]);
  return (
    <div className="w-full flex flex-col gap-4">
      <Card>
        <CardContent className="h-[500px] flex flex-col justify-center items-center">
          {stream ? (
            <div className="h-[60vh] w-[90vw] md:w-[900px] justify-center items-center flex rounded-lg overflow-hidden">
              <video
                ref={mediaStream}
                autoPlay
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              >
                <track kind="captions" />
              </video>
              {/* <div className="flex flex-col gap-2 absolute bottom-3 right-3">
                <Button
                  className="bg-gradient-to-tr from-indigo-500 to-indigo-300 text-white rounded-lg"
                  size="sm"
                  variant="default"
                  onClick={handleInterrupt}
                >
                  Interrupt task
                </Button>
                <Button
                  className="bg-gradient-to-tr from-indigo-500 to-indigo-300  text-white rounded-lg"

                  // size="md"
                  size="sm"
                  variant="default"
                  onClick={endSession}
                >
                  End session
                </Button>
              </div> */}
            </div>
          ) : !isLoadingSession ? (
            <div className="h-full justify-center items-center flex flex-col gap-8 w-[90vw] md:w-[500px] self-center">
              <h2>Choisir ton avatar préféré</h2>
              <div className="flex flex-col gap-2 w-full">

                <p className="text-sm font-medium leading-none">
                  Custom Avatar
                </p>
                <select value={avatarId} onChange={(e) => setAvatarId(e.target.value)} className="
                          flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  name="" id="">
                  {AVATARS.map((avatar) => (
                    <option
                      value={avatar.avatar_id}
                      key={avatar.avatar_id}
                    // textValue={avatar.avatar_id}
                    >
                      {avatar.name}
                    </option>
                  ))}
                </select>

              </div>
              <Button
                className="bg-gradient-to-tr from-indigo-500 to-indigo-300 w-full text-white"
                size="sm"
                variant="default"
                onClick={startSession}
              >
                Start session
              </Button>
            </div>
          ) : (
            // <div className="">chargement en cour</div>
            // <Spinner color="default" size="lg" />
            <button disabled type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
              <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
              </svg>
              Loading...
            </button>
          )}
        </CardContent>
        {/* <Divi/>der /> */}
      </Card>

    </div>
  );
}
