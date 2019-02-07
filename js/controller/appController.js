var AppController = function (model) {
	// VIEWS
	this.sideBarView = new SideBarView($(".sideBarView"), model);
	this.welcomeView = new WelcomeView($(".welcomeView"), model);
	this.dishSearchView = new DishSearchView($(".dishSearchView"), model);
	this.dishDetailsView = new DishDetailsView($(".dishDetailsView"), model);
	var dishOverview = new DishOverviewView($(".dishOverviewView"), model);
	var dinnerPrintout = new DinnerPrintoutView($(".dinnerPrintoutView"), model);

	// CONTROLLERS
	var sideBarController = new SideBarController(this.sideBarView, model, this);
	var welcomeController = new WelcomeController(this.welcomeView, model, this);
	var dishSearchController = new DishSearchController(this.dishSearchView, model, this);

	this.dishSearchView.hideView();
	this.sideBarView.hideView();
	this.dishDetailsView.hideView();

	// STATE CONTROLLER
	// triggered by controller
	// running methods in view to show and hide
	this.stateController = function (current, next) {
		current.hideView();
		next.showView();
	}
}
