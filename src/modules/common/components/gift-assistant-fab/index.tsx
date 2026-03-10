"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function GiftAssistantFab() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        className="mb-4 w-72 bg-white/80 backdrop-blur-md border border-white/40 shadow-lg rounded-2xl p-4 text-deep-slate"
                    >
                        <div className="flex gap-3 mb-2">
                            <span className="text-2xl">🐼</span>
                            <p className="font-semibold">Gift Assistant</p>
                        </div>
                        <p className="text-sm opacity-90 leading-relaxed">
                            Hi! I'm here to help you find the perfect gift. Looking for anything special?
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-panda-rust text-white rounded-full shadow-lg hover:bg-[#B34500] hover:scale-105 transition-all flex items-center justify-center text-3xl"
                aria-label="Gift Assistant"
            >
                🐼
            </button>
        </div>
    )
}
