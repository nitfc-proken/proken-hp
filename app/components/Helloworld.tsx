"use client";

import { motion } from "framer-motion";
import "./helloworld.css";

function Helloworld() {
  return (
    <div className="text-center h-screen flex flex-col justify-center items-center px-5 sm:px-10 lg:px-20">
      <div className="text-center">
        <div className="flex justify-center items-center">
          <motion.h1
            className="hello-world mx-auto"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            drag
            dragConstraints={{
              top: -5,
              left: -5,
              right: 5,
              bottom: 5,
            }}
          >
            Hello
            <br className="block sm:hidden" />
            World
          </motion.h1>
        </div>
        <motion.h2
          className="text-3xl font-bold py-5 sm:text-2xl md:text-3xl lg:text-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          ようこそ
          <br className="block sm:hidden" />
          プログラミング研究会HPへ
        </motion.h2>
      </div>
    </div>
  );
}

export default Helloworld;
