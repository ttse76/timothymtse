const utils = require('mundane-utils');

exports.getCount = async (guests) => {
    let count = 0;
    guests.forEach(guest => {
        const num = Number(guest.numguests);
        count += this.isValidNumber(num) ? num : 0;
    });
    return count;
};

exports.isValidNumber = (num) => {
    if(num === null || num === undefined || isNaN(num)){
      return false;
    }
    return true;
};