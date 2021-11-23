import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import Header from "../Header.jsx";
describe("Pages Heder", () => {

    test('should render same text passed into title props', async () => {
        render(<Header title="cat" />);
        const hedingElement = screen.getByText(/cat/i);
        expect(hedingElement).toBeInTheDocument();
    });
    test('should render same text passed into title props and is visible for user', async () => {
        render(<Header title="cat" />);
        const hedingElement = screen.getByText(/cat/i);
        expect(hedingElement).toBeVisible();
    });
})