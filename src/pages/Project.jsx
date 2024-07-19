import { motion } from "framer-motion";
import backgroundImage from "../assets/dirt.svg";
import project1Image from "../assets/summer.png";
import project2Image from "../assets/summer.png";
import project3Image from "../assets/summer.png";

const projects = [
  {
    title: "Personal Blog",
    description: "A responsive blog built with React and Next.js",
    image: project1Image,
    link: "https://your-blog-url.com",
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack online store using MERN stack",
    image: project2Image,
    link: "https://your-ecommerce-url.com",
  },
  {
    title: "Weather App",
    description: "Real-time weather application using React and OpenWeatherMap API",
    image: project3Image,
    link: "https://your-weather-app-url.com",
  },
  {
    title: "Weather App",
    description: "Real-time weather application using React and OpenWeatherMap API",
    image: project3Image,
    link: "https://your-weather-app-url.com",
  },
  {
    title: "Weather App",
    description: "Real-time weather application using React and OpenWeatherMap API",
    image: project3Image,
    link: "https://your-weather-app-url.com",
  },
  {
    title: "Weather App",
    description: "Real-time weather application using React and OpenWeatherMap API",
    image: project3Image,
    link: "https://your-weather-app-url.com",
  },
];

export default function Project() {
  return (
    <section id="project" className="min-h-screen relative overflow-hidden py-16">
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="text-4xl font-baloo font-bold text-center text-kedua mb-16"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-2xl transform hover:-translate-y-2 transition-all duration-300 hover:shadow-3xl"
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black font-semibold py-2 px-4 rounded-full hover:bg-opacity-80 transition-colors duration-300"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}