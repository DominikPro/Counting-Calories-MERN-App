import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import CategoryHeader from "../CategoryHeader";
describe("Category Heder", () => {

    test("Should render same text passed into category header props", async () => {
        render(<CategoryHeader title="Testin text for rendering" />);
        const categoryHedingElemnt = screen.getByText(/Testin text for rendering/i);
        expect(categoryHedingElemnt).toBeInTheDocument();
    })
    test("Should render same text passed into category header props and is visible for user", async () => {
        render(<CategoryHeader title="Testin text for rendering" />);
        const categoryHedingElemnt = screen.getByText(/Testin text for rendering/i);
        expect(categoryHedingElemnt).toBeVisible()
    })

})