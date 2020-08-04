const updateCount = (dataTarget, counter) => {
  const speed = 100;
  const target = +dataTarget;
  let count = +counter;
  const inc = target / speed;

  while (count < target) {
    count += inc;
    setTimeout(updateCount, 1000);
  }
  count = target;

  return count;
};

export default updateCount;
