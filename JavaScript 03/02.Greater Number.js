function greaterNumber(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    if (a > b) {
        console.log(a);  //because 3 is bigger than 5 console.log(a) doesn't exist and goes to the next one 
    } else {
        console.log(b);
    }
}
greaterNumber(["5", "3"])