/* eslint-disable guard-for-in */
export default function orderByProps(obj, order) {
  const orderedByProps = [];
  const orderedByAlphabet = [];

  for (const prop in obj) {
    const property = {};
    if (order.includes(prop)) {
      property.key = prop;
      property.value = obj[prop];
      orderedByProps.push(property);
    } else {
      property.key = prop;
      property.value = obj[prop];
      orderedByAlphabet.push(property);
    }
  }

  orderedByAlphabet.sort((a, b) => {
    if (a.key > b.key) {
      return 1;
    }
    if (a.key < b.key) {
      return -1;
    }
    return 0;
  });

  const result = orderedByProps.concat(orderedByAlphabet);
  return result;
}
