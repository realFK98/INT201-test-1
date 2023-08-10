const greeting = (someone) => {
  if (!someone) return "hello, guest";
  return `hello, ${someone}`;
};

module.exports = greeting;
