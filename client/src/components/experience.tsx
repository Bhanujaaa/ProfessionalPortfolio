import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Building, University, CheckCircle } from "lucide-react";

const experiences = [
  {
    title: "Research Assistant",
    company: "HPCC Lab",
    location: "Denton, Texas",
    period: "January 2024 - Present",
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
    title: "Software Engineer",
    company: "Presidio Cloud Solutions",
    location: "Coimbatore, India",
    period: "January 2022 - July 2023",
    icon: Building,
    projects: [
      {
        name: "Ardent Mills - Client Project",
        tech: "C#, .NET Core 8, Azure, Redis, xUnit",
        achievements: [
          "Designed scalable REST APIs for complex pricing logic",
          "Optimized API performance by ~80% using Redis cache",
          "Increased test coverage by 35% using xUnit and Moq",
        ],
      },
      {
        name: "EventBuzz - Event Management",
        tech: "React, Node.js, AWS, PostgreSQL",
        achievements: [
          "Led frontend development with drag-and-drop form builder",
          "Implemented middleware for Authorization and Authentication",
          "Designed end-to-end CI/CD pipelines using AWS",
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
                        <>
                          <h4 className="font-semibold text-gray-900 mb-3">{exp.project}</h4>
                          <ul className="text-gray-600 space-y-2 text-sm">
                            {exp.achievements?.map((achievement, i) => (
                              <li key={i} className="flex items-start">
                                <CheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" size={12} />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}

                      {exp.projects && (
                        <div className="space-y-4">
                          {exp.projects.map((project, i) => (
                            <div key={i}>
                              <h4 className="font-semibold text-gray-900 mb-2">{project.name}</h4>
                              <p className="text-xs text-gray-500 mb-2">{project.tech}</p>
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
