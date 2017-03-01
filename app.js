
(function() {

var app = angular.module('checklist', []);

app.controller('ItemController', function(){
	this.list = items;
	this.newItem = {};
	this.addItem = function (){
		this.list.push(this.newItem);
		this.newItem = {};
	};

	this.remove=function($index){ 
 	 this.list.splice($index,1);     
	};

});


var items = [
{
	body: "Create checklist"
}, {
	body: "Research Angular"
}];

})();