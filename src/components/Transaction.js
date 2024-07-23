// import React,{useContext} from 'react'
// import { GlobalContext } from '../context/GlobalState';

// const Transaction = ({transaction}) => {
//   const {deleteTransaction}= useContext(GlobalContext);
  
//     const sign = transaction.amount < 0 ? '-' : '+';
//   return (
    
//       <li className={transaction.amount<0 ? 'minus' : 'plus'}>{transaction.text}
//           Cash <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={()=> deleteTransaction(transaction.id)}className="delete-btn">x</button>
//         </li>
   
//   )
// }

// export default Transaction
// Transaction.js

import React, { useContext } from 'react';
//import { GlobalContext } from '../context/GlobalState';
//import { GlobalProvider } from '../context/GlobalState';
import { GlobalContext } from '../context/GlobalState';


const Transaction = ({ transaction }) => {
 // const  {deletetransaction}  = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';
  const  { d }  = useContext(GlobalContext);
  
  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text}{' '}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button onClick={() => d(transaction.id)} className="delete-btn">x</button>
    </li>
  );
};

export default Transaction;
