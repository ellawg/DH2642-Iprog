var SideBarView = function (container, model) {

    const numberOfGuests = container.find('#numberOfGuests');
    const totalPrice = container.find('#totalPrice');
    const dishTable = container.find('.dishTableAppend');

    this.plusButton = container.find('#plusGuest');
    this.minusButton = container.find('#minusGuest');

    model.addDishToMenu(1);
    model.addDishToMenu(200);
    model.addDishToMenu(100);

    var updates = function () {
        dishTable.empty();
        numberOfGuests.html(model.getNumberOfGuests());

        totalPrice.html("SEK " + model.getTotalMenuPrice());

        const fullMenu = model.getFullMenu();

        fullMenu.forEach(function (dish) {
            if (dish !== undefined) {
                const name = dish.name;
                const price = ("SEK " + model.getTotalDishPrice(dish.id));
                dishTable.append('<tr>');
                dishTable.append('<td>' + name + '</td>');
                dishTable.append('<td>' + price + '</td>');
                dishTable.append('</tr>');
            }
        })
    }
    updates();

    this.update = function (model, changeDetails) {
        // redraw just the portion affected by the changeDetails
        // or remove all graphics in the view, read the whole model and redraw
        if (changeDetails == 'numberOfGuests'){
            updates();
        }
        
    }
    model.addObserver(this.update);

}