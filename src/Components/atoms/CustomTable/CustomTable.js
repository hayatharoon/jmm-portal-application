import React from 'react';
import './customTable.css';

const CustomTable = ({ data, fields, setShowModal, setClickEmployee }) => {
  console.log('field', fields);
  const handleClick = (item) => {
    setClickEmployee(item);
    setShowModal(true);
  };

  return (
    <>
      <table className='custom-table'>
        <thead>
          <tr>
            {fields?.map((key, tindex) => {
              return <th key={tindex}>{key.text}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => {
            return (
              <tr key={index}>
                {fields.map((field, keyIndex) => {
                  return (
                    <>
                      {field.key === 'name' ? (
                        <td key={keyIndex} onClick={() => handleClick(item)}>
                          <span className='employee-name'>{item[field.key]}</span>
                        </td>
                      ) : (
                        <td key={keyIndex}>{item[field.key]}</td>
                      )}
                    </>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default CustomTable;
