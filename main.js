function appCtrl($scope) {
	$scope.list = [{name:"Bez", topic:"rails"}];

	$scope.addItem = function() {
		$scope.list.push({name:$scope.nameInput, topic:$scope.topicInput});
		// console.log($scope.list[1]);
	};
}