import { motion } from "framer-motion";
import {
  FaUser,
  FaCode,
  FaCogs,
  FaReact,
  FaAngular,
  FaJava,
  FaDatabase,
  FaServer,
  FaNodeJs,
  FaLaptopCode,
} from "react-icons/fa";
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <div className=" grid grid-cols-1 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto h-full"
        >
          <div className="flex justify-start w-full">
            <h2 className="text-3xl font-semibold flex items-center gap-2">
              <FaUser className="text-yellow-400" /> À propos
            </h2>
          </div>
          <p className="text-gray-400 mt-2">
            Développeur web passionné avec plus de 10 ans d'expérience en React,
            Angular et Cypress. J'aide les entreprises à construire des
            applications web performantes et scalables.
          </p>
          <div>
            <h3 className="text-2xl font-semibold mt-6 flex items-center gap-2">
              <FaCogs className="text-blue-400" /> Compétences
            </h3>
            <div className="flex gap-4 mt-2 flex-wrap">
              <div className="p-3 bg-gray-800 rounded-lg flex items-center gap-2">
                <FaReact className="text-blue-400 text-xl" /> React
              </div>
              <div className="p-3 bg-gray-800 rounded-lg flex items-center gap-2">
                <FaAngular className="text-red-400 text-xl" /> Angular
              </div>
              <div className="p-3 bg-gray-800 rounded-lg flex items-center gap-2">
                <FaCode className="text-green-400 text-xl" /> Cypress / Testing
              </div>
              <div className="p-3 bg-gray-800 rounded-lg flex items-center gap-2">
                <FaJava className="text-green-400 text-xl" /> Java / Spring Boot
              </div>
              <div className="p-3 bg-gray-800 rounded-lg flex items-center gap-2">
                <FaNodeJs className="text-green-400 text-xl" /> Node.js
              </div>
              <div className="p-3 bg-gray-800 rounded-lg flex items-center gap-2">
                <FaDatabase className="text-yellow-400 text-xl" /> Bases de
                données SQL / NoSQL
              </div>
              <div className="p-3 bg-gray-800 rounded-lg flex items-center gap-2">
                <FaServer className="text-gray-400 text-xl" /> API REST /
                GraphQL
              </div>
              <div className="p-3 bg-gray-800 rounded-lg flex items-center gap-2">
                <FaLaptopCode className="text-purple-400 text-xl" />{" "}
                Développement Agile / Scrum
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mt-6">
              Votre partenaire pour des solutions efficaces
            </h3>
            <ul className="list-disc list-inside text-gray-400 mt-2">
              <li>
                ✔️ Des solutions adaptées à vos besoins, rapides et performantes
              </li>
              <li>✔️ Code optimisé, maintenable et évolutif</li>
              <li>
                ✔️ UI/UX modernes, intuitives et centrées sur l'expérience
                utilisateur
              </li>
              <li>
                ✔️ Expertise dans des projets variés, simples ou complexes
              </li>
              <li>
                ✔️ Collaboration agile, flexible et orientée vers vos résultats
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
