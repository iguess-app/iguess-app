const getTimeFromISO = ISODate => {
  return ISODate.slice(11, 16)
    .replace(':', 'H ')
    .concat('M');
};

export default getTimeFromISO;
