let menu = document.querySelector('#menu');
let nav = document.querySelector('#nav');

//Aba de menu para smartphone / tablets 
menu.addEventListener('click', () =>{
    
    if(nav.style.opacity === '1'){
        //Se já estar aberto, fecha.
        nav.style.opacity = '0';
        nav.style.pointerEvents ='none'

        itemLi.forEach(el => el.classList.remove('ativo'));
    }else{

    nav.style.opacity = '1'
    nav.style.pointerEvents = 'all'

    //Efeito cascata
    let itemLi = document.querySelectorAll('#nav ul li');
    itemLi.forEach((el, index) =>{
        setTimeout(() =>{
            el.classList.add('ativo');
        }, index * 500);
    })
}
});
//Aba de menu para smartphone / tablets 

//Seleciona o elemento do texto.
let nomeDestaque = document.querySelector('#animationWave');
const textoAnimacao = nomeDestaque.textContent;

//Limpa o texto original para reinserir com os spans
nomeDestaque.innerHTML = '';

//Percorre por cada letra.
for(let i = 0; i < textoAnimacao.length; i++){

    const span = document.createElement('span');

    //Se for espaço, usamos um caractere invisível para não quebrar o layout.
    span.textContent = textoAnimacao[i] === ' ' ? '\u00A0' : textoAnimacao[i];

  // O segredo está aqui: cada letra espera um pouquinho mais que a anterior.

  // Multiplicamos o índice (i) por 0.1 segundos (100 milissegundos).

  span.style.animationDelay = `${i * 0.1}s`;

  //Adiciona o span de volta ao elemento.
  nomeDestaque.appendChild(span);
}

//Criar um observador para os elementos..

//Seleciona todos os elementos de classe .revel
const element = document.querySelectorAll('.revel');

//Criar um observador para ver os elementos ( new IntersectionObserver )
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        //Se o elemento aparecer na tela...
        if(entry.isIntersecting){
            entry.target.classList.add('active'); //Adiciona ele ao site com animação suave...
        }
    });
}, {
    threshold: 0.2 //Dispara o efeito quando 20% desse elemento estiver presente na tela.
});

element.forEach((el) =>{
    observer.observe(el)
})
//Criar um observador para os elementos..

//Animação de letra padrão...
let animationPadrao = document.querySelector('.animationPadrao');

//Seleciona o texto que há dentro do elemento.
let animationText = animationPadrao.textContent;

//Limpa o texto..
animationPadrao.innerHTML = '';

//Percorre por cada letra....
for(let i = 0; i < animationText.length; i++){

    //Cria um span em cada letra...
    const spanAnimation = document.createElement('span');

    //Se for espaço, usamos um caractere invisível para não quebrar o layout.
    spanAnimation.textContent = animationText[i] === ' ' ? '\u00A0' : animationText[i];

    // Multiplicamos o índice (i) por 0.1 segundos (100 milissegundos).
    spanAnimation.style.animationDelay = `${i * 0.1}s`

    animationPadrao.appendChild(spanAnimation);
}
//Animação de letra padrão...

let revelSection = document.querySelectorAll('.revelSection');

let img = document.querySelector('#img');

//Criar um observador para ver os elementos ( new IntersectionObserver )
const observerSection = new IntersectionObserver((entriesSection) =>{
    entriesSection.forEach((entrySection) =>{

        //Se o section aparecer na tela...
        if(entrySection.isIntersecting){

            entrySection.target.classList.add('activeSection');
            //Adiciona ele ao site com animação suave...

            //Se o elemento observado for uma img...
            if(entrySection.target.tagName === 'IMG' || entrySection.target.id === 'img'){

                setTimeout(() =>{

                    entrySection.target.style.filter = 'grayscale(0%)';//Cor inicial da img..

                }, 750); //0.5 segundos para a img voltar a cor padrão
            }
        }
    })
},{
    threshold: 0.05 //Dispara o efeito quando 5% desse Section estiver presente na tela.
});

revelSection.forEach((elSection) =>{
    observerSection.observe(elSection)
})