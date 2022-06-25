function toyShop(input) {
    let holidayPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let teddybearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let priceForToys = puzzleCount * 2.60 + dollsCount * 3 + teddybearsCount * 4.10 + minionsCount * 8.20 + trucksCount * 2;
    let toysCounter = puzzleCount + dollsCount + teddybearsCount + minionsCount + trucksCount

    if (toysCounter > 50) {
       let priceForToys = priceForToys * 0.75;


    let sumAfterRent = sum * 0.90;
    }

    if (sumAfterRent >= holidayPrice) {
        console.log(`Yes! ${(sumAfterRent - holidayPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(holidayPrice - sumAfterRent).toFixed(2)} lv needed.`);
    }
}   
toyShop(["40.8", "20", "25", "30", "50", "10"]) 

    
