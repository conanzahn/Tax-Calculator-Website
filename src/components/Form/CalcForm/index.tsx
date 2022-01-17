import React, { FormEvent, ChangeEvent, useState } from 'react';
import './CalcForm.scss';
import {
  CAL_HEADING,
  INFO,
  LABEL_COUNTRY,
  LABEL_YEAR,
  LABEL_AMOUNT,
  SUBMIT_BTN,
} from '../constant';
import { submitTaxAction } from '../../../redux/actions/calculate';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ITaxInputs from '../../../types/ITaxInputs';
import { Interface } from 'readline';

interface ICalcForm {
  submitTaxAction: Function
}

const CalcForm: React.FC<ICalcForm> = ({submitTaxAction}) => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // e.preventDefault();
    submitTaxAction(inputs);
    navigate('result');
  };

  return (
    <form className="calc-form" onSubmit={handleSubmit}>
      <div className="heading">{CAL_HEADING}</div>
      <div className="info-box">
        <span className="icon">i</span>
        <span className="content">{INFO}</span>
      </div>

      <div className="form-group">
        <label className="label">{LABEL_COUNTRY}</label>
        <select
          className="input"
          name="country"
          required
          defaultValue={'DEFAULT'}
          onChange={handleChange}
        >
          <option value="DEFAULT" disabled>
            Select
          </option>
          <option value="Australia" className="input-text">
            Australia
          </option>
          {/* <option value="Canada">Canada</option> */}
        </select>
        <span className="arrow-down"></span>
      </div>

      <div className="form-group">
        <label className="label">{LABEL_YEAR}</label>
        <select
          className="input"
          required
          name="year"
          defaultValue={'DEFAULT'}
          onChange={handleChange}
        >
          <option value="DEFAULT" disabled>
            Select
          </option>
          <option className="input-text" value="2020-2021">
            2020 - 2021
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
          placeholder="Amount"
          name="amount"
          onChange={handleChange}
        />
        <span className="text-value">.00</span>
      </div>

      <button type="submit" className="btn">
        <span className="btn-text">{SUBMIT_BTN}</span>
      </button>
    </form>
  );
}

export default connect((state: ITaxInputs) => ({ inputGroup: state }), { submitTaxAction })(
  CalcForm
);
