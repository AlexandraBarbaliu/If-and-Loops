// Scrie un program care afișează numerele de la 1 la 10 folosind o buclă do-while.
let numar = 1;
do {
    console.log(numar);
    numar++;
} while (numar < 11)

//-----------------------------------------------------------------------------------------

// Scrie un program care afișează toate numerele pare între 0 și 20 folosind o buclă for.

for (let j = 1; j <= 20; j++) {
    // Check if 'j' is odd and display it
    if (j % 2 == 0) {
        console.log(j);
    }
}
//---------------------------------------------------------------------------------------

// Scrie un program care citește două numere de la tastatură și afișează toate numerele între aceste două numere folosind o buclă for.

const num1 = 12;
const num2 = 20;

if (num1 <= num2) {
    // Loop from 'num1' to 'num2' and display each number
    for (let i = num1; i <= num2; i++) {
        console.log(i);
    }
} else {
    // Loop from 'num2' to 'num1' and display each number
    for (let i = num2; i <= num1; i++) {
        console.log(i);
    }
}
//------------------------------------------------------------------------------------------

// Scrie un program care citește un șir de caractere de la tastatură și afișează numărul de vocale folosind o buclă for și condiția pentru a determina dacă un caracter este o vocală.

const inputString = 'programJavascript';
let vowelCount = 0;


for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    // Check if 'char' is a vowel and increment 'vowelCount'
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        vowelCount++;
    }
}

console.log(`Number of vowels in the string: ${vowelCount}`);

//-------------------------------------------------------------------------------------------

// Scrie un program care citește un număr de la tastatură și afișează tabla înmulțirii pentru acel număr folosind o buclă for.

const number = 6;

// Loop from 1 to 10 and display the multiplication results
for (let i = 1; i <= 10; i++) {
  const result = number * i;
  console.log(`${number} x ${i} = ${result}`);
}