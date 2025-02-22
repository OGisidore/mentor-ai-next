import type { Metadata } from "next";
import { Header } from "@/components/header/header";
import { Providers } from "../provider";
import { ReactElement } from "react";


export default async function SubLayout({ params, children }: { params: Promise<{ locale: string }>, children: ReactElement }) {

  const {locale} = await params
  
  return (
  
        <Providers locale={locale}>
           <div className="">
          {children}
        </div>
        </Providers>
       
    
  );
}