let li = document.querySelectorAll(".slideshow li");
let i = 1;

function moveRight(){
    for (let img of li){
        if (i === 9){
            for (let y = 9; y>0; y--) {
                for (let img of li) {
                    img.style.transitionDuration = "0s";
                    img.style.transform += "translateX(100%)";
                }
            }
            setTimeout(()=>{
                for (let img of li) {
                    img.style.transitionDuration = "1s";
                    img.style.transform += "translateX(-100%)";
                }
            }, 50);
            i = 1;
        }
        img.style.transform += "translateX(-100%)";
    }
    i++;
}

function moveLeft(){
    for (let img of li){
        if (i === 1){
            for (let y = 9; y>0; y--) {
                for (let img of li) {
                    img.style.transitionDuration = "0s";
                    img.style.transform += "translateX(-100%)";
                }
            }
            setTimeout(()=>{
                for (let img of li) {
                    img.style.transitionDuration = "1s";
                    img.style.transform += "translateX(100%)";
                }
            }, 50);
            i = 10;
        }
        img.style.transform += "translateX(100%)";
    }
    i--;
}

let li2 = document.querySelectorAll(".slideshowTRUC li");
let y = 1;

function moveUp(){
    for (let img of li2){
        if (y === 9){
            for (let j = 9; j>0; j--) {
                for (let img of li2) {
                    img.style.transitionDuration = "0s";
                    img.style.transform += "translateY(100%)";
                }
            }
            setTimeout(()=>{
                for (let img of li2) {
                    img.style.transitionDuration = "1s";
                    img.style.transform += "translateY(-100%)";
                }
            }, 50);
            y = 1;
        }
        img.style.transform += "translateY(-100%)";
    }
    y++;
}

function moveDown(){
    for (let img of li2){
        if (y === 1){
            for (let j = 9; j>0; j--) {
                for (let img of li2) {
                    img.style.transitionDuration = "0s";
                    img.style.transform += "translateY(-100%)";
                }
            }
            setTimeout(()=>{
                for (let img of li2) {
                    img.style.transitionDuration = "1s";
                    img.style.transform += "translateY(100%)";
                }
            }, 50);
            y = 9;
        }
        img.style.transform += "translateY(100%)";
    }
    y--;
}

document.getElementById("droite").addEventListener("click", ()=>{
    moveRight();
    moveUp();
});
setInterval(()=>{
    moveRight();
    moveUp();
}, 10000);

document.getElementById("gauche").addEventListener("click", ()=>{
    moveLeft();
    moveDown();
});