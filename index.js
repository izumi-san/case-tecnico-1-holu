/*
Teste técnico

Criar um programa que receba a potencia total (kW)
Retorne:
 - A quantidade de placas e inversores (1 inversor para cada 4 placas);
 - Potencia do painel utilizado (Watts);
 - Comprimento da estrutura (metros);
 - Área Útil (metros quadrados);

*/

function getRequiredPanels(totalPower, panel) {
  let auxTotalPower = totalPower;
	//em caso de mais de um tipo de painel diferente podemos usar uma estrutura de array
	let i = 0;

  while (auxTotalPower > 0) {
    auxTotalPower = auxTotalPower - panel.powerInWatt;
		i++
  }

  return i;
}

function getInvertersQty(requiredPanelsNum) {
  return Math.ceil(requiredPanelsNum / 4);
}

function isNumber(value) {
  return !isNaN(value);
}

function getTotalLength(requiredPanelsNum, selectedPanel) {
	const totalLength = requiredPanelsNum * selectedPanel.length;
	return parseFloat(totalLength.toFixed(2));
}

function getTotalArea(totalLength, requiredPanelsNum, selectedPanel) {
	const totalWidth = parseFloat((requiredPanelsNum * selectedPanel.length).toFixed(2));;
	const totalArea = totalLength * totalWidth;

	return parseFloat(totalArea.toFixed(2));
}

function getSolarPanelInfos(totalPowerInKiloWatts, selectedPanel) {
  if (isNaN(totalPowerInKiloWatts) || totalPowerInKiloWatts < 0) {
    console.log(
      "Valor de potência máxima inválida, por favor insira um valor numérico maior que zero."
    );
    return;
  }

	const totalPowerInWatts = totalPowerInKiloWatts * 1000;

  const requiredPanelsQty = getRequiredPanels(totalPowerInWatts, selectedPanel);
  const invertersQty = getInvertersQty(requiredPanelsQty, selectedPanel);
  const totalLength = getTotalLength(requiredPanelsQty, selectedPanel);
  const totalArea = getTotalArea(totalLength, requiredPanelsQty, selectedPanel);

	const solarPanelInfos = {
		requiredPanelsQty,
		invertersQty,
		totalLength,
		totalArea
	}

	const message = `Segundo os dados fornecidos para a potência total ${totalPowerInKiloWatts} em kW e usando painéis de ${selectedPanel.powerInWatt}w 
	com as medidas ${selectedPanel.length}X${selectedPanel.width}. Serão necessários um total de ${requiredPanelsQty} panéis solares, ${invertersQty} inversores, 
	um comprimeto de estrutura de ${totalLength}m e uma área útil de ${totalArea}m².`

	console.log(message);

	return solarPanelInfos;
}

const selectedPanel = {
  powerInWatt: 550,
  length: 1.95,
  width: 1.1,
};

getSolarPanelInfos(4.5,selectedPanel);