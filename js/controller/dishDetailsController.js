var DishDetailsController = function (view, model, app) {
    view.addButton.on('click', function () {
        model.addDishToMenu(view.dish);
    });
    view.removeButton.on('click', function () {
        model.removeDishFromMenu(view.dish);
    });
    view.backButton.on('click', function () {
        app.stateController(view, app.dishSearchView);
    })
    view.backButton2.on('click', function () {
        app.stateController(view, app.dishSearchView);
    })
}