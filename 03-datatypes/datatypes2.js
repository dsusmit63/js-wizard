let value1 = "33";
console.log(typeof value1); //string
let value1String = Number(value1);
console.log(typeof value1String); //number

console.log(Number(10)); //10
console.log(Number("10")); //10
console.log(Number("10as")); //NaN
console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(Number(null)); //0
console.log(Number(undefined)); //NaN

console.log(String(10)); //10
console.log(String(true)); //true
console.log(String(false)); //false
console.log(String(null)); //null
console.log(String(undefined)); //undefined

console.log(Boolean(1)); //true
console.log(Boolean(0)); //false
console.log(Boolean(10)); //true
console.log(Boolean("")); //false
console.log(Boolean("hello")); //true
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
