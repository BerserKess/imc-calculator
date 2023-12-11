const calculateBtn = document.getElementById("calculate-imc");
const resultDiv = document.getElementById("result");

//  FUNÇÃO PARA RESETAR OS INPUTS
function resetInputValues() {
	document.getElementById("weight").value = "";
	document.getElementById("height").value = "";
}

//  FUNÇÃO PARA RESETAR O CONTEUDO DO RESULTADO
function resetResultDiv() {
	resultDiv.innerHTML = "";
}

//  FUNÇÃO PARA MOSTRAR ALERTAS QUANDO O USUÁRIO DIGITAR VALOR INCORRETO
function showAlert(message) {
	alert(message);
	resetInputValues();
	resetResultDiv();
}

//  CALCULA O IMC DO USUÁRIO
function calculateImc(weight, height) {
	const convertedHeight = height / 100;
	const imc = weight / convertedHeight ** 2;
	return imc;
}
//  CRIA CAMPO PARA APRESENTAÇÃO DOS DADOS
function createTextDiv(imc, userState) {
	resetResultDiv();

	const resultText = document.createElement("article");
	resultText.innerText = `Seu IMC é ${imc}`;
	const resultParagraph = document.createElement("p");
	resultParagraph.innerText = `Estado: ${userState}`;
	resultDiv.append(resultText, resultParagraph);
}

// CALCULA E MOSTRA NA TELA O RESULTADO

function calculateResult() {
	const userWeight = parseFloat(document.getElementById("weight").value);
	const userHeight = parseFloat(document.getElementById("height").value);
	const imcResult = calculateImc(userWeight, userHeight);

	if (
		isNaN(userWeight) ||
		isNaN(userHeight) ||
		userHeight == 0 ||
		userWeight == 0
	) {
		showAlert("Valores incorretos! Digite novamente");
	} else {
		if (imcResult <= 18.5) {
			createTextDiv(imcResult.toFixed(2), "Abaixo do Normal");
		} else if (imcResult <= 24.9) {
			createTextDiv(imcResult.toFixed(2), "Normal");
		} else if (imcResult <= 29.9) {
			createTextDiv(imcResult.toFixed(2), "Sobrepeso");
		} else if (imcResult <= 39.9) {
			createTextDiv(imcResult.toFixed(2), "Obesidade I");
		} else {
			createTextDiv(imcResult.toFixed(2), "Obesidade Grave");
		}
	}
	resetInputValues();
}

calculateBtn.addEventListener("click", (ev) => {
	ev.preventDefault();
	calculateResult();
});
