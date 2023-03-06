const html = String.raw;

//---------------------------------- Module Imports -----------------------------------------

// Imports for Overview Components
import Header from './OverviewComponents/Header';
import TaskOverview from './OverviewComponents/TaskOverview';
import UpcomingWeddings from './OverviewComponents/UpcomingWeddings';

//---------------------------------- Rendered HTML Output -----------------------------------------

// the Overview Dashboard Return HTML
function OverviewDashboard(obj, e) {
  return html`
    <section class="text-gray-700 space-y-4">
      <!-- Header Component -->
      ${Header('Overview')}

      <!-- Task Overview Component -->
      ${TaskOverview()}

      <!-- Upcoming Weddings Section -->
      ${UpcomingWeddings(obj)}
    </section>
  `;
}

// default export of Overview Dashboard
export default OverviewDashboard;
