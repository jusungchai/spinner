const spinner = "|/-\\|/-\\|\n";
let i = 100;
for (let position of spinner){
  setTimeout(() => {
    position === "\n" ? process.stdout.write(`\r${position}`) : process.stdout.write(`\r${position}   `);
  }, i);
  i += 200;
}