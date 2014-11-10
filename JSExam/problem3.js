function cryptoNakov(input){
    var message = input[0];
    var vals = message.split(' ');
	var result = '';
	var tempWord = '';

    var longest = longestWordFinder(vals);
    for (var i = 0; i < longest.length; i++) {
    	for (var k = 0; k < vals.length; k++) {
    		resultBuilder(vals[k],k);
    	}
    }
    result = result.split('');
 	console.log(letterMover(result).join('') );

    function letterMover(crypted){   	
    	for (var i = 0; i < crypted.length; i++) {
    		var destination = moveToPos(crypted[i],i);
			if(destination > i){
    			crypted.splice(destination+1, 0, crypted[i]);
    			crypted.splice(i,1);
    						
			} else {
    			crypted.splice(destination, 0, crypted[i]);
    			crypted.splice(i+1,1);
			}
    	}
    	return crypted
    }

	function moveToPos(letter, pos){	
		var moveWith = letterPos(letter);

		var letterDest = moveWith + pos;

		if(letterDest >= result.length){
			while(letterDest >= result.length){
				letterDest = letterDest - result.length;
			}
		}
		return letterDest;
	}

    function letterPos(letter){
    	return letter.toLowerCase().charCodeAt(0)-96
    }

    function resultBuilder(word,index){
   	 	tempWord = word.split('');	
   	 	if(tempWord[tempWord.length-1] != undefined){
    		result += tempWord[tempWord.length-1];
    	}
    	tempWord.splice((tempWord.length-1),1);
    	vals[index] = tempWord.join("");
    	return result
    }

    function longestWordFinder(array){
    	var bestLength, longestWord = '';
    	for (var i = 0; i < array.length; i++) {
    		for (var k = i+1; k < array.length; k++) {
    			if(array[i].length > array[k].length){
    				bestLength = array[i].length;
    				longestWord = array[i];
    			} else {
    				bestLength = array[k].length;
    				longestWord = array[k];
    			}
    		}
    	}
    	return longestWord;
    }

}


cryptoNakov(['Hi exam']);