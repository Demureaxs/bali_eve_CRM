const html = String.raw;

import allWeddings from '../utilities/StateManagement';
import { formatDate } from './Overview';

function PaymentTimeline(obj) {
  return html`
    <div>
      <h1>${obj.name}</h1>
      <p>Wedding Date: ${formatDate(obj.date)}</p>
      <h3>Payments:</h3>
      <ul>
        ${obj.payments
          .map(payment => {
            return html`
              <div>
                <li>${formatDate(payment.date)}</li>
                <li>$${payment.amount}</li>
              </div>
            `;
          })
          .join('')}
      </ul>
    </div>
  `;
}

export default PaymentTimeline;
