import { Text } from "@mantine/core"
import { motion } from "framer-motion"
import React from "react"

function AnimateText({ text, size }: any) {
  const defailtAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  }
  return (
    <Text c="#fff" fz={size}>
      {/* <span className="sr-only">{text}</span> */}
      <motion.span
        aria-hidden
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.07 }}
      >
        {text.split("").map((char: any, index: any) => (
          <motion.span key={index} variants={defailtAnimation}>
            {char}
          </motion.span>
        ))}
      </motion.span>
    </Text>
  )
}

export default AnimateText
