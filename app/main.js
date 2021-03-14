
const caja = document.querySelector('.caja');
const caja2 = document.querySelector('.caja:nth-child(2)');
const caja3 = document.querySelector('.caja:nth-child(3)');
const caja4 = document.querySelector('.caja:nth-child(4)');
const caja5 = document.querySelector('.caja:nth-child(5)');
const caja6 = document.querySelector('.caja:nth-child(6)');
const caja7 = document.querySelector('.caja:nth-child(7)');
const caja8 = document.querySelector('.caja:nth-child(8)');
const caja9 = document.querySelector('.caja:nth-child(9)');
const caja10 = document.querySelector('.caja:nth-child(10)');
const caja_start = document.querySelector('.caja:nth-child(11)');

const texto = document.querySelector('.texto');

const historia = document.querySelector('.historia');
const historia2 = document.querySelector('.historia:nth-child(2)');
const historia3 = document.querySelector('.historia:nth-child(3)');
const historia4 = document.querySelector('.historia:nth-child(4)');
const historia5 = document.querySelector('.historia:nth-child(5)');
const historia6 = document.querySelector('.historia:nth-child(6)');
const historia7 = document.querySelector('.historia:nth-child(7)');
const historia8 = document.querySelector('.historia:nth-child(8)');
const historia9 = document.querySelector('.historia:nth-child(9)');
const historia10 = document.querySelector('.historia:nth-child(10)');


const personaje = document.querySelector('.personajes');
const personaje2 = document.querySelector('.personajes:nth-child(2)');
const personaje3 = document.querySelector('.personajes:nth-child(3)');
const personaje4 = document.querySelector('.personajes:nth-child(4)');
const personaje5 = document.querySelector('.personajes:nth-child(5)');

const selector = document.querySelector('.selector');
const selector2 = document.querySelector('.selector:nth-child(2)');
const selector3 = document.querySelector('.selector:nth-child(3)');
const selector4 = document.querySelector('.selector:nth-child(4)');

const selector_B = document.querySelector('.selector_B');
const selector_B2 = document.querySelector('.selector_B:nth-child(2)');
const selector_B3 = document.querySelector('.selector_B:nth-child(3)');

const circulo = document.querySelector('.circulo');

const objetos = document.querySelector('.objetos:nth-child(2)');
const objetos2 = document.querySelector('.objetos:nth-child(3)');
const objetos3 = document.querySelector('.objetos:nth-child(4)');

const texto1 = document.querySelector('.texto_historia');
const texto2 = document.querySelector('.texto_historia:nth-child(2)');
const texto3 = document.querySelector('.texto_historia:nth-child(3)');
const texto4 = document.querySelector('.texto_historia:nth-child(4)');
const texto5 = document.querySelector('.texto_historia:nth-child(5)');
const texto6 = document.querySelector('.texto_historia:nth-child(6)');
const texto7 = document.querySelector('.texto_historia:nth-child(7)');
const texto8 = document.querySelector('.texto_historia:nth-child(8)');
const texto9 = document.querySelector('.texto_historia:nth-child(9)');
const texto10 = document.querySelector('.texto_historia:nth-child(10)');
const texto11 = document.querySelector('.texto_historia:nth-child(11)');
const texto12 = document.querySelector('.texto_historia:nth-child(12)');
const texto13 = document.querySelector('.texto_historia:nth-child(13)');
const texto14 = document.querySelector('.texto_historia:nth-child(14)');
const texto15 = document.querySelector('.texto_historia:nth-child(15)');
const texto16 = document.querySelector('.texto_historia:nth-child(16)');
const texto17 = document.querySelector('.texto_historia:nth-child(17)');

const nombre = document.querySelector('.nombre');
const texto_nombre1 = document.querySelector('.texto_nombre:nth-child(1)');
const texto_nombre2 = document.querySelector('.texto_nombre:nth-child(2)');
const texto_nombre3 = document.querySelector('.texto_nombre:nth-child(3)');
const texto_nombre4 = document.querySelector('.texto_nombre:nth-child(4)');
const texto_nombre5 = document.querySelector('.texto_nombre:nth-child(5)');
const texto_nombre6 = document.querySelector('.texto_nombre:nth-child(6)');
const texto_nombre7 = document.querySelector('.texto_nombre:nth-child(7)');
const texto_nombre8 = document.querySelector('.texto_nombre:nth-child(8)');
const texto_nombre9 = document.querySelector('.texto_nombre:nth-child(9)');
const texto_nombre10 = document.querySelector('.texto_nombre:nth-child(10)');




selector.addEventListener('click', () => {
    
    personaje.classList.remove('active')
    personaje2.classList.add('active')
    personaje3.classList.remove('active')
    personaje4.classList.remove('active')
    personaje5.classList.remove('active')
    texto2.classList.remove('active')
    texto3.classList.add('active')
    texto4.classList.remove('active')
    texto5.classList.remove('active')
    texto6.classList.remove('active')
    
});

selector2.addEventListener('click', () => {
    
    personaje.classList.remove('active')
    personaje2.classList.remove('active')
    personaje3.classList.add('active')
    personaje4.classList.remove('active')
    personaje5.classList.remove('active')
    texto2.classList.remove('active')
    texto3.classList.remove('active')
    texto4.classList.add('active')
    texto5.classList.remove('active')
    texto6.classList.remove('active')
    
});

selector3.addEventListener('click', () => {
    
    personaje.classList.remove('active')
    personaje2.classList.remove('active')
    personaje3.classList.remove('active')
    personaje4.classList.add('active')
    personaje5.classList.remove('active')
    texto2.classList.remove('active')
    texto3.classList.remove('active')
    texto4.classList.remove('active')
    texto5.classList.add('active')
    texto6.classList.remove('active')
    
});

selector4.addEventListener('click', () => {
    
    personaje.classList.remove('active')
    personaje2.classList.remove('active')
    personaje3.classList.remove('active')
    personaje4.classList.remove('active')
    personaje5.classList.add('active')
    texto2.classList.remove('active')
    texto3.classList.remove('active')
    texto4.classList.remove('active')
    texto5.classList.remove('active')
    texto6.classList.add('active')
    
});

selector_B.addEventListener('click', () => {
    texto9.classList.add('active')
    texto10.classList.remove('active')
    texto11.classList.remove('active')
    selector_B.classList.add('color')
    selector_B2.classList.remove('color')
    selector_B3.classList.remove('color')
    objetos.classList.add('active')
    objetos2.classList.remove('active')
    objetos3.classList.remove('active')
    
    
    
});

selector_B2.addEventListener('click', () => {
    texto9.classList.remove('active')
    texto10.classList.add('active')
    texto11.classList.remove('active')
    selector_B.classList.remove('color')
    selector_B2.classList.add('color')
    selector_B3.classList.remove('color')
    objetos.classList.remove('active')
    objetos2.classList.add('active')
    objetos3.classList.remove('active')
    
    
    
});

selector_B3.addEventListener('click', () => {
    texto9.classList.remove('active')
    texto10.classList.remove('active')
    texto11.classList.add('active')
    selector_B.classList.remove('color')
    selector_B2.classList.remove('color')
    selector_B3.classList.add('color')
    objetos.classList.remove('active')
    objetos2.classList.remove('active')
    objetos3.classList.add('active')
    
    
    
});

caja_start.addEventListener('click', (ev) => {
    ev.preventDefault();
    caja_start.classList.add('no_active')
    caja.classList.add('active')
    caja2.classList.add('active')
    caja3.classList.add('active')
    caja4.classList.add('active')
    caja5.classList.add('active')
    caja6.classList.add('active')
    caja7.classList.add('active')
    caja8.classList.add('active')
    caja9.classList.add('active')
    caja10.classList.add('active')
    texto2.classList.add('active')
    texto1.classList.remove('active')
    texto.classList.add('active')
    historia.classList.add('creacion_de_personajes')
    personaje.classList.add('active')
    circulo.classList.add('active')
    caja.classList.add('color')
    nombre.classList.add('active')
    nombre.classList.add('investigacion')
    texto_nombre1.classList.add('active')
    nombre.classList.remove('normal')
    

    
});

caja.addEventListener('click', (ev) => {
    ev.preventDefault();
    historia.classList.add('creacion_de_personajes')
    historia2.classList.remove('creacion_de_personajes')
    historia3.classList.remove('creacion_de_personajes')
    historia4.classList.remove('creacion_de_personajes')
    historia5.classList.remove('creacion_de_personajes')
    historia6.classList.remove('creacion_de_personajes')
    historia7.classList.remove('creacion_de_personajes')
    historia8.classList.remove('creacion_de_personajes')
    historia9.classList.remove('creacion_de_personajes')
    historia10.classList.remove('creacion_de_personajes')
    personaje.classList.add('active')
    personaje2.classList.remove('active')
    personaje3.classList.remove('active')
    personaje4.classList.remove('active')
    personaje5.classList.remove('active')
    caja.classList.add('color')
    caja2.classList.remove('color')
    caja3.classList.remove('color')
    caja4.classList.remove('color')
    caja5.classList.remove('color')
    caja6.classList.remove('color')
    caja7.classList.remove('color')
    caja8.classList.remove('color')
    caja9.classList.remove('color')
    caja10.classList.remove('color')
    texto2.classList.add('active')
    texto3.classList.remove('active')
    texto4.classList.remove('active')
    texto5.classList.remove('active')
    texto6.classList.remove('active')
    texto7.classList.remove('active')
    texto8.classList.remove('active')
    texto9.classList.remove('active')
    texto10.classList.remove('active')
    texto11.classList.remove('active')
    texto12.classList.remove('active')
    texto13.classList.remove('active')
    texto14.classList.remove('active')
    texto15.classList.remove('active')
    texto16.classList.remove('active')
    texto17.classList.remove('active')

    selector_B.classList.remove('active')
    selector_B2.classList.remove('active')
    selector_B3.classList.remove('active')
    objetos.classList.remove('active')
    objetos2.classList.remove('active')
    objetos3.classList.remove('active')

    nombre.classList.add('investigacion')
    nombre.classList.remove('organizacion')
    nombre.classList.remove('diseño')
    nombre.classList.remove('testeo')
    texto_nombre1.classList.add('active')
    texto_nombre2.classList.remove('active')
    texto_nombre3.classList.remove('active')
    texto_nombre4.classList.remove('active')
    texto_nombre5.classList.remove('active')
    texto_nombre6.classList.remove('active')
    texto_nombre7.classList.remove('active')
    texto_nombre8.classList.remove('active')
    texto_nombre9.classList.remove('active')
    texto_nombre10.classList.remove('active')
    nombre.classList.remove('normal')


});

caja2.addEventListener('click', (ev) => {
    ev.preventDefault();
    historia2.classList.add('creacion_de_personajes')
    historia.classList.remove('creacion_de_personajes')
    historia3.classList.remove('creacion_de_personajes')
    historia4.classList.remove('creacion_de_personajes')
    historia5.classList.remove('creacion_de_personajes')
    historia6.classList.remove('creacion_de_personajes')
    historia7.classList.remove('creacion_de_personajes')
    historia8.classList.remove('creacion_de_personajes')
    historia9.classList.remove('creacion_de_personajes')
    historia10.classList.remove('creacion_de_personajes')
    personaje.classList.remove('active')
    personaje2.classList.remove('active')
    personaje3.classList.remove('active')
    personaje4.classList.remove('active')
    personaje5.classList.remove('active')
    caja.classList.remove('color')
    caja2.classList.add('color')
    caja3.classList.remove('color')
    caja4.classList.remove('color')
    caja5.classList.remove('color')
    caja6.classList.remove('color')
    caja7.classList.remove('color')
    caja8.classList.remove('color')
    caja9.classList.remove('color')
    caja10.classList.remove('color')

    texto2.classList.remove('active')
    texto3.classList.remove('active')
    texto4.classList.remove('active')
    texto5.classList.remove('active')
    texto6.classList.remove('active')
    texto7.classList.add('active')
    texto8.classList.remove('active')
    texto9.classList.remove('active')
    texto10.classList.remove('active')
    texto11.classList.remove('active')
    texto12.classList.remove('active')
    texto13.classList.remove('active')
    texto14.classList.remove('active')
    texto15.classList.remove('active')
    texto16.classList.remove('active')
    texto17.classList.remove('active')

    selector_B.classList.remove('active')
    selector_B2.classList.remove('active')
    selector_B3.classList.remove('active')
    objetos.classList.remove('active')
    objetos2.classList.remove('active')
    objetos3.classList.remove('active')

    nombre.classList.add('investigacion')
    nombre.classList.remove('organizacion')
    nombre.classList.remove('diseño')
    nombre.classList.remove('testeo')
    texto_nombre1.classList.remove('active')
    texto_nombre2.classList.add('active')
    texto_nombre3.classList.remove('active')
    texto_nombre4.classList.remove('active')
    texto_nombre5.classList.remove('active')
    texto_nombre6.classList.remove('active')
    texto_nombre7.classList.remove('active')
    texto_nombre8.classList.remove('active')
    texto_nombre9.classList.remove('active')
    texto_nombre10.classList.remove('active')
    nombre.classList.remove('normal')

});

caja3.addEventListener('click', (ev) => {
    ev.preventDefault();
    historia3.classList.add('creacion_de_personajes')
    historia.classList.remove('creacion_de_personajes')
    historia2.classList.remove('creacion_de_personajes')
    historia4.classList.remove('creacion_de_personajes')
    historia5.classList.remove('creacion_de_personajes')
    historia6.classList.remove('creacion_de_personajes')
    historia7.classList.remove('creacion_de_personajes')
    historia8.classList.remove('creacion_de_personajes')
    historia9.classList.remove('creacion_de_personajes')
    historia10.classList.remove('creacion_de_personajes')
    personaje.classList.remove('active')
    personaje2.classList.remove('active')
    personaje3.classList.remove('active')
    personaje4.classList.remove('active')
    personaje5.classList.remove('active')
    caja.classList.remove('color')
    caja2.classList.remove('color')
    caja3.classList.add('color')
    caja4.classList.remove('color')
    caja5.classList.remove('color')
    caja6.classList.remove('color')
    caja7.classList.remove('color')
    caja8.classList.remove('color')
    caja9.classList.remove('color')
    caja10.classList.remove('color')

    texto2.classList.remove('active')
    texto3.classList.remove('active')
    texto4.classList.remove('active')
    texto5.classList.remove('active')
    texto6.classList.remove('active')
    texto7.classList.remove('active')
    texto8.classList.add('active')
    texto9.classList.remove('active')
    texto10.classList.remove('active')
    texto11.classList.remove('active')
    texto12.classList.remove('active')
    texto13.classList.remove('active')
    texto14.classList.remove('active')
    texto15.classList.remove('active')
    texto16.classList.remove('active')
    texto17.classList.remove('active')

    selector_B.classList.remove('active')
    selector_B2.classList.remove('active')
    selector_B3.classList.remove('active')
    objetos.classList.remove('active')
    objetos2.classList.remove('active')
    objetos3.classList.remove('active')

    nombre.classList.add('investigacion')
    nombre.classList.remove('organizacion')
    nombre.classList.remove('diseño')
    nombre.classList.remove('testeo')
    texto_nombre1.classList.remove('active')
    texto_nombre2.classList.remove('active')
    texto_nombre3.classList.add('active')
    texto_nombre4.classList.remove('active')
    texto_nombre5.classList.remove('active')
    texto_nombre6.classList.remove('active')
    texto_nombre7.classList.remove('active')
    texto_nombre8.classList.remove('active')
    texto_nombre9.classList.remove('active')
    texto_nombre10.classList.remove('active')
    nombre.classList.remove('normal')

});

caja4.addEventListener('click', (ev) => {
    ev.preventDefault();
    historia4.classList.add('creacion_de_personajes')
    historia.classList.remove('creacion_de_personajes')
    historia3.classList.remove('creacion_de_personajes')
    historia2.classList.remove('creacion_de_personajes')
    historia5.classList.remove('creacion_de_personajes')
    historia6.classList.remove('creacion_de_personajes')
    historia7.classList.remove('creacion_de_personajes')
    historia8.classList.remove('creacion_de_personajes')
    historia9.classList.remove('creacion_de_personajes')
    historia10.classList.remove('creacion_de_personajes')
    personaje.classList.remove('active')
    personaje2.classList.remove('active')
    personaje3.classList.remove('active')
    personaje4.classList.remove('active')
    personaje5.classList.remove('active')
    caja.classList.remove('color')
    caja2.classList.remove('color')
    caja3.classList.remove('color')
    caja4.classList.add('color')
    caja5.classList.remove('color')
    caja6.classList.remove('color')
    caja7.classList.remove('color')
    caja8.classList.remove('color')
    caja9.classList.remove('color')
    caja10.classList.remove('color')

    texto2.classList.remove('active')
    texto3.classList.remove('active')
    texto4.classList.remove('active')
    texto5.classList.remove('active')
    texto6.classList.remove('active')
    texto7.classList.remove('active')
    texto8.classList.remove('active')
    texto9.classList.add('active')
    texto10.classList.remove('active')
    texto11.classList.remove('active')
    texto12.classList.remove('active')
    texto13.classList.remove('active')
    texto14.classList.remove('active')
    texto15.classList.remove('active')
    texto16.classList.remove('active')
    texto17.classList.remove('active')

    selector_B.classList.add('color')
    selector_B2.classList.remove('color')
    selector_B3.classList.remove('color')
    objetos.classList.add('active')
    objetos2.classList.remove('active')
    objetos3.classList.remove('active')

    nombre.classList.remove('investigacion')
    nombre.classList.add('organizacion')
    nombre.classList.remove('diseño')
    nombre.classList.remove('testeo')
    texto_nombre1.classList.remove('active')
    texto_nombre2.classList.remove('active')
    texto_nombre3.classList.remove('active')
    texto_nombre4.classList.add('active')
    texto_nombre5.classList.remove('active')
    texto_nombre6.classList.remove('active')
    texto_nombre7.classList.remove('active')
    texto_nombre8.classList.remove('active')
    texto_nombre9.classList.remove('active')
    texto_nombre10.classList.remove('active')
    nombre.classList.remove('normal')

});

caja5.addEventListener('click', (ev) => {
    ev.preventDefault();
    historia5.classList.add('creacion_de_personajes')
    historia.classList.remove('creacion_de_personajes')
    historia3.classList.remove('creacion_de_personajes')
    historia4.classList.remove('creacion_de_personajes')
    historia2.classList.remove('creacion_de_personajes')
    historia6.classList.remove('creacion_de_personajes')
    historia7.classList.remove('creacion_de_personajes')
    historia8.classList.remove('creacion_de_personajes')
    historia9.classList.remove('creacion_de_personajes')
    historia10.classList.remove('creacion_de_personajes')
    personaje.classList.remove('active')
    personaje2.classList.remove('active')
    personaje3.classList.remove('active')
    personaje4.classList.remove('active')
    personaje5.classList.remove('active')
    caja.classList.remove('color')
    caja2.classList.remove('color')
    caja3.classList.remove('color')
    caja4.classList.remove('color')
    caja5.classList.add('color')
    caja6.classList.remove('color')
    caja7.classList.remove('color')
    caja8.classList.remove('color')
    caja9.classList.remove('color')
    caja10.classList.remove('color')

    texto2.classList.remove('active')
    texto3.classList.remove('active')
    texto4.classList.remove('active')
    texto5.classList.remove('active')
    texto6.classList.remove('active')
    texto7.classList.remove('active')
    texto8.classList.remove('active')
    texto9.classList.remove('active')
    texto10.classList.remove('active')
    texto11.classList.remove('active')
    texto12.classList.add('active')
    texto13.classList.remove('active')
    texto14.classList.remove('active')
    texto15.classList.remove('active')
    texto16.classList.remove('active')
    texto17.classList.remove('active')

    selector_B.classList.remove('active')
    selector_B2.classList.remove('active')
    selector_B3.classList.remove('active')
    objetos.classList.remove('active')
    objetos2.classList.remove('active')
    objetos3.classList.remove('active')

    nombre.classList.remove('investigacion')
    nombre.classList.remove('organizacion')
    nombre.classList.add('diseño')
    nombre.classList.remove('testeo')
    texto_nombre1.classList.remove('active')
    texto_nombre2.classList.remove('active')
    texto_nombre3.classList.remove('active')
    texto_nombre4.classList.remove('active')
    texto_nombre5.classList.add('active')
    texto_nombre6.classList.remove('active')
    texto_nombre7.classList.remove('active')
    texto_nombre8.classList.remove('active')
    texto_nombre9.classList.remove('active')
    texto_nombre10.classList.remove('active')
    nombre.classList.remove('normal')

    
});

caja6.addEventListener('click', (ev) => {
    ev.preventDefault();
    historia6.classList.add('creacion_de_personajes')
    historia.classList.remove('creacion_de_personajes')
    historia3.classList.remove('creacion_de_personajes')
    historia4.classList.remove('creacion_de_personajes')
    historia5.classList.remove('creacion_de_personajes')
    historia2.classList.remove('creacion_de_personajes')
    historia7.classList.remove('creacion_de_personajes')
    historia8.classList.remove('creacion_de_personajes')
    historia9.classList.remove('creacion_de_personajes')
    historia10.classList.remove('creacion_de_personajes')
    personaje.classList.remove('active')
    personaje2.classList.remove('active')
    personaje3.classList.remove('active')
    personaje4.classList.remove('active')
    personaje5.classList.remove('active')
    caja.classList.remove('color')
    caja2.classList.remove('color')
    caja3.classList.remove('color')
    caja4.classList.remove('color')
    caja5.classList.remove('color')
    caja6.classList.add('color')
    caja7.classList.remove('color')
    caja8.classList.remove('color')
    caja9.classList.remove('color')
    caja10.classList.remove('color')

    texto2.classList.remove('active')
    texto3.classList.remove('active')
    texto4.classList.remove('active')
    texto5.classList.remove('active')
    texto6.classList.remove('active')
    texto7.classList.remove('active')
    texto8.classList.remove('active')
    texto9.classList.remove('active')
    texto10.classList.remove('active')
    texto11.classList.remove('active')
    texto12.classList.remove('active')
    texto13.classList.add('active')
    texto14.classList.remove('active')
    texto15.classList.remove('active')
    texto16.classList.remove('active')
    texto17.classList.remove('active')

    selector_B.classList.remove('active')
    selector_B2.classList.remove('active')
    selector_B3.classList.remove('active')
    objetos.classList.remove('active')
    objetos2.classList.remove('active')
    objetos3.classList.remove('active')

    nombre.classList.remove('investigacion')
    nombre.classList.remove('organizacion')
    nombre.classList.add('diseño')
    nombre.classList.remove('testeo')
    texto_nombre1.classList.remove('active')
    texto_nombre2.classList.remove('active')
    texto_nombre3.classList.remove('active')
    texto_nombre4.classList.remove('active')
    texto_nombre5.classList.remove('active')
    texto_nombre6.classList.add('active')
    texto_nombre7.classList.remove('active')
    texto_nombre8.classList.remove('active')
    texto_nombre9.classList.remove('active')
    texto_nombre10.classList.remove('active')
    nombre.classList.remove('normal')

});



caja7.addEventListener('click', (ev) => {
    ev.preventDefault();
    historia7.classList.add('creacion_de_personajes')
    historia.classList.remove('creacion_de_personajes')
    historia3.classList.remove('creacion_de_personajes')
    historia4.classList.remove('creacion_de_personajes')
    historia5.classList.remove('creacion_de_personajes')
    historia6.classList.remove('creacion_de_personajes')
    historia2.classList.remove('creacion_de_personajes')
    historia8.classList.remove('creacion_de_personajes')
    historia9.classList.remove('creacion_de_personajes')
    historia10.classList.remove('creacion_de_personajes')
    personaje.classList.remove('active')
    personaje2.classList.remove('active')
    personaje3.classList.remove('active')
    personaje4.classList.remove('active')
    personaje5.classList.remove('active')
    caja.classList.remove('color')
    caja2.classList.remove('color')
    caja3.classList.remove('color')
    caja4.classList.remove('color')
    caja5.classList.remove('color')
    caja6.classList.remove('color')
    caja7.classList.add('color')
    caja8.classList.remove('color')
    caja9.classList.remove('color')
    caja10.classList.remove('color')

    texto2.classList.remove('active')
    texto3.classList.remove('active')
    texto4.classList.remove('active')
    texto5.classList.remove('active')
    texto6.classList.remove('active')
    texto7.classList.remove('active')
    texto8.classList.remove('active')
    texto9.classList.remove('active')
    texto10.classList.remove('active')
    texto11.classList.remove('active')
    texto12.classList.remove('active')
    texto13.classList.remove('active')
    texto14.classList.add('active')
    texto15.classList.remove('active')
    texto16.classList.remove('active')
    texto17.classList.remove('active')

    selector_B.classList.remove('active')
    selector_B2.classList.remove('active')
    selector_B3.classList.remove('active')
    objetos.classList.remove('active')
    objetos2.classList.remove('active')
    objetos3.classList.remove('active')
    
    nombre.classList.remove('investigacion')
    nombre.classList.remove('organizacion')
    nombre.classList.remove('diseño')
    nombre.classList.add('testeo')
    texto_nombre1.classList.remove('active')
    texto_nombre2.classList.remove('active')
    texto_nombre3.classList.remove('active')
    texto_nombre4.classList.remove('active')
    texto_nombre5.classList.remove('active')
    texto_nombre6.classList.remove('active')
    texto_nombre7.classList.add('active')
    texto_nombre8.classList.remove('active')
    texto_nombre9.classList.remove('active')
    texto_nombre10.classList.remove('active')
    nombre.classList.remove('normal')

});

caja8.addEventListener('click', (ev) => {
    ev.preventDefault();
    historia8.classList.add('creacion_de_personajes')
    historia.classList.remove('creacion_de_personajes')
    historia3.classList.remove('creacion_de_personajes')
    historia4.classList.remove('creacion_de_personajes')
    historia5.classList.remove('creacion_de_personajes')
    historia6.classList.remove('creacion_de_personajes')
    historia2.classList.remove('creacion_de_personajes')
    historia7.classList.remove('creacion_de_personajes')
    historia9.classList.remove('creacion_de_personajes')
    historia10.classList.remove('creacion_de_personajes')
    personaje.classList.remove('active')
    personaje2.classList.remove('active')
    personaje3.classList.remove('active')
    personaje4.classList.remove('active')
    personaje5.classList.remove('active')
    caja.classList.remove('color')
    caja2.classList.remove('color')
    caja3.classList.remove('color')
    caja4.classList.remove('color')
    caja5.classList.remove('color')
    caja6.classList.remove('color')
    caja7.classList.remove('color')
    caja8.classList.add('color')
    caja9.classList.remove('color')
    caja10.classList.remove('color')

    texto2.classList.remove('active')
    texto3.classList.remove('active')
    texto4.classList.remove('active')
    texto5.classList.remove('active')
    texto6.classList.remove('active')
    texto7.classList.remove('active')
    texto8.classList.remove('active')
    texto9.classList.remove('active')
    texto10.classList.remove('active')
    texto11.classList.remove('active')
    texto12.classList.remove('active')
    texto13.classList.remove('active')
    texto14.classList.remove('active')
    texto15.classList.add('active')
    texto16.classList.remove('active')
    texto17.classList.remove('active')

    selector_B.classList.remove('active')
    selector_B2.classList.remove('active')
    selector_B3.classList.remove('active')
    objetos.classList.remove('active')
    objetos2.classList.remove('active')
    objetos3.classList.remove('active')

    nombre.classList.remove('investigacion')
    nombre.classList.remove('organizacion')
    nombre.classList.remove('diseño')
    nombre.classList.add('testeo')
    texto_nombre1.classList.remove('active')
    texto_nombre2.classList.remove('active')
    texto_nombre3.classList.remove('active')
    texto_nombre4.classList.remove('active')
    texto_nombre5.classList.remove('active')
    texto_nombre6.classList.remove('active')
    texto_nombre7.classList.remove('active')
    texto_nombre8.classList.add('active')
    texto_nombre9.classList.remove('active')
    texto_nombre10.classList.remove('active')
    nombre.classList.remove('normal')

    
});

caja9.addEventListener('click', (ev) => {
    ev.preventDefault();
    historia9.classList.add('creacion_de_personajes')
    historia.classList.remove('creacion_de_personajes')
    historia3.classList.remove('creacion_de_personajes')
    historia4.classList.remove('creacion_de_personajes')
    historia5.classList.remove('creacion_de_personajes')
    historia6.classList.remove('creacion_de_personajes')
    historia2.classList.remove('creacion_de_personajes')
    historia7.classList.remove('creacion_de_personajes')
    historia8.classList.remove('creacion_de_personajes')
    historia10.classList.remove('creacion_de_personajes')
    personaje.classList.remove('active')
    personaje2.classList.remove('active')
    personaje3.classList.remove('active')
    personaje4.classList.remove('active')
    personaje5.classList.remove('active')
    caja.classList.remove('color')
    caja2.classList.remove('color')
    caja3.classList.remove('color')
    caja4.classList.remove('color')
    caja5.classList.remove('color')
    caja6.classList.remove('color')
    caja7.classList.remove('color')
    caja8.classList.remove('color')
    caja9.classList.add('color')
    caja10.classList.remove('color')

    texto2.classList.remove('active')
    texto3.classList.remove('active')
    texto4.classList.remove('active')
    texto5.classList.remove('active')
    texto6.classList.remove('active')
    texto7.classList.remove('active')
    texto8.classList.remove('active')
    texto9.classList.remove('active')
    texto10.classList.remove('active')
    texto11.classList.remove('active')
    texto12.classList.remove('active')
    texto13.classList.remove('active')
    texto14.classList.remove('active')
    texto15.classList.remove('active')
    texto16.classList.add('active')
    texto17.classList.remove('active')

    selector_B.classList.remove('active')
    selector_B2.classList.remove('active')
    selector_B3.classList.remove('active')
    objetos.classList.remove('active')
    objetos2.classList.remove('active')
    objetos3.classList.remove('active')

    nombre.classList.remove('investigacion')
    nombre.classList.remove('organizacion')
    nombre.classList.remove('diseño')
    nombre.classList.remove('testeo')
    nombre.classList.add('normal')
    texto_nombre1.classList.remove('active')
    texto_nombre2.classList.remove('active')
    texto_nombre3.classList.remove('active')
    texto_nombre4.classList.remove('active')
    texto_nombre5.classList.remove('active')
    texto_nombre6.classList.remove('active')
    texto_nombre7.classList.remove('active')
    texto_nombre8.classList.remove('active')
    texto_nombre9.classList.add('active')
    texto_nombre10.classList.remove('active')
});

caja10.addEventListener('click', (ev) => {
    ev.preventDefault();
    historia10.classList.add('creacion_de_personajes')
    historia.classList.remove('creacion_de_personajes')
    historia3.classList.remove('creacion_de_personajes')
    historia4.classList.remove('creacion_de_personajes')
    historia5.classList.remove('creacion_de_personajes')
    historia6.classList.remove('creacion_de_personajes')
    historia2.classList.remove('creacion_de_personajes')
    historia7.classList.remove('creacion_de_personajes')
    historia9.classList.remove('creacion_de_personajes')
    historia8.classList.remove('creacion_de_personajes')
    personaje.classList.remove('active')
    personaje2.classList.remove('active')
    personaje3.classList.remove('active')
    personaje4.classList.remove('active')
    personaje5.classList.remove('active')
    caja.classList.remove('color')
    caja2.classList.remove('color')
    caja3.classList.remove('color')
    caja4.classList.remove('color')
    caja5.classList.remove('color')
    caja6.classList.remove('color')
    caja7.classList.remove('color')
    caja8.classList.remove('color')
    caja9.classList.remove('color')
    caja10.classList.add('color')

    texto2.classList.remove('active')
    texto3.classList.remove('active')
    texto4.classList.remove('active')
    texto5.classList.remove('active')
    texto6.classList.remove('active')
    texto7.classList.remove('active')
    texto8.classList.remove('active')
    texto9.classList.remove('active')
    texto10.classList.remove('active')
    texto11.classList.remove('active')
    texto12.classList.remove('active')
    texto13.classList.remove('active')
    texto14.classList.remove('active')
    texto15.classList.remove('active')
    texto16.classList.remove('active')
    texto17.classList.add('active')

    selector_B.classList.remove('active')
    selector_B2.classList.remove('active')
    selector_B3.classList.remove('active')
    objetos.classList.remove('active')
    objetos2.classList.remove('active')
    objetos3.classList.remove('active')

    nombre.classList.remove('investigacion')
    nombre.classList.remove('organizacion')
    nombre.classList.remove('diseño')
    nombre.classList.remove('testeo')
    nombre.classList.add('normal')
    texto_nombre1.classList.remove('active')
    texto_nombre2.classList.remove('active')
    texto_nombre3.classList.remove('active')
    texto_nombre4.classList.remove('active')
    texto_nombre5.classList.remove('active')
    texto_nombre6.classList.remove('active')
    texto_nombre7.classList.remove('active')
    texto_nombre8.classList.remove('active')
    texto_nombre9.classList.remove('active')
    texto_nombre10.classList.add('active')
});








 



