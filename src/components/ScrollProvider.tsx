import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ScrollProviderProps {
  children: ReactNode
}

export function ScrollProvider({ children }: ScrollProviderProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="smooth-scroll"
    >
      {children}
    </motion.div>
  )
}