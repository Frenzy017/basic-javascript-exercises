function fruitMarket(input) {
    let strawberriesInLev = Number(input[0]);
    let bananasInKg = Number(input[1]);
    let orangeInKg = Number(input[2]);
    let raspberriesInKg = Number(input[3]);
    let strawberriesInKg = Number(input[4]);

    let priceRaspberriesPerKilo = strawberriesInLev / 2
    let priceOrangePerKilo = priceRaspberriesPerKilo - (0.4 * priceRaspberriesPerKilo)
    let priceBananasPerKilo = priceRaspberriesPerKilo - (0.8 * priceRaspberriesPerKilo)

    let finalSumRaspberries = raspberriesInKg * priceRaspberriesPerKilo
    let finalSumOrange = orangeInKg * priceOrangePerKilo
    let finalSumStrawberries = strawberriesInKg * strawberriesInLev
    let finalSumBananas = bananasInKg * priceBananasPerKilo

    let finalAmount = finalSumRaspberries + finalSumOrange + finalSumStrawberries + finalSumBananas
    console.log(finalAmount)

    let finalonoob=1





}
fruitMarket(["48",
    "10",
    "3.3",
    "6.5",
    "1.7"])
