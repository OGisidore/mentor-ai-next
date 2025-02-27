/* eslint-disable @typescript-eslint/no-explicit-any */
import type { StartAvatarResponse } from "@heygen/streaming-avatar";

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
import { useMemoizedFn, usePrevious } from "ahooks";
import { useEffect, useRef, useState } from "react";

import InteractiveAvatarTextInput from "./InteractiveAvatarTextInput";

import { AVATARS, STT_LANGUAGE_LIST } from "@/lib/constants";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem } from "../ui/select";
import { Tabs } from "../ui/tabs";
import { BroadcastButton } from "../broadcast-button";
import useWebRTCAudioSession from "@/hooks/use-webrtc";
import { tools } from "@/lib/tools";
// import { useToolsFunctions } from "@/hooks/use-tools";

export default function InteractiveAvatar() {
  const [isLoadingSession, setIsLoadingSession] = useState(false);
  const [isLoadingRepeat, setIsLoadingRepeat] = useState(false);
  const [stream, setStream] = useState<MediaStream>();
  const [debug, setDebug] = useState<string>();
  const [knowledgeId, setKnowledgeId] = useState<string>("");
  const [avatarId, setAvatarId] = useState<string>("");
  const [language, setLanguage] = useState<string>('en');

  const [data, setData] = useState<StartAvatarResponse>();
  const [text, setText] = useState<string>("");
  const mediaStream = useRef<HTMLVideoElement>(null);
  const avatar = useRef<StreamingAvatar | null>(null);
  const [chatMode, setChatMode] = useState("text_mode");
  const [isUserTalking, setIsUserTalking] = useState(false);
  // const [voice, setVoice] = useState("ash")
  const voice = "ash"

  // WebRTC Audio Session Hook
  const {
    // status,
    isSessionActive,
    // registerFunction,
    handleStartStopClick,
    msgs,
    // conversation,
    // sendTextMessage
  } = useWebRTCAudioSession(voice, tools)

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
      setIsUserTalking(true);
    });
    avatar.current?.on(StreamingEvents.USER_STOP, (event) => {
      console.log(">>>>> User stopped talking:", event);
      setIsUserTalking(false);
    });
    try {
      const res = await avatar.current.createStartAvatar({
        quality: AvatarQuality.Low,
        avatarName: avatarId,
        knowledgeId: knowledgeId, // Or use a custom `knowledgeBase`.
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
        language: language,
        disableIdleTimeout: true,
      });

      setData(res);
      console.log(data);

      // default to voice mode
      await avatar.current?.startVoiceChat({
        useSilencePrompt: false
      });
      setChatMode("voice_mode");
    } catch (error) {
      console.error("Error starting avatar session:", error);
    } finally {
      setIsLoadingSession(false);
    }
  }
  async function handleSpeak() {
    setIsLoadingRepeat(true);
    if (!avatar.current) {
      setDebug("Avatar API not initialized");

      return;
    }
    // speak({ text: text, task_type: TaskType.REPEAT })
    await avatar.current.speak({ text: text, taskType: TaskType.REPEAT, taskMode: TaskMode.SYNC }).catch((e) => {
      setDebug(e.message);
    });
    setIsLoadingRepeat(false);
  }
  async function handleInterrupt() {
    if (!avatar.current) {
      setDebug("Avatar API not initialized");

      return;
    }
    await avatar.current
      .interrupt()
      .catch((e) => {
        setDebug(e.message);
      });
  }
  async function endSession() {
    await avatar.current?.stopAvatar();
    setStream(undefined);
  }

  const handleChangeChatMode = useMemoizedFn(async (v) => {
    if (v === chatMode) {
      return;
    }
    if (v === "text_mode") {
      avatar.current?.closeVoiceChat();
    } else {
      await avatar.current?.startVoiceChat();
    }
    setChatMode(v);
  });

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

  // useEffect(() => {
  //   if (stream && mediaStream.current) {
  //     mediaStream.current.srcObject = stream;
  //     mediaStream.current.onloadedmetadata = () => {
  //       mediaStream.current!.play();
  //       setDebug("Playing");
  //     };
  //   }
  // }, [mediaStream, stream]);

  useEffect(() => {
    const currentMessage = msgs[msgs.length - 1]
    if (currentMessage?.type === "response.audio_transcript.done") {
      setText(currentMessage.trancript)
      handleSpeak()

      
    }
  console.log(msgs);
  
  }, [msgs])
  return (
    <div className="w-full flex flex-col gap-4">
      <Card>
        <CardContent className="h-[500px] flex flex-col justify-center items-center">
          {stream ? (
            <div className="h-[500px] w-[900px] justify-center items-center flex rounded-lg overflow-hidden">
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
              <div className="flex flex-col gap-2 absolute bottom-3 right-3">
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
              </div>
            </div>
          ) : !isLoadingSession ? (
            <div className="h-full justify-center items-center flex flex-col gap-8 w-[500px] self-center">
              <div className="flex flex-col gap-2 w-full">
                <p className="text-sm font-medium leading-none">
                  Custom Knowledge ID (optional)
                </p>
                <Input
                  placeholder="Enter a custom knowledge ID"
                  value={knowledgeId}
                  onChange={(e) => setKnowledgeId(e.target.value)}
                />
                <p className="text-sm font-medium leading-none">
                  Custom Avatar ID (optional)
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
                {/* <Select value={avatarId}>
                  <SelectLabel>Entrer ici avatar</SelectLabel>
                  <SelectContent onChange={(e) => setAvatarId((e.currentTarget as HTMLInputElement).value)}>
                    {AVATARS.map((avatar) => (
                      <SelectItem
                        value={avatar.avatar_id}
                        key={avatar.avatar_id}
                      // textValue={avatar.avatar_id}
                      >
                        {avatar.name}
                      </SelectItem>
                    ))}

                  </SelectContent>
                </Select> */}
                <Input
                  placeholder="Enter a custom avatar ID"
                  value={avatarId}
                  onChange={(e) => setAvatarId(e.target.value)}
                />
                <Select
                  // placeholder="Or select one from these example avatars"
                  // size="md"
                  onValueChange={(e: any) => {
                    setAvatarId(e.target.value);
                  }}
                // onChang/e={}
                >
                  <SelectContent>
                    {AVATARS.map((avatar) => (
                      <SelectItem
                        value={avatar.avatar_id}
                        key={avatar.avatar_id}
                      // textValue={avatar.avatar_id}
                      >
                        {avatar.name}
                      </SelectItem>
                    ))}
                  </SelectContent>

                </Select>
                <Select
                  // label="Select language"
                  // placeholder="Select language"
                  // className="max-w-xs"
                  defaultValue={language}
                  onValueChange={(e: any) => {
                    setLanguage(e.target.value);
                  }}
                // selectedKeys={[language]}
                // onChange={}
                >
                  <SelectContent>
                    {STT_LANGUAGE_LIST.map((lang) => (
                      <SelectItem value={lang.value} key={lang.key}>
                        {lang.label}
                      </SelectItem>
                    ))}
                  </SelectContent>

                </Select>
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
            <div className="">chargement en cour</div>
            // <Spinner color="default" size="lg" />
          )}
        </CardContent>
        {/* <Divi/>der /> */}
        <CardFooter className="flex flex-col gap-3 relative">
          <Tabs
            aria-label="Options"
            defaultValue={chatMode}
            onChange={(v) => {
              handleChangeChatMode(v);
            }}
          // selectedKey={chatMode}

          // onSelectionChange={}
          >
            <Tabs key="text_mode" title="Text mode" />
            <Tabs key="voice_mode" title="Voice mode" />
          </Tabs>
          {chatMode === "text_mode" ? (
            <div className="w-full flex relative">
              <InteractiveAvatarTextInput
                disabled={!stream}
                input={text}
                label="Chat"
                loading={isLoadingRepeat}
                placeholder="Type something for the avatar to respond"
                setInput={setText}
                onSubmit={handleSpeak}
              />
              {text && (
                // <Chip className="absolute right-16 top-3">Listening</Chip>
                <div className="absolute right-16 top-3">Listening</div>
              )}
            </div>
          ) : (
            <div className="w-full text-center">
              <div className="flex flex-col items-center gap-4">
            <BroadcastButton 
              isSessionActive={isSessionActive} 
              onClick={handleStartStopClick}
            />
          </div>
              <Button
                disabled={!isUserTalking}
                className="bg-gradient-to-tr from-indigo-500 to-indigo-300 text-white"
                variant="default"

              >
                {isUserTalking ? "Listening" : "Voice chat"}
              </Button>
            </div>
          )}
        </CardFooter>
      </Card>
      <p className="font-mono text-right">
        <span className="font-bold">Console:</span>
        <br />
        {debug}
      </p>
    </div>
  );
}
