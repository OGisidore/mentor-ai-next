"use client";

import InteractiveAvatar from "@/components/avatars/InteractiveAvatar";
import { Header } from "@/components/header/header";
import './../page.css';


export default function App() {

  return (
    <div className={'bg-gray-50 dark:bg-gray-900 transition-colors duration-200'}>
      <Header />
      <div className="w-screen h-screen flex flex-col">
        <div className="w-[900px] flex flex-col items-start justify-start gap-5 mx-auto pt-4 pb-20">
          <div className="w-full">
            <InteractiveAvatar />
          </div>
        </div>
      </div>
    </div>

  );
}
