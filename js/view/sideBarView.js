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

    
    const totalPrice = container.find('#totalPrice');
    totalPrice.html(model.getTotalMenuPrice());

    $(document).ready(function() {

        // Check for click events on the navbar burger icon
        $(".navbar-burger").click(function() {
      
            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            $(".navbar-burger").toggleClass("is-active");
            $(".navbar-menu").toggleClass("is-active");
      
        });
      });

}