function delay(seconds, callback) {
  setTimeout(callback, seconds * 1000);
}

console.log('Starting delays');

delay(2, () => {
  console.log('two seconds');
  delay(1, () => {
    console.log('Three seconds');
    delay(1, () => {
      console.log('four seconds');
    });
  });
});
