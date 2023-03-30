type FormatThousandFn = (value: number | string) => number;

export const formatThousand: FormatThousandFn = (value) => {
  const divThousand = Number(value) / 10000;
  const floorNum = Math.floor(divThousand * 100) / 100;
  return floorNum;
};
