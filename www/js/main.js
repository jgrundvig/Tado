var main = (function(){
	var todoStorage = null;
	var todoList = [];

	var start = function(){
		todoStorage = window.localStorage;
		if(!todoStorage.getItem("tasks")){
			todoStorage.setItem("tasks", JSON.stringify([]));
		}
		updateTodoList();
	};

	var updateTodoList = function(){
		todoList = readTodoList();
		var listElement = document.getElementById('todo-list');
		var htmlTodoList = todoList.map(function(task, index){
			return '<li><input id="checkbox-'+ index +'" type="checkbox"><label for="checkbox-'+ index +'">'+ task +'</label></li>';
		});
		listElement.innerHTML = htmlTodoList.join('');
	};

	var saveTodo = function(e){
		var taskElement = document.getElementById('task-value');
		saveTaskToLocalStorage(taskElement.value);
		taskElement.value = "";
		e.preventDefault();
		updateTodoList();
	};

	var saveTaskToLocalStorage = function(data){
	    var tasks = [];
	    tasks = JSON.parse(todoStorage.getItem('tasks'));
	    tasks.push(data);
	    todoStorage.setItem('tasks', JSON.stringify(tasks));
	};

	var readTodoList = function(){
		return JSON.parse(todoStorage.getItem('tasks'));
	};

	return {
		'start': start,
		'saveTodo': saveTodo,
		'getTodoList': todoList
	}

})();

document.getElementById('create-task').addEventListener('click', main.saveTodo);
