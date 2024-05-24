// src/App.js
import React, { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import Table from './components/Table';
import './App.css';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [tableData, setTableData] = useState([]);
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    if (event.target.value) {
      setError('');  // Clear the error if input is not empty
    }
  };

  const handleButtonClick = () => {
    if (inputValue.trim() === '') {
      setError('Input value is required');
      return;
    }
    setTableData([...tableData, { id: tableData.length + 1, value: inputValue }]);
    setInputValue('');
  };

  return (
    <div className="App">
      <header className="header">Dynamic Components with React</header>
      <div className="content">
        <Input 
          placeholder="Enter some text" 
          value={inputValue} 
          onChange={handleInputChange} 
        />
        <Button 
          label="Add to Table" 
          onClick={handleButtonClick} 
        />
        {error && <p className="error">{error}</p>}
        <Table 
          data={tableData} 
        />
      </div>
      
    </div>
  );
};

export default App;
