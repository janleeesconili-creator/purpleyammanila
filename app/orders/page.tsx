import { sitePath } from '../../lib/site-path';

export default function OrdersPage() {
  return <main className="ordersPage"><header><div><p>PY PASTRY KITCHEN</p><h1>Order Summary</h1></div><a href={sitePath('/shop')}>← Back to shop</a></header><section className="ordersTableWrap"><p>This public preview is front-end only. Orders are not collected or saved here.</p></section></main>;
}
