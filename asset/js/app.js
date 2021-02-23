//for the menu
document.getElementById("menu").addEventListener("click", ()=>{
        document.getElementById("magic").style.top = "0";
});

document.getElementById("exit").addEventListener("click", ()=>{
    document.getElementById("magic").style.top = "-105vh";
});

//for the custom select
document.querySelector('.custom-select-wrapper').addEventListener('click', function() {
    this.querySelector('.custom-select').classList.toggle('open');
})

for (const option of document.querySelectorAll(".custom-option")) {
    option.addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
        }
    })
}

window.addEventListener('click', function(e) {
    const select = document.querySelector('.custom-select')
    if (!select.contains(e.target)) {
        select.classList.remove('open');
    }
});

//for the slideshow

let li = document.querySelectorAll(".slideshow li");
let i = 1;

function moveRight(){
    for (let img of li){
        if (i === 5){
            for (let y = 5; y>0; y--) {
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
            for (let y = 5; y>0; y--) {
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
            i = 5;
        }
        img.style.transform += "translateX(100%)";
    }
    i--;
}

let li2 = document.querySelectorAll(".slideshowTRUC li");
let y = 1;

function moveUp(){
    for (let img of li2){
        if (y === 5){
            for (let j = 5; j>0; j--) {
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
            for (let j = 5; j>0; j--) {
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
            y = 5;
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