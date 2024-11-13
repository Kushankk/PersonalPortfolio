// import { motion } from 'framer-motion';

// const PurpleRectangle = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: -400 }}
//       animate={{ opacity: 1, x: -600 }}
//       exit={{ opacity: 0, x: -600 }}
//       transition={{ duration: 2 }}
//       className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-3 bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg"
//     />
//   );
// }

// export default PurpleRectangle;

import { motion } from 'framer-motion';
import { useLayoutEffect, useState } from 'react';

const PurpleRectangle = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useLayoutEffect(() => {
    setIsLargeScreen(window.innerWidth >= 1418 && window.innerHeight >= 844);
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1418 && window.innerHeight >= 844);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, x: isLargeScreen ? '-50%' : '-134%' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-5 bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg"
    />
  );
}

export default PurpleRectangle;