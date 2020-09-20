const currencyNumber = (value: string): number => {
  let buffer = parseFloat(value.replace(/[\D]+/g, ''));
  if (Number.isNaN(buffer)) return 0;
  if (buffer < 100) buffer *= 100;
  return buffer / 100;
};

const currencyMask = (value: string): string => {
  const entry = value.search(/[R$]/i) ? Number(value).toFixed(2) : value;

  let buffer = String(entry).replace(/[\D]+/g, '');
  buffer = buffer.replace(/([0-9]{2})$/g, ',$1');
  if (buffer.length > 6)
    buffer = buffer.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2');
  return `R$ ${buffer}`;
};

export { currencyMask, currencyNumber };
