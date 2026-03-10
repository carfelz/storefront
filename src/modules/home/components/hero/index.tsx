import { Button, Heading, Text } from "@medusajs/ui"
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

// Using a placeholder image that matches the dimensions and aesthetic of a hero banner
const HERO_IMAGE_URL = "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2640&auto=format&fit=crop"

const Hero = () => {
  return (
    <div className="relative h-[80vh] min-h-[600px] w-full bg-deep-slate overflow-hidden">
      {/* Background Image Wrapper */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_IMAGE_URL}
          alt="Gift Box displaying curated items"
          fill
          priority
          className="object-cover object-center opacity-70"
          sizes="100vw"
        />
        {/* Subtle gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-deep-slate/80 via-transparent to-deep-slate/30" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end pb-24 items-center text-center px-6 gap-6">
        <div className="max-w-2xl bg-white/10 backdrop-blur-md p-8 sm:p-12 rounded-2xl border border-white/20 shadow-2xl">
          <Heading
            level="h1"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 drop-shadow-md"
          >
            Meaningful Moments,<br className="hidden sm:block" /> Thoughtfully Created
          </Heading>
          <Text className="text-lg sm:text-xl text-gray-200 mb-8 max-w-lg mx-auto font-medium">
            Discover beautifully curated gift boxes that spark connection and turn everyday moments into cherished memories.
          </Text>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LocalizedClientLink href="/store">
              <Button
                variant="primary"
                size="large"
                className="bg-panda-rust text-white border-none hover:bg-panda-rust/90 w-full sm:w-auto px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                Shop Unique Gifts
              </Button>
            </LocalizedClientLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
