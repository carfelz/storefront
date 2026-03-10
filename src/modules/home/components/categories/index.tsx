import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Heading } from "@medusajs/ui"

const mockCategories = [
    {
        title: "For Her",
        href: "/collections/for-her",
        image: "https://images.unsplash.com/photo-1574538596636-6e115cc08553?w=400&h=400&fit=crop",
    },
    {
        title: "For Him",
        href: "/collections/for-him",
        image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=400&fit=crop",
    },
    {
        title: "Birthdays",
        href: "/collections/birthdays",
        image: "https://images.unsplash.com/photo-1530103862676-de389de4b6f7?w=400&h=400&fit=crop",
    },
    {
        title: "Thank You",
        href: "/collections/thank-you",
        image: "https://images.unsplash.com/photo-1607525798939-f0278ef88bf3?w=400&h=400&fit=crop",
    },
    {
        title: "Care Packages",
        href: "/collections/care-packages",
        image: "https://images.unsplash.com/photo-1599839619722-39751411ea63?w=400&h=400&fit=crop",
    },
]

const Categories = () => {
    return (
        <div className="content-container py-16">
            <Heading level="h2" className="text-center text-3xl font-bold text-deep-slate mb-12">
                Shop by Category
            </Heading>
            <ul className="flex flex-wrap justify-center gap-6 sm:gap-10">
                {mockCategories.map((cat) => (
                    <li key={cat.title} className="flex flex-col items-center group">
                        <LocalizedClientLink href={cat.href} className="flex flex-col items-center">
                            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 mb-4 border-2 border-transparent group-hover:border-panda-rust">
                                <Image
                                    src={cat.image}
                                    alt={cat.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    sizes="(max-width: 768px) 128px, 160px"
                                />
                            </div>
                            <span className="text-base font-semibold text-deep-slate group-hover:text-panda-rust transition-colors duration-200">
                                {cat.title}
                            </span>
                        </LocalizedClientLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Categories
