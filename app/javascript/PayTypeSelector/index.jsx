import React from 'react'

import NoPayType from './NoPayType';
import CreditCardPayType from './CreditCardPayType';
import CheckPayType from './CheckPayType';
import PurchaseOrderPayType from './PurchaseOrderPayType';

class PayTypeSelector extends React.Component {

  state = {
    selectedPayType: null 
  };

  onPayTypeSelected = event => {
    this.setState({ selectedPayType: event.target.value });
  }

  render() {
    const { selectedPayType } = this.state
    const PayTypeCustomComponent = selectedPayType == "Credit card" ? CreditCardPayType :
                                   selectedPayType == "Check" ? CheckPayType :
                                   selectedPayType == "Purchase order"? PurchaseOrderPayType: 
                                   NoPayType;

    return (
      <React.Fragment>
        <div className="field">
          <label htmlFor="order_pay_type">Pay type</label>
          <select onChange={this.onPayTypeSelected} id="pay_type" name="order[pay_type]">
            <option value="">Select a payment method</option>
            <option value="Check">Check</option>
            <option value="Credit card">Credit card</option>
            <option value="Purchase order">Purchase order</option>
          </select>
        </div>
        <PayTypeCustomComponent />
      </React.Fragment>
    );
  }
}
export default PayTypeSelector