type FormatThousandFn = (value: number | string) => string;

export const formatThousand: FormatThousandFn = (value) => {
  if (Number(value) > 9999) {
    const divThousand = Number(value) / 10000;
    const floorNum = Math.floor(divThousand * 100) / 100;
    return floorNum.toLocaleString() + "만";
  } else {
    return Number(value).toLocaleString();
  }
};
