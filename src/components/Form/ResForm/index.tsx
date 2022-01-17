import React, { Fragment } from 'react';
import './ResForm.scss';
import {
  RES_HEADING,
  LABEL_COUNTRY,
  LABEL_YEAR,
  LABEL_AMOUNT,
  BACK_LINK,
} from '../constant';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ITaxInputs from '../../../types/ITaxInputs';

interface IResForm {
  taxInfo: Array<ITaxInputs>
}

const ResForm: React.FC<IResForm> = ({taxInfo}) => {
  const inputInfo = taxInfo[0];

  return (
    <div className="res-form">
      <div className="heading">{RES_HEADING}</div>

      <div className="form-group">
        <label className="label">{LABEL_COUNTRY}</label>
        <select
          className="input"
          name="country"
          defaultValue={'DEFAULT'}
          disabled
        >
          <option value="DEFAULT" className="input-text" disabled>
            {inputInfo.country}
          </option>
        </select>
        <span className="arrow-down"></span>
      </div>

      <div className="form-group">
        <label className="label">{LABEL_YEAR}</label>
        <select className="input" name="year" defaultValue={'DEFAULT'} disabled>
          <option className="input-text" value="DEFAULT" disabled>
            {inputInfo.year}
          </option>
        </select>
        <span className="arrow-down"></span>
      </div>

      <div className="form-group">
        <label className="label">{LABEL_AMOUNT}</label>
        <span className="text-dollar">$</span>
        <input
          required
          type="number"
          className="input-amount"
          placeholder={inputInfo.amount}
          name="amount"
          disabled
        />
        <span className="text-value">.00</span>
      </div>

      <div className="link">
        <Link to="/" className="link-text">
          {BACK_LINK}
        </Link>
      </div>
    </div>
  );
}

export default connect((state: Array<ITaxInputs>) => ({ taxInfo: state }))(ResForm);
