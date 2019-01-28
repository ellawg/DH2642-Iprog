var SideBarView = function (container, model) {

    const numberOfGuests = container.find('#numberOfGuests');
    const totalPrice = container.find('#totalPrice');

    numberOfGuests.html(model.getNumberOfGuests());

    model.addDishToMenu(1);
    totalPrice.html(model.getTotalMenuPrice());

    this.plusButton = container.find('#plusGuest');
    this.minusButton = container.find('#minusGuest');

    this.plusButton.on('click', function () {
        const newNumberOfGuest = model.getNumberOfGuests() + 1;
        model.setNumberOfGuests(newNumberOfGuest);
    })

    this.minusButton.on('click', function () {
        const newNumberOfGuest = model.getNumberOfGuests() - 1;
        model.setNumberOfGuests(newNumberOfGuest);
    })


}