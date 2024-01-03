import React from 'react';

import './Button.css';

const Button = props => {
  return (
    <button className="bg-[#8b005d] hover:bg-violet-600 text-white rounded p-2" type={props.type}  onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
