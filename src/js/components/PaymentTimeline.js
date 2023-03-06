const html = String.raw;

import allWeddings from '../utilities/StateManagement';
import Header from './OverviewComponents/Header';
import { formatDate } from './Weddings';

//---------------------------------- Rendered HTML Output -----------------------------------------

function PaymentTimelineDashboard(obj, e) {
  return html`
    <div class="space-y-4">
      ${Header(e.target.innerText)}
      ${obj
        .sort((a, b) => new Date(a.Date) - new Date(b.date))
        .map(
          wedding =>
            html` <!-- Rendering In The Payment Components -->
              <div
                class="space-y-4 bg-slate-200 p-6 rounded-lg mb-4  bg-gradient-to-br from-slate-100 to-slate-200 border border-gray-200  shadow-lg"
              >
                <section class="space-y-2">
                  <h1>Wedding of: ${wedding.name}</h1>
                  <p>Wedding Date: ${formatDate(wedding.date)}</p>
                  <h3>Payments:</h3>
                  <ul>
                    ${wedding.payments
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
              </div>`
        )
        .join(' ')}
    </div>
  `;
}

export default PaymentTimelineDashboard;
