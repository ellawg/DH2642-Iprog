var DishSearchController = function (view, model, app) {

    view.searchBtn.on('click', function () {
        view.dishList.empty();
        const typeVal = document.getElementById('typeOption').value;
        const inputVal = document.getElementById('searchInput').value;
        const dishes = model.getAllDishes(typeVal, inputVal);
        if (dishes.length == 0) {
            view.dishList.append('<p>Could not find any dishes</p>')
        }
        dishes.forEach(function (j) {
            new DishItemView($(".dishList"), j, model, false, app);
        });
    })




    



}