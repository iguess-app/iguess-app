// Will be deleted
// The data should be retrieved from the API
// with correct formatation

export const getTimeFromDate = ISODate => {
  return ISODate.slice(11, 16)
    .replace(':', 'H ')
    .concat('M');
};

// WARNING - Year isn't considered
// Possible returns:
// 1 - Tomorrow or +
// 0 - Today
// -1 - Yesterday or +
export const compareDateWithToday = ISODate => {
  const date = new Date(ISODate);
  const now = new Date();

  let monthComparison = date.getMonth() - now.getMonth();

  if (monthComparison > 0) {
    return 1;
  } else if (monthComparison < 0) {
    return -1;
  } else {
    // do nothing
  }

  let dayComparison = date.getUTCDate() - now.getUTCDate();

  if (dayComparison > 0) {
    return 1;
  } else if (dayComparison < 0) {
    return -1;
  }

  return 0;
};

export default getTimeFromDate;
