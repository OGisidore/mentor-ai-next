"use client"
import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/header/header';

import './page.css';
import { SectionFirst } from '@/components/landingsPage/section';
import Hero from '@/components/visionComponents/hero';
import { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowUp, faChartLine, faCheck, faCode, faCodeBranch, faFlag, faGlobe, faGraduationCap, faPlay, faProjectDiagram, faRobot, faSearchPlus, faUser, } from '@fortawesome/free-solid-svg-icons';
import { HelpBoard } from '@/components/landingsPage/helpBoard';
import { FeatureSection } from '@/components/landingsPage/featuresSection';
import { FutureScope } from '@/components/landingsPage/futureScope';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import Link from 'next/link';
import { useScopedI18n } from '@/locales/client';


const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [canOpenModal, setOpenModal] = useState(false)
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const t = useScopedI18n("landngPage")

  


  const openModal = () => {
    setOpenModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setOpenModal(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    // Attendre que la page soit complètement chargée
    const handleLoad = () => {
      setIsPageLoaded(true);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className={isPageLoaded ? 'page-loaded ' : '' + 'bg-gray-50 dark:bg-gray-900 transition-colors duration-200'}>
      <Header />
      {/* <!-- Add padding-top to the hero section to account for fixed header --> */}
      <section className="bg-theme w-full justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl flex-col items-center flex mx-auto text-center">
          <h1 className="text-3xl w-[60%] sm:text-4xl md:text-5xl font-bold text-theme mb-6 leading-tight">
            {t("hero.title")}
            {/* Mentor Mind: AI-Powered Language Avatar Agent */}
          </h1>
          <p className="text-lg w-[60%] sm:text-xl text-theme opacity-90 mb-8">
          {t("hero.descriptionParagraph")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/agents" className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-[var(--accent-color)] hover:bg-[var(--accent-dark)] text-white font-semibold rounded-lg transition duration-300">
              <FontAwesomeIcon icon={faPlay} className='mr-2' />
              {/* <i className="fas fa-play mr-2"></i> */}
              {t("hero.start_linkText")}
            </Link>
            <Link href="https://github.com/prashantsingh2408/mentor-ai"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-[var(--accent-color)] font-semibold rounded-lg transition duration-300">
              <FontAwesomeIcon icon={faGithub} className='mr-2' />
              {t("hero.github_linkText")}
              {/* <i className="fab fa-github mr-2"></i> */}
            </Link>
          </div>
        </div>
      </section>
      {/* <!-- Features Section --> */}
      <FeatureSection />
      {/* <!-- Future Scope Section --> */}
      <FutureScope />
      {/* <!-- Hackathon Participation Section --> */}
      {/* <!-- Section de participation au Hackathon --> */}
      <section className="py-16 bg-[var(--bg-color)] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[var(--accent-color)] font-semibold">
              {t("hackathon.project")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-color)] mt-2">
              {t("hackathon.title")}
            </h2>
            <p className="mt-4 text-[var(--text-color)] opacity-80">
              {t("hackathon.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* <!-- Détails de l'implémentation du projet --> */}
            <div className="bg-[var(--bg-color)] p-8 rounded-xl shadow-md border border-[var(--border-color)] hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <FontAwesomeIcon icon={faCode} className='text-3xl text-[var(--accent-color)]' />
                <h3 className="text-2xl font-semibold text-[var(--text-color)] ml-4">
                  {t("hackathon.implementation.title")}
                </h3>
              </div>

              {/* <!-- Schéma d'architecture --> */}
              <div className="mb-8 architecture-mindmap relative" onClick={openModal}>
                <div className="zoom-icon">
                  <FontAwesomeIcon icon={faSearchPlus} className='text-gray-600' />
                </div>
                <img
                  src="/architecture.png"
                  alt={t("architecture.alt")}
                  className="w-full max-h-[300px] object-contain max-w-3xl mx-auto rounded-lg shadow-md"
                />
              </div>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheck} className='mt-1 mr-3 text-[var(--accent-color)]' />
                  <span className="text-[var(--text-color)] opacity-80">
                  {t("hackathon.implementation.feature1")}
                  </span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheck} className='mt-1 mr-3 text-[var(--accent-color)]' />
                  <span className="text-[var(--text-color)] opacity-80">
                  {t("hackathon.implementation.feature2")}
                  </span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheck} className='mt-1 mr-3 text-[var(--accent-color)]' />
                  <span className="text-[var(--text-color)] opacity-80">
                  {t("hackathon.implementation.feature3")}
                  </span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheck} className='mt-1 mr-3 text-[var(--accent-color)]' />
                  <span className="text-[var(--text-color)] opacity-80">
                  {t("hackathon.implementation.feature4")}

                  </span>
                </li>
              </ul>

              <Link
                href="/architecture"
                className="inline-flex items-center mt-8 px-6 py-3 bg-[var(--accent-color)] hover:bg-[var(--accent-dark)] text-white font-semibold rounded-lg transition duration-300"
              >
                <FontAwesomeIcon icon={faProjectDiagram} className='mr-2' />
                {t("hackathon.implementation.viewTechnical")}
                <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
              </Link>
            </div>

            {/* <!-- Objectifs du projet --> */}
            <div className="bg-[var(--bg-color)] p-8 rounded-xl shadow-md border border-[var(--border-color)] hover:shadow-lg transition-all duration-300 h-full">
              <div className="flex items-center mb-6">
                <FontAwesomeIcon icon={faFlag} className='text-3xl text-[var(--accent-color)]' />
                <h3 className="text-2xl font-semibold text-[var(--text-color)] ml-4">
                  {t("hackathon.projectGoals.title")}
                </h3>
              </div>

              <div className="mb-8">
                <p className="text-[var(--text-color)] opacity-80">
                  {t("hackathon.projectGoals.description")}
                </p>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[var(--text-color)] opacity-80">
                    {t("hackathon.projectGoals.goal1")}
                  </span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faUser} className='mt-1 mr-3 text-[var(--accent-color)]' />
                  <span className="text-[var(--text-color)] opacity-80">
                    {t("hackathon.projectGoals.goal2")}
                  </span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faRobot} className='mt-1 mr-3 text-[var(--accent-color)]' />
                  <span className="text-[var(--text-color)] opacity-80">
                  {t("hackathon.projectGoals.goal3")}
                  </span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faGlobe} className='mt-1 mr-3 text-[var(--accent-color)]' />
                  <span className="text-[var(--text-color)] opacity-80">
                  {t("hackathon.projectGoals.goal4")}
                  </span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faChartLine} className='mt-1 mr-3 text-[var(--accent-color)]' />
                  <span className="text-[var(--text-color)] opacity-80">
                  {t("hackathon.projectGoals.goal5")}
                  </span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faGraduationCap} className='mt-1 mr-3 text-[var(--accent-color)]' />
                  <span className="text-[var(--text-color)] opacity-80">
                  {t("hackathon.projectGoals.goal6")}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- Appel à l'action --> */}
          <div className="text-center">
            <Link
              href="https://lablab.ai/event/generative-ai-hackathon-with-ibm-granite"
              target="_blank"
              className="inline-flex items-center px-8 mt-4 py-3 bg-[var(--accent-color)] hover:bg-[var(--accent-dark)] text-white font-medium rounded-lg transition duration-300"
            >
              <FontAwesomeIcon icon={faCodeBranch} className='mr-2' />
              {t("hackathon.callToAction.join")}
            </Link>
            <p className="mt-4 text-sm text-[var(--text-color)] opacity-80">
            {t("hackathon.callToAction.subtext")}
            </p>
          </div>
        </div>
      </section>
      
      {/* <!-- GitHub Repositories Section --> */}
      <section id="github-repositories" className="py-12 sm:py-16 bg-[var(--bg-color)] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-color)] mt-2">
            {t("github.title")}
          </h2>
          <p className="mt-4 text-[var(--text-color)] opacity-80">
          {t("github.description")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link
              href="https://github.com/prashantsingh2408/mentor-ai"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-[var(--accent-color)] font-semibold rounded-lg transition duration-300"
            >
              <FontAwesomeIcon icon={faGithub} className='mr-2' />
              {t("github.repo1")}
            </Link>
            <Link
              href="https://github.com/prashantsingh2408/mentor-ai-avatar-front-end"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-[var(--accent-color)] font-semibold rounded-lg transition duration-300"
            >
              <FontAwesomeIcon icon={faGithub} className='mr-2' />
              {t("github.repo2")}

            </Link>
            <Link
              href="https://github.com/prashantsingh2408/mentor-ai-avatar-back-end"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-[var(--accent-color)] font-semibold rounded-lg transition duration-300"
            >
              <FontAwesomeIcon icon={faGithub} className='mr-2' />
              {t("github.repo3")}

            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
      {/* <!-- Back to Top Button --> */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 bg-[var(--accent-color)] text-[var(--bg-color)] rounded-full shadow-lg hover:bg-[var(--accent-dark)] transition duration-300 ${isVisible ? "block" : "hidden"
          } md:block`}
      >
        <FontAwesomeIcon icon={faArrowUp} />
        {/* <i className="fas fa-arrow-up"></i> */}
      </button>

      <HelpBoard />


      {/* <!-- Add modal for zoomed view --> */}
      {
        canOpenModal && <div id="archModal" ref={modalRef} className="modal" onClick={(e) => {
          if (e.target === modalRef.current) closeModal(); // Fermer si on clique en dehors
        }} //onClick={closeModal}
        >
          <img src="/architecture.png"
            alt="Mentor Mind Architecture Diagram"
            className="modal-content" />
        </div>
      }


    </div>
  );
};

export default Home;
