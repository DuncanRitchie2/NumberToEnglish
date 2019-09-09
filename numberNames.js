// Converts integers between 0 and 19,999 to English,
// e.g. 19,992 -> "nineteen thousand, nine hundred and ninety-two"
const numToEng = (n) => {
    if (n===0) return "zero"; 
	const smalls = ["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
	const tens = ["ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
	let outputWords = [];
	if (n>=1000) {
		outputWords.push(smalls[Math.floor(n/1000)-1]);
		outputWords.push("thousand");
		n=n%1000;
        if (n) {
            if (n>=100) {
                outputWords[outputWords.length-1]+=",";
            }
            else {
                outputWords.push("and");
            }
        }
	}
	if (n>=100) {
		outputWords.push(smalls[Math.floor(n/100)-1]);
		outputWords.push("hundred");
        n=n%100;
        if (n) {
            outputWords.push("and");
        }
	}
	if (n>=20) {
		outputWords.push(tens[Math.floor(n/10)-1]);
        n-=Math.floor(n/10)*10;
        if (n%10) {
            outputWords[outputWords.length-1]+="-"+smalls[n-1];
            n-=smalls[n-1];
        }
    }
    if (n) {
        outputWords.push(smalls[n-1]);
    }
	return outputWords.join(" ");
}

for(let i = 19990; i < 19993; i++) {
    console.log(numToEng(i));
}