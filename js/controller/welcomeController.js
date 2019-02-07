var WelcomeController = function (view, model, app) {
    const button = view.button;
    button.on('click', function () {
        app.stateController(view, app.dishSearchView);
        app.stateController(view, app.sideBarView);
    })
}