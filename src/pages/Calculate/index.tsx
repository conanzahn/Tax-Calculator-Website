import React from 'react';

import './Calculate.scss';
import BgImg from '../../components/Background/BgImg';
import BGtext from '../../components/Background/BGtext';
import CalcForm from '../../components/Form/CalcForm';

export default function Calculate() {
  return (
    <div className="card-container">
      <div className="left">
        <BgImg />
        <BGtext />
      </div>
      <CalcForm />
    </div>
  );
}
