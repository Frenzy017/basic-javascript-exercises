function Cinema(input) {
    let projectionType = (input[0]);
    let row = Number(input[1]);
    let column = Number(input[2]);
    let finalSum = 0

    // let Premiere = 12.00
    //   let Normal = 7.50
    //  let Discount = 5.00

    switch (projectionType) {
        case "Premiere":
            finalSum = (row * column) * 12.00; break;

        case "Normal":
            finalSum = (row * column) * 7.50; break;

        case "Discount":
            finalSum = (row * column) * 5.00; break;





    }
    console.log(`${finalSum.toFixed(2)} leva`);

}


Cinema(["Discount",
"12",
"30"])



