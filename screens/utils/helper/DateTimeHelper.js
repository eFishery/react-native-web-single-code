import getHours from 'date-fns/get_hours';
import getMinutes from 'date-fns/get_minutes';

function getEpoch(seconds) {
  return new Date(1970, 1, 1, 0, 0, seconds);
}

function makeTwoDigits(num) {
  return num < 10 ? `0${num}` : num;
}

function getHoursAndMinutes(time) {
  return {
    hours: makeTwoDigits(getHours(time)),
    minutes: makeTwoDigits(getMinutes(time)),
  };
}

export { getEpoch, getHoursAndMinutes };
