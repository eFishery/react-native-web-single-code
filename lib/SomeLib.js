import getMilliseconds from 'date-fns/get_milliseconds'

function printA() {
  console.log('xd');
}

function printB() {
  console.log('xp');
  const t = getMilliseconds();
}

export { printA, printB };
