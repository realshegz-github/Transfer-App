import React, { useState } from 'react';
import data from '../trans-data.json';
import ReadTable from '../../src/Component/ReadTable'
import historyStyles from '../../src/styles/Transaction.module.css'
const Transaction = () => {
  const [contact,setContact] = useState(data)

  return (
  <div className={historyStyles.wrapper}>
      <div className={historyStyles.transactionBox}>
          <div className={historyStyles.topBox}>
              <div className={historyStyles.history}>
                <h3>TRANSACTIONS</h3>
                <p>All Transaction History</p>
              </div>
              <button className={historyStyles.button} type="button">ADD TRANSACTION</button>
          </div>

          <div className={historyStyles.table}>
            <table>
                <thead>
                    <tr>
                      <th>Date</th>
                      <th>Name</th>
                      <th>Details</th>
                      <th>Amount</th>
                      <th>Action</th>
                    </tr>
                </thead>
                
                <tbody>
                  {contact.map((item)=>(<ReadTable keys={item.id} item={item}/>)
                  )}
                </tbody>
            </table>
          </div>
          <div className={historyStyles.downBox}>      
              <button className={historyStyles.downButton} type="button">ACCOUNT REPORT</button>
              <button className={historyStyles.downButton} type="button">MANAGE PAYMENTS</button>
              <button className={historyStyles.downButton} type="button">SEND YEARLY STATEMENT</button>
              <button className={historyStyles.downButton} type="button">POST UPDATE</button>
             
          </div>
      </div>

  </div>
  );
};

export default Transaction;
