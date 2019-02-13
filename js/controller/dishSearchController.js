var DishSearchController = function (view, model, app) {
    // Function getDishItem that loops though a list and creates dish items
    view.getDishItems(view.firstDishes);

    view.searchBtn.on('click', function (e) {
        e.preventDefault();
        view.dishList.empty();
        const typeVal = view.typeOption.val();
        const inputVal = view.searchInput.val();
        const dishes = model.getAllDishes(typeVal, inputVal.toLowerCase());
        if (dishes.length == 0) {
            view.dishList.append('<p>Could not find any dishes</p>')
        }
        view.getDishItems(dishes);
    })
}