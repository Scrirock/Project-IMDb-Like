let li3 = document.querySelectorAll("#article li");
let k = 1;
document.getElementById("left").style.display = "none";

function moveRight2(){
    if (k === 2){
        document.getElementById("right").style.display = "none";
        for (let img of li3){
            img.style.transform += "translateX(-333%)";
        }
    }
    else {
        document.getElementById("left").style.display = "initial";
        document.getElementById("right").style.display = "initial";
        for (let img of li3){
            img.style.transform += "translateX(-333%)";
        }
    }
    k++;
}

function moveLeft2(){
    if (k === 2){
        document.getElementById("left").style.display = "none";
        for (let img of li3){
            img.style.transform += "translateX(333%)";
        }
    }
    else {
        document.getElementById("left").style.display = "initial";
        document.getElementById("right").style.display = "initial";
        for (let img of li3){
            img.style.transform += "translateX(333%)";
        }
    }
    k--;
}

document.getElementById("right").addEventListener("click", ()=>{
    moveRight2();
});

document.getElementById("left").addEventListener("click", ()=>{
    moveLeft2();
});