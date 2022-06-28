function Journey(input) {
    let budget = Number(input[0]);
    let season = (input[1]);
    let priceAmount = 0
    let destination = ""
    let holidayType = ""

    if (budget <= 100) {
        destination = "Bulgaria";
        switch (season) {
            case "summer":
                priceAmount = budget * 0.70;
                holidayType = "Camp";
                ; break;
            case "winter":
                priceAmount = budget * 0.30;
                holidayType = "Hotel";
                ; break;
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        switch (season) {
            case "summer":
                priceAmount = budget * 0.60;
                holidayType = "Camp";
                ; break;
            case "winter":
                priceAmount = budget * 0.20;
                holidayType = "Hotel";
                ; break;
        }
    } else if (budget > 1000) {
        destination = "Europe";
        switch (season) {
            case "summer":
            case "winter":
                priceAmount = budget * 0.10;
                holidayType = "Hotel";
                ; break;
        }
    }
    let diff = Math.abs(budget - priceAmount)
    
    console.log(`Somewhere in ${destination}`);
    console.log(`${holidayType} - ${diff.toFixed(2)}`);
}
Journey(["1500", "summer"])