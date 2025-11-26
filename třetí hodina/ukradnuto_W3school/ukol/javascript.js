let slovo = prompt("Zadej text");

let pocet = 0;
let a = 0;
for(let znak in slovo){
    pocet++;
    if(znak === 'a' || znak === 'A')
    {
        a++;
    }

}

console.log(`Delka ${pocet} znaků`);
console.log(`Počet a nebo A ${a}`);


let pole_slov = ["monitor","počítač","myš"];

for(let slova of pole_slov){
    console.log(`Délka ${slova} = ${slova.length}`);
}

pole_slov.map((delka) => console.log(`DElka ${delka} = ${delka.length}`));
var pole2 = pole_slov.map((delka) => delka.length);
console.log(pole2)