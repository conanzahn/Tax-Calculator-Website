/* This file store the tax table 
  please add more tax table here */

export const AUS_2021 = [
  {
    min: 0,
    max: 18200,
    floor: 0,
    base: 0,
    rate: 0,
  },
  {
    min: 18201,
    max: 45000,
    floor: 18200,
    base: 0,
    rate: 0.19,
  },
  {
    min: 45001,
    max: 120000,
    floor: 45000,
    base: 5092,
    rate: 0.325,
  },
  {
    min: 120001,
    max: 180000,
    floor: 120000,
    base: 29467,
    rate: 0.37,
  },
  {
    min: 180001,
    max: Number.POSITIVE_INFINITY,
    floor: 180000,
    base: 51667,
    rate: 0.45,
  },
];

/* add other tax table below, for example: */
// export const AUS_2020 = [];
