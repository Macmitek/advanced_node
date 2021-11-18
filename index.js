var delay = (seconds) =>
  new Promise((resolves, rejects) => {
    setTimeout(() => {
      resolves('The long delay has ended');
    }, seconds * 1000);
  });

delay(1)
  .then(console.log)
  .then(() => 43)
  .then((number) => console.log(`Hello World: ${number}`));

console.log('end first tick');
