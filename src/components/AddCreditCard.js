import React,{useState, useContext} from 'react'
import AddCreditCardStyles from '../styles/AddCreditCard.module.css'
import payPal from '../images/paypal.PNG'
import visa from '../images/visa.PNG'
import discover from '../images/discover.PNG'
import DataContext from '../components/DataContext';


const AddCreditCard = () => {
    const Data = useContext(DataContext);
    const {formData,handleChange, setUserCreditCardDetails}=Data;
    const [formErrors, setFormErrors] = useState({})

    let todaysDate;
    const getCurrentDate = () => {
        let today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth() + 1;
        let day = today.getDate();

        if (day < 10) {
            day = '0' + day;
        }
        if (month < 10) {
            month = '0' + month;
        }

        todaysDate = `${year}-${month}-${day}`;
        return todaysDate; 
    }
    getCurrentDate();
    
    //credit card validation using luhnck's algorithm
    const validateCreditCardNumber = numb => {
        const regex = new RegExp("^[0-9]{13,19}$");
        if (!regex.test(numb)) {
            return false;
        }
        return luhnck(numb);
      }
      const luhnck = val => {
        let validsum = 0;
        let k = 1;
        for (let l = val.length - 1; l >= 0; l--) {
            let calck = 0;
            calck = Number(val.charAt(l)) * k;
            if (calck > 9) {
                validsum = validsum + 1;
                calck = calck - 10;
            }
            validsum = validsum + calck;
            if (k == 1) {
                k = 2;
            } else {
                k = 1;
            }
        }
        return (validsum % 10) == 0;
      }
      

    //form validation function
    const validateForm= (values) => {
        const postalCodeRegex = /^([0-9]{5}|[a-zA-Z][a-zA-Z ]{0,49})$/;

        const error = {
          creditCardNumberError: "",
          securityCodeError:"",
          expirationDateError:"",
          postalCodeError:"",
          checkboxError:""
        }
      
        if(validateCreditCardNumber(values.creditCardNumber) === false){
            error.creditCardNumberError = "Please enter a valid credit card number"
        }

        if((values.expirationDate === "" || values.expirationDate === null)){
            error.expirationDateError = "Please select a valid expiration date"
        }

        if((values.securityCode.length > 3 || values.securityCode === "" || values.securityCode === null)){
            error.securityCodeError = "The security code should not be empty or more than 3"
        }
        
        if(!postalCodeRegex.test(values.postalCode)){
            error.postalCodeError = "Please enter a valid postal code"
        }
        if((formErrors.creditCardNumberError === "" && formErrors.securityCodeError === "" && formErrors.expirationDateError === "" && formErrors.postalCodeError === "") ){
            console.log("The form was submitted successfully");
            setUserCreditCardDetails({
                cardNumber : formData.creditCardNumber,
                cardExpirationDate: formData.expirationDate
            })
        }
      
        return error
      }
      
      const submitForm = (event)=>{
        event.preventDefault();
        setFormErrors(validateForm(formData));
      
      }

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
        <form onSubmit={submitForm}>
            <div className={AddCreditCardStyles.formDetails}>
                <div className={AddCreditCardStyles.formDetailsContainer1}>
                    <div>
                        <label htmlFor="creditCardNumber">Credit card number</label><br/><br/>
                        <input 
                            id="creditCardNumber"
                            type="number"
                            name="creditCardNumber"
                            value={formData.creditCardNumber}
                            onChange={handleChange}
                        />
                        <p className={AddCreditCardStyles.error}>{formErrors.creditCardNumberError}</p>
                    </div><br/>
                    <div>
                        <label htmlFor="securityCode">Security code</label><br/><br/>
                        <input 
                            id="securityCode" 
                            type="number"
                            name="securityCode"
                            value={formData.securityCode}
                            onChange={handleChange}
                            />
                            <p className={AddCreditCardStyles.error}>{formErrors.securityCodeError}</p>
                    </div><br/>
                </div>

                <div className={AddCreditCardStyles.formDetailsContainer2}>
                    <div>
                        <label htmlFor="expirationDate">Expiration Date</label><br/><br/>
                        <input 
                            id="expirationDate" 
                            type="date" 
                            name="expirationDate"
                            value={formData.expirationDate}
                            min={todaysDate}
                            onChange={handleChange}
                            />
                            <p className={AddCreditCardStyles.error}>{formErrors.expirationDateError}</p>
                    </div><br/>
                    <div>
                        <label htmlFor="postalCode">Postal Code</label><br/><br/>
                        <input 
                            id="postalCode" 
                            type="number"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                            />
                            <p className={AddCreditCardStyles.error}>{formErrors.postalCodeError}</p>
                    </div><br/>
                </div>
            </div>
            <div className={AddCreditCardStyles.checkboxContainer}>
                <input 
                    className={AddCreditCardStyles.checkbox} 
                    type="checkbox"    
                    name="isChecked"
                    checked={formData.isChecked}
                    onChange={handleChange}
                />
                <label htmlFor="isChecked">Use this card for next time purchase</label>
            </div>
            <button>Add Card</button>
            
        </form>
    </div>
  )
}

export default AddCreditCard