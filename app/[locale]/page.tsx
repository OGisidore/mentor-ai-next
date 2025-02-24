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


const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [canOpenModal, setOpenModal] = useState(false)
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [isPageLoaded, setIsPageLoaded] = useState(false);


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
      <section className="bg-theme pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-theme mb-6 leading-tight">
            Mentor Mind: AI-Powered Language Avatar Agent
          </h1>
          <p className="text-lg sm:text-xl text-theme opacity-90 mb-8">
            Advanced language learning with real-time pronunciation feedback, voice interaction, and personalized avatar tutoring
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/agents" className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-[var(--accent-color)] hover:bg-[var(--accent-dark)] text-white font-semibold rounded-lg transition duration-300">
              <FontAwesomeIcon icon={faPlay} className='mr-2' />
              {/* <i className="fas fa-play mr-2"></i> */}
              Start Learning
            </Link>
            <Link href="https://github.com/prashantsingh2408/mentor-ai"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-[var(--accent-color)] font-semibold rounded-lg transition duration-300">
              <FontAwesomeIcon icon={faGithub} className='mr-2' />
              {/* <i className="fab fa-github mr-2"></i> */}
              View on GitHub
            </Link>
          </div>
        </div>
      </section>
      {/* <!-- Features Section --> */}
      <FeatureSection />
      {/* <!-- Future Scope Section --> */}
      <FutureScope />
      {/* <!-- Hackathon Participation Section --> */}
      <section className="py-16 bg-[var(--bg-color)] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[var(--accent-color)] font-semibold">Hackathon Project</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-color)] mt-2">Built for IBM Granite AI Hackathon</h2>
            <p className="mt-4 text-[var(--text-color)] opacity-80">Mentor Mind is our submission for the IBM Granite AI Hackathon, leveraging IBM's powerful AI models</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* <!-- Project Implementation --> */}
            <div className="bg-[var(--bg-color)] p-8 rounded-xl shadow-md border border-[var(--border-color)] hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <FontAwesomeIcon icon={faCode} className='text-3xl text-[var(--accent-color)]' />
                {/* <i className="fas fa-code text-3xl text-[var(--accent-color)]"></i> */}
                <h3 className="text-2xl font-semibold text-[var(--text-color)] ml-4">Implementation Details</h3>
              </div>

              {/* <!-- Architecture Diagram --> */}
              <div className="mb-8 architecture-mindmap relative" onClick={openModal}>
                <div className="zoom-icon">
                  <FontAwesomeIcon icon={faSearchPlus} className='text-gray-600' />
                  {/* <i className="fas fa-search-plus text-gray-600"></i> */}
                </div>
                <img src="/architecture.png"
                  alt="Mentor Mind Architecture Diagram"
                  className="w-full max-h-[300px] object-contain max-w-3xl mx-auto rounded-lg shadow-md"
                />
              </div>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheck} className='mt-1 mr-3 text-[var(--accent-color)]' />
                  {/* <i className="fas fa-check text-[var(--accent-color)] mt-1 mr-3"></i> */}
                  <span className="text-[var(--text-color)] opacity-80">Built using IBM Granite AI models for enhanced learning capabilities</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheck} className='mt-1 mr-3 text-[var(--accent-color)]' />
                  {/* <i className="fas fa-check text-[var(--accent-color)] mt-1 mr-3"></i> */}
                  <span className="text-[var(--text-color)] opacity-80">Integrated with IBM Cloud for scalable performance</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheck} className='mt-1 mr-3 text-[var(--accent-color)]' />
                  <span className="text-[var(--text-color)] opacity-80">Advanced AI-powered mentoring and content generation</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheck} className='mt-1 mr-3 text-[var(--accent-color)]' />
                  <span className="text-[var(--text-color)] opacity-80">Real-time interaction and feedback system</span>
                </li>
              </ul>

              <Link href="/pages/architecture.html"
                className="inline-flex items-center mt-8 px-6 py-3 bg-[var(--accent-color)] hover:bg-[var(--accent-dark)] text-white font-semibold rounded-lg transition duration-300">
                <FontAwesomeIcon icon={faProjectDiagram} className='mr-2' />
                {/* <i className="fas fa-project-diagram mr-2"></i> */}
                View Technical Architecture
                <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
                {/* <i className="fas fa-arrow-right ml-2"></i> */}
              </Link>
            </div>

            {/* <!-- Hackathon Goals --> */}
            <div className="bg-[var(--bg-color)] p-8 rounded-xl shadow-md border border-[var(--border-color)] hover:shadow-lg transition-all duration-300 h-full">
              <div className="flex items-center mb-6">
                <FontAwesomeIcon icon={faFlag} className='text-3xl text-[var(--accent-color)]' />
                {/* <i className="fas fa-flag text-3xl text-[var(--accent-color)]"></i> */}
                <h3 className="text-2xl font-semibold text-[var(--text-color)] ml-4">Project Goals</h3>
              </div>

              <div className="mb-8">
                <p className="text-[var(--text-color)] opacity-80">Our mission is to revolutionize education through AI-powered mentoring and personalized learning experiences.</p>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start">
                  {/* <FontAwesomeIcon icon={fatarg} className='mt-1 mr-3 text-[var(--accent-color)]' /> */}
                  {/* <i className="fas fa-target text-[var(--accent-color)] mt-1 mr-3"></i> */}
                  <span className="text-[var(--text-color)] opacity-80">Democratize access to quality education through AI mentoring</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faUser} className='mt-1 mr-3 text-[var(--accent-color)]' />
                  {/* <i className="fas fa-users text-[var(--accent-color)] mt-1 mr-3"></i> */}
                  <span className="text-[var(--text-color)] opacity-80">Create personalized learning experiences for every user</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faRobot} className='mt-1 mr-3 text-[var(--accent-color)]' />
                  {/* <i className="fas fa-robot text-[var(--accent-color)] mt-1 mr-3"></i> */}
                  <span className="text-[var(--text-color)] opacity-80">Showcase the potential of IBM Granite AI in education</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faGlobe} className='mt-1 mr-3 text-[var(--accent-color)]' />
                  {/* <i className="fas fa-globe text-[var(--accent-color)] mt-1 mr-3"></i> */}
                  <span className="text-[var(--text-color)] opacity-80">Scale educational support globally</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faChartLine} className='mt-1 mr-3 text-[var(--accent-color)]' />
                  {/* <i className="fas fa-chart-line text-[var(--accent-color)] mt-1 mr-3"></i> */}
                  <span className="text-[var(--text-color)] opacity-80">Continuously improve and adapt based on user feedback and performance metrics</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faGraduationCap} className='mt-1 mr-3 text-[var(--accent-color)]' />
                  {/* <i className="fas fa-graduapation-cap text-[var(--accent-color)] mt-1 mr-3"></i> */}
                  <span className="text-[var(--text-color)] opacity-80">Foster a lifelong learning environment with adaptive curriculum</span>
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- Call to Action --> */}
          <div className="text-center">
            <Link href="https://lablab.ai/event/generative-ai-hackathon-with-ibm-granite"
              target="_blank"
              className="inline-flex items-center px-8 mt-4 py-3 bg-[var(--accent-color)] hover:bg-[var(--accent-dark)] text-white font-medium rounded-lg transition duration-300">
              <FontAwesomeIcon icon={faCodeBranch} className='mr-2' />
              <i className="fas fa-code-branch mr-2"></i>
              Join IBM Granite AI Hackathon
            </Link>
            <p className="mt-4 text-sm text-[var(--text-color)] opacity-80">Mentor Mind - Transforming Education with IBM Granite AI</p>
          </div>
        </div>
      </section>
      {/* <!-- GitHub Repositories Section --> */}
      <section id="github-repositories" className="py-12 sm:py-16 bg-[var(--bg-color)] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-color)] mt-2">GitHub Repositories</h2>
          <p className="mt-4 text-[var(--text-color)] opacity-80">Explore the code and contribute to the projects</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link href="https://github.com/prashantsingh2408/mentor-ai"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-[var(--accent-color)] font-semibold rounded-lg transition duration-300">
                <FontAwesomeIcon icon={faGithub} className='mr-2' />
              {/* <i className="fab fa-github mr-2"></i> */}
              Mentor AI Repo
            </Link>
            <Link href="https://github.com/prashantsingh2408/mentor-ai-avatar-front-end"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-[var(--accent-color)] font-semibold rounded-lg transition duration-300">
                <FontAwesomeIcon icon={faGithub} className='mr-2' />
              {/* <i className="fab fa-github mr-2"></i> */}
              Mentor AI Avatar Front-end Repo
            </Link>
            <Link href="https://github.com/prashantsingh2408/mentor-ai-avatar-back-end"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-[var(--accent-color)] font-semibold rounded-lg transition duration-300">
                <FontAwesomeIcon icon={faGithub} className='mr-2' />
              {/* <i className="fab fa-github mr-2"></i> */}
              Mentor AI Avatar Back-end Repo
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
