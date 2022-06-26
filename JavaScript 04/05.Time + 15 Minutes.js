function bonusTime (input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let totalTimeInMinutes = hours * 60 + minutes
    totalTimeInMinutes = totalTimeInMinutes + 15

    let h = Math.floor(totalTimeInMinutes / 60);
    let m = totalTimeInMinutes % 60

    if (h > 23) {
        h = 0
    }

    if (m < 10) {
        console.log(`${h}:0${m}`);
    } else {
        console.log(`${h}:${m}`);
    }
        
    
}
bonusTime (["1", "46"])
    
