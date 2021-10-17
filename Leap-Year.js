process.stdin.resume();
process.stdin.setEncoding('utf8');
// Your code here!

let year = Number(promt ("Type the year"))

    if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0){
    console.log ("It's a leap year")
    } else  {
    console.log ("It is not a leap year")
    
}    
    

console.log("XXXXXXXX")
