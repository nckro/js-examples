var users = [
	{ id: 1, admin: true, level: 1 },
 	{ id: 2, admin: true, level: 2 },
 	{ id: 3, admin: false, level: 1 },
 	{ id: 4, admin: true, level: 3 },
 	{ id: 5, admin: true, level: 1 },
];

function matchUserToProp(user,prop) {
	var response = true;
	Object.keys(prop).forEach(function(key){
  		response = response && (user[key] && user[key]==prop[key]);
 	});
  	return response;
}

function  getUserWithProp(userList, prop){
    return userList.filter(function (user) {
       	return matchUserToProp(user,prop);
    });
}

var filteredUsers = getUserWithProp(users, {admin: true, level: 1});
console.log(filteredUsers);

var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 }
];


function  findWhere(array, criteria){
  	function matchUserToProp(user,criteria) {
			var response = true;
			Object.keys(criteria).forEach(function(key){
  			response = response && (user[key] && user[key]==criteria[key]);
 			});
  		return response;
		}
    return array.filter(function (user) {
       	return matchUserToProp(user,criteria);
    })[0].id;
}
