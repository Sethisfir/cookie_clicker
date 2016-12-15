

var ClickCounterViewModel = function() {
   this.numberOfClicks = ko.observable(0);

   this.registerClick = function() {
       this.numberOfClicks(this.numberOfClicks() + 1);
   }
   this.resetClicks = function() {
       this.numberOfClicks(0);
   }

}

ko.applyBindings(new ClickCounterViewModel())