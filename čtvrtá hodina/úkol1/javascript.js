
let soucin = 1;
let cislo;
do{

    cislo = Number(prompt("Zadej číslo"));

    if( cislo != 0)
    {
        soucin *= cislo;
    }

}while (cislo != 0)

console.log(`Součin čísel ${soucin}`);