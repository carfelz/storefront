"use client"

import { useState } from "react"
import { HttpTypes } from "@medusajs/types"
import ProductModal from "../product-modal"

type QuickViewWrapperProps = {
    product: HttpTypes.StoreProduct
    children: React.ReactNode
}

export default function QuickViewWrapper({ product, children }: QuickViewWrapperProps) {
    const [modalOpen, setModalOpen] = useState(false)

    // This function intercepts the click on the Quick View overlay
    const handleQuickView = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setModalOpen(true)
    }

    return (
        <div className="relative group">
            {/* We pass a magic prop or use Context, but simpler to just clone element to children? No, wait. 
          If children is Thumbnail, how do we pass onQuickView to ZoomImage?
          Actually, we can capture all clicks on a transparent absolute overlay over the image, but Thumbnail is a Client/Server component.
          Let's just put an absolute overlay button for Quick View here, over the Thumbnail.
      */}
            {children}

            {/* Quick View absolute trigger overlay */}
            <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                onClick={handleQuickView}
            >
                {/* The pill is already rendered by ZoomImage, but we need an invisible clickable area over the image or we let ZoomImage render the button and we just pass a callback. Since we can't easily pass callback through Thumbnail without modifying it, we just make this layer clickable. */}
                <button className="absolute inset-0 w-full h-full cursor-pointer focus:outline-none" aria-label="Quick View"></button>
            </div>

            <ProductModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                product={product}
            />
        </div>
    )
}
