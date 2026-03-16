module.exports = async () => {
  const mod = await import("./lib/index.js")
  return mod
}
