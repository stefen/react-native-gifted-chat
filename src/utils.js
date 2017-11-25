import isValid from 'date-fns/is_valid';
import startOfDay from 'date-fns/start_of_day';
import differenceInDays from 'date-fns/difference_in_days';

const DEPRECATION_MESSAGE = 'isSameUser and isSameDay should be imported from the utils module instead of using the props functions';

export function isSameDay(currentMessage = {}, diffMessage = {}) {

  if (!diffMessage.createdAt) {
    return false
  }

  let currentCreatedAt = new Date(currentMessage.createdAt);
  let diffCreatedAt = new Date(diffMessage.createdAt);

  if (!isValid(currentCreatedAt) || !isValid(diffCreatedAt)) {
    return false;
  }

  return differenceInDays(startOfDay(diffCreatedAt), startOfDay(currentCreatedAt)) === 0;

}

export function isSameUser(currentMessage = {}, diffMessage = {}) {

  return !!(diffMessage.user && currentMessage.user && diffMessage.user._id === currentMessage.user._id);

}

export function warnDeprecated(fn) {

  return (...args) => {
    console.warn(DEPRECATION_MESSAGE);
    return fn(...args);
  };

}
