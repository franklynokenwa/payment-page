import { useState,useEffect } from 'react';
import Appcontainer from './styles/App.module.css'
import Header from "./components/Header";
import CreditCardDetails from "./components/CreditCardDetails"
import AddCreditCard from "./components/AddCreditCard"
import './styles/global.css'
import PaymentSummary from './components/PaymentSummary';
import DataContext from './components/DataContext';


function App() {
  const [formData, setFormData] = useState({
    creditCardNumber:"", 
    securityCode:"", 
    expirationDate:"", 
    postalCode:"" ,
    isChecked:"",

});

const [userCreditCardDetails, setUserCreditCardDetails] = useState({
  cardNumber: "",
  cardExpirationDate: ""

})


const handleChange = (event) => {
  const {name,value, type, checked} = event.target
  
  setFormData( prevFormData => {
      return {
          ...prevFormData,
          [name]: type === "checkbox" ? checked : value
      }
  })    
}

  return (
    <DataContext.Provider value={{formData,setFormData,handleChange, userCreditCardDetails, setUserCreditCardDetails}}>
      <div className={Appcontainer.container}>
        <Header/>
        <hr className={Appcontainer.headerDivider}/>
        <div className={Appcontainer.paymentInformation}>
          <CreditCardDetails/>
          <AddCreditCard/>
        </div>
        <hr className={Appcontainer.paymentSummaryDivider}/>
        <PaymentSummary/>
      </div>
    </DataContext.Provider>
  );
}

export default App;
