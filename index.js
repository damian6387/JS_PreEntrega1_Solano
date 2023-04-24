let monto = 0;
let riesgo = 0;
let plazo = 0;
let flag = true;

function calcularInteresPlazo(monto) {
  if (plazo == 1) {
    return monto * 0.02;
  } else if (plazo == 2) {
    return monto * 0.04;
  } else {
    return monto * 0.06;
  }
}

function calcularInteresLetras(monto) {
  if (plazo == 1) {
    return monto * 0.025;
  } else if (plazo == 2) {
    return monto * 0.035;
  } else {
    return monto * 0.065;
  }
}

function calcularInteresBonos(monto) {
  if (plazo == 1) {
    return monto * 0.05;
  } else if (plazo == 2) {
    return monto * 0.07;
  } else {
    return monto * 0.09;
  }
}

function calcularInteresGanado(monto) {
  if (plazo == 1) {
    return monto * 0.06;
  } else if (plazo == 2) {
    return monto * 0.07;
  } else {
    return monto * 0.09;
  }
}

function calcularInteresFondos(monto) {
  if (plazo == 1) {
    return monto * 0.065;
  } else if (plazo == 2) {
    return monto * 0.075;
  } else {
    return monto * 0.095;
  }
}

while (flag) {
  if (monto == 0 || monto == " ") {
    monto = Number(
      prompt(
        "Introduzca el monto en USD a ahorrar:\n\n*Los mecanismos de ahorro son mas variados cuando el monto a ahorrar es mayor o igual a USD5000.\n"
      )
    );
  } else {
    riesgo = Number(
      prompt(
        "Seleccione el numero correspondiente al riesgo: \n\n1- Bajo\n2- Medio\n"
      )
    );
    plazo = Number(
      prompt(
        "Selecciona el numero correspondiente al plazo de retiro *:\n\n1- 182 dias\n2- 1 año\n3- 2 años\n\n*Tiempo maximo que podria transcurrir para poder retirar parcial o totalmente mi inversión.\n"
      )
    );
    if (riesgo == 1) {
      let resultadoFinal = calcularInteresPlazo(monto);
      let resultadoFinal2 = calcularInteresLetras(monto);
      let resultadoFinal3 = calcularInteresGanado(monto);

      resultadoFinal = Math.round(resultadoFinal);
      resultadoFinal2 = Math.round(resultadoFinal2);
      resultadoFinal3 = Math.round(resultadoFinal3);
      if (plazo == 1 && monto < 5000) {
        alert(
          `Te recomendamos depositar tu capital en alguno de los siguientes instrumentos: \n\nPlazo fijo en UI. Interes semestral acumulado: USD${resultadoFinal}\n\nLetras de regulacion monetaria. Interes semestral acumulado: USD${resultadoFinal2}`
        );
      } else if (plazo == 1 && monto >= 5000) {
        alert(
          `Te recomendamos depositar tu capital en alguno de los siguientes instrumentos: \n\nPlazo fijo en UI. Interes semestral acumulado: USD${resultadoFinal}\n\nLetras de regulacion monetaria. Interes semestral acumulado: USD${resultadoFinal2}\n\n Ahorro en ganado. Interes semestral acumulado: USD${resultadoFinal3}`
        );
      } else if (plazo == 2 && monto < 5000) {
        alert(
          `Te recomendamos depositar tu capital en alguno de los siguientes instrumentos: \n\nPlazo fijo en UI. Interes anual acumulado: USD${resultadoFinal}\n\nLetras de regulacion monetaria. Interes anual acumulado: USD${resultadoFinal2}`
        );
      } else if (plazo == 2 && monto >= 5000) {
        alert(
          `Te recomendamos depositar tu capital en alguno de los siguientes instrumentos: \n\nPlazo fijo en UI. Interes anual acumulado: USD${resultadoFinal}\n\nLetras de regulacion monetaria. Interes anual acumulado: USD${resultadoFinal2}\n\nAhorro en ganado. Interes anual acumulado: USD${resultadoFinal3}`
        );
      } else if (plazo == 3 && monto < 5000) {
        alert(
          `Te recomendamos depositar tu capital en alguno de los siguientes instrumentos: \n\nPlazo fijo en UI. Interes bienal acumulado: USD${resultadoFinal}\n\nLetras de regulacion monetaria. Interes bienal acumulado: USD${resultadoFinal2}`
        );
      } else if (plazo == 3 && monto >= 5000) {
        alert(
          `Te recomendamos depositar tu capital en alguno de los siguientes instrumentos: \n\nPlazo fijo en UI. Interes bienal acumulado: USD${resultadoFinal}\n\nLetras de regulacion monetaria. Interes bienal acumulado: USD${resultadoFinal2}\n\n Ahorro en ganado. Interes bienal acumulado: USD${resultadoFinal3}`
        );
      }
    }
    if (riesgo == 2) {
      let resultadoFinal = calcularInteresBonos(monto);
      let resultadoFinal2 = calcularInteresFondos(monto);
      resultadoFinal = Math.round(resultadoFinal);
      resultadoFinal2 = Math.round(resultadoFinal2);

      if (plazo == 1 && monto < 5000) {
        alert(
          `Te recomendamos depositar tu capital en alguno de los siguientes instrumentos: \n\nBonos del Tesoro. Interes semestral acumulado: USD${resultadoFinal}`
        );
      } else if (plazo == 1 && monto >= 5000) {
        alert(
          `Te recomendamos depositar tu capital en alguno de los siguientes instrumentos: \n\nBonos del Tesoro. Interes semestral acumulado: USD${resultadoFinal}\n\nFondos de Inversión. Interes semestral acumulado: USD${resultadoFinal2}`
        );
      } else if (plazo == 2 && monto < 5000) {
        alert(
          `Te recomendamos depositar tu capital en alguno de los siguientes instrumentos: \n\nBonos del Tesoro. Interes anual acumulado: USD${resultadoFinal}`
        );
      } else if (plazo == 2 && monto >= 5000) {
        alert(
          `Te recomendamos depositar tu capital en alguno de los siguientes instrumentos: \n\nBonos del Tesoro. Interes anual acumulado: USD${resultadoFinal}\n\nFondos de Inversión. Interes anual acumulado: USD${resultadoFinal2}`
        );
      } else if (plazo == 3 && monto < 5000) {
        alert(
          `Te recomendamos depositar tu capital en alguno de los siguientes instrumentos: \n\nBonos del Tesoro. Interes bienal acumulado: USD${resultadoFinal}`
        );
      } else if (plazo == 3 && monto >= 5000) {
        alert(
          `Te recomendamos depositar tu capital en alguno de los siguientes instrumentos: \n\nBonos del Tesoro. Interes bienal acumulado: USD${resultadoFinal}\n\nFondos de Inversión. Interes bienal acumulado: USD${resultadoFinal2}`
        );
      }
    }
    flag = false;
  }
}
