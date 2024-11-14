import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PurpleRectangle from './components/PurpleRectangle';
import About from './components/About';
import Projects from './components/Projects';
import More from './components/More';

export default function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    window.addEventListener('resize', handleResize);

    // Disable scrolling when not on desktop
    if (!isDesktop) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = 'auto'; // reset overflow on cleanup
    };
  }, [isDesktop]);

  return (
    <div className={`text-5xl bg-black h-screen pt-3 flex flex-col ${isDesktop ? '' : 'overflow-hidden'}`} style={{ height: isDesktop ? '250vh' : '100vh' }}>
      {isDesktop ? (
        <>
          <Navbar />
          <Home />
          {/* <PurpleRectangle /> */}
          <About />
          <Projects />
          <More />
        </>
      ) : (
        <div className="text-white flex items-center justify-center h-full w-full text-center p-5 text-lg leading-tight">
          <h1>Please open on desktop for the best experience.</h1>
        </div>
      )}
    </div>
  );
}
