import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"
import SortProducts from "../SortProducts";

const dateSelected = [
    { listType: "Statistic", id: 11, name: "Jabłko", defaultPortion: 179, caloriesIn100: 38, remarks: "Gala", date: "04.12.2021" },
    { listType: "Statistic", id: 22, name: "Gruszka", defaultPortion: 140, caloriesIn100: 42, remarks: "", date: "04.12.2021" },
]

test('Drop-down should be visible', () => {
    render(<SortProducts
        dateSelected={dateSelected} />);
    const dropDown = screen.getByText(/Sortuj/i);
    expect(dropDown).toBeVisible();
})

// test("Simulates selection", () => {
//     const { getByTestId, getAllByTestId } = render(<SortProducts
//         dateSelected={dateSelected} />);
//     //The value should be the key of the option
//     fireEvent.change(getByTestId('select'), { target: { value: 2 } })
//     let options = getAllByTestId('select-option')
//     expect(options[0].selected).toBeFalsy();
//     expect(options[1].selected).toBeTruthy();
//     expect(options[2].selected).toBeFalsy()

// })