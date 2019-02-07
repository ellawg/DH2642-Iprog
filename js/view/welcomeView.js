var WelcomeView = function (container, model) {
    container.append('<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis ipsum id tortor vulputate pharetra. Sed sed augue consequat, tempus ligula non, euismod diam. Morbi ultrices venenatis lacus, nec consectetur nibh. Vestibulum sit amet vehicula ligula. Praesent metus mi, finibus a nisi nec, sodales eleifend lacus.</p>');

    this.button = $("<button/>")
        .addClass("button")
        .attr('id', 'welcomeButton')
        .html('Create new element');

    container.append(this.button);

    this.showView = function () {
        container.show();
    }
    this.hideView = function () {
        container.hide();
    }

}