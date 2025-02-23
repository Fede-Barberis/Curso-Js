// TIPOS DE DATOS PRIMITIVOS

// Cadena de texto (String)
let myName = "Fede Andres ";
let apellido = 'Barberis';

// Numeros
let age = 19; // Entero
let height = 1.84; // Decimal

// Booleanos (boolean t/f)
let isStudent = true;
let isTeacher = false;

// Undefined (variable no definida)
let undefinedValue
console.log(undefinedValue);

// Null (representa intencionalmente una ausencia de valor en dicha variable)
let nullValue = null;

// Symbol (valores unicos, utilizados como identificadores de propiedades)
let mySymbol = Symbol("mysymbol");

//  BigInt (numeros enteros extremadamente grandes)
let myBigInt = BigInt(8373873873837283738793837923923823983732973442343434);
let myBigInt2 = 8373873873837283738793837923923823983732973442343434n; // misma forma de representar un bigInt


// Mostramos los tipos de datos de las variables
console.log(typeof myName);
console.log(typeof apellido);

console.log(typeof age);
console.log(typeof height);

console.log(typeof isStudent);
console.log(typeof isTeacher);

console.log(typeof undefinedValue);

console.log(typeof nullValue);

console.log(typeof mySymbol);

console.log(typeof myBigInt);


