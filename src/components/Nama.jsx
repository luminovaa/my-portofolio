import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nama() {
  const saya = [
    { nama: "Luminova" },
    { nama: "Web Developer" },
    { nama: "UI/UX Designer" },
    { nama: "Full Stack Developer" },
    { nama: "Weeb" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % saya.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <motion.h3
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          type: "spring",
          stiffness: 300, // Menentukan kekakuan dari pegas
          damping: 5, // Mengatur redaman untuk mengurangi bouncing
        }}
        className="text-black font-bold font-baloo pt-5 text-7xl max-sm:text-4xl"
      >
        {"I'm "}
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            {saya[currentIndex].nama}
          </motion.span>
        </AnimatePresence>
      </motion.h3>
    </div>
  );
}
