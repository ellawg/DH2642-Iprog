var SideBarView = function (container, model) {

    const numberOfGuests = container.find('#numberOfGuests');
    const totalPrice = container.find('#totalPrice');
    const navbar = container.find('#navbarToggle');

    numberOfGuests.html(model.getNumberOfGuests());

    model.addDishToMenu(1);
    model.addDishToMenu(200);

    totalPrice.html("SEK " + model.getTotalMenuPrice());
    
    const fullMenu = model.getFullMenu();

    var dishes = $("<div/>")  
                    .addClass("dishes");

    navbar.append(dishes);

    fullMenu.forEach(function(dish){
        console.log(dish)
        if (dish !== undefined){
            const name = dish.name
            const price = ("SEK " + model.getTotalDishPrice(dish.id))
            dishes.append('<tr>')
            dishes.append('<td>' + name + '</td>');
            dishes.append('<td>' + price + '</td>')
            dishes.append('<tr>')
        }
    })

    // BUTTONS

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

    $(document).ready(function() {

        // Check for click events on the navbar burger icon
        $(".navbar-burger").click(function() {
      
            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            $(".navbar-burger").toggleClass("is-active");
            $(".navbar-menu").toggleClass("is-active");
      
        });
      });

}