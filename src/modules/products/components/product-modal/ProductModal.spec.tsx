import { render, screen, fireEvent } from "@testing-library/react"
import ProductModal from "./index"

const mockProduct = {
    id: "prod_1",
    title: "GiftOso Special Panda",
    description: "A very special gift.",
    thumbnail: "/thumbnail.jpg",
    handle: "giftoso-special-panda"
} as any

jest.mock("@modules/common/components/localized-client-link", () => {
    return function MockLink({ children, href }: any) {
        return <a href={href}>{children}</a>
    }
})

describe("ProductModal", () => {
    it("renders the product information", () => {
        render(<ProductModal open={true} onClose={() => { }} product={mockProduct} />)

        expect(screen.getByText("GiftOso Special Panda")).toBeInTheDocument()
        expect(screen.getByText("A very special gift.")).toBeInTheDocument()
        expect(screen.getByText("Add to Cart")).toBeInTheDocument()
        expect(screen.getByText("View Full Details")).toBeInTheDocument()
    })

    it("does not render when open is false", () => {
        render(<ProductModal open={false} onClose={() => { }} product={mockProduct} />)

        expect(screen.queryByText("GiftOso Special Panda")).not.toBeInTheDocument()
    })

    it("calls onClose when 'Add to Cart' is clicked", () => {
        const handleClose = jest.fn()
        window.alert = jest.fn() // Mock the alert in dummy add to cart

        render(<ProductModal open={true} onClose={handleClose} product={mockProduct} />)

        const addToCartButton = screen.getByText("Add to Cart")
        fireEvent.click(addToCartButton)

        expect(handleClose).toHaveBeenCalled()
        expect(window.alert).toHaveBeenCalledWith("Added to cart!")
    })
})
