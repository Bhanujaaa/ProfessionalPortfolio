import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export default function About() {
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
    <section id="about" className="py-20 bg-white">
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
            About Me
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
          className="grid md:grid-cols-2 gap-12"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Summary</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Results-driven full-stack developer with 2+ years of experience building web and AI-powered applications. 
              Proficient in React, Java, Spring Boot, Node.js, MongoDB, MySQL, Python, Flask and leveraging AWS cloud 
              services to build scalable and cost-effective solutions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Experienced in researching and working with Large Language Models (LLMs) and MLLMs for AI-driven applications. 
              Seeking full-stack roles to drive innovative, high-impact solutions.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
            <div className="space-y-6">
              <Card className="hover-lift professional-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900">Master of Science in Computer Science</h4>
                      <p className="text-primary font-medium">University of North Texas (UNT)</p>
                      <p className="text-gray-600">GPA: 4.0/4.0</p>
                      <p className="text-sm text-gray-500 mt-2">Denton, Texas</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift professional-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900">Bachelor of Technology in ECE</h4>
                      <p className="text-primary font-medium">SASTRA University</p>
                      <p className="text-gray-600">GPA: 3.7/4.0</p>
                      <p className="text-sm text-gray-500 mt-2">Thanjavur, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
