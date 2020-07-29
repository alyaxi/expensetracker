import React , {createContext ,useReducer} from 'react';
import TransactionReducer from './TrancationReducer';



let initialTransctions = [
    {amount:  100, descrp: "Cash"},
    {amount: -40, descrp: "Book"},
    {amount: -200, descrp: "Camera"}
]
export const TranscationContext = createContext(initialTransctions);

export const TranscationProvider = ({children})=>{
    
    const [state, dispatch] = useReducer(TransactionReducer, initialTransctions);
    

    function addTransaction(transObj){
        dispatch({
            type: 'Add',
            payload:{
                amount:transObj.amount,
                descrp: transObj.descrp
                 
            },
            
        })
    } 
     
    return (
        <TranscationContext.Provider value={
            {
              
                transactions: state,
                addTransaction                               
               
            }
            // console.log(App); 
        }>
            {children}
            
        </TranscationContext.Provider>
        
    )
}
