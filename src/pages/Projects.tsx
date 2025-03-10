import { FaRocket } from "react-icons/fa";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import { title } from "framer-motion/client";

const projects = [
  {
    title: "PVO2 - Gestion de flotte de véhicules",
    description:
      "Logiciel de gestion de flotte de véhicules pour les professionnels, couvrant l'achat, la livraison et les réparations. Migration du front de AngularJS vers ReactJS et backend vers Java 21.",
    technologies: [
      "ReactJS",
      "Java 21",
      "PostgreSQL",
      "GitHub Actions",
      "Jenkins",
      "Spring Boot",
      "Swagger OpenAPI",
      "Cypress",
      "Jest",
      "Kibana",
      "Datadog",
      "Keycloak",
    ],
    status: "Depuis janvier 2023 🚀",
  },
  {
    title: "Interface de gestion de drones aquatiques",
    description:
      "Création d'une interface pour la gestion en temps réel de la position de drones aquatiques, utilisée pour la prospection des fonds marins. Accompagnement de l'équipe en transformation agile.",
    technologies: [
      "Angular 12+",
      "Cypress",
      "WebSocket",
      "Behaviour Subject",
      "Bootstrap Design System",
      "Agile",
    ],
    status: "De septembre 2021 à janvier 2023 ✅",
  },
  {
    title: "Chronos - Gestion du temps et des activités",
    description:
      "Application web pour la gestion du temps et des activités. Portage vers tablette et smartphone, migration du front de Silverlight vers Angular avec intégration d'une librairie custom et design system.",
    technologies: [
      "JQuery",
      "Progress 10,11",
      "JS",
      "HTML",
      "Angular",
      "Scrum",
    ],
    status: "De novembre 2013 à septembre 2021 ✅",
  },
  {
    title: "Mon Portfolio",
    description:
      "Site web de mes compétences, mes projets et mon contact. Le site est totalement personnalisé et fonctionne sur tous les appareils.",
    technologies: [
      "ReactJS",
      "JavaScript",
      "HTML",
      "CSS",
      "TailwindCSS",
      "Framer Motion",
      "React Router",
    ],
    status: "Mars 2025 ✅",
  },
];

export default function Projects() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto h-full"
      >
        <div className="flex justify-start w-full">
          <h2 className="text-3xl font-semibold flex items-center gap-2">
            <FaRocket className="text-yellow-400" /> Mes Projets
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-green-400 font-semibold">
                {project.status}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </Layout>
  );
}
