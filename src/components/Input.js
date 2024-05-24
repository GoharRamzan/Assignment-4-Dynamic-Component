// src/components/Input.js
import React from 'react';
import './css/Input.css';

const Input = ({ type = "text", placeholder, value, onChange }) => {
  return (
    <input 
      type={type} 
      placeholder={placeholder} 
      value={value} 
      onChange={onChange} 
      className="input" 
    />
  );
};

export default Input;
