var DataModel = function(){
    var observers=[];
    this.addObserver=function(observer){ observers.push(observer); }
   
    this.notifyObservers=function(changeDetails){ 
        for(var i=0; i<observers.length; i++)
             observers[i](this, changeDetails); // we assume that observers[i] is a function, so we call it like observers[i](parameters)
    }

    this.removeObserver=function(observer){  /* remove observer from array */}
   
//.... other model data and code calling notifyObservers() when the model changes
}