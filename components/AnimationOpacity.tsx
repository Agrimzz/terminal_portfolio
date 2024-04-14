import { Text } from "@mantine/core"
import { motion } from "framer-motion"
import React from "react"

function AnimateOpacity({ children }: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ when: "beforeChildren", delay: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

export default AnimateOpacity
