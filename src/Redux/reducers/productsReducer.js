const productsReducer = (products = [
    { listType: "Products", id: 1, name: "Jabłko", defaultPortion: 170, caloriesIn100: 38, remarks: "", favorite: false },
    { listType: "Products", id: 2, name: "Gruszka", defaultPortion: 140, caloriesIn100: 42, remarks: "", favorite: false },
    { listType: "Products", id: 3, name: "Grzanki", defaultPortion: 25, caloriesIn100: 411, remarks: "", favorite: true },
    { listType: "Products", id: 4, name: "Banan", defaultPortion: 135, caloriesIn100: 53, remarks: "", favorite: true },
    { listType: "Products", id: 5, name: "Bakalie", defaultPortion: 50, caloriesIn100: 250, remarks: "", favorite: true },
    { listType: "Products", id: 6, name: "Brzoskwiania", defaultPortion: 120, caloriesIn100: 47, remarks: "", favorite: false },
], action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [...products, action.payload];
        case "REMOVE_PRODUCT":

            return products.filter(item => item.id !== action.payload);
        case "MODIFY_PRODUCT":
            const index = products.findIndex((item) => { return item.id === action.payload.id })

            const calories2 = [...products]
            calories2[index] = action.payload


            return calories2
        case "CHANGE_PRODUCT_FAVORITE":

            return products.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, favorite: !item.favorite }
                }
                return item
            });


        default:
            return products;
    }
}
export default productsReducer;