var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Desarrolladora?') // texto que aparece primero
    .pauseFor(2500) //cuanto esperará
    .deleteAll()
    .typeString('We will meet again on the winter')
    .pauseFor(2500)
    .deleteChars(13) //numero de caracteres que se borran
    .typeString('<strong> when the flowers blooms!</strong>') //texto principal
    .pauseFor(2500)
    .start();