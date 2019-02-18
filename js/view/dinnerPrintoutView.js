var DinnerPrintoutView = function (container, model) {

    const rightLeft = container.find('.rightLeft');
    const row = $("<div/>").addClass("row column");
    rightLeft.append(row);

    var updates = () => {
        row.empty();

        const menu = model.getFullMenu();

        menu.forEach(function (dish) {
            if (dish !== undefined) {
                var imgName = $("<div/>")
                    .addClass("imgName");
                row.append(imgName);

                imgName.append('<img class="printImg column is-one-quarter" src="' + dish.image + '"' +'/>');
                imgName.append('<p class="column">' + dish.title + '</p>');
                imgName.append('<p class="description column is-half" >' + dish.instructions + '</p>');

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