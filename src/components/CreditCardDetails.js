import React,{useContext} from 'react'
import CreditCardDetailsStyle from '../styles/CreditCardDetails.module.css' 
import wifiLogo from '../images/wifiLogo.PNG'
import securityChip from '../images/securityChip.PNG'
import mastercardLogo from '../images/mastercardLogo.PNG'
import DataContext from '../components/DataContext';


const CreditCardDetails = () => {
  const Data = useContext(DataContext);
  const {formData, userCreditCardDetails}=Data;

  return (
    <section>
        <h2>Payment Information</h2>
        <p>Choose your method of payment</p>
        <div className={CreditCardDetailsStyle.creditCard}>
            <p>CARD NUMBER</p>
            <p>{userCreditCardDetails.cardNumber}</p>
              <div className={CreditCardDetailsStyle.creditCardImages}>
                <img className={CreditCardDetailsStyle.wifiLogo} src={wifiLogo} alt="wifi Logo" />
                <img className={CreditCardDetailsStyle.securityChip} src={securityChip} alt="security chip" />
            </div>
            <p>EXPIRATION DATE</p>
            <p>{userCreditCardDetails.cardExpirationDate}</p>
            <div className={CreditCardDetailsStyle.container}>
                <p>John Doe</p>
                <div className='credit-card__logo'>
                  <img className={CreditCardDetailsStyle.mastercardLogo} src={mastercardLogo} alt="master card logo" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default CreditCardDetails