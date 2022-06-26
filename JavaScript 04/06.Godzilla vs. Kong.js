function Godzilla(input) {
    let filmBudget = Number(input[0]);
    let peopleCount = Number(input[1]);
    let clothingOnePerson = Number(input[2]);
    let discountClothing = 0


    let decorFilm = filmBudget * 0.10
    let clothingPrice = peopleCount * clothingOnePerson

    if (peopleCount > 150) {
        discountClothing = clothingPrice * 0.10

    } else {
        discountClothing = 0
    }

    let clothingAfterDiscount = clothingPrice - discountClothing;
    let finalSumFilm = decorFilm + clothingAfterDiscount;
    let remainingFunds = (Math.abs((filmBudget - finalSumFilm).toFixed(2)));
    let neededFunds = (Math.abs((filmBudget - finalSumFilm).toFixed(2)));


    if (finalSumFilm > filmBudget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${Math.abs(neededFunds.toFixed(2))} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(remainingFunds.toFixed(2))} leva left.`);
    }







}
Godzilla(["9587.88",
    "222",
    "55.68"])





