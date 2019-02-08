var DishOverviewView = function (container, model) {

    const numberOfGuests = container.find('#numberOfGuests');

    var menuList = $("<div/>").addClass("menuList");
    container.append(menuList);
    var dishPrice = $("<div/>").addClass("dishPrice");

    var updates = function () {
        const menu = model.getFullMenu();
        numberOfGuests.html(model.getNumberOfGuests());

        menu.forEach(function (j) {
            menuList.empty();
            if (j !== undefined) {
                menuList.append(dishPrice);
                //new DishItemView($(".dishPrice"), j, model, true);
            }
        });
        menuList.append('<hr/> <p class="price">' + 'Total: ' + model.getTotalMenuPrice() + ' SEK </p>');
        menuList.append('<button class="button recipeBtn"> Print Full Recipe </button>');
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