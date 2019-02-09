var DishOverviewView = function (container, model, app) {

    const numberOfGuests = container.find('#numberOfGuests');

    var menuList = $("<div/>").addClass("menuList");
    var dishPrice = $("<div/>").addClass("dishPrice");
    container.append(menuList);

    this.printButton =  $("<button/>").addClass("button").attr('id', 'printMenuButton').html('Print full menu');

    var updates = () => {
        const menu = model.getFullMenu();
        numberOfGuests.html(model.getNumberOfGuests());
        menuList.empty();
        dishPrice.empty();

        menu.forEach(function (j) {
            if (j !== undefined) {
                menuList.append(dishPrice);
                new DishItemView(this, $(".dishPrice"), j, model, true, app);
            }
        });
        menuList.append('<hr/> <p class="price">' + 'Total: ' + model.getTotalMenuPrice() + ' SEK </p>');
        container.append(this.printButton);
    }
    updates();

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