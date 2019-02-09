var DishOverviewController = function (view, model, app) {
    view.printButton.on('click', function () {
        app.stateController(view, app.overviewHeaderView);
        app.stateController(view, app.dinnerPrintoutView);
    })
}