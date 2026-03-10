import { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import { listLocales } from "@lib/data/locales"
import { getLocale } from "@lib/data/locale-actions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

export default async function Nav() {
  const [regions, locales, currentLocale] = await Promise.all([
    listRegions().then((regions: StoreRegion[]) => regions),
    listLocales(),
    getLocale(),
  ])

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      {/* Announcement Bar */}
      <div className="bg-deep-slate text-white text-center py-2 text-xsmall-regular uppercase tracking-widest font-semibold w-full">
        Free Shipping on Orders Over $100 | Send a Gift They'll Truly Love
      </div>

      <header className="relative h-16 mx-auto duration-200 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <nav className="content-container txt-xsmall-plus text-deep-slate flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center gap-4">
            <div className="h-full">
              <SideMenu regions={regions} locales={locales} currentLocale={currentLocale} />
            </div>
            {/* Nav Links for Desktop */}
            <div className="hidden small:flex items-center gap-x-6 h-full font-semibold uppercase tracking-wider text-[11px]">
              <LocalizedClientLink href="/collections/for-her" className="hover:text-panda-rust transition-colors duration-200">For Her</LocalizedClientLink>
              <LocalizedClientLink href="/collections/for-him" className="hover:text-panda-rust transition-colors duration-200">For Him</LocalizedClientLink>
              <LocalizedClientLink href="/collections/occasions" className="hover:text-panda-rust transition-colors duration-200">Occasions</LocalizedClientLink>
              <LocalizedClientLink href="/store" className="hover:text-panda-rust transition-colors duration-200">Shop All</LocalizedClientLink>
            </div>
          </div>

          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="hover:text-panda-rust uppercase font-bold flex flex-col items-center transition-colors duration-200"
              data-testid="nav-store-link"
            >
              <span className="text-2xl drop-shadow-sm leading-none" title="Red Panda Logo">🐼</span>
              <span className="text-xl tracking-tighter text-deep-slate font-extrabold leading-none -mt-1 group-hover:text-panda-rust">GiftOso</span>
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full uppercase tracking-wider text-[11px] font-semibold">
              <LocalizedClientLink
                className="hover:text-panda-rust transition-colors duration-200"
                href="/account"
                data-testid="nav-account-link"
              >
                Sign In
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-panda-rust flex gap-2 transition-colors duration-200 uppercase tracking-wider text-[11px] font-semibold"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
