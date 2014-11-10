function oddEvenSeqFinder(input){
    var nums = input[0].split(/[^A-Za-z0-9]/);
	nums = nums.filter(function(str) {return /\S/.test(str)})

	for (var i = 0; i < nums.length; i++) {
		(nums[i] % 2 == 0 ? nums[i] = 'even' : nums[i] = 'odd');	
	}
	var count = 1;
	var bestCount = 1;
	var startVal = nums[0];
	for (var i = 1; i < nums.length; i++) {
		if (startVal != nums[i]){
			startVal = nums[i];
			count++;
			if(count>bestCount){bestCount = count}
		}else{
			count = 1;
		}
	};
	console.log(bestCount)
}
oddEvenSeqFinder('(3) (22) (-18) (55) (44) (3) (21)');
oddEvenSeqFinder('(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)');
oddEvenSeqFinder('  ( 2 )  ( 33 ) (1) (4)   (  -1  ) ');
oddEvenSeqFinder('(102)(103)(0)(105)  (107)(1)');
oddEvenSeqFinder('(2) (2) (2) (2) (2)');