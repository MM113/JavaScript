function cognater(input) {
	var str = input[0];
	var words = str.split(/[^A-Za-z0-9]/);
	words = words.filter(function(str) {
		return /\S/.test(str);
	})
	var nope = true;
	var result = [];
	var next = 0;
	var line;
	for (var i = 0; i < words.length; i++) {
		for (var k = i + 1; k < words.length; k++) {
			for (var j = 0; j < words.length; j++) {
				if (words[i] + words[k] == words[j]) {

					line = words[i] + "|" + words[k] + "=" + words[j];
					if (result.indexOf(line) < 0) {
						result[next] = line;
						next++;
					};
					nope = false;
				} else if (words[k] + words[i] == words[j]) {

					line = words[k] + "|" + words[i] + "=" + words[j];
					if (result.indexOf(line) < 0) {
						result[next] = line;
						next++;
					};
					nope = false;
				}
			};
		};
	};

	if (nope) {
		console.log("No")
	} else {
		for (var i = 0; i < next; i++) {
			console.log(result[i]);
		}
	}
}