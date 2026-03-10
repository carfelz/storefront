"use client"

import { Dialog, DialogContent } from "@mui/material"
import { HttpTypes } from "@medusajs/types"
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type ProductModalProps = {
    open: boolean
    onClose: () => void
    product: HttpTypes.StoreProduct
}

export default function ProductModal({ open, onClose, product }: ProductModalProps) {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="md"
            fullWidth
            PaperProps={{
                style: {
                    backgroundColor: 'rgba(253, 254, 254, 0.75)', // Bamboo Cream with opacity
                    backdropFilter: 'blur(16px)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                }
            }}
        >
            <DialogContent className="p-0 overflow-hidden flex flex-col md:flex-row min-h-[500px]">
                {/* Left side: High-res image */}
                <div className="relative w-full md:w-1/2 bg-ui-bg-subtle aspect-square md:aspect-auto">
                    {product.thumbnail && (
                        <Image
                            src={product.thumbnail}
                            alt={product.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    )}
                </div>

                {/* Right side: Details */}
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-transparent text-deep-slate">
                    <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
                    <div className="mb-6 opacity-80 line-clamp-4 text-base-regular">
                        {product.description || "A wonderful gift for your loved ones."}
                    </div>

                    <div className="text-2xl font-bold text-panda-rust mb-8 pt-4 border-t border-deep-slate/10">
                        High Quality Gift
                    </div>

                    <div className="mt-auto space-y-3">
                        <button
                            className="w-full py-3 rounded-full bg-panda-rust text-white font-bold hover:bg-[#B34500] transition-colors shadow-sm"
                            onClick={() => {
                                // Dummy add to cart action for MVP, could integrate Zustand here
                                alert("Added to cart!")
                                onClose()
                            }}
                        >
                            Add to Cart
                        </button>
                        <div onClick={onClose}>
                            <LocalizedClientLink href={`/products/${product.handle}`} className="w-full block text-center">
                                <button className="w-full py-3 rounded-full bg-white/50 text-deep-slate font-bold hover:bg-white/80 transition-colors shadow-sm border border-white/40">
                                    View Full Details
                                </button>
                            </LocalizedClientLink>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
