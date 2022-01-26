import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";
import GoToButton from "../GoToButton";

test ("Should render button", ()=>{
    render(<GoToButton goToButtonName="ButtonName"/>);
    const button = screen.getByRole("button");
    expect(button).toBeVisible();
})

test("Should render button with text passed in to goToButtonName", ()=>{
    render (<GoToButton goToButtonName="ButtonName"/>)
    const button = screen.getByText(/ButtonName/i)
    expect(button).toBeInTheDocument();
})