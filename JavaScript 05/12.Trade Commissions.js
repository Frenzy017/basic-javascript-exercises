function tradeCommissions(input) {
    let city = String(input[0]);
    let sellings = Number(input[1]);
    let commission = 0

    switch (city) {
        case "Sofia":
            if (sellings <= 500) {
                commission = sellings * 0.05;
            } else if (sellings <= 1000 && sellings > -1) {
                commission = sellings * 0.07;
            } else if (sellings <= 10000 && sellings > -1) {
                commission = sellings * 0.08;
            } else if (sellings > 10000 && sellings > -1) {
                commission = sellings * 0.12;
            } else {
                console.log("error");break;
            } console.log(commission.toFixed(2));break;

        case "Varna":
            if (sellings <= 500) {
                commission = sellings * 0.045;
            } else if (sellings <= 1000 && sellings > -1) {
                commission = sellings * 0.075;
            } else if (sellings <= 10000 && sellings > -1) {
                commission = sellings * 0.10;
            } else if (sellings > 10000 && sellings > -1) {
                commission = sellings * 0.13;
            } else {
                console.log("error");break;
            } console.log(commission.toFixed(2));break; 


        case "Plovdiv":

            if (sellings <= 500 && sellings > -1) {
                commission = sellings * 0.055;
            } else if (sellings <= 1000 && sellings > -1) {
                commission = sellings * 0.08;
            } else if (sellings <= 10000 && sellings > -1) {
                commission = sellings * 0.12;
            } else if (sellings > 10000 && sellings > -1) {
                commission = sellings * 0.145;
            } else {
                console.log("error"); break;
            } console.log(commission.toFixed(2));break; 

        default: console.log("error");







    }
}
tradeCommissions(["Plovdiv",
"-50"])








