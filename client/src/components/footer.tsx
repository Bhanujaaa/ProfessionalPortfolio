import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-400">&copy; 2024 Bhanuja Ainary. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-2">Built with passion for innovation and excellence</p>
        </motion.div>
      </div>
    </footer>
  );
}
