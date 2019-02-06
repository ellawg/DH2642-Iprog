var AppController = function (model) {
	// VIEWS
	this.sideBar = new SideBarView($(".sideBarView"), model);
	this.welcome = new WelcomeView($(".welcomeView"), model);
	this.dishSearch = new DishSearchView($(".dishSearchView"), model);
	var dishDetails = new DishDetailsView($(".dishDetailsView"), model);
	var dishOverview = new DishOverviewView($(".dishOverviewView"), model);
	var dinnerPrintout = new DinnerPrintoutView($(".dinnerPrintoutView"), model);

	// CONTROLLERS
	var sideBarController = new SideBarController(this.sideBar, model, this);
	var welcomeController = new WelcomeController(this.welcome, model, this);
	var dishSearchController = new DishSearchController(this.dishSearch, model, this);

	// STATE CONTROLLER
	// triggered by controller
	// running methods in view to show and hide
	this.stateController = function (current, next) {
		current.hideView();
		next.showView();
	}
}

