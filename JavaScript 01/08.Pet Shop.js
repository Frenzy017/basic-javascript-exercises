function foodCosts (input) {
    let dogCount = Number(input[0]);
    let theRestOfAnimals = Number(input[1]);
    let foodPriceDogs = dogCount * 2.50;
    let foodPriceAnimals = theRestOfAnimals * 4;
    let sum = foodPriceAnimals + foodPriceDogs;
    console.log(sum)
    
  
    

  


}
foodCosts(["13", "9"])

