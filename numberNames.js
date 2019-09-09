// Converts integers between 0 and 19,999 to English,
// e.g. 19,992 -> "nineteen thousand, nine hundred and ninety-two"
const numToEng = (n) => {
    let outputWords = [];
        const smalls = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
    // Save any decimal part for later.
    let decimal = n-Math.floor(n);
    n = Math.floor(n)
    // If zero...
    if (n===0) {outputWords.push("zero");}
    else {
        // If non-zero...
        const tens = ["zero","ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
        if (n>=1000) {
            outputWords.push(smalls[Math.floor(n/1000)]);
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
            outputWords.push(smalls[Math.floor(n/100)]);
            outputWords.push("hundred");
            n=n%100;
            if (n) {
                outputWords.push("and");
            }
        }
        if (n>=20) {
            outputWords.push(tens[Math.floor(n/10)]);
            n-=Math.floor(n/10)*10;
            if (n%10) {
                outputWords[outputWords.length-1]+="-"+smalls[n-1];
                n-=smalls[n-1];
            }
        }
        if (n) {
            outputWords.push(smalls[n]);
        }
    }
    
    if (decimal) {
        outputWords.push("point");
        while (decimal) {
            decimal*=10
            outputWords.push(smalls[Math.floor(decimal)])
            decimal-=Math.floor(decimal);
        }
    }
	return outputWords.join(" ");
}

for(let i = 0; i <= 300; i++) {
    console.log(numToEng(i/100));
}
