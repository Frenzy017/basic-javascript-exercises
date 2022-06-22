function indispensableFunds(input) {
    let squareMeterGardening = Number(input[0]);
    //onesquareMeter = 7.61;
    let wholeGarden = squareMeterGardening * 7.61;
    let discountPrice = wholeGarden * 0.18;
    let finalPrice = wholeGarden - discountPrice;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is ${discountPrice} lv.`);
}
indispensableFunds(["550"])