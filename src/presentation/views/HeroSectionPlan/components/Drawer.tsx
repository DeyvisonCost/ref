import * as React from 'react'

import { AnimatePresence, motion } from 'framer-motion'

interface DrawerProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
}

const DrawerRoot = ({ children, isOpen, onOpenChange }: DrawerProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50"
            onClick={() => onOpenChange(false)}
          />
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed bottom-0 left-0 right-0 z-50 max-h-[75vh] overflow-y-auto rounded-t-[20px]"
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

const DrawerContent = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return <div className={`${className}`}>{children}</div>
}

export const Drawer = {
  Root: DrawerRoot,
  Content: DrawerContent,
}
