const actionCreator = (url, type, id, currentVal) => {
  const typeUpperCase = type.toUpperCase();

  return {
    type: `${typeUpperCase}_REQUEST`,
    payload: { id, currentVal },
    meta: {
      offline: {
        effect: {
          method: 'HEAD',
          url,
        },
        commit: {
          type: `${typeUpperCase}_COMMIT`,
          meta: { id },
        },
        rollback: {
          type: `${typeUpperCase}_ROLLBACK`,
          meta: { lastVal: currentVal, id },
        },
      },
    },
  };
};

function increment(currentVal, id) {
  return actionCreator(
    'https://dog.ceo/api/breeds/list/all',
    'increment',
    id,
    currentVal,
  );
}

function decrement(currentVal, id) {
  return actionCreator(
    'https://dog.ceo/api/breeds/list/all',
    'decrement',
    id,
    currentVal,
  );
}

function reset(currentVal, id) {
  return actionCreator(
    'https://dog.ceo/api/breeds/list/all',
    'reset',
    id,
    currentVal,
  );
}

export { increment, decrement, reset };
