import Vue from 'vue';

Vue.filter('isoDate', (date) => {
  if (!date) { return date; }
  let mDate = date;
  if (typeof date.toDate === 'function') {
    mDate = date.toDate();
  } else if (typeof date === 'string') {
    mDate = new Date(date);
  }
  if (mDate instanceof Date) {
    return mDate.toISOString();
  }
  return mDate;
});

Vue.filter('formatDate', (date) => {
  if (!date) { return date; }
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  let mDate = date;
  if (typeof date.toDate === 'function') {
    mDate = date.toDate();
  } else if (typeof date === 'string') {
    mDate = new Date(date);
  }
  if (mDate instanceof Date) {
    return mDate.toLocaleDateString('en-US', options);
  }
  return mDate;
});
