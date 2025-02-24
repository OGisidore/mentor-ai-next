
import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/header/header';
import { Hero } from '@/components/landingsPage/hero';
import { SectionFirst } from '@/components/landingsPage/section';
import { useEffect } from 'react';

const Home: React.FC = () => {

  useEffect(() => {
    // Ajouter une classe 'page-loaded' lorsque le composant est monté
    document.body.classList.add('page-loaded');

    // Supprimer la classe 'page-loaded' lors du nettoyage
    return () => {
      document.body.classList.remove('page-loaded');
    };
  }, []);
  return (
    <>
      <Header />
      <main className="bg-theme 6 lg:px-8 pt-24 pb-16 px-4 sm:px-6">
        <Hero />
        <SectionFirst />
      </main>
      <Footer />
    </>
  );
}
export default Home