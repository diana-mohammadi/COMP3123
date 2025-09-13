// exercise 3
function moveLastThreeToFront(str) {
    if (str.length < 3) {
        return str;
    }
    return str.slice(-3) + str.slice(0, -3);
}


const testString = "JavaScript";
console.log(moveLastThreeToFront(testString)); // Output: iptJavaScr
// exercise 1
function capitalizeWords(str) {
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}


const inputString = "write a javascript program to capitalize the first letter of each word";
console.log(capitalizeWords(inputString));


//exercise 2
function findLargest(a,b,c){
    var max=Math.max(a,b,c);
    return max;
}
console.log(findLargest(1,2,3));

//exercise 4
function angele_type(x){
    if(x<90){
        return "acute angle";
    }else if(x===90){
        return "right angle";
    }else if(x<180){
        return "obtuse angle";
    }else if(x===180){
        return "straight angle";
    }else{
        return "invalid angle";
    }
}
console.log(angele_type(100)); // Output: obtuse angle

