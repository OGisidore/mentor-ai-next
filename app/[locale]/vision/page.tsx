// pages/_app.tsx

import BackToTop from "@/components/visionComponents/BackToTop";
import HeroVision from "@/components/visionComponents/hero";
import ScrollProgress from "@/components/visionComponents/ScrollProgess";
 const Vision : React.FC = () =>{
  return (
    <div className="">
      <ScrollProgress />
      hello
      <HeroVision />
      {/* <Component {...pageProps} /> */}
      <BackToTop />
    </div>
  );
}

export default Vision;


