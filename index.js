var delay = (seconds) =>
  new Promise((resolves, rejects) => {
    if (seconds > 3) {
      rejects(new Error(`${seconds} is too long ! `));
    }

    setTimeout(() => {
      resolves('The long delay has ended');
    }, seconds * 1000);
  });

delay(4)
  .then(console.log)
  .then(() => 43)
  .then((number) => console.log(`Hello World: ${number}`))
  .catch((error) => console.log(`error : ${error.message}`));

console.log('end first tick');
