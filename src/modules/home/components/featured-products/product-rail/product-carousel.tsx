"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { HttpTypes } from "@medusajs/types"
import ProductPreview from "@modules/products/components/product-preview"

type ProductCarouselProps = {
    products: HttpTypes.StoreProduct[] | any[]
    region: HttpTypes.StoreRegion
}

export default function ProductCarousel({ products, region }: ProductCarouselProps) {
    return (
        <div className="relative glass-panel p-4 small:p-8">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={24}
                slidesPerView={1.2}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                breakpoints={{
                    640: { slidesPerView: 2.2 },
                    1024: { slidesPerView: 3.2 },
                    1280: { slidesPerView: 4 },
                }}
                className="w-full relative static-pagination"
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <ProductPreview product={product} region={region} isFeatured />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Arrows with Panda Rust and Glass Background */}
            <div className="swiper-button-prev-custom absolute left-2 top-[40%] -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-white/60 text-panda-rust shadow-md cursor-pointer hover:bg-white hover:scale-105 transition-all hidden small:flex">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </div>
            <div className="swiper-button-next-custom absolute right-2 top-[40%] -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-white/60 text-panda-rust shadow-md cursor-pointer hover:bg-white hover:scale-105 transition-all hidden small:flex">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </div>
        </div>
    )
}
