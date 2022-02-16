import React, { useEffect, useState} from 'react';
import tranStyles from '../styles/Transfer.module.css'
import CurrencyInput from '../Component/CurrencyInput';

const baseUrl = 'http://api.exchangeratesapi.io/v1/latest?access_key=335d2dc9bdbf47859b66c65e8794f0f8';
 

const Transfer = () => {

  const [currencyOption, setCurrencyOption] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let toAmount, fromAmount
  if(amountInFromCurrency){
    fromAmount = amount
    toAmount = amount * exchangeRate
  } else{
    toAmount = amount
    fromAmount = amount / exchangeRate
  }

  useEffect(()=>{
    fetch(baseUrl)
    .then(res => res.json())
    .then(data => {
      const firstCurrency = Object.keys(data.rates)[0];
      setCurrencyOption([data.base, ...Object.keys(data.rates)]);
      setFromCurrency(data.base)
      setToCurrency(firstCurrency)
      setExchangeRate(data.rates[firstCurrency])
  })
  }, [])

   function handleFromAmountChange(e){
      setAmount(e.target.value);
      setAmountInFromCurrency(true);
   }
   function handleToAmountChange(e){
      setAmount(e.target.value);
      setAmountInFromCurrency(false);
   }

   useEffect(()=>{
     if(fromCurrency != null && toCurrency != null){
       
      fetch(`${baseUrl}?base=${fromCurrency}&symbols=${toCurrency}`)
     .then(res =>res.json())
     .then(data => setExchangeRate(data.rates[toCurrency]))
   }
  }, [fromCurrency, toCurrency])
  

  return(
      
     <div className={tranStyles.container}>
       <div className={tranStyles.context}>
          <h1>Discover the Latest currency App to make <span style={{color:'#6976d9'}}>transfer</span> accross the continent </h1>
          <p> We help to convert and make <span style={{color:'#6976d9'}}><b>transfer</b></span> accross countries</p>
       </div>
       <div className={tranStyles.currency}>
            <CurrencyInput 
            currencyOption={currencyOption}
            selectedCurrency={fromCurrency}
            onChangeCurrency={e=> setFromCurrency(e.target.value)}
            onChangeAmount={handleFromAmountChange}
            amount = {fromAmount}
            />
            <div className={tranStyles.equal}>
              <p>=</p>
            </div>

            <CurrencyInput
            currencyOption={currencyOption}
            selectedCurrency={toCurrency}
            onChangeCurrency={e=> setToCurrency(e.target.value)}
            onChangeAmount={handleToAmountChange}
            amount = {toAmount}
            />
            <div >
              <button type='submit'className={tranStyles.button}>Get started</button>
            </div>
       </div>
      </div>
    // )
  )
};

export default Transfer;
