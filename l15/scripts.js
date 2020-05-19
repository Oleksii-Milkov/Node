const EventEmitter = require('events');

const em = new EventEmitter;

em.addListener('lorem', function(){
    setTimeout(function(){
        console.log("Lorem Ipsum");
    }, 1000);    
});

em.addListener('lorem', function(){
    console.log("Lorem Ipsum Dolor");
});

em.addListener('lorem', function(){
    console.log("Lorem Ipsum Dolor Si");
});

em.emit('lorem');