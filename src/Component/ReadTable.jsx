import React from 'react';

const ReadTable = ({item}) => {
  return (
    <tr>
    <td data-label="Date">{item.date}</td>
    <td data-label="Name">{item.name}</td>
    <td data-label="Detail">{item.detail}</td>
    <td data-label="Amount" style={{color:"rgb(31, 29, 29)"}}>{item.amount}</td>      
    <td data-label="Action" style={{padding :"10px"}}>
    <button style={{width: '50px', background: 'aliceblue', color:"rgb(31, 29, 29)", border: '2px solid #6976d9', margin: '5px'}}>edit</button>
    <button style={{width: '50px', background: 'aliceblue',color:"rgb(31, 29, 29)", border: '2px solid #6976d9'}}>delete</button>
    </td>      
  </tr>
  );
};

export default ReadTable;
