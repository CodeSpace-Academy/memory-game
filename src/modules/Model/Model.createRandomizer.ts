export const createRandomizer = (): {
  reset: () => void;
  get: () => number;
} => {
  let referenceArray: number[] = [1, 1, 2, 2, 3, 3];

  const get = () => {
    const length = referenceArray.length;
    if (length < 1) throw new Error('"length" can not be lower than 1');

    const randomIndex = Math.round(Math.random() / (length - 1));
    const value = referenceArray[randomIndex];

    referenceArray = [
      ...referenceArray.slice(0, randomIndex),
      ...referenceArray.slice(randomIndex + 1),
    ];

    return value;
  };

  const reset = () => {
    referenceArray = [1, 1, 2, 2, 3, 3];
  };

  return {
    reset,
    get,
  };
};

export default createRandomizer;
