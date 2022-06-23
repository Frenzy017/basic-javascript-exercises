function vacation(input) {
    let pagesNumbers = Number(input[0]);
    let pagesReadForOneHour = Number(input[1]);
    let daysNeededReadBook = Number(input[2]);
    let bookRead = pagesNumbers / pagesReadForOneHour;
    let hoursPerDay = bookRead / daysNeededReadBook;
    console.log(hoursPerDay)




}

vacation(["212", "20", "2"])
