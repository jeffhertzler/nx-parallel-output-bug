const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const main = async () => {
  for (const step of [1, 2, 3, 4]) {
    await timeout(1000);
    console.log(`step ${step} complete`);
  }
};

main();
