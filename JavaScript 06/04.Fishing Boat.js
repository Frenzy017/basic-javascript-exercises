function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = (input[1]);
    let fishermanCount = Number(input[2]);
    let priceAmount = 0

    switch (season) {
        case "Spring":
            if (fishermanCount <= 6) {
                priceAmount = 3000 * 0.90;
            } else if (fishermanCount > 7 && fishermanCount <= 11) {
                priceAmount = 3000 * 0.85;
            } else if (fishermanCount >= 12) {
                priceAmount = 3000 * 0.75;
            } break;

        case "Summer":
        case "Autumn":
            if (fishermanCount <= 6) {
                priceAmount = 4200 * 0.90;
            } else if (fishermanCount > 7 && fishermanCount <= 11) {
                priceAmount = 4200 * 0.85;
            } else if (fishermanCount >= 12) {
                priceAmount = 4200 * 0.75;
            } break;

        case "Winter":
            if (fishermanCount <= 6) {
                priceAmount = 2600 * 0.90;
            } else if (fishermanCount > 7 && fishermanCount <= 11) {
                priceAmount = 2600 * 0.85;
            } else if (fishermanCount >= 12) {
                priceAmount = 2600 * 0.75;
            } break;
    } 
    

    if (fishermanCount % 2 === 0 && season !== "Autumn") {
        priceAmount = priceAmount - (priceAmount * 0.05);

    } else {
        priceAmount = priceAmount 
    
    }
    
    let diff = Math.abs(budget - priceAmount);
    
    if (budget >= priceAmount) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else if (budget < priceAmount) {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
    
}
fishingBoat(["3600",
"Summer",
"6"])




