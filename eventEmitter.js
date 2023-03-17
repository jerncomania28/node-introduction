// sample of Observer Design Pattern - one subject different functions

const EventEmitter = require('events');

const celebrity = new EventEmitter(); // since The EventEmitter is a class we have to initialize it

// now we have a custom event emitter where we can make our own events
celebrity.on('like', () => {
  console.log('your post was liked !!');
})

celebrity.on('comment', (comment) => {
  console.log(`This comment was made : ${comment}`)
})

celebrity.emit('like');

celebrity.emit('comment', 'I Like your outfit !!');