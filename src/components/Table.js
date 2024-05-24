// src/components/Table.js
import React from 'react';
import './css/Table.css';

const Table = ({ data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {data.length > 0 && Object.keys(data[0]).map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {Object.values(row).map((value, i) => (
              <td key={i}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
