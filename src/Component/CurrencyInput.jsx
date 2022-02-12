import React from 'react';
import currencyStyles from '../styles/CurrencyInput.module.css'

const CurrencyInput = ({
    currencyOption, 
    selectedCurrency, 
    onChangeCurrency,
    onChangeAmount,

    amount
}) => {  
  return(
  <div className={currencyStyles.currencySelect}>
       <select className={currencyStyles.select} value={selectedCurrency} onChange={onChangeCurrency}>
          {currencyOption.map(item => (
              <option key={item} value={item}>{item}</option>
          ))}   
      </select>
      <input type="number" id="currency-field" value={amount} className={currencyStyles.input}/>
     
  </div>
  )
};

export default CurrencyInput;
