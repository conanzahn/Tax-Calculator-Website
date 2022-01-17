import { AUS_2021 } from '../TaxTable';

const MatchCountryYear = (country: string, year: string) => {
  const match = [
    {key:'Australia2020-2021', value: AUS_2021}
    /* further option add below, for example: */
    // 'Australia2019-2020': AUS_2020,
  ];

  const matchKey: string = country + year;
  return match.filter(item => item.key === matchKey)[0].value;
};
export default MatchCountryYear;
