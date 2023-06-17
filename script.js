let tel={
	2:"abc",
	3:"def",
	4:"ghi",
	5:"jkl",
	6:"mno",
	7:"pqrs",
	8:"tuv",
	9:"wxyz"
}
function letterCombinations(input_digit) {
  //Complete the function
	let ans=[];
	function findcombination(curidx,curcom) {
		
		if(curidx==input_digit.length){
			ans.push(curcom);
		}
		let curchar=input_digit[curidx];
		for(int i=0;i<tel.curchar.length;i++){
			findcombination(curidx+1,curcom+tel[curchar][i]);
		}
	}

	findcom(0,"");
	return ans;
}

module.exports = letterCombinations;
