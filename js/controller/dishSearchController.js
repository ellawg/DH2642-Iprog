var DishSearchController = function (view, model, app) {
    function loadAllDishes() {
    const typeVal = view.typeOption.val();
    const inputVal = view.searchInput.val();


    model.getAllDishes(typeVal, inputVal).then(dishes => {
        if (dishes.length == 0) {
            view.dishList.append('<p>Could not find any dishes</p>')
            view.loader.hide();
        }
        else {
            dishes.forEach(function (dish) {
                new DishItemView(view, $(".dishList"), dish, model, false, app);
                view.loader.hide();
            })
        }
    }).catch(error => {
        alert("Oh nooo something went wrong! :( \n" + error);
        console.log('dish search error' + error);
    });
}

    view.loader.hide();
    loadAllDishes();
    view.searchBtn.on('click', function (e) {
        view.loader.show();
        e.preventDefault();
        view.dishList.empty();
        loadAllDishes();
    })
}