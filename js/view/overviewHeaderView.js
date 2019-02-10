var OverviewHeaderView = function (container, model) {
    const numberOfGuests = container.find('#numberOfGuests');
    const headerContent = container.find('.headerContent');
    
    headerContent.append('<h1 id="myDinner">My Dinner: <span id="numberOfGuests"></span> people</h1>')

    this.backEditButton = $("<button/>").addClass("button").attr('id', 'backEditButton').html('Go back and edit');
    headerContent.append(this.backEditButton);


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