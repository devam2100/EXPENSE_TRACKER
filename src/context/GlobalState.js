import React,{createContext,useReducer } from 'react'
import AppReducer from './AppReducer';

const InitialState = {
    transactions:
   [
  { id: 1, text: 'Flower', amount: -20 },
  { id: 2, text: 'Salary', amount: 300 },
  { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: 150 }
]
}

export const GlobalContext = createContext(InitialState);
export const GlobalProvider = ({ children })=>{
    const[state,dispatch]=useReducer(AppReducer,InitialState);
   
    function d(id){
        dispatch(
            {
            type:'DELETE_TRANSACTION',
            payload : id
        });
    }
        function add(transaction){
            dispatch(
                {
                type:'ADD_TRANSACTION',
                payload : transaction
            });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        d,add
        }}>  
     {children} 
    </GlobalContext.Provider>)
}