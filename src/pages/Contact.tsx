import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaCheck,
} from "react-icons/fa";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto h-full"
      >
        <div className="flex justify-start w-full">
          <h2 className="text-3xl font-semibold flex items-center gap-2">
            <FaEnvelope className="text-yellow-400" /> Contactez-moi
          </h2>
        </div>

        <p className="text-gray-400 mt-2">
          Vous avez un projet en tête ? Une question ou une collaboration à
          discuter ? N'hésitez pas à me contacter, je suis toujours ouvert à de
          nouvelles opportunités et je réponds rapidement à vos demandes.
        </p>

        <div className="w-full">
          <h3 className="text-2xl font-semibold mt-6 flex items-center gap-2">
            <FaCheck className="text-green-400" /> Formulaire de contact
          </h3>
          <form className="mt-4 space-y-4">
            <div className="flex flex-col">
              <label className="text-gray-400" htmlFor="name">
                Nom
              </label>
              <input
                type="text"
                id="name"
                className="p-2 rounded bg-gray-800 text-white"
                placeholder="Votre nom"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-400" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="p-2 rounded bg-gray-800 text-white"
                placeholder="Votre email"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-400" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="p-2 rounded bg-gray-800 text-white"
                rows={4}
                placeholder="Votre message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="p-2 bg-blue-400 rounded text-white"
            >
              Envoyer le message
            </button>
          </form>
        </div>

        <div className="w-full">
          <h3 className="text-2xl font-semibold mt-6 flex items-center gap-2">
            <FaPhoneAlt className="text-blue-400" /> Autres moyens de contact
          </h3>
          <div className="flex gap-6 mt-2 flex-wrap">
            <div className="p-3 bg-gray-800 rounded-lg flex items-center gap-2">
              <FaEnvelope className="text-yellow-400 text-xl" />{" "}
              <a href="mailto:contact@example.com" className="text-white">
                seydouwatt@gmail.com
              </a>
            </div>
            <div className="p-3 bg-gray-800 rounded-lg flex items-center gap-2">
              <FaPhoneAlt className="text-green-400 text-xl" />{" "}
              <span className="text-white">+33 6 60 43 12 72</span>
            </div>
            <div className="p-3 bg-gray-800 rounded-lg flex items-center gap-2">
              <FaLinkedin className="text-blue-600 text-xl" />{" "}
              <a
                href="https://www.linkedin.com/in/seydou-ouattara-39a284105/"
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
            {/* <div className="p-3 bg-gray-800 rounded-lg flex items-center gap-2">
              <FaTwitter className="text-blue-400 text-xl" />{" "}
              <a
                href="https://twitter.com/seydo"
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div> */}
            <div className="p-3 bg-gray-800 rounded-lg flex items-center gap-2">
              <FaInstagram className="text-pink-400 text-xl" />{" "}
              <a
                href="https://www.instagram.com/_seydou_ouat_/"
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}
