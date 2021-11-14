// Data to be obtained
const data = require('../data/timeTracking.js');

const getData = () => {
    return data.timeTrackingData;
}

module.exports = { getData }