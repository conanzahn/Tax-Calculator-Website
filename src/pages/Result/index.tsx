import React from 'react';
import ResForm from '../../components/Form/ResForm';
import BgImg from '../../components/Background/BgImg';
import BgForm from '../../components/Background/BgForm';
import './Result.scss';

export default function Result() {
  return (
    <div className="card-container">
      <ResForm />
      <div className="right">
        <BgImg />
        <BgForm />
      </div>
    </div>
  );
}
