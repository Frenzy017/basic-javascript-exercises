function skiTrip(input) {
    let days = Number(input[0]);
    let roomType = String(input[1]);
    let feedback = String(input[2]);
    let daysCount = days - 1
    let stayPrice = 0


    switch (roomType) {
        case "room for one person":
            stayPrice = daysCount * 18.00
            break;

        case "apartment":
            if (daysCount < 10) {
                stayPrice = daysCount * 25.00;
                stayPrice = stayPrice * 0.70;

            } else if (daysCount >= 10 && daysCount <= 15) {
                stayPrice = daysCount * 25.00;
                stayPrice = stayPrice * 0.65;

            } else if (daysCount > 15) {
                stayPrice = daysCount * 25.00;
                stayPrice = stayPrice * 0.50;
            } 
            break;

        case "president apartment":
            if (daysCount < 10) {
                stayPrice = daysCount * 35.00;
                stayPrice = stayPrice * 0.90;

            } else if (daysCount >= 10 && daysCount <= 15) {
                stayPrice = daysCount * 35.00;
                stayPrice = stayPrice * 0.85;

            } else if (daysCount > 15) {
                stayPrice = daysCount * 35.00;
                stayPrice = stayPrice * 0.80
            }
            break;
    }
    if (feedback === "positive") {
        stayPrice = stayPrice + (stayPrice * 0.25)
        console.log(stayPrice.toFixed(2));
        
    } else if (feedback === "negative") {
        stayPrice = stayPrice - (stayPrice * 0.10)
        console.log(stayPrice.toFixed(2));

    }
}




skiTrip(["30",
"president apartment",
"negative"])


