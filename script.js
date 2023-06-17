

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
let ans=[];
function letterCombinations(input_digit) {
  //Complete the function	
	function findcombination(curidx,curcom) {
		
		if(input_digit.length<=curidx){
			ans.push(curcom);
      return;
		}
		let curchar=input_digit[curidx];
		for(let i=0;i<tel[curchar].length;i++){
			findcombination(curidx+1,curcom+tel[curchar][i]);
		}
	}

	findcombination(0,"");
	return ans;
}

module.exports = letterCombinations;
