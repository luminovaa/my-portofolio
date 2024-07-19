import { motion } from "framer-motion";
import palmTree from "../assets/palm_tree.svg";
import Leaf from "../components/Leaf";
import rumah from "../assets/summer.png";

export default function About() {
  return (
    <section id="about" className="min-h-screen max-sm:h-[140vh] relative overflow-hidden bg-keempat">
      <motion.img
        src={rumah}
        alt="Rumah"
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className="absolute xl:left-20 xl:top-28 rounded-3xl shadow-2xl z-20
          h-[30rem] w-auto max-sm:h-80 max-sm:left-14 max-sm:transform max-sm:-translate-x-1/2 max-sm:top-16"
      />
      <motion.img
        src={palmTree}
        alt="Palm Tree"
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className="absolute xl:right-[-20%] h-full 
          max-sm:bottom-0 max-sm:right-[-35%] max-sm:h-96 max-sm:w-96"
      />
      <Leaf className="inset-0 z-10" />
      <div className="relative z-30 flex flex-col items-center xl:left-32 xl:top-32 h-screen 
        max-sm:left-0 max-sm:top-80 max-sm:pt-32 max-sm:px-4 max-sm:h-auto max-sm:text-center">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-kedua font-extrabold font-baloo text-3xl text-left  
            max-sm:text-3xl max-sm:text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
        >
          WHO ARE YOU??
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="font-sans pt-5 text-left text-xl w-[30rem] max-sm:w-full 
           max-sm:text-lg max-sm:pt-5 max-sm:px-2 "
        >
          Hey there, I'm Muchammad Fatkhul Karim. I'm from Jombang, East Java.
          I work as a website developer, so yeah... I spend a lot of time in
          front of my computer.
          <br/><br/>I enjoy exploring new things, from coding to
          hanging out on Discord. For me, this isn't just work - it's a hobby
          that makes me happy.<br/><br/>   The important thing is, I always try to give my
          best in everything I do. Still got a lot to learn, but hey, we're
          taking it easy, right?
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="font-baloo pt-5 text-left text-3xl max-sm:text-xl max-sm:pt-10"
        >
          Everyday coding to make your days!
        </motion.p>
      </div>
    </section>
  );
}
