function sumSeconds (input) {
    let personA = Number(input[0]);
    let personB = Number(input[1]);
    let personC = Number(input[2]);

    let totalTime = personA + personB + personC

    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60 

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
    

} 
sumSeconds (["14", "12",
"10"])


