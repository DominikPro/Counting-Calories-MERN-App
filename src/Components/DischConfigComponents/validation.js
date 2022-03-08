export const validateDish = (dish) => {
    if (dish.name === "") {
        alert("Sprawdź czy wpisałeś poprawną nazwe dania")
    } else if (dish.products.length <= 0) {
        alert("Nie można utworzyć dania które nie posiada wybranych produktów.")
    } else return true
}

