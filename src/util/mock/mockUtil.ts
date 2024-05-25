function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function shuffleArray(array: unknown[]) {
  let currentIndex = array.length;

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // eslint-disable-next-line no-param-reassign
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function randomizeMockData<T>(data: T[]) {
  const randomNumber = Math.floor(Math.random() * (data.length - 1) + 1);
  const shuffleData = shuffleArray(data);
  const randomizedItems = shuffleData.slice(0, randomNumber);

  return { data: randomizedItems };
}

export { randomizeMockData, shuffleArray, sleep };
