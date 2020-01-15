module.exports = (arr) => {
  return [...arr].sort(() => Math.random() - 0.5);
}
