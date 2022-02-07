const caloriesReducer = (calories = [

    { listType: "Statistic", id: 11, name: "Jabłko", defaultPortion: 179, caloriesIn100: 38, remarks: "Gala", date: "04.12.2021" },
    { listType: "Statistic", id: 22, name: "Gruszka", defaultPortion: 140, caloriesIn100: 42, remarks: "", date: "04.12.2021" },
    { listType: "Statistic", id: 33, name: "Banan", defaultPortion: 135, caloriesIn100: 53, remarks: "", date: "04.12.2021" },
    { listType: "Statistic", id: 44, name: "Jabłko", defaultPortion: 178, caloriesIn100: 38, remarks: "Gala", date: "03.12.2021" },
    { listType: "Statistic", id: 55, name: "Jabłko", defaultPortion: 177, caloriesIn100: 38, remarks: "Gala", date: "03.12.2021" },
    { listType: "Statistic", id: 66, name: "Gruszka", defaultPortion: 140, caloriesIn100: 42, remarks: "", date: "03.12.2021" },
    { listType: "Statistic", id: 77, name: "Gruszka", defaultPortion: 140, caloriesIn100: 42, remarks: "", date: "02.12.2021" },
    { listType: "Statistic", id: 88, name: "Banan", defaultPortion: 135, caloriesIn100: 53, remarks: "", date: "02.12.2021" },
    { listType: "Statistic", id: 101, name: "Gruszka", defaultPortion: 300, caloriesIn100: 10, remarks: "", date: "11.01.2022" },
    { listType: "Statistic", id: 100, name: "Banan", defaultPortion: 100, caloriesIn100: 250, remarks: "", date: "11.01.2022" },
    { listType: "Statistic", id: 103, name: "Jabłko", defaultPortion: 700, caloriesIn100: 10, remarks: "", date: "11.01.2022" },
    { listType: "Statistic", id: 104, name: "Jabłko", defaultPortion: 700, caloriesIn100: 10, remarks: "", date: "11.01.2022" },
    { listType: "Statistic", id: 105, name: "Jabłko", defaultPortion: 700, caloriesIn100: 10, remarks: "", date: "12.01.2022" },
    { listType: "Statistic", id: 106, name: "Jabłko", defaultPortion: 700, caloriesIn100: 10, remarks: "", date: "12.01.2022" },
    { listType: "Statistic", id: 107, name: "Jabłko", defaultPortion: 700, caloriesIn100: 10, remarks: "", date: "12.01.2022" },
    { listType: "Statistic", id: 108, name: "Jabłko", defaultPortion: 700, caloriesIn100: 10, remarks: "", date: "14.01.2022" },
    { listType: "Statistic", id: 109, name: "Jabłko", defaultPortion: 700, caloriesIn100: 10, remarks: "", date: "15.01.2022" },
], action) => {

    switch (action.type) {
        case 'ADD_CALORIES':
            return [...calories, action.payload]

        case 'REMOVE_CALORIES':

            return calories.filter(item => item.id !== action.payload)

        case "MODIFY_CALORIES":
            const index = calories.findIndex((item) => { return item.id === action.payload.id })

            const calories2 = [...calories]
            calories2[index] = action.payload
            return calories2

        default:
            return calories;
    }
}
export default caloriesReducer;