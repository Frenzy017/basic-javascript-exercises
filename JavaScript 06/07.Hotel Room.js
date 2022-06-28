function hotelRoom(input) {
    let month = (input[0]);
    let nightsCounter = Number(input[1]);
    let priceAmountStudio = 0
    let priceAmountApartment = 0
    let studio = 0
    let apartment = 0

    //месецът – May, June, July, August, September или October//



    if (month === "May" || month === "October") {
        studio = 50;
        apartment = 65;
        if (nightsCounter >= 7 && nightsCounter < 14) {
            priceAmountStudio = (studio * nightsCounter) * 0.95;
            priceAmountApartment = apartment * nightsCounter

        } else if (nightsCounter > 14 || month !== month) {
            priceAmountStudio = (studio * nightsCounter) * 0.70
            priceAmountApartment = (apartment * nightsCounter) * 0.90
        }
        console.log(`Apartment: ${priceAmountApartment.toFixed(2)} lv.`);
        console.log(`Studio: ${priceAmountStudio.toFixed(2)} lv.`);

    } else if (month === "June" || month === "September") {
        studio = 75.20;
        apartment = 68.70;

        if (nightsCounter > 14 || month !== month) {
        
            priceAmountStudio = (studio * nightsCounter) * 0.80
            priceAmountApartment = (apartment * nightsCounter) * 0.90

        } else {
            priceAmountStudio = studio * nightsCounter
            priceAmountApartment = apartment * nightsCounter
        }
        console.log(`Apartment: ${priceAmountApartment.toFixed(2)} lv.`);
        console.log(`Studio: ${priceAmountStudio.toFixed(2)} lv.`);

    } else if (month === "July" || month === "August") {
        studio = 76;
        apartment = 77;
        if (nightsCounter > 14 || month !== month) {
            
            priceAmountApartment = (apartment * nightsCounter) * 0.90
            priceAmountStudio = studio * nightsCounter
            
        } else {
            priceAmountApartment = apartment * nightsCounter
            priceAmountStudio = studio * nightsCounter
        }
        console.log(`Apartment: ${priceAmountApartment.toFixed(2)} lv.`);
        console.log(`Studio: ${priceAmountStudio.toFixed(2)} lv.`);
        
    }
}
hotelRoom(["May",
"15"])

