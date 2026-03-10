import { listCartShippingMethods } from "@lib/data/fulfillment"
import { listCartPaymentMethods } from "@lib/data/payment"
import { HttpTypes } from "@medusajs/types"
import Addresses from "@modules/checkout/components/addresses"
import Payment from "@modules/checkout/components/payment"
import Review from "@modules/checkout/components/review"
import Shipping from "@modules/checkout/components/shipping"

import CheckoutStepper from "@modules/checkout/components/checkout-stepper"

export default async function CheckoutForm({
  cart,
  customer,
}: {
  cart: HttpTypes.StoreCart | null
  customer: HttpTypes.StoreCustomer | null
}) {
  if (!cart) {
    return null
  }

  const shippingMethods = await listCartShippingMethods(cart.id)
  const paymentMethods = await listCartPaymentMethods(cart.region?.id ?? "")

  if (!shippingMethods || !paymentMethods) {
    return null
  }

  let activeStep = 0
  if (cart?.shipping_address?.first_name) {
    activeStep = 1
    if (cart.shipping_methods && cart.shipping_methods.length > 0) {
      activeStep = 2
      if (cart.payment_collection?.payment_sessions?.length) {
        activeStep = 3
      }
    }
  }

  return (
    <div className="w-full grid grid-cols-1 gap-y-8">
      <CheckoutStepper activeStep={activeStep} />
      <Addresses cart={cart} customer={customer} />

      <Shipping cart={cart} availableShippingMethods={shippingMethods} />

      <Payment cart={cart} availablePaymentMethods={paymentMethods} />

      <Review cart={cart} />
    </div>
  )
}
