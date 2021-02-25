function noScroll(){

    window.scrollTo(0,0);

}

//for the menu
document.getElementById("menu").addEventListener("click", ()=>{
    document.getElementById("magic").style.top = "0";
    window.addEventListener("scroll", noScroll);
});

document.getElementById("exit").addEventListener("click", ()=>{
    document.getElementById("magic").style.top = "-105vh";
    window.removeEventListener("scroll", noScroll);
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
