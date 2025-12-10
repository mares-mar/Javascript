
function funkce(e){
    console.log(e);
    
}

document.getElementById("btn").addEventListener("click",funkce());

//document.getElementById("submit").addEventListener("click",(e) =>{console.log(e.target.value)});

document.getElementById("heslo").addEventListener("change",(e) =>{
    console.log(e.target.value)
    document.getElementById("text").textContent = `${e.target.value}`
});

