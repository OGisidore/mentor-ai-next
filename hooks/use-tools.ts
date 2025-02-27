"use client"

// import { toast } from "sonner"
// import FirecrawlApp, { ScrapeResponse } from '@mendable/firecrawl-js';

export const useToolsFunctions = () => {

  
  // const scrapeWebsite = async ({ url }: { url: string }) => {
  //   const apiKey = process.env.NEXT_PUBLIC_FIRECRAWL_API_KEY;
  //   try {
  //     const app = new FirecrawlApp({ apiKey: apiKey });
  //     const scrapeResult = await app.scrapeUrl(url, { formats: ['markdown', 'html'] }) as ScrapeResponse;

  //     if (!scrapeResult.success) {
  //       console.log(scrapeResult.error)
  //       return {
  //         success: false,
  //         message: `Failed to scrape: ${scrapeResult.error}`
  //       };
  //     }

  //     toast.success("reussi"+ " 📋", {
  //       description: "",
  //     })
    
  //     return {
  //       success: true,
  //       message: "Here is the scraped website content: " + JSON.stringify(scrapeResult.markdown) + "Summarize and explain it to the user now in a response."
  //     };

  //   } catch (error) {
  //     return {
  //       success: false,
  //       message: `Error scraping website: ${error}`
  //     };
  //   }
  // }

  return {
  
    // scrapeWebsite
  }
}