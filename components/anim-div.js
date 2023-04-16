'use client'

import { useInView } from "react-intersection-observer";

export default function AnimDiv({ children }) {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <div ref={ref} className={`flex flex-col items-center w-full ${inView ? 'visible fadeInUp2' : 'invisible'}`}>
      {children}
    </div>
  );
}
