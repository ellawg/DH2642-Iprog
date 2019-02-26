var DishDetailsView = function (container, model) {

    const dishInfo = container.find('.dishInfo');
    const dishSpecs = container.find('.dishSpecs');
    const specs = container.find('.specs');

    const loader = $("<div/>").addClass("loader");
    container.append(loader);

    this.backButton2 = $("<button/>").addClass("button").attr('id', 'backToSearch2').html('Back to search');
    this.numberOfGuests = model.getNumberOfGuests();

    var updateDetails = (changeDetails) => {
        dishInfo.hide();
        dishSpecs.hide();
        loader.show();
        specs.empty();
        dishInfo.empty();

        this.id = model.getDishId();
        model.getDish(this.id).then(dish => {
            this.dish = dish;
            console.log(this.dish)
            dishInfo.append('<h1 class="dishName">' + dish.title + '</h1>');
            dishInfo.append('<img src="' + dish.image + '"' + '/>');
            dishInfo.append('<p>' + dish.instructions + '</p>');
            updateIngred();
        }).catch(error => {
            container.empty()
            container.append('<p> Dish details could not be found :( </p>');
            container.append(this.backButton2);
            loader.hide();
            container.show('slow');
            console.log(error);
            
        });
        dishInfo.show('slow');
        dishSpecs.show('slow');
        loader.hide();
    }

        var updateIngred = () => {
            this.numberOfGuests = model.getNumberOfGuests();
            specs.empty();
            specs.append('Ingredients for ' + this.numberOfGuests + ' people');
            console.log(this.dish)
            this.dish.extendedIngredients.forEach((item) => {
                specs.append('<tr>');
                specs.append('<td>' + Math.ceil(item.amount) * this.numberOfGuests + ' ' + item.unit + '</td>');
                specs.append('<td>' + item.name + '</td>');
                specs.append('<td>' + 'SEK' + ' ' + item.amount * this.numberOfGuests + '</td>');
                specs.append('<tr>');
            });
        }

        this.backButton = $("<button/>").addClass("button").attr('id', 'backToSearch').html('Back to search');
        dishSpecs.append(this.backButton);
        this.addButton = $("<button/>").addClass("button").attr('id', 'addToMenu').html('Add to menu');
        dishSpecs.append(this.addButton);
        this.removeButton = $("<button/>").addClass("button").attr('id', 'removeFromMenu').html('Remove from menu');
        dishSpecs.append(this.removeButton);
       
        updateDetails();
        


        this.update = function (model, changeDetails) {
            if (changeDetails == 'dishDetailsId') {
                updateDetails();
            }
            if (changeDetails == 'numberOfGuests') {
                updateIngred();
            }
        }

        this.showView = function () {
            container.show();
        }
        this.hideView = function () {
            container.hide();
        }
        model.addObserver(this.update);
    }