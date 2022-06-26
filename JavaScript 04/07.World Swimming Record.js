function worldSwimmingRecord(input) {
    let recordInS = Number(input[0]);
    let distanceInM = Number(input[1]);
    let timeSecForOneM = Number(input[2]);


    let timeForTravel = distanceInM * timeSecForOneM
    let increasedTime = Math.floor(distanceInM / 15) * 12.5
    let finalTime = timeForTravel + increasedTime


    if (finalTime < recordInS) {
        console.log(`Yes, he succeeded! The new world record is ${finalTime.toFixed(2)} seconds.`);
    } else if (finalTime >= recordInS) {
        let timeNeeded = finalTime - recordInS
        console.log(`No, he failed! He was ${timeNeeded.toFixed(2)} seconds slower.`);
    }
}












worldSwimmingRecord(["10464",
    "1500",
    "20"])
