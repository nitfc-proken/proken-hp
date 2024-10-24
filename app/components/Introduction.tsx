"use client";

import { motion } from "framer-motion";

function Introduction() {
  return (
    <div className="text-center">
      <div className="pl-5">
        <h1 className="text-3xl font-bold py-3">Introduction</h1>
        <motion.p
          className="text-gray-500 text-xl font-bold"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
        >
          部活紹介
        </motion.p>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-2xl font-bold py-3 max-w-screen-md text-center">
          福井高専プログラミング研究会は、ゲーム制作や競技プログラミングなどプログラミングに関することを幅広く行う同好会です。
        </p>
      </div>
    </div>
  );
}

export default Introduction;
