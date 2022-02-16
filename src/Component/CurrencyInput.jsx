import React from 'react';
import currencyStyles from '../styles/CurrencyInput.module.css'

const CurrencyInput = ({
    currencyOption, 
    selectedCurrency, 
    onChangeCurrency,
    onChangeAmount,

    amount
}) => {  
  const filters = ['EUR', 'NGN', 'USD']
  const uniqueCurrencies = [...new Set(currencyOption)]
  return(
  <div className={currencyStyles.currencySelect}>
       <select className={currencyStyles.select} value={selectedCurrency} onChange={onChangeCurrency}>
          {uniqueCurrencies?.map(item => {
            if(filters.includes(item)) {
              return (
                <option key={item} value={item}>{item}</option>
            )}
          })}  
      </select>
      <input type="number" id="currency-field" value={amount} className={currencyStyles.input} onChange={onChangeAmount}/>
     
  </div>
  )
};

export default CurrencyInput;
