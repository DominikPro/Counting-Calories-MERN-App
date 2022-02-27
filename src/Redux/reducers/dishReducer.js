const dishReducer = (dishes = [{
    dishName: 'Sałatka owocowa', dishId: 'b84eb046-87e8-4b2f-a067-87bf89497e8d', dishCalorieIn100g: '', products: [
        {
            caloriesIn100: 38,
            defaultPortion: 170,
            favorite: false,
            id: "dbf44ab3-0728-4e0b-90d5-f98a64278087",
            listType: "Products",
            name: "Jabłko",
            remarks: "",
        }, {
            caloriesIn100: 42,
            defaultPortion: 140,
            favorite: false,
            id: "3e864125-7442-4696-9c0e-8ebef98ef880",
            listType: "Products",
            name: "Gruszka",
            remarks: "",
        }]
}, {
    dishName: 'Sałatka', dishId: 'b84eb046-87e8-4b2f-a067-87bf89497e8d', dishCalorieIn100g: '', products: [
        {
            caloriesIn100: 38,
            defaultPortion: 170,
            favorite: false,
            id: "dbf44ab3-0728-4e0b-90d5-f98a64278087",
            listType: "Products",
            name: "Jabłko",
            remarks: "",
        }, {
            caloriesIn100: 42,
            defaultPortion: 140,
            favorite: false,
            id: "3e864125-7442-4696-9c0e-8ebef98ef880",
            listType: "Products",
            name: "Gruszka",
            remarks: "",
        }]
}], action) => {
    switch (action.type) {
        case 'ADD_DISH':
            return [...dishes, action.payload]
        default: return dishes
    }
}

export default dishReducer;