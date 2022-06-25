function passwordGuess(input) {
    let guess = String(input[0]);

    if (guess !== "s3cr3t!P@ssw0rd") {
        console.log("Wrong password!");
    } else {
        console.log("Welcome");
    }





}
passwordGuess(["s3cr3t!P@ssw0rd"])