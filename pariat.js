// Example function to check if a time unit is UTC
function isUTCTimeUnit(timeUnit) {
    return timeUnit.toLowerCase() === 'utc'; // Simplified check for 'utc'
}

const fullTimeUnit = 'UTC';
const utc = isUTCTimeUnit(fullTimeUnit) ? 'utc' : '';

console.log(utc); // Output: 'utc'

const fullTimeUnit2 = 'PST';
const utc2 = isUTCTimeUnit(fullTimeUnit2) ? 'utc' : '';

console.log(utc2); // Output: ''
