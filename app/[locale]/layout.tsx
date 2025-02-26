import { ReactElement } from "react";
import { Providers } from "../provider";


export default async function SubLayout({ params, children }: { params: Promise<{ locale: string }>, children: ReactElement }) {

  const { locale } = await params

  return (

    <Providers locale={locale}>
      <div className="">
        {children}
      </div>
    </Providers>


  );
}