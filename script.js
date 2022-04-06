
/* MENU */
document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

let nav = document.getElementById("nav");

let background_menu = document.getElementById("back_menu");

function mostrar_menu(){
    nav.style.transform = "translateX(0)";
    nav.style.transition = "all 500ms"
    background_menu.style.display = "block";

}

function ocultar_menu(){
    nav.style.transform = "translateX(100%)";
    background_menu.style.display = "none";
}

background_menu.addEventListener("click", ocultar_menu);


/* SLIDER */
/* todo entre parentesis para que las variables o constantes solo afecten a esta función */
(function(){
    const sliders = [...document.querySelectorAll('.slider__body')]; /* para que salga como array y no lista de nodos, pero no afecta */
    const arrowNext = document.getElementById('next');
    const arrowBefore = document.getElementById('before');
    let value;

    arrowNext.addEventListener('click', ()=>changePosition(1));

    arrowBefore.addEventListener('click', ()=>changePosition(-1));

    function changePosition(change){
        const currentElement = Number(document.querySelector('.slider__body--show').dataset.id);

        value = currentElement;
        value+=change;

        if (value === 0 || value == sliders.length+1) {
            value = value === 0 ? sliders.length : 1;
        }

        sliders[currentElement-1].classList.toggle('slider__body--show');
        sliders[value-1].classList.toggle('slider__body--show');

    }
})();

let num1 = 5;
let num2 = "5";
let num3 = 10;

console.log(num1);
console.log(num1=num1===5);
console.log(num1);