import ITable from "../../types/ITable";

interface IRow {
  floor: number, base: number, rate: number
}

export default function compute(taxTable: Array<ITable>, income: number) {
  let row: IRow, level;
  const taxBreak = { sum: 0, I: 0, II: 0, III: 0, IV: 0, V: 0 };
  for (let i = 0; i < taxTable.length; i++) {
    // find the level the income is
    if (income >= taxTable[i].min && income <= taxTable[i].max) {
      // assign the matched level object to row
      row = taxTable[i];
      // mark the matched level
      level = i;

      break;
    }
  }
  // deconstruct proporties in the matched level
  const { floor, base, rate } = row!;
  let total = (income - floor) * rate + base;
  taxBreak.sum = total;

  switch (level) {
    case 0:
      return taxBreak;
    case 1:
      taxBreak.II = total;
      return taxBreak;
    case 2:
      taxBreak.II = taxTable[level].base;
      taxBreak.III = total - taxBreak.II;
      return taxBreak;
    case 3:
      taxBreak.II = taxTable[level - 1].base;
      taxBreak.III = taxTable[level].base;
      taxBreak.IV = total - taxBreak.III;
      return taxBreak;
    case 4:
      taxBreak.II = taxTable[level - 2].base;
      taxBreak.III = taxTable[level - 1].base;
      taxBreak.IV = taxTable[level].base;
      taxBreak.V = total - taxBreak.IV;
      return taxBreak;
  }
}
