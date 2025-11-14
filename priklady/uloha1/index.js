//úloha: Hello World
//todo:vypsat do konzole
//použít console.log
//console.warning a console.error a window.alert

console.log("Hello World log");
console.warn("Hello World warn");
console.error("Hello World error");
console.info("Hello world cons info");
window.alert("win info");
console.time();
for (let i = 0; i < 100000; i++) {
  // some code
}
console.timeEnd();
console.table(["hod1","hod2"]);

function calc(){
    let input1 = Number(document.getElementById("num1").value);
    let input2 = Number(document.getElementById("num2").value);

    let sum = input1 + input2;

    console.log(`${input1} + ${input2} = ${sum}`);
}