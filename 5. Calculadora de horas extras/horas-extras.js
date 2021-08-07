const RECARGO = {
  extraDiurno: 1.25,
  extraNocturno: 1.75,
  extraDiurnoDominical: 2,
  extraNocturnoDominical: 2.5,
};

const calcularHorasExtras = () => {
  // DOM : llamar campos del html
  const inputSalario = document.getElementById("input-salario");
  const inputDiurna = document.getElementById("input-diurna");
  const inputNocturna = document.getElementById("input-nocturna");
  const inputDiurnaDominical = document.getElementById(
    "input-diurna-dominical"
  );
  const inputNocturnaDominical = document.getElementById(
    "input-nocturna-dominical"
  );
  // Valores
  const valueSalario = inputSalario.value;
  const valueDiurna = inputDiurna.value;
  const valueNocturna = inputNocturna.value;
  const valueDiurnaDominical = inputDiurnaDominical.value;
  const valueNocturnaDominical = inputNocturnaDominical.value;

  // Constantes
  const diasMes = 30;
  const horasDiariasLaborales = 8;
  const valorDiaLaborado = valueSalario / diasMes / horasDiariasLaborales;
  const valorTotalHorasExtras = [];

  // Calcular horas extras
  const ValorHoraExtraDiurna =
    valorDiaLaborado * (RECARGO.extraDiurno * parseInt(valueDiurna));
  const ValorHoraExtraNocturna =
    valorDiaLaborado * (RECARGO.extraNocturno * parseInt(valueNocturna));
  const ValorHoraExtraDiurnaDominical =
    valorDiaLaborado *
    (RECARGO.extraDiurnoDominical * parseInt(valueDiurnaDominical));
  const ValorHoraExtraNocturnaDominical =
    valorDiaLaborado *
    (RECARGO.extraNocturnoDominical * parseInt(valueNocturnaDominical));

  // Almacenar todos los valores horas extra
  valorTotalHorasExtras.push(ValorHoraExtraDiurna);
  valorTotalHorasExtras.push(ValorHoraExtraNocturna);
  valorTotalHorasExtras.push(ValorHoraExtraDiurnaDominical);
  valorTotalHorasExtras.push(ValorHoraExtraNocturnaDominical);

  return sumarValorHorasExtras(valorTotalHorasExtras);
};

// Sumatoria Total
const sumarValorHorasExtras = (valorTotalHorasExtras) => {
   // DOM : llamar campos del html
  const inputRespuesta = document.getElementById("respuesta");
  const total = valorTotalHorasExtras.reduce((a, b) => a + b); 
  return inputRespuesta.innerHTML = `Total Horas Extras a pagar: ${total.toFixed(2)}`
};
