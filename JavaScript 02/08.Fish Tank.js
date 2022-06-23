function fishTank(input) {
	let lengthCM = Number(input[0]);
	let widthCM = Number(input[1]);
	let height = Number(input[2]);
	let percent = Number(input[3]);

	let volumeOfTheAquarium = lengthCM * widthCM * height;
	let volumesContained = volumeOfTheAquarium * 0.001;
	let percentVolume = percent * 0.01;

	let litersContained = volumeOfTheAquarium * (1 - percentVolume);
	let finalLeters = litersContained / 1000;
	console.log(finalLeters);
}
fishTank([ '85', '75', '47', '17' ]);
