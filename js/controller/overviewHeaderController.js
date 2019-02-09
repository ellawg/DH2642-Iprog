var OverviewHeaderController = function (view, model, app) {
    view.backEditButton.on('click', function () {
        app.stateController(view, app.dishSearchView);
        app.stateController(view, app.sideBarView);
        app.stateController(app.dishOverviewView, app.sideBarView);
        app.stateController(app.dinnerPrintoutView, app.sideBarView);
    })
}