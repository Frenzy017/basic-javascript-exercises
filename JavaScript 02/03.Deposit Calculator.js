function calculatorDeposits(input) {
	let sumDeposited = Number(input[0]);
	let termDepositForOneMonth = Number(input[1]);
	let annualInterestRate = Number(input[2]);
	let accruedInterest = sumDeposited * (annualInterestRate / 100);
	let forOneYear = accruedInterest / 12;
	let sum = sumDeposited + termDepositForOneMonth * forOneYear;
	console.log(sum);
}
calculatorDeposits([ '200', '3', '5.7' ]);
