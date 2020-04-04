import React from 'react';
import Loader from 'react-loader-spinner';
import './spinner.scss';

export const Spinner = () => (
  <div className="loader">
    <Loader
      type="Hearts"
      color="#0adbf7"
      height={100}
      width={100}
      timeout={5000}
    />
  </div>
);
