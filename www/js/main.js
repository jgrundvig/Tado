var main = (function(){
	var todoStorage = null;
	var start = function(){
		todoStorage = localStorage;
		console.log('starting');
	};
	var saveTodo = function(task){
		var userId = 1;
		todoStorage[userId]
	};
	return {
		'start': start,
		'saveTodo': saveTodo
	}

})();
