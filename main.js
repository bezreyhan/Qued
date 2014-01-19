function appCtrl($scope) {
	$scope.list = [{name:"Bez", topic:"rails"}];

	$scope.addItem = function() {
		$scope.list.push({name:$scope.nameInput, topic:$scope.topicInput, numInt:1});
		$scope.nameInput = "";
		$scope.topicInput = "";
	};

	$scope.increment = function(item) {
		item.numInt = item.numInt + 1;
	};

	$scope.remove = function(item) {
		var itemIndex = $scope.list.indexOf(item);
		$scope.list.splice(itemIndex,1);
	};
}

function enlarge(span) {
	span.style.fontSize ="16px";
	var plus = span.getElementsByClassName("plusOne")[0];
	plus.style.fontSize = "21px";
}

function normal(span) {
	span.style.fontSize ="14px";
	var plus = span.getElementsByClassName("plusOne")[0];
	plus.style.fontSize = "18px";
}