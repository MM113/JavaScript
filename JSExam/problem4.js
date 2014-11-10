function solver(logs){

	var objects = {};

	for (var i = 0; i < logs.length; i++) {
		var tempRow = logs[i].split(' ');
		var ip = tempRow[0];
		var user = tempRow[1];
		var duration = parseInt(tempRow[2]);

		if(!(user in objects)){
		 	objects[user] = {};
		 	objects[user][ip] = duration;
  		}else if((user in objects) && !(ip in objects[user])){
  			objects[user][ip] = duration;
  		}else{
  			objects[user][ip] += duration
  		}
	}



	console.log(objects);
}

logs = [

	'192.168.0.11 peter 33',
	'10.10.17.33 alex 12',
	'10.10.17.35 peter 30',
	'10.10.17.34 peter 120',
	'10.10.17.34 peter 120',
	'212.50.118.81 alex 46',
	'212.50.118.81 alex 4',

]
solver(logs);
