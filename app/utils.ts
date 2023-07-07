function fromWei(amount: string) {
  return (parseFloat(amount) / 1000000000000000000).toString();
}

function secondsToDays(seconds: string) {
  return (parseFloat(seconds) / 86400).toString();
}

export { fromWei, secondsToDays };
