// función para calcular la cantidad optima que debe comprarse de articulos
function CantidadOptimaArticulos(D, Cmi, Cp, Cu, Cf) {
  const result = Math.sqrt((Cmi * Cp * D * (Cf + Cmi)) / (Cf * Cmi));
  console.log("Cantidad optima que debe comprarse:", result);
  return;
}

// Cantidad de unidades agotadas
function CantidadUnidadesDeficit(D, Cmi, Cp, Cu, Cf) {
  const result = Math.sqrt((Cmi * Cp * D * Cmi) / (Cf * (Cf + Cmi)));
  console.log("Numero de optimo de unidades agotadas:", result);
  return;
}

// Presentación del programa
console.log("".padStart(60, "-"));
console.log("Programa que calcula los lotes economicos con deficit".padStart(4,'-'));
console.log("".padStart(60, "-"));

// declaración de variables con sus valores
const D = 12000; // D(Artículos) = 1000 unidades/mes = 12.000 unidades/año
const Cmi = 2; // Cmi(Costo tenencia) = 2 $/unidad
const Cp = 600; // Cp(costo compra) = 600 $/unidad
const Cu = 1.5; // Cu(Costo unitario) = $1,50
const Cf = 10; // (Costo déficit) = 10 $/unidad

// llamamos a las funciones y le pasamos como parametro el valor de las variables
CantidadOptimaArticulos(D, Cmi, Cp, Cu, Cf);
CantidadUnidadesDeficit(D, Cmi, Cp, Cu, Cf);
