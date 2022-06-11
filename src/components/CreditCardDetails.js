import React,{useContext} from 'react'
import CreditCardDetailsStyle from '../styles/CreditCardDetails.module.css' 
import wifiLogo from '../images/wifiLogo.PNG'
import securityChip from '../images/securityChip.PNG'
import mastercardLogo from '../images/mastercardLogo.PNG'
import DataContext from '../components/DataContext';


const CreditCardDetails = () => {
  const Data = useContext(DataContext);
  const {userCreditCardDetails}=Data;
  const cardNumber = userCreditCardDetails.cardNumber
  const cardNumber1 = cardNumber.toString().slice(0,4)
  const cardNumber2 = cardNumber.toString().slice(4,8)
  const cardNumber3 = cardNumber.toString().slice(8,12)
  const cardNumber4 = cardNumber.toString().slice(12,16)
  const finalCardNumber = `${cardNumber1} ${cardNumber2} ${cardNumber3} ${cardNumber4}`

  const cardExpirationDate = userCreditCardDetails.cardExpirationDate
  const cardExpirationDate1 = cardExpirationDate.slice(0,4)
  const cardExpirationDate2 = cardExpirationDate.slice(5,7)
  const finalCardExpirationDate = `${cardExpirationDate2}/${cardExpirationDate1}`

  return (
    <section className={CreditCardDetailsStyle.section}>
        <h2 className={CreditCardDetailsStyle.paymentTitle}>Payment Information</h2>
        <p className={CreditCardDetailsStyle.paymentText}>Choose your method of payment</p>
        <div className={CreditCardDetailsStyle.creditCard}>
            <p>CARD NUMBER</p>
            <p className={CreditCardDetailsStyle.cardNumber}>{finalCardNumber}</p>
              <div className={CreditCardDetailsStyle.creditCardImages}>
                <img className={CreditCardDetailsStyle.wifiLogo} src={wifiLogo} alt="wifi Logo" />
                <img className={CreditCardDetailsStyle.securityChip} src={securityChip} alt="security chip" />
            </div>
            <p>EXPIRATION DATE</p>
            <p>{userCreditCardDetails.cardExpirationDate === "" ? "" :finalCardExpirationDate}</p>
            <div className={CreditCardDetailsStyle.container}>
                <p>John Doe</p>
                <div>
                  <img className={CreditCardDetailsStyle.mastercardLogo} src={mastercardLogo} alt="master card logo" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default CreditCardDetails