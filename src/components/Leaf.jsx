import { motion } from 'framer-motion';
import LeafTree from '../assets/tree.svg';

const Leaf = () => {
  return (
    <div className="absolute top-[-5%] right-[-22%] flex items-center justify-center"> {/* Pastikan z-50 tetap ada di sini */}
      <motion.img
        src={LeafTree}
        alt="Swaying Tree"
        className="w-[50rem] h-[50rem]"
        animate={{
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

export default Leaf;
