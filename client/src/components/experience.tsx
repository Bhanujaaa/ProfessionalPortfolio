import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Building, University, CheckCircle } from "lucide-react";

const experiences = [
   {
    title: "AI Engineer",
    company: "Betwixt",
    location: "Remote",
    period: "September 2025 - November 2025",
    icon: University,
    // project: "Audo-Sight | Multimodal Large Language Models",
    achievements: [
      "Engineered NLP pipelines using BERT and Transformers to process clinical notes and claims data; reduced manual review volume 40% and Built scalable AI memory pipelines to transform large-scale conversational and interaction data (15TB+) into embedding-based representations stored in a vector database (FAISS-backed), enabling long-term contextual retrieval and historical summarization for ML and LLM systems, reducing end-to-end latency by 45%.",
      "Designed an AI memory architecture combining object storage, metadata stores, and a vector similarity layer to persist, version, and retrieve complete historical context, supporting retrieval-augmented generation (RAG), agent memory, and time-aware inference.",
      "Developed hybrid memory schemas (vector + temporal graph relationships) to model session flow, user evolution, and long-term memory, enabling similarity search, memory replay, and trajectory-based reasoning with 35% faster retrieval performance.",
      "Implemented embedding generation, memory compaction, and re-embedding workflows to ensure downstream ML models consumed consistent, high-fidelity historical context across retraining, evaluation, and online inference."
          ],
  },
  {
    title: "Research Assistant",
    company: "HPCC Lab",
    location: "Denton, Texas",
    period: "August 2024 - May 2025",
    icon: University,
    project: "Audo-Sight | Multimodal Large Language Models",
    achievements: [
      "Developed Audo-Sight, improving navigation and environmental understanding by over 70%",
      "Implemented latency-aware routing, optimizing response time by 25%",
      "Integrated NeMo Guardrails, reducing inappropriate responses by 85%",
      "Conducted latency benchmark on 5 LLMs with 96.4% GPU performance improvement",
    ],
  },
   {
    title: "Teaching Assistant",
    company: "University of North Texas",
    location: "Denton, Texas",
    period: "January 2024 - June 2024",
    icon: University,
    // project: "Audo-Sight | Multimodal Large Language Models",
    achievements: [
      "Led and mentored 30+ cross-functional student teams in designing and implementing microservices-based web applications, leveraging Agile methodologies (Scrum, sprint planning, retrospectives).",
"Architected end-to-end CI/CD workflows using Jenkins for automated build, test, and deployment, integrating Git for source control.",
"Conducted in-depth code reviews and architectural assessments, guiding students on RESTful API design, modular service decomposition, database schema optimization, and DevOps best practices."
    ],
  },
  {
    title: "Data Engineer",
    company: "Presidio Cloud Solutions",
    location: "Coimbatore, India",
    period: "February 2022 - July 2023",
    icon: Building,
    projects: [
      {
        achievements: [
          "Engineered ETL and data pipelines using AWS Glue and Talend to integrate OLAP/OLTP databases, ensuring clean, reliable, and analytics-ready datasets for downstream ML and reporting systems.",
          "Led a proof-of-concept (POC) for AWS Data Migration Service, performing both homogeneous and heterogeneous migrations, validating strategies, and ensuring zero data loss across environments.",
          "Developed an automated AWS security audit tool to enforce cloud governance and compliance, reducing manual audit effort by 40% and ensuring adherence to AWS best practices.",
          "Built a CI/CD code pipeline for an Event Management system in AWS, automating deployments and ensuring consistent, reliable releases.",
          "Automated API testing using Postman scripting for 15+ endpoints, improving test coverage by 35% and accelerating regression testing.",
          "Designed and implemented data visualization dashboards using Power BI, Tableau, and Excel Pivot Tables, enabling business teams to interpret and act on large-scale datasets quickly.",
        ],
      },
    ],
  },
];

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Professional Experience
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-primary mx-auto"
          />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gray-300" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="space-y-12 md:space-y-16"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-white shadow-lg z-10"
                />

                {/* Content card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'}`}>
                  <Card className="hover-lift professional-shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                          <exp.icon className="text-white text-xl" size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                          <p className="text-primary font-semibold">{exp.company}</p>
                          <p className="text-sm text-gray-500">{exp.period} | {exp.location}</p>
                        </div>
                      </div>

                      {exp.project && (
                        <h4 className="font-semibold text-gray-900 mb-3">{exp.project}</h4>
                      )}

                      {exp.achievements && !exp.projects && (
                        <ul className="text-gray-600 space-y-2 text-sm">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" size={12} />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {exp.projects && (
                        <div className="space-y-4">
                          {exp.projects.map((project, i) => (
                            <div key={i}>
                              {/* <h4 className="font-semibold text-gray-900 mb-2">{project.name}</h4> */}
                              {/* <p className="text-xs text-gray-500 mb-2">{project.tech}</p> */}
                              <ul className="text-gray-600 space-y-1 text-sm">
                                {project.achievements.map((achievement, j) => (
                                  <li key={j} className="flex items-start">
                                    <CheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" size={12} />
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
