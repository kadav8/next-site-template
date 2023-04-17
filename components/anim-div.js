'use client'

import React, { useState, useEffect } from 'react';
import { useInView } from "react-intersection-observer";

export default function AnimDiv({ children }) {
  const [noscript, setNoscript] = useState(true);
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    setNoscript(false)
  }, []);

  if(noscript) {
    return (
      <div ref={ref} className="flex flex-col items-center w-full delayedFadeInUp">
       {children} 
      </div>
    );
  }

  return (
    <div ref={ref} className={`flex flex-col items-center w-full ${inView ? 'visible fadeInUp2' : 'invisible'}`}>
      {children}
    </div>
  );
}
