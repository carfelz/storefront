import { Heading, Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"

const EmptyCartMessage = () => {
  return (
    <div className="py-48 px-2 flex flex-col justify-center items-center text-center" data-testid="empty-cart-message">
      <div className="mb-6 text-7xl animate-bounce" title="Red Panda Empty Cart">
        🐼
      </div>
      <Heading
        level="h1"
        className="flex flex-row text-3xl-regular gap-x-2 items-baseline text-deep-slate"
      >
        Your Cart is Empty
      </Heading>
      <Text className="text-base-regular mt-4 mb-6 max-w-[32rem]">
        Don't worry, our Gift Assistant is waiting to help you find the perfect gift. Use the link below to start browsing.
      </Text>
      <div>
        <InteractiveLink href="/store">Explore products</InteractiveLink>
      </div>
    </div>
  )
}

export default EmptyCartMessage
