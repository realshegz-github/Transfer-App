import React from 'react';
import TransactionData from './TransactionData';
const TransactionTable = () => {
  return (
        <table>
            <thead>
                <tr>
                   <th>Date</th> 
                   <th>Name</th> 
                   <th>Details</th> 
                   <th>Amount</th> 
                </tr>
            </thead>
            <tbody>
                    {Object.values(TransactionData).map((item, index) => {
                        <tr>
                            <td>{item.date}</td>
                            <td>{item.name}</td>
                            <td>{item.detail}</td>
                            <td>{item.amount}</td>
                        </tr>
                    })}
            </tbody>
            
        </table>
  );
};

export default TransactionTable;
