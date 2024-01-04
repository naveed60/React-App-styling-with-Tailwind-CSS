// Modal.js
import React from 'react';
import './Modal.css'; // Import the CSS file for styling

const Modal = ({ inputValue, onClose }) => {
  return (
    <div className="p-2  w-full flex items-center justify-center ">
      <div className="modal-content bg-gray-400 shadow-2xl text-white px-24">
        <p>Added successfully!</p>
        <p>Title {inputValue}</p>
        <button className='bg-black text-white rounded mt-2 p-2 px-4' onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
