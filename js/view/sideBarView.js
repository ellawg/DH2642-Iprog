var SideBarView = function (container, model) {

    const $button = container.find(".priceAndBtn");
    $button.append('<button class="button" id="confirmBtn" title="Disabled button" disabled> Confirm Dinner </button>');
    

    const numberOfGuests = container.find('#numberOfGuests');

    numberOfGuests.html(model.getNumberOfGuests());

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

    const dish = model.getDish(1);
    const totalPrice = container.find('#totalPrice');
    totalPrice.html(model.getTotalMenuPrice());


}