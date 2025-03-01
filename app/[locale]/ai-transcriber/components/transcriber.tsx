"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";
import { Conversation } from "@/lib/conversations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

interface TranscriberProps {
  conversation: Conversation[];
}

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

function Transcriber({ conversation }: TranscriberProps) {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [conversation]);

  return (
    // <div className="flex flex-col size-full max-w-full mx-auto bg-background rounded-lg shadow-lg overflow-hidden dark:bg-background">

    <div ref={scrollRef} className="flex-1 w-[90vw] md:w-[60vw] overflow-y-auto p-4 space-y-4 z-50">
      <div className={`flex items-start gap-3 `}>
        <Avatar className="w-8 h-8 shrink-0">
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
        <div className={`bg-secondary px-4 py-1 rounded-lg max-w-[70%]  dark:text-foreground`}>
            <p>wellcome to Mentor Mind&apos;s Language Mentor Learning ! i&apos;m your AI language Mentor , designed to provide personalize learning experiences . i can help you with</p>
            <ul className="list-disc">
              <li>interactive conversations in multiple languages</li>
              <li>Real-time pronunciation feedback</li>
              <li>Personalized vocabulary building </li>
              <li>Goal-orientated context and pratical</li>



            </ul>
            <div className="text-xs text-muted-foreground">{new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' })}</div>
          </div>
      </div>

      {conversation.map((message, index) => (
        <div key={index} className={`flex items-start gap-3 ${message.role === 'user' ? 'justify-end' : ''}`}>
          {message.role === 'assistant' && (
            <Avatar className="w-8 h-8 shrink-0">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>AI</AvatarFallback>
            </Avatar>
            
          )}
          <div className={`bg-${message.role === 'user' ? 'primary' : 'secondary'} px-4 py-1 rounded-lg max-w-[70%] ${message.role === 'user' ? 'text-background' : 'dark:text-foreground'}`}>
            <p>{message.text ? message.text : 'User is speaking...'}</p>
            <div className="text-xs text-muted-foreground">{new Date(message.timestamp).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' })}</div>
          </div>
          {message.role === 'user' && (
            <Avatar className="w-8 h-8 shrink-0">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback><FontAwesomeIcon icon={faUser} /></AvatarFallback>
            </Avatar>
          )}
        </div>
      ))}
    </div>
    // </div>
  );
}

export default Transcriber;
export { Avatar, AvatarImage, AvatarFallback };