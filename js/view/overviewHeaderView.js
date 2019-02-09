var OverviewHeaderView = function (container, model) {
    const numberOfGuests = container.find('#numberOfGuests');

    this.backEditButton = $("<button/>").addClass("button").attr('id', 'backEditButton').html('Go back and edit');
    container.append(this.backEditButton);

    container.append('<hr>');

    var updates = () => {
        numberOfGuests.html(model.getNumberOfGuests());
    }
    this.update = function (model, changeDetails) {
        // redraw just the portion affected by the changeDetails
        // or remove all graphics in the view, read the whole model and redraw
        updates();
    }

    model.addObserver(this.update);

    this.showView = function () {
        container.show();
    }
    this.hideView = function () {
        container.hide();
    }

}