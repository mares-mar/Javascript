/* ============================================
   🔵 ÚKOLY 31–40: Funkce, události a práce s DOM
   ============================================ */

/* 31) Po kliknutí na tlačítko zobraz alert „Ahoj světe!“.
      - Vytvoř funkci, která zobrazí alert.
      - Použij událost onclick nebo addEventListener.
*/



function Pozdrav(){
      alert("Ahoj světe");
}

document.getElementById("btn31").addEventListener("click",Pozdrav)

/* 32) Po kliknutí na tlačítko změň text vybraného HTML elementu.
      - Napiš funkci, která změní .textContent nebo .innerText.
      - Vyzkoušej použití arrow funkce.
*/



/*function Funkce(){

      document.getElementById("text32").innerText = "Zmena textu";
}*/

document.getElementById("btn32").addEventListener("click", () => document.getElementById("text32").innerText = "Zmena textu")

/* 33) Vypiš do <div> aktuální čas, který se bude každou sekundu aktualizovat.
      - Použij setInterval a vlastní funkci pro získání času.
      - Funkce by měla vracet formátovaný čas (HH:MM:SS).
*/

function Cas()
{ 
      setInterval(() => {
            let now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let seconds = now.getSeconds();
            
            document.getElementById("clock33").innerHTML= `${hours}:${minutes}:${seconds}`;
      })
}

Cas();

/* 34) Po kliknutí na tlačítko změň barvu pozadí celé stránky.
      - Vytvoř funkci s parametrem (barva).
      - Vyzkoušej nastavit hodnotu přes document.body.style.
*/

let barva = "yellow";
document.getElementById("btn34").addEventListener("click",() => document.body.style.backgroundColor = barva );

/* 35) Po najetí myší na obrázek ho zvětši.
      - Použij eventy mouseover a mouseout.
      - Změnu proveď pomocí třídy v CSS nebo style.width v JS.
*/

const img = document.getElementById("img35");

img.addEventListener("mouseover", () => img.classList.add("zvetseni"));

img.addEventListener("mouseout", function() {img.classList.remove("zvetseni")});

/* img.addEventListener("mouseover". function(){img.style.width = "400px"}) */

/* 36) Po odeslání formuláře vypiš hodnoty inputů do konzole.
      - Zakázat přirozené odeslání formuláře pomocí event.preventDefault().
      - Použij funkci, která načte hodnoty inputů.
*/

 

document.getElementById("form36").addEventListener("submit", (event) => {event.preventDefault();vypisHodnot();});

function vypisHodnot() {
    jmeno = document.getElementById("name36");
    email = document.getElementById("email36");
    
    console.log(`Jmeno: ${jmeno.value} \nEmail: ${email.value}`);
}
/* 37) Vytvoř jednoduché „počítadlo kliknutí“.
      - Po každém kliknutí zvýší číslo o 1 a zobraz ho v HTML.
      - Proměnná se musí nacházet ve správném scope.
*/

let pocet_klinuti = 0;

document.getElementById("btn37").addEventListener("click", function(){pocet_klinuti++; 
      document.getElementById("counter37").textContent = pocet_klinuti;
})

/* 38) Po kliknutí na tlačítko skryj nebo zobraz text.
      - Můžeš použít classList.toggle().
      - Zvaž použití anonymní nebo arrow funkce.
*/



function zmena_textu()
{
      const text = document.getElementById("text38");
      

      if(text.style.display == "block")
      {
            text.style.display = "none";
      }
      else text.style.display = "block";
}
      
document.getElementById("btn38").addEventListener("click", zmena_textu);

/* 39) Validuj formulář – zkontroluj, jestli je vyplněné jméno a e-mail.
      - Pokud není validní, zobraz chybovou hlášku.
      - Použij jednoduchou podmínku a funkci validateForm().
*/

document.getElementById("form39").addEventListener("submit",(event) => {event.preventDefault();
      validateForm()})


function validateForm(){

      
      jmeno = document.getElementById("name39");
      email = document.getElementById("email39");

      if(jmeno.value == "" || jmeno.value.length < 3 )
      {
            alert("Jméno není správné");
      }
      else if (!(email.value.includes("@") & email.value.includes(".")))
      {
            alert("Email není správný");
      }
}
/* 40) Pomocí slideru (input type="range") měň velikost písma textu.
      - Po změně hodnoty aktualizuj style.fontSize.
      - Hodnota ze slideru bude vstupním parametrem funkce.
*/


let hodnota = document.getElementById("slider40").value;






/* =====================================================
   Práce s formuláři a uživatelskými daty – obecné úkoly
   ===================================================== */

/* - Nauč se načíst hodnoty z inputů pomocí .value.
   - Vytvoř funkci, která validuje hodnoty podle podmínek.
   - Dynamicky aktualizuj HTML podle vstupních dat
     (např. okamžitý výpočet ceny, filtrování seznamu apod.).
*/


/* ================================================
   🟣 ÚKOLY 41–50: Pokročilejší logika a práce s daty
   ================================================ */

/* 41) Generuj náhodné heslo z písmen, číslic a symbolů.
      - Funkce přijme délku jako parametr.
      - Použij Math.random a vlastní pole znaků.
*/



function Generator(n){
      const chars = "abcdefghijklmnopqrstuvwxyz123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let password = "";

      for(let i = 0; i < n; i++){
            const index = Math.floor(Math.random()*chars.length);
            password += chars[index];
      }
      return password;
}


/* 42) Spočítej faktoriál zadaného čísla.
      - Vytvoř klasickou funkci nebo arrow funkci.
      - Vyzkoušej rekurzi nebo cyklus.
*/

/* 43) Zjisti, zda je text palindrom („kajak“, „oko“).
      - Vytvoř funkci, která vrací true/false.
      - Odstraň mezery a porovnej text pozpátku.
*/

/* 44) Vytvoř jednoduché stopky – Start / Stop / Reset.
      - Použij setInterval a clearInterval.
      - Funkce musí správně pracovat s proměnnými ve scope.
*/

let interval = null;
let time = 0;

function startTimer(){
      if(interval)return;
      interval = setInterval(() =>{
            time++;
            document.getElementById("stopky44").textContent = time;
      },1000);
}


function stopTimer(){
      clearInterval(interval);
      interval = null;
}


function resetTimer(){
      time = 0;
      document.getElementById("stopky44").textContent = time;
}

/* 45) Simuluj hod kostkou (1–6).
      - Funkce vrací náhodné číslo 1–6.
      - Výsledek vypiš do HTML.
*/

/* 46) Najdi nejčastější hodnotu v poli (moda).
      - Vytvoř funkci, která přijme pole jako parametr.
      - Použij objektový „počítací“ slovník (frequency map).
*/

/* 47) Vytvoř funkci, která formátuje datum do českého formátu
      (DD.MM.YYYY).
      - Funkce dostane objekt Date a vrací string.
*/

/* 48) Zjisti, kolik dní zbývá do konce roku.
      - Spočítej rozdíl mezi dnešním datem a 31.12.
      - Vrátí celé číslo (Math.floor).
*/

/* 49) Vytvoř jednoduchý to-do list:
      - Přidávání úkolů
      - Odstraňování úkolů
      - Každá operace musí být funkce.
*/

/* 50) Ulož a načti data z localStorage (např. skóre nebo jméno).
      - Použij localStorage.setItem a localStorage.getItem.
      - Zobraz načtená data v HTML.
*/
