import Freecurrencyapi from "@everapi/freecurrencyapi-js";

const freecurrencyapi = new Freecurrencyapi(
  "fca_live_hiSz4oe63iQwgDXg8KmtDRwlwHGum55MqEt67dl5"
);

export async function convertCurrency(fromCurrency, toCurrency, units) {
  const res = await freecurrencyapi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency,
  });

  const multiplier = res.data[toCurrency];

  return multiplier * (units * 1);
}
