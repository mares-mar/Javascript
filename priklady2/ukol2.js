/*****************************************************************/
// Uloha: Spočítej součet dvou čísel zadaných uživatelem
// Požádej uživatele o dvě čísla pomocí `prompt()` a vypiš jejich součet do konzole.
 
let cislo = Number(prompt("Zadej cislo 1"));

let cislo2 = Number(prompt("Zadej cislo 2"));

let Vysledek = cislo + cislo2;

console.log(`Vysledek ${cislo} + ${cislo2} = ${Vysledek}`);

console.log(typeof cislo);
 
/*****************************************************************/
// Uloha: Zjisti, zda je číslo sudé nebo liché
/* 
    Požádej uživatele o číslo a zjisti, zda je sudé nebo liché.
    Výsledek zapiš do konzole.
*/
 
let cislo_s_l = Number(prompt("Zadej cislo pro sudé liché"));

if(cislo_s_l === 0)
    console.log("Cislo je Nula");
else if (cislo_s_l % 2 == 0)
    console.log("Cislo je sudé");
else
    console.log("Cislo je liché");

 
 
/*****************************************************************/
// Uloha: Převod stupňů Celsia na Fahrenheity
/*
    Požádej uživatele o teplotu ve stupních Celsia a převeď ji na Fahrenheity.
    Vzorec: `F = C * 9/5 + 32`
*/
 
let cislo_celsia = Number(prompt("Zadej teplotu v celsiích"));

let F = cislo_celsia * 9/5 +32;

console.log(`Stupnu celsia ${cislo_celsia}°C ve Farenheitech ${F}°F`);
 
 
/*****************************************************************/
// Úloha: Zjisti, zda je číslo kladné, záporné nebo nula
/*
    Požádej uživatele o číslo. Do konzole vypiš zda:
    - číslo je kladné, záporné či je nula
*/
 
let cislo_k_z_n = Number(prompt("Zadej číslo pro kladné záporné a nula"));

if(cislo_k_z_n === 0)
    console.log(` Cislo ${cislo_k_z_n} je nula`);
else if(cislo_k_z_n > 0)
    console.log(` Cislo ${cislo_k_z_n} je kladné`);
else if(cislo_k_z_n < 0)
    console.log(` Cislo ${cislo_k_z_n} je záporné`);
 
 
/*****************************************************************/
// Úloha: Zjisti, zda zadané slovo obsahuje písmeno „a“
/**
* Požádej uživatele o slovo. Pomocí .include() zjisti,
* zda slovo obsahuje písmeno "a". Vypiš do konzole
*/
 
let slovo = prompt("Zadej slovo");

if (slovo.includes("a"))
    console.log(`Slovo ${slovo} obsahuje a`);
else
    console.log(`Slovo ${slovo} neobsahuje a`);
 
 
/*****************************************************************/
// Uloha: Analyzátor textu
/**
* Požádej uživatele o slovo. Zjisti kolik kterých písmen obsahuje.
* Použij .include() nad zadaným slovem. Vypiš do konzole.
*/
 

let slovo_i = prompt("Zadej slovo");

let zacatek = "a";



/*****************************************************************/
// 6️⃣ Zjisti, zda zadané číslo je prvočíslo
/**
* Požádej uživatele o číslo. Pomocí ternárního operátoru zjisti,
* zda je číslo prvočíslo či nikoliv.
*/
 
let prvocislo = Number(prompt("Zadej cislo pro provocislo"));


 
 
/*****************************************************************/
// Příklady na práci se **scope (zastínění proměnné)**
 
let x = 10; // globální scope
 
function prikladScope() {
    let x = 5; // lokální scope – zastínění globální x
    console.log("Lokální x: " + x); // 5
}
 
prikladScope();
console.log("Globální x: " + x); // 10
 
/*****************************************************************/
// Příklad **redeclaration proměnné**
 
var a = 5;
var a = 10; // var umožňuje redeklaraci
console.log(a); // 10
 
// let b = 5;
// let b = 10; // chybové, let neumožňuje redeklaraci
 
/*****************************************************************/
// # 🔹 Rozdíl mezi `==` a `===`
console.log(5 == "5");  // true -> porovnává hodnotu, typ ignoruje
console.log(5 === "5"); // false -> porovnává hodnotu i typ