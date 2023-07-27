let num = 110;
let arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sisteen", "seventeen", "eighteen", "nineteen", "twenty", "hundered", "thousand", "million", "billion", "trillion", "quadrillion", "quintrillion", "sextillion", "septillion", "octillion", "nonillion", "decillion"];
let tensArr = ["ten", "eleven", "twenty", "thrty", "forty", "fifty", "sisty", "seventy", "eighty", "ninty",]

let numString = num.toString();
let firstDigit = parseInt(numString.charAt(0));
let secondDigit = parseInt(numString.charAt(1));
let thirdDigit = parseInt(numString.charAt(2));
let forthDigit = parseInt(numString.charAt(3));
let fifthDigit = parseInt(numString.charAt(4));
let sixthDigit = parseInt(numString.charAt(5));
let seventhDigit = parseInt(numString.charAt(6));
if (num < 21) {
    console.log(arr[num]);
} else if (num < 100 && num > 20) {
    if (secondDigit !== 0) {
        console.log(tensArr[firstDigit] + " " + arr[secondDigit]);
    } else {
        console.log(tensArr[firstDigit]);
    }
} else if (num >= 100 && num < 1000) {
    if (secondDigit == 0 && thirdDigit == 0) {
        console.log(arr[firstDigit] +" "+ arr[21]);        
    } else if(secondDigit == 0 && thirdDigit !== 0){
        console.log(arr[firstDigit] +" "+ arr[21] + " " + arr[thirdDigit]);        
    } else if(thirdDigit == 0 && secondDigit !== 0){
        console.log(arr[firstDigit] +" "+ arr[21] + " " + tensArr[secondDigit]);        
    }

} else if (num >= 1000) {
    if (secondDigit !==0 && thirdDigit !==0 && forthDigit !==0) {
        console.log(arr[firstDigit] +" "+ arr[22] +" "+ arr[secondDigit] +" "+ arr[21] + " and " + arr[thirdDigit] + " " + arr[forthDigit] );
        
    } else {
        
    }        
}

