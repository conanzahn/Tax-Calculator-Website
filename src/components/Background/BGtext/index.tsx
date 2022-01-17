import React from 'react';
import './style.scss';
import { TITLE, SUBTITLE } from '../constant';

export default function Background() {
  return (
    <div className="text">
      <p className="title">{TITLE}</p>
      <p className="sub-title">{SUBTITLE}</p>
    </div>
  );
}
