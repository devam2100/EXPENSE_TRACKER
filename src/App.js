
import './App.css';
import {Header} from './components/Header';
import Balance from './components/Balance';
import Ex from './components/expense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <>
  <GlobalProvider>
        <Header />
      <div className='Container'>
       <Balance />
       <Ex />
       <TransactionList />
       < AddTransaction />
      </div>
   </GlobalProvider>
   </>
  );
}

export default App;
