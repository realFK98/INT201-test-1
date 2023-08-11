'use strict';
const greeting = (someone) => (someone ? `hello, ${someone}` : `hello, guest`);
module.exports = greeting;
