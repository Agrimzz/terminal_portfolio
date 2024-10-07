import { motion } from "framer-motion"
import React from "react"

function AnimateOpacity({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ staggerChildren: 2 }}
    >
      {children}
    </motion.div>
  )
}

export default AnimateOpacity
