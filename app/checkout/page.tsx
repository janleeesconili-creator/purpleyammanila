'use client';

import { useEffect, useState } from 'react';
import { sitePath } from '../../lib/site-path';

export default function CheckoutPage() {
  const [order, setOrder] = useState({ qty: 1, total: 499 });
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setOrder({ qty: Math.max(1, Number(params.get('qty')) || 1), total: Math.max(499, Number(params.get('total')) || 499) });
  }, []);

  if (confirmed) return <main className="orderSuccess"><div><span>✓</span><p>DEMO CHECKOUT</p><h1>Thank you!</h1><p>This is a front-end preview. No payment or order was submitted.</p><a href={sitePath('/shop')}>Continue shopping</a></div></main>;

  return <main className="checkoutPage">
    <header className="checkoutHeader"><a className="brand" href={sitePath('/')}><span className="brandMark">py</span><span>PASTRY KITCHEN</span></a><span>🔒 Demo checkout</span><a href={sitePath('/shop')}>🛒 {order.qty}</a></header>
    <div className="checkoutShell">
      <form className="checkoutForm" onSubmit={(event) => { event.preventDefault(); setConfirmed(true); }}>
        <section><h2>Contact</h2><input required type="email" placeholder="Email address"/><input required type="tel" placeholder="Mobile phone number"/></section>
        <section><h2>Delivery</h2><select aria-label="Country"><option>Philippines</option></select><div className="fieldPair"><input required placeholder="First name"/><input required placeholder="Last name"/></div><input required placeholder="Address"/><div className="fieldPair"><input placeholder="Apartment, suite, etc. (optional)"/><input required placeholder="Barangay"/></div><div className="fieldPair"><input required placeholder="Postal code"/><input required placeholder="City"/></div><select required defaultValue=""><option value="" disabled>Region</option><option>Metro Manila</option><option>Benguet</option><option>Laguna</option><option>Cavite</option><option>Rizal</option></select></section>
        <section><h2>Schedule</h2><div className="fieldPair"><label>Pickup / delivery date<input required type="date"/></label><label>Preferred time<input required type="time"/></label></div></section>
        <section><h2>Shipping method</h2><label className="choice selectedChoice"><input type="radio" name="shipping" defaultChecked/> Standard delivery <strong>FREE</strong></label><label className="choice"><input type="radio" name="shipping"/> Store pickup <strong>FREE</strong></label></section>
        <section><h2>Payment</h2><p className="sectionHelp">Demo only — no payment will be collected.</p><label className="choice selectedChoice"><input type="radio" name="payment" defaultChecked/> Cash on Delivery (COD)</label><label className="choice"><input type="radio" name="payment"/> Secure payments via PayMongo <span>GCash · Card</span></label></section>
        <p className="checkoutError">This is a front-end preview. No order data is sent or saved.</p><button className="completeOrder" type="submit">Preview confirmation</button>
      </form>
      <aside className="orderSummary"><div className="summaryProduct"><div className="summaryImage"><img src={sitePath('/story-buko-ube.jpg')} alt="Buko Ube Mini Pie"/><b>{order.qty}</b></div><div><strong>Buko Ube Mini Pie</strong><small>Freshly baked · {order.qty} {order.qty === 1 ? 'box' : 'boxes'}</small></div><strong>₱{order.total.toLocaleString()}</strong></div><div className="summaryTotals"><p><span>Subtotal</span><strong>₱{order.total.toLocaleString()}</strong></p><p><span>Shipping</span><span>FREE</span></p><h3><span>Total</span><strong><small>PHP</small> ₱{order.total.toLocaleString()}</strong></h3></div></aside>
    </div>
  </main>;
}
