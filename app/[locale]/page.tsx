
import { Footer } from '@/components/footer/footer';
import { Hero } from '@/components/landingsPage/hero';
import { SectionFirst } from '@/components/landingsPage/section';

const Home : React.FC = () =>{
  

  return (
    <>
      
      <main className="bg-gray-50 dark:bg-gray-900 transition-colors duration-200 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <Hero />
        <SectionFirst />
      </main>
      <Footer />
    </>
  );
}
export default Home