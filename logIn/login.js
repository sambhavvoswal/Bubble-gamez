
function containss(str) {
    let chars = "!@#$%^&*()_-+=<>?";

    for (let i = 0; i < str.length; i++) {
        if (chars.includes(str[i])) {
            return true;
        }
    }

    return false;

}


let enter = document.querySelector("#enter");
let caps = false;
let special = false;
let name = document.getElementById("name");
let pass = document.getElementById("pass");

enter.addEventListener("click", function () {
    for (let i = 0; i < pass.value.length; i++) {
        let t = pass.value[i];
        if (t >= 'A' && t <= 'Z') {
            caps = true;
        }
    }
    if (containss(pass.value)) {
        special = true;
    }


    console.log(caps + " " + special);
    if(caps && special){
        window.location.href = "http://127.0.0.1:5500/index.html";   
     }
    else{
        alert("Inaprropiate passward");
    }
});