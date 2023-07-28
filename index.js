/*
Teste técnico

Criar um programa que receba a potencia total (kW)
Retorne:
 - A quantidade de placas e inversores (1 inversor para cada 4 placas);
 - Potencia do painel utilizado (Watts);
 - Comprimento da estrutura (metros);
 - Área Útil (metros quadrados);

*/
 
function getRequiredPanels(totalPower, availablePanelsArray) {
  let auxTotalPower = totalPower;
	const requiredPanels = []
	while(auxTotalPower > 0) {
		//Aqui vai ser a validação para escolher o painel mais adequado
		auxTotalPower = auxTotalPower - availablePanelsArray[0].powerInWatt;
		requiredPanels.push(availablePanelsArray[0]);
	}
	return requiredPanels;
}

function getSolarPanelInfo(totalPower) {
  // Verificar se precisamos de mais de um tipo de painel
	const availablePanelsArray = [
		{
			powerInWatt: 550,
			length: 1.95,
			with: 1.1
		}
	];

  const requiredPanels = getRequiredPanels(totalPower, availablePanelsArray);
	const invertersQty = getInvertersQty();
	const totalLength = getTotalLength();
	const totalArea = getTotalArea();
}

console.log(Math.ceil([
  { powerInWatt: 550, length: 1.95, with: 1.1 },
  { powerInWatt: 550, length: 1.95, with: 1.1 },
  { powerInWatt: 550, length: 1.95, with: 1.1 },
  { powerInWatt: 550, length: 1.95, with: 1.1 },
  { powerInWatt: 550, length: 1.95, with: 1.1 },
  { powerInWatt: 550, length: 1.95, with: 1.1 },
  { powerInWatt: 550, length: 1.95, with: 1.1 },
  { powerInWatt: 550, length: 1.95, with: 1.1 },
  { powerInWatt: 550, length: 1.95, with: 1.1 }
].length/4));