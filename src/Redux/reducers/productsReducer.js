const productsReducer = (products = [
    { listType: "Products", id: 1, name: "Jabłko", defaultPortion: 170, caloriesIn100: 38, remarks: "", date: "04.12.2021" },
    { listType: "Products", id: 2, name: "Gruszka", defaultPortion: 140, caloriesIn100: 42, remarks: "", date: "04.12.2021" },
    { listType: "Products", id: 3, name: "Grzanki", defaultPortion: 25, caloriesIn100: 411, remarks: "", date: "04.12.2021" },
    { listType: "Products", id: 4, name: "Banan", defaultPortion: 135, caloriesIn100: 53, remarks: "", date: "04.12.2021" },
    { listType: "Products", id: 5, name: "Bakalie", defaultPortion: 50, caloriesIn100: 250, remarks: "", date: "04.12.2021" },
    { listType: "Products", id: 6, name: "Brzoskwiania", defaultPortion: 120, caloriesIn100: 47, remarks: "", date: "04.12.2021" },
], action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [...products, action.payload];
        case "REMOVE_PRODUCT":

            return products.filter(item => item.id !== action.payload);
        case "MODIFY_PRODUCT":
            const index = products.findIndex((item, index) => { return item.id === action.payload.id })

            const calories2 = [...products]
            calories2[index] = action.payload
            console.log(calories2)
            console.log(products[index])
            console.log(products[index].defaultPortion)

            return calories2



            return products

        default:
            return products;
    }
}
export default productsReducer;