// Javascript Date methods for when you dont want to wait for MomentJS.
// Sorting dates in Ascending order. Returns the array of dates sorted.
function sortDateAscending(arrayOfDates) {
    arrayOfDates.sort(function (a, b) {
        return a - b;
    });
    return arrayOfDates;
}
// Sorting dates in Descending order. Returns the array of dates sorted.
function sortDateDescending(arrayOfDates) {
    arrayOfDates.sort(function (a, b) {
        return b - a;
    });
    return arrayOfDates;
}
// Parameter: Input format that you wish the date to be in.
// Returns: The new date in the desired format.
function convertDate(inputFormat) {
  function pad(s) { return (s < 10) ? '0' + s : s; }
  var d = new Date(inputFormat);
  return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/');
}