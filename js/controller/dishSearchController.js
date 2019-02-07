var DishSearchController = function (view, model, app) {

    const firstDishes = model.getAllDishes('all');
    // Function getDishItem that loops though a list and creates dish items
    function getDishItems(list){
        list.forEach(function (dish) {
            new DishItemView(view, $(".dishList"), dish, model, false, app);
            
        });
    }
    getDishItems(firstDishes);
    
    view.searchBtn.on('click', function () {
        view.dishList.empty();
        const typeVal = document.getElementById('typeOption').value;
        const inputVal = document.getElementById('searchInput').value;
        const dishes = model.getAllDishes(typeVal, inputVal);
        if (dishes.length == 0) {
            view.dishList.append('<p>Could not find any dishes</p>')
        }
        console.log(dishes)
        getDishItems(dishes);
    })
}