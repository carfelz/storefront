import { render, screen } from "@testing-library/react"
import ZoomImage from "./index"

describe("ZoomImage", () => {
    it("renders the image properly", () => {
        render(<ZoomImage src="/test-image.jpg" alt="Test product image" width={200} height={200} />)

        const img = screen.getByAltText("Test product image")
        expect(img).toBeInTheDocument()
        expect(img).toHaveAttribute("src")
    })

    it("renders the Quick View overlay", () => {
        render(<ZoomImage src="/test-image.jpg" alt="Test product image" width={200} height={200} />)

        expect(screen.getByText("Quick View")).toBeInTheDocument()
    })
})
