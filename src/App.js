import Appcontainer from './styles/App.module.css'
import Header from "./components/Header";
import CreditCardDetails from "./components/CreditCardDetails"
import AddCreditCard from "./components/AddCreditCard"
import './styles/global.css'


function App() {
  return (
    <div className={Appcontainer.container}>
      <Header/>
      <hr className={Appcontainer.headerDivider}/>
      <div className={Appcontainer.paymentInformation}>
        <CreditCardDetails/>
        <AddCreditCard/>
      </div>
      <hr className={Appcontainer.paymentSummaryDivider}/>
    </div>
  );
}

export default App;
