var DishSearchController = function (view, model, app) {
    model.getAllDishes('starter', 'egg').then(dishes => {
        dishes.forEach(function (dish) {
            new DishItemView(view, $(".dishList"), dish, model, false, app);
        });
    }).catch(error => {
        alert(error);
    });
    // Function getDishItem that loops though a list and creates dish items
    view.searchBtn.on('click', function (e) {
        e.preventDefault();
        view.dishList.empty();
        const typeVal = document.getElementById('typeOption').value;
        const inputVal = document.getElementById('searchInput').value;
        const dishes = model.getAllDishes(typeVal, inputVal.toLowerCase());
        if (dishes.length == 0) {
            view.dishList.append('<p>Could not find any dishes</p>')
        }
        model.getAllDishes('starter', 'egg').then(dishes => {
            dishes.forEach(function (dish) {
                new DishItemView(view, $(".dishList"), dish, model, false, app);
            });
        }).catch(error => {
            alert(error);
        });
    })
}