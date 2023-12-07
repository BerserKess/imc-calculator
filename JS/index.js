const calculateBtn = document.getElementById("calculate-imc");

function calculateImc(weight, height) {
	const convertedHeight = height / 100;
	const imc = weight / convertedHeight ** 2;
	return imc;
}

function calculateResult() {
	const userWeight = parseFloat(document.getElementById("weight").value);
	const userHeight = parseFloat(document.getElementById("height").value);

	console.log(calculateImc(userWeight, userHeight).toFixed(2));
}

calculateBtn.addEventListener("click", calculateResult);
