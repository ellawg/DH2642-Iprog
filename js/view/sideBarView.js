var SideBarView = function (container, model) {

    const peopleBtns = container.find('.peopleBtns');

    peopleBtns.append('<div>People: <span id="numberOfGuests"></span></div>');
    peopleBtns.append('<div class="guestBtns"><button id="minusGuest" class="btn"><i class="fas fa-angle-down"></i></button><button id="plusGuest" class="btn"><i class="fas fa-angle-up"></i></button></div>');

    const numberOfGuests = container.find('#numberOfGuests');
    const totalPrice = container.find('#totalPrice');
    const dishTable = container.find('.dishTableAppend');

    this.plusButton = container.find('#plusGuest');
    this.minusButton = container.find('#minusGuest');

    var updates = function () {
        dishTable.empty();
        model.addDishToMenu(142);
        numberOfGuests.html(model.getNumberOfGuests());

        totalPrice.html("SEK " + model.getTotalMenuPrice());

        const fullMenu = model.getFullMenu();
        console.log(fullMenu)

        fullMenu.forEach(function (dish) {
            console.log(dish)
            if (dish !== undefined) {
                const name = dish.title;
                console.log(dish.id)
                const price = ("SEK " + model.getTotalDishPrice(dish.id));
                dishTable.append('<tr>');
                dishTable.append('<td>' + name + '</td>');
                dishTable.append('<td>' + price + '</td>');
                dishTable.append('</tr>');
            }
        })
    }
    updates();

    const menu = container.find('.menu');
    this.confirmButton =  $("<button/>").addClass("button").attr('id', 'confirmDinnerBtn').html('Confirm dinner');
    menu.append(this.confirmButton);

    this.update = function (model, changeDetails) {
        // redraw just the portion affected by the changeDetails
        // or remove all graphics in the view, read the whole model and redraw
        if (changeDetails == 'numberOfGuests'){
            updates();
        }
        if (changeDetails == 'addDishToMenu'){
            updates();
        }
    }
    model.addObserver(this.update);

    this.showView = function () {
        container.show();
    }
    this.hideView = function () {
        container.hide();
    }

}