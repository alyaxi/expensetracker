import React, {useContext, useState} from 'react';
import {TranscationContext} from './transContext'


const Child=()=> {
    let {transactions, addTransaction} = useContext(TranscationContext);
    let [newdescrp , setdescrp] = useState("")
    let [newamount , setamount] = useState(0)
    const handleAddition = (event) => {
        event.preventDefault();
        if(Number(newamount) === 0){
            alert("Please enter valid amount");
            return false
        }
        addTransaction({
            amount: Number(newamount),
            descrp: newdescrp
        })
        setdescrp("")
        setamount(0)
    }
    
    const getIncome = () => {
        let income = 0
        for (let i = 0; i < transactions.length; i++){
            if(transactions[i].amount > 0)
                income += transactions[i].amount
            
            }
            return income
    }
    const getExpense = () => {
        let expense = 0;
        for(let i = 0; i < transactions.length; i++){
            if(transactions[i].amount < 0)
                expense += transactions[i].amount
            
            }
            return expense

    }
  return (
    <div className='container'>
      <h1 className='text-center'>Expense Tracker</h1>
     <div className='balance-container'>
    <h3>YOUR BALANCE:  <br /></h3>
      <h3 className="amount-font"> ${getIncome() + getExpense()} </h3>
      </div>
      <div className='expense-container'>
        <h3>INCOME <br /> ${getIncome()} </h3>
        
        <h3>EXPENSE <br /> ${getExpense()} </h3>
        
    </div>
    <h3>History</h3>
    <hr/>
    <ul className='history-container'>
        {transactions.map((transObj, index)=>{
            // console.log(transObj);
            return(
                <li key={index}>
                <span>{transObj.descrp}</span>
                <span>${transObj.amount}</span>
            </li>
            )
        })}
       
    </ul>
    <h3>Add new Transction</h3>
    <hr />

    <form className='transction-form' onSubmit={handleAddition} >
        <label>
            Enter Amount <br/>
            <input type='text' onChange={(eve)=>setamount(eve.target.value)} placeholder="Enter the amount"
            value={newamount}
             required/>
        </label> <br/>
        <label>
            Enter Description <br/>
            <input type='text' onChange={(eve)=>setdescrp(eve.target.value)}
            placeholder="Enter the Description"
            value={newdescrp}
            required/>
        </label>
        <br />
        <input type='submit' value='Add Transcation'/>
        <hr />
        <label className="text-center">Syed Ali Limited</label>
    </form>
    </div>
    
  );
}


export default Child;
