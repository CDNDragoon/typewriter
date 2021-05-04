const sentence = "hello there from lighthouse labs";
let counter = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, ++counter * 100) // <= 1s delay to make it noticeable. Can dial it down later.
};
  setTimeout(() => {
  process.stdout.write('\n');
}, ++counter * 100);