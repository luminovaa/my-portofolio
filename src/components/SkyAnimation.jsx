import { motion } from 'framer-motion';
import './SkyAnimation.css';
import cloudImage from '../assets/awan.png';

const SkyAnimation = () => {
  return (
    <div className="sky-animation-container">
      {/* Burung */}
      {[...Array(9)].map((_, index) => (
        <motion.div
          key={`bird-${index}`}
          className={`bird bird-${index + 1}`}
          initial={{ x: '-150vh', y: '5vh', scale: 0.3 }}
          animate={{ x: '100vw', y: '-50vh', scale: 1 }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
            delay: index * 2
          }}
        />
      ))}
      
      {/* Awan */}
      {[...Array(5)].map((_, index) => (
        <motion.img
          key={`cloud-${index}`}
          src={cloudImage}
          className={`cloud cloud-${index + 1}`}
          initial={{ x: '100vw' }}
          animate={{ x: '-100vw' }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
            delay: index * 6
          }}
        />
      ))}
    </div>
  );
};

export default SkyAnimation;