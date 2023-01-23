function calc() {
  let euro = input_euro.value;
  let result = euro * 0.98;
  input_usd.value = result.toFixed(2).replace(".", ",");
}
