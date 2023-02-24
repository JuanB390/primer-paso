const boton = document.querySelector('.fa-bars');
const boton2 = document.querySelector('.fa-xmark');
const slider = document.querySelector('.slider');
const content = document.querySelector('.content-bars');
const content2 = document.querySelector('.content-bars2');

let contador = 0;


boton.addEventListener('click', mover);
boton2.addEventListener('click', mover2);





function mover() {

    
     slider.classList.add('slider2');
     content.style.display = 'none';
     content2.style.display = 'flex';
  
        
    }
    


function mover2() {
    content.classList.remove('content-bars2');
     slider.classList.remove('slider2');
     content.style.display = 'flex';
     content2.style.display = 'none';
}