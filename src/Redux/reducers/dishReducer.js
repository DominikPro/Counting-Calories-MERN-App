const dishReducer = (dishes = [{
    listType: "Dish",
    name: 'Sałatka owocowa',
    favorite: true,
    id: 'b84eb046-87e8-4b2f-a067-87bf89497e8d',
    caloriesIn100: 250,
    defaultPortion: 200, products: [
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
            defaultPortion: 180,
            favorite: false,
            id: "3e864125-7442-4696-9c0e-8ebef98ef8a80",
            listType: "Products",
            name: "Gruszka",
            remarks: "",
        }
        , {
            caloriesIn100: 42,
            defaultPortion: 190,
            favorite: false,
            id: "3e864125-7442-4696-9c0e-8ebef98esf880",
            listType: "Products",
            name: "Gruszka",
            remarks: "",
        }
        , {
            caloriesIn100: 42,
            defaultPortion: 300,
            favorite: false,
            id: "3e864125-7442-4696-9c0e-8ebef98cef880",
            listType: "Products",
            name: "Gruszka",
            remarks: "",
        }
        , {
            caloriesIn100: 42,
            defaultPortion: 305,
            favorite: false,
            id: "3e864125-7442-4696-9c0e-8ebef98easf880",
            listType: "Products",
            name: "Gruszka",
            remarks: "",
        }
    ]
}, {
    listType: "Dish",
    name: 'Sałatka',
    favorite: false,
    id: 'b84eb046-87e8-4b2f-a067-87bf89497e8ddsds',
    caloriesIn100: 100, defaultPortion: 300, products: [
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

        case "CHANGE_DISH_FAVORITE":

            return dishes.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, favorite: !item.favorite }
                }
                return item
            });
        default: return dishes
    }
}

export default dishReducer;