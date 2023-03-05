const html = String.raw;

import allWeddings from '../utilities/StateManagement';
import { formatDate } from './Weddings';

function PaymentTimelineDashboard(obj) {
  return html`
    <div
      class="space-y-4 text-gray-900 bg-slate-200 p-6 rounded-lg mb-4 shadow-lg border border-gray-300"
    >
      <section class="space-y-2">
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
            .join(' ')}
        </ul>
      </section>
    </div>
  `;
}

export default PaymentTimelineDashboard;
