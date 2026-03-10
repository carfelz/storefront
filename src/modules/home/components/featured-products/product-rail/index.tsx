import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import { Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductCarousel from "./product-carousel"

export default async function ProductRail({
  collection,
  region,
}: {
  collection: HttpTypes.StoreCollection
  region: HttpTypes.StoreRegion
}) {
  const {
    response: { products: pricedProducts },
  } = await listProducts({
    regionId: region.id,
    queryParams: {
      collection_id: collection.id,
      fields: "*variants.calculated_price",
    },
  })

  if (!pricedProducts) {
    return null
  }

  return (
    <div className="content-container py-12">
      <div className="flex flex-col items-center mb-10 pb-4 border-b border-gray-200/60 max-w-4xl mx-auto">
        <Text className="text-3xl font-extrabold text-deep-slate mb-2 text-center tracking-tight">
          {collection.title}
        </Text>
        <InteractiveLink href={`/collections/${collection.handle}`} className="text-panda-rust hover:text-panda-rust/80 font-semibold uppercase tracking-wider text-xs">
          View all {collection.title}
        </InteractiveLink>
      </div>
      <ProductCarousel products={pricedProducts} region={region} />
    </div>
  )
}
