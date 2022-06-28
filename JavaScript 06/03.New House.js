function newHouse(input) {
    let flowersType = (input[0]);
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);
    let priceAmount = 0;

    switch (flowersType) {
        case "Roses":
            if (flowersCount > 80) {
                priceAmount = (flowersCount * 5) * 0.90;
            } else {
                priceAmount = flowersCount * 5;
            }; break;


        case "Dahlias":
            if (flowersCount > 90) {
                priceAmount = (flowersCount * 3.80) * 0.85;
            } else {
                priceAmount = flowersCount * 3.80;
            }; break;


        case "Tulips":
            if (flowersCount > 80) {
                priceAmount = (flowersCount * 2.80) * 0.85;
            } else {
                priceAmount = flowersCount * 2.80;
            }; break;


        case "Narcissus":
            if (flowersCount < 120) {
                priceAmount = (flowersCount * 3) * 1.15;
            } else {
                priceAmount = flowersCount * 3;
            }; break;


        case "Gladiolus":
            if (flowersCount < 80) {
                priceAmount = (flowersCount * 2.50) * 1.20;
            } else {
                priceAmount = flowersCount * 2.50;
            }; break;
}
    let diff = Math.abs(budget - priceAmount)

    if (budget >= priceAmount) {
        console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${diff.toFixed(2)} leva left.`);
    } else if (budget < priceAmount) {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
    }





}
newHouse(["Roses",
"55",
"250"])

