import React from 'react'
import paymentSummaryStyle from '../styles/PaymentSummary.module.css'

const PaymentSummary = () => {
  return (
    <section className={paymentSummaryStyle.container}>
        <div>
            <p>Subtotal</p>
            <p>#2,497.00</p>
        </div>
        <div>
            <p>Estimated TAX</p>
            <p>#119.64</p>
        </div>
        <div>
            <p>Promotional ode: <span>Z4KXLM9A</span></p>
            <p>-#60.00</p>
        </div>
        <hr/>
        <div className={paymentSummaryStyle.paymentCompletion}>
            <button className={paymentSummaryStyle.paymentCompletionButton}>Complete payment</button>
            <p>TOTAL: #2556.64</p>
        </div>
    </section>
  )
}

export default PaymentSummary