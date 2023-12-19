import { DateTime } from 'luxon';

export default (lastTestDate: DateTime): number => {
  const todayDate = DateTime.fromISO(DateTime.now().toISODate());
  const delta = lastTestDate.diff(todayDate, 'days').toObject().days;
  if (delta !== undefined) {
    return Math.abs(delta);
  }
  return -1;
};
