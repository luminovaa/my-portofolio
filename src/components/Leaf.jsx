import { motion } from 'framer-motion';
import LeafTree from '../assets/tree.svg';

const Leaf = () => {
  return (
    <motion.div
    initial={{ opacity: 0, x: 200 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 2 }}
     className="absolute xl:top-[-5%] xl:right-[-22%] xl:flex xl:items-center xl:justify-center 
     max-sm:-bottom-36 max-sm:-right-44">
      <motion.img
        src={LeafTree}
        alt="Swaying Tree"
        className="w-[50rem] h-[50rem] max-sm:w-[30rem] max-sm:h-[40rem]"
        animate={{
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  );
};

export default Leaf;
