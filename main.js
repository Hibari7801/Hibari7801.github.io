var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Actuaria') // texto que aparece primero
    .pauseFor(2500) //cuanto esperará
    .deleteAll()
    .typeString('El fracaso no es un desastre')
    .pauseFor(2500)
    .deleteChars(17) //numero de caracteres que se borran
    .typeString('<strong>es éxito si aprendemos de él.</strong>') //texto principal
    .pauseFor(2500)
    .start();