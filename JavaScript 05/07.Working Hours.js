function workingHours(input) {
    let hour = Number(input[0]);
    let weekDay = (input[1]);

    if (hour >= 10 && hour <= 18) {
        if (weekDay === "Monday") {
            console.log("open");
        } else if (weekDay === "Tuesday") {
            console.log("open");
        } else if (weekDay === "Wednesday") {
            console.log("open");
        } else if (weekDay === "Thursday") {
            console.log("open");
        } else if (weekDay === "Friday") {
            console.log("open");
        } else if (weekDay === "Saturday") {
            console.log("open");
}         else if (weekDay === "Sunday") {
            console.log("closed");
        } 
    } else {
        console.log("closed");
    }
}
        


    

workingHours
(["12",
"Friday"])




