import React from 'react';

const ReadTable = ({item}) => {
  return (
    <tr>
    <td>{item.date}</td>
    <td>{item.name}</td>
    <td >{item.detail}</td>
    <td style={{color:"rgb(31, 29, 29)"}}>{item.amount}</td>      
    <td style={{padding :"10px"}}>
    <button style={{width: '50px', background: 'aliceblue', color:"rgb(31, 29, 29)", border: '2px solid #6976d9', margin: '5px'}}>edit</button>
    <button style={{width: '50px', background: 'aliceblue',color:"rgb(31, 29, 29)", border: '2px solid #6976d9'}}>delete</button>
    </td>      
  </tr>
  );
};

export default ReadTable;
