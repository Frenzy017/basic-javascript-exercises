function smallShop(input) { //SWITCH VARIANTS//
    let product = (input[0]);
    let city = (input[1]);
    let quantity = Number(input[2]);
    let productPrice = 0

    switch (city) {
        case "Sofia":

            if (product === "coffee") {
                productPrice = quantity * 0.50
            } else if (product === "water") {
                productPrice = quantity * 0.80
            } else if (product === "beer") {
                productPrice = quantity * 1.20
            } else if (product === "sweets") {
                productPrice = quantity * 1.45
            } else if (product === "peanuts") {
                productPrice = quantity * 1.60
            } break;

        case "Plovdiv":

            if (product === "coffee") {
                productPrice = quantity * 0.40
            } else if (product === "water") {
                productPrice = quantity * 0.70
            } else if (product === "beer") {
                productPrice = quantity * 1.15
            } else if (product === "sweets") {
                productPrice = quantity * 1.30
            } else if (product === "peanuts") {
                productPrice = quantity * 1.50
            } break;

        case "Varna":

            if (product === "coffee") {
                productPrice = quantity * 0.45
            } else if (product === "water") {
                productPrice = quantity * 0.70
            } else if (product === "beer") {
                productPrice = quantity * 1.10
            } else if (product === "sweets") {
                productPrice = quantity * 1.35
            } else if (product === "peanuts") {
                productPrice = quantity * 1.55
            } break;
    }
    console.log(productPrice);

}

smallShop(["sweets", "Varna", "0.635"])

function smallShop(input) { //If else variants//
    let product = (input[0]);
    let city = (input[1]);
    let quantity = Number(input[2]);
    let productPrice = 0

    if (city === "Sofia") {
        if (product === "coffee") {
            productPrice = quantity * 0.50
        } else if (product === "water") {
            productPrice = quantity * 0.80
        } else if (product === "beer") {
            productPrice = quantity * 1.20
        } else if (product === "sweets") {
            productPrice = quantity * 1.45
        } else if (product === "peanuts") {
            productPrice = quantity * 1.60
        }
    } else if (city === "Plovdiv") {
        if (product === "coffee") {
            productPrice = quantity * 0.40
        } else if (product === "water") {
            productPrice = quantity * 0.70
        } else if (product === "beer") {
            productPrice = quantity * 1.15
        } else if (product === "sweets") {
            productPrice = quantity * 1.30
        } else if (product === "peanuts") {
            productPrice = quantity * 1.50
        }
    } else if (city === "Varna") {
        if (product === "coffee") {
            productPrice = quantity * 0.45
        } else if (product === "water") {
            productPrice = quantity * 0.70
        } else if (product === "beer") {
            productPrice = quantity * 1.10
        } else if (product === "sweets") {
            productPrice = quantity * 1.35
        } else if (product === "peanuts") {
            productPrice = quantity * 1.55
        }
    }
    console.log(productPrice);

}
