function appCtrl($scope) {
	$scope.list = [ {name:"Bez", topic:"rails", numInt:1, nameInt:"Bez", nameOnOff:"addNameOff"} ];
	$scope.peopleInt = ",";

	$scope.addItem = function() {
		$scope.list.push({name:$scope.nameInput, topic:$scope.topicInput, numInt:1, nameInt:$scope.nameInput, nameOnOff:"addNameOff"});
		$scope.nameInput = "";
		$scope.topicInput = "";
	};

	$scope.clickUpOne = function(item,$event) {
		// shows name input
		item.nameOnOff = "addNameOn";
	};

	$scope.increment = function(item) {
		item.numInt = item.numInt + 1;
	};

	//runs when you submit the input from the +1
	$scope.addName = function(item) {
		// $scope.peopleInt.push($scope.nameToAdd);
		if (item.nameToAdd !== undefined && item.nameToAdd !== "") {
			item.nameInt += ", " + item.nameToAdd;
			item.nameToAdd = "";
			//increment the +1
			$scope.increment(item);
		}
		// removes name input
		item.nameOnOff = "addNameOff";

	};

	$scope.remove = function(item) {
		var itemIndex = $scope.list.indexOf(item);
		$scope.list.splice(itemIndex,1);
	};

	$scope.removeInput = function() {
		console.log($scope.list);
		elemClasses = event.target.className;
		if (elemClasses.indexOf("keep") === -1) {
			var itemList = document.getElementsByClassName('addNameOn');
			if (itemList.length !==0) {
				for (obj=0; obj<$scope.list.length; obj++) {
					$scope.list[obj].nameOnOff = "addNameOff";
				}
			}
		}
	};
}

function enlarge(span) {
	span.style.fontSize ="16px";
	var plus = span.getElementsByClassName("plusOne")[0];
	plus.style.fontSize = "21px";
	var people = span.nextSibling;
	while(people && people.nodeType != 1) {
    people = people.nextSibling;
	}
	people.style.display ="block";
}

function normal(span) {
	span.style.fontSize ="14px";
	var plus = span.getElementsByClassName("plusOne")[0];
	plus.style.fontSize = "18px";
	var people = span.nextSibling;
	while(people && people.nodeType != 1) {
    people = people.nextSibling;
	}
	people.style.display ="none";
}

var countUpFromZero = function () {
	var count = 0;
	return function() {
		return count ++;
	};
};