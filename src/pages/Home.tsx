import { motion } from "framer-motion";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto h-full"
      >
        <div className="flex flex-col items-center justify-center h-full">
          <img
            src="../portFolioSeydou.JPG"
            alt="Seydou Ouattara"
            className=" h-80 w-60 mb-4 object-cover"
          />

          <motion.h1
            className="text-4xl font-bold mb-10 text-center"
            animate={{ scale: 1.1 }}
          >
            Seydou Ouattara - Développeur Web
          </motion.h1>
          <p className="text-gray-400">
            Bienvenue sur mon portfolio, explorez{" "}
            <Link to="/about">mes compétences</Link> et{" "}
            <Link to="/projects">mes projets</Link> !
          </p>
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transform hover:scale-105 transition duration-300 ease-in-out">
            <Link to="/projects">Voir mes projets</Link>
          </button>
        </div>
      </motion.div>
    </Layout>
  );
}

export default Home;
