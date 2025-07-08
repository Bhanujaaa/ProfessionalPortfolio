import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Trophy, Medal, Award, Star, GraduationCap, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const publications = [
  {
    title: "Audo-Sight Research",
    description: "Enabling Ambient Interaction For Blind And Visually Impaired Individuals",
    url: "https://arxiv.org/pdf/2505.00153",
  },
  {
    title: "HE2C Research",
    description: "A Holistic Approach for Allocating Latency-Sensitive AI Tasks across Edge-Cloud",
    url: "https://arxiv.org/pdf/2411.19487",
  },
];

const achievements = [
  {
    icon: Trophy,
    title: "HackUNT Special Award",
    description: "Goldman Sachs Problem Statement, 2024",
    color: "text-yellow-500",
  },
  {
    icon: Medal,
    title: "SMU Datathon",
    description: "2nd Place, 2024",
    color: "text-gray-400",
  },
  {
    icon: Award,
    title: "AWS Certified",
    description: "Solutions Architect - Associate",
    color: "text-blue-500",
  },
  {
    icon: Star,
    title: "Top 3% Student",
    description: "Distinguished CS Student at UNT",
    color: "text-purple-500",
  },
  {
    icon: GraduationCap,
    title: "Dean's Merit List",
    description: "Top 2% at SASTRA University, 2022",
    color: "text-green-500",
  },
];

export default function Research() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="research" className="py-20 bg-gray-50">
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
            Research & Publications
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-primary mx-auto"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {publications.map((pub, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="hover-lift professional-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <FileText className="text-primary text-2xl mr-4" />
                    <h3 className="text-xl font-bold text-gray-900">{pub.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{pub.description}</p>
                  <Button variant="outline" asChild>
                    <a href={pub.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2" size={16} />
                      View on arXiv
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <Card className="professional-shadow-lg">
            <CardContent className="p-8">
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold text-gray-900 mb-6 text-center"
              >
                Achievements & Certifications
              </motion.h3>
              
              <motion.div
                variants={containerVariants}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="text-center group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <achievement.icon className={`${achievement.color} text-3xl mb-3 mx-auto`} />
                    </motion.div>
                    <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
