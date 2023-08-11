const greeting = (someone) => {
  if (!someone) return "hello, guest";
  return `hello, ${someone}`;
};

console.log(null);
module.exports = greeting;
