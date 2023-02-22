const randomCode = () => {
  return Math.floor(Math.random() * 100_000_000_000).toString()
}

export { randomCode }
