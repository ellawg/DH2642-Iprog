var DinnerPrintoutView = function (container, model) {

    const numberOfGuests = container.find('#numberOfGuests');

    this.backEditButton = $("<button/>").addClass("button").attr('id', 'backEditButton').html('Go back and edit');
    container.append(this.backEditButton);

    const rightLeft = container.find('.rightLeft');
    const row = $("<div/>").addClass("row column");
    rightLeft.append(row);

    var updates = () => {
        numberOfGuests.html(model.getNumberOfGuests());

        row.empty();

        const menu = model.getFullMenu();

        menu.forEach(function (dish) {
            if (dish !== undefined) {
                var imgName = $("<div/>")
                    .addClass("imgName");
                row.append(imgName);
                imgName.append('<img class="printImg" src="images/' + dish.image + '"' + '/>');
                imgName.append('<p>' + dish.name + '</p>');
                imgName.append('<p class="description" >' + dish.description + '</p>');

            }
        })
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