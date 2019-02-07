var WelcomeController = function (view, model, app) {
    const button = view.button;
    button.on('click', function () {
        console.log(app.dishSearch)
        app.stateController(view, app.dishSearchView);
    })
}