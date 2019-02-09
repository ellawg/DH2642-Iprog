var DinnerPrintoutController = function (view, model, app) {
    view.backEditButton.on('click', function () {
        app.stateController(view, app.dishSearchView);
        app.stateController(view, app.sideBarView);
    })
}