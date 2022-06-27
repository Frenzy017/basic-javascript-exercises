function fruitShop(input) {
    let fruit = (input[0]);
    let day = (input[1]);
    let quantity = Number(input[2]);
    let productPrice = 0

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":


            if (fruit === "banana") {
                productPrice = quantity * 2.50
            } else if (fruit === "apple") {
                productPrice = quantity * 1.20
            } else if (fruit === "orange") {
                productPrice = quantity * 0.85
            } else if (fruit === "grapefruit") {
                productPrice = quantity * 1.45
            } else if (fruit === "kiwi") {
                productPrice = quantity * 2.70
            } else if (fruit === "pineapple") {
                productPrice = quantity * 5.50
            } else if (fruit === "grapes") {
                productPrice = quantity * 3.85

            } else {
                console.log("error"); break;

            } console.log(productPrice.toFixed(2)); break;


        case "Saturday":
        case "Sunday":

            if (fruit === "banana") {
                productPrice = quantity * 2.70
            } else if (fruit === "apple") {
                productPrice = quantity * 1.25
            } else if (fruit === "orange") {
                productPrice = quantity * 0.90
            } else if (fruit === "grapefruit") {
                productPrice = quantity * 1.60
            } else if (fruit === "kiwi") {
                productPrice = quantity * 3.00
            } else if (fruit === "pineapple") {
                productPrice = quantity * 5.60
            } else if (fruit === "grapes") {
                productPrice = quantity * 4.20
            } else {
                console.log("error"); break;

            } console.log(productPrice.toFixed(2)); break;

        default: console.log("error")
    }
}
fruitShop(["apple",
    "Tuesday",
    "2"])



