import React from 'react'
import AddCreditCardStyles from '../styles/AddCreditCard.module.css'
import payPal from '../images/paypal.PNG'
import visa from '../images/visa.PNG'
import discover from '../images/discover.PNG'

const AddCreditCard = () => {
  return (
    <div className={AddCreditCardStyles.container}>
        <div className={AddCreditCardStyles.logos}>
            <div>
                <img src={visa} alt="visa logo" />
                <img src={discover} alt="discover logo" /> 
            </div>
            <div className={AddCreditCardStyles.logoContainer2}>
                <div className={AddCreditCardStyles.circle}></div>
                <img src={payPal} alt="pay pal logo" />     
            </div> 
        </div>
        <form>
            <div className={AddCreditCardStyles.formDetails}>
                <div className={AddCreditCardStyles.formDetailsContainer1}>
                    <div>
                        <label htmlFor="creditCardNumber">Credit card number</label><br/><br/>
                        <input id="creditCardNumber"type="number"/>
                    </div><br/>
                    <div>
                        <label htmlFor="securityCode">Security code</label><br/><br/>
                        <input id="securityCode" type="number"/>
                    </div><br/>
                </div>

                <div className={AddCreditCardStyles.formDetailsContainer2}>
                    <div>
                        <label htmlFor="expirationDate">Expiration Date</label><br/><br/>
                        <input id="expirationDate" type="date" min="2022-06-11"/>
                    </div><br/>
                    <div>
                        <label htmlFor="isChecked">Postal Code</label><br/><br/>
                        <input id="isChecked" type="number"/>
                    </div><br/>
                </div>
            </div>
            <div className={AddCreditCardStyles.checkboxContainer}>
                <input 
                    className={AddCreditCardStyles.checkbox} 
                    type="checkbox"    
                />
                <label htmlFor="isChecked">Use this card for next time purchase</label>
            </div>
            <button>Add Card</button>
            
        </form>
    </div>
  )
}

export default AddCreditCard