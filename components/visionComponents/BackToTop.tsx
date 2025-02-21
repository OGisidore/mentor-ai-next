// components/BackToTop.tsx
"use client"

import { ArrowUpIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

const BackToTop = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleScroll = () => {
    setVisible(window.scrollY > 20);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    visible && (
      <div
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUpIcon/>
      </div>
    )
  );
};

export default BackToTop;
