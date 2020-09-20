const currencyNumber = (value: string): number => {
  return Number(value.replace(/[\D]+/g, ''));
};

const currencyMask = (value: string): string => {
  let buffer = value.replace(/[\D]+/g, '');
  buffer = buffer.replace(/([0-9]{2})$/g, ',$1');
  if (buffer.length > 6)
    buffer = buffer.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2');
  return `R$ ${buffer}`;
};

export { currencyMask, currencyNumber };
