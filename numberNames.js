function numToEng(n) {
	if (n===0) return "zero"; 
	const smallNames = ["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
	const tenNames = ["ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
	let outputWords = [];
	if (n>=100) {
		outputWords.push(smallNames[Math.floor(n/100)-1]);
		outputWords.push("hundred");
		n=n%100;
	}
	if (n>=20) {
		outputWords.push(tenNames[Math.floor(n/10)-1]);
		n-=Math.floor(n/10)*10;
	}
	outputWords.push(smallNames[n-1]);
	return outputWords.join(" ");
}