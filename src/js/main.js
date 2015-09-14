'use strict';

var myTodos = (function() {
	var ref     = new Firebase('https://chrsplzlist.firebaseio.com/');
	var listRef = ref.child('list');

	function refreshList(list) {
		var lis = '';

		for(var i = 0; i < list.length; i++) {
			lis += '<li class="list-group-item">' + list[i].title + '<br /><span class="small"><em>' + list[i].note + '</em></span>';
		};

		document.getElementById('todos').innerHTML = lis;
	}

	// Snapshot the Firebase database on new events & initial load
	listRef.on('value', function(s) {

		// Snapshot value, children count and keys (Object ID's)
		var v = s.val();
		var c = s.numChildren();
		var k = Object.keys(v);
		var list = [];

		for(var i = 0; i < c; i++) {

			// Create the title and note variable
			var title = v[k[i]].title ? v[k[i]].title : '';
			var note  = v[k[i]].note ? v[k[i]].note : '';

			if(title.trim().length > 0) {

				list.push({
					title: title,
					note: note,
					id: k
				});				
			}
		}

		refreshList(list);
	});

}());


// //	// Adding the Click event
// //	submit.addEventListener('click', addItem);
// //
// //	// addItem function
// //	function addItem(e) {
// //		e.preventDefault();
// //		var todoObj = {
// //			title : title.value,
// //			note  : note.value,
// //			datetime : Firebase.ServerValue.TIMESTAMP,
// //			completed : false
// //		};
// //
// //		listRef.push(todoObj);
// //
// //		title.value = '';
// //		note.value  = '';
// //	};