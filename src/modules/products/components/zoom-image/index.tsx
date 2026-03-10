"use client"

import { useState } from "react"
import Image, { ImageProps } from "next/image"
import { motion } from "framer-motion"

export default function ZoomImage(props: ImageProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className="absolute inset-0 w-full h-full overflow-hidden group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                className="w-full h-full relative"
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                <Image {...props} />
            </motion.div>

            {/* Quick View Overlay */}
            <div className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-white/40 text-deep-slate font-medium text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    Quick View
                </div>
            </div>
        </div>
    )
}
