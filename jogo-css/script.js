const coelho = document.querySelector('.coelho');
const cactus = document.querySelector('.cactus');

const jump = () => {
    coelho.classList.add('jump');
    
    setTimeout(() => {

        coelho.classList.remove('jump');        

    }, 600);
}

const loop = setInterval(() => {
    
    console.log('loop');

    const cactusPosition = cactus.offsetLeft;
    const coelhoPosition = +window.getComputedStyle(coelho).bottom.replace('px', '');

    if (cactusPosition <= 104 && cactusPosition > 0 && coelhoPosition <= 100) {
        cactus.style.animation = 'none';
        cactus.style.left = `${cactusPosition}px`
    
        coelho.style.animation = 'none';
        coelho.style.bottom = `${coelhoPosition}px`
    
        coelho.src = './imagens/bunny2_hurt.png'
        coelho.style.marginLeft = '32px'

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);