import React from 'react';
import './style.scss';
import { BG_HEAD, BREAKDOWN, BRACKET } from '../constant';
import { connect } from 'react-redux';
import TaxCompute from '../../TaxCompute';
import MatchCountryYear from './MatchCountryYear';
import IBrackets from '../../../types/IBrackets';

interface IInfo {
  country: string,
  year: string,
  amount: number
}

interface ITaxProps {
  // dispatch: Function,
  taxInfo: Array<IInfo>
}

const BgForm: React.FC<ITaxProps> = ({taxInfo}) => {
  const inputInfo = taxInfo[0];
  const { country, year, amount } = inputInfo;

  const tax_table = MatchCountryYear(country, year);
  const result: IBrackets = TaxCompute(tax_table, amount)!;
  const { sum, I, II, III, IV, V } = result;

  const breakdown = [
    { name: '$0 - $18,200', value: I },
    { name: '$18201 - $45000', value: II },
    { name: '$45001 - $120000', value: III },
    { name: '$120001 - $180000', value: IV },
    { name: '$180001+ ', value: V },
  ];

  const formatNum = (num: number | string) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div className="form">
      <div className="head">
        <div className="label">{BG_HEAD}</div>
        <div className="taxable">
          <div className="taxable-text">$ {formatNum(sum)}</div>
        </div>
      </div>

      <div className="detail">
        <div className="label">{BREAKDOWN}</div>
        {breakdown.map((b, i) => {
          return (
            <div className="bracket" key={i}>
              <div className="left">
                <div className="title">{BRACKET}</div>
                <div className="subtitle">{formatNum(b.name)}</div>
              </div>
              <div className="tax-value">$ {formatNum(b.value)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default connect((state: Array<IInfo>) => ({ taxInfo: state }))(BgForm);
