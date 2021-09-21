let timer = 100;
let spinnerArray = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];

for (let elem of spinnerArray) {
  setTimeout(() => {
    process.stdout.write(elem);
  }, 100 + timer);
  timer += 200;
};