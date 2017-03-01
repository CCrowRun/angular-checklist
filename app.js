
(function() {

var app = angular.module('checklist', []);

app.controller('ItemController', function(){
//Used for "ng-submit" directive to add items to array.
	this.list = items;
	this.newItem = {};
	this.addItem = function (){
		this.list.push(this.newItem);
		this.newItem = {};
	};
//Used in "ng-click" directive for Delete button
	this.remove=function($index){ 
 	 this.list.splice($index,1);     
	};

});

//Array of checklist items
var items = [
{
	body: "Create checklist"
}, {
	body: "Research Angular"
}];

})();