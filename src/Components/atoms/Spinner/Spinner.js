import React from 'react';
import './spinner.css';

const Spinner = ({ backgroundColor, style }) => {
  console.log('Spinner Called');
  const colorStyle = {
    backgroundColor: backgroundColor,
  };
  return (
    <>
      <div className='spinner' style={style ? style : {}}>
        <div className='bounce1' style={colorStyle} />
        <div className='bounce2' style={colorStyle} />
        <div className='bounce3' style={colorStyle} />
      </div>
    </>
  );
};

export default Spinner;
