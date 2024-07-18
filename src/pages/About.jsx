import { motion } from "framer-motion";
import palmTree from "../assets/palm_tree.svg";
import Leaf from "../components/Leaf";
import rumah from "../assets/summer.png";

export default function About() {
  return (
    <section id="about" className="min-h-screen relative overflow-hidden bg-sky-200">
      <motion.img
        src={rumah}
        alt="Rumah"
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className="absolute xl:left-20 xl:top-28 rounded-3xl shadow-2xl h-[30rem] w-auto max-sm:h-64 max-sm:flex max-sm:flex-col max-sm:items-center"
      />
      <img
        src={palmTree}
        alt="Palm Tree"
        className="absolute right-[-20%] h-full object-contain object-right"
      />
      <Leaf className="inset-0 z-10" />
      <div className="relative z-30 flex flex-col items-center left-32 top-32 h-screen">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-kedua font-extrabold font-baloo text-3xl text-left drop-shadow-lg"
        >
          WHO ARE YOU??
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="font-sans pt-5 text-left text-xl w-[30rem]"
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
          className="font-baloo pt-5 text-left text-3xl"
        >
          Everyday coding to make your days!
        </motion.p>
      </div>
    </section>
  );
}
