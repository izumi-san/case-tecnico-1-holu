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
  const requiredPanels = [];

  while (auxTotalPower > 0) {
    auxTotalPower = auxTotalPower - panel;
    requiredPanels.push(availablePanelsArray[0]);
  }

  return requiredPanels;
}

function getInvertersQty(requiredPanels) {
  return Math.ceil(requiredPanels.length / 4);
}

function isNumber(value) {
  return !isNaN(value);
}

function getSolarPanelInfos(totalPower, selectedPanel) {
  if (isNaN(totalPower) || totalPower < 0) {
    console.log(
      "Valor de potência máxima inválida, por favor insira um valor numérico maior quem zero."
    );
    return;
  }

  const requiredPanels = getRequiredPanels(totalPower, selectedPanel);
  const invertersQty = getInvertersQty(requiredPanels);
  const totalLength = getTotalLength();
  const totalArea = getTotalArea();
}

const selectedPanel = {
  powerInWatt: 550,
  length: 1.95,
  with: 1.1,
};
