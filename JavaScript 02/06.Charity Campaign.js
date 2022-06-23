function charityCampaign(input) {
    let campaignDays = Number(input[0]);
    let pastryCookCount = Number(input[1]);
    let cakeCount = Number(input[2]);
    let waffleCount = Number(input[3]);
    let pancakeCount = Number(input[4]);

    let cakeSum = cakeCount * 45
    let waffleSum = waffleCount * 5.80
    let pancakeSum = pancakeCount * 3.20
    let sumForOneDay = (cakeSum + waffleSum + pancakeSum) * pastryCookCount
    let sumForWholeCampaign = sumForOneDay * campaignDays
    let finalSum = sumForWholeCampaign - (sumForWholeCampaign * 1 / 8)
    console.log(finalSum)



}
charityCampaign(["23", "8", "14", "30", "16"])