import backgroundImage from "../assets/wass.svg";
import Nama from "../components/Nama";
import SkyAnimation from "../components/SkyAnimation";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="min-h-screen relative">
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <SkyAnimation />
      <div className="relative z-10 flex flex-col items-center justify-center h-screen">
        <motion.h1 
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-kedua font-extrabold font-baloo text-3xl">
          Hello, Everyone
        </motion.h1>
        <Nama/>
        <motion.p 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="font-baloo pt-5">
          A Very very Veryx10 Beginner Developer
        </motion.p>
      </div>
    </section>
  );
}
