'use client';
import { useState } from 'react';
import { sitePath } from '../lib/site-path';

export default function Home() {
  const [cart, setCart] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  return <main>
    <div className="announcement cutoffNotice">Cut-off for next-day orders is 4 pm, please don&apos;t forget to add your pickup date and time before checkout <span>💚</span> <b>→</b></div>
    <nav>
      <a className="brand" href="#top"><span className="brandMark">py</span><span>PASTRY<br/>KITCHEN</span></a>
      <button className="menuToggle" type="button" aria-expanded={menuOpen} aria-controls="main-navigation" onClick={()=>setMenuOpen(!menuOpen)}>Menu</button>
      <div className={`navLinks ${menuOpen ? 'isOpen' : ''}`} id="main-navigation">
        <a href="#top" onClick={()=>setMenuOpen(false)}>Home</a>
        <a href={sitePath('/shop')} onClick={()=>setMenuOpen(false)}>Shop <span aria-hidden="true">⌄</span></a>
        <a href={`${sitePath('/shop')}#bundles`} onClick={()=>setMenuOpen(false)}>Bundles (Save More) <span aria-hidden="true">⌄</span></a>
        <a href="mailto:PYPastryKitchen@gmail.com?subject=Wholesale%20Inquiry" onClick={()=>setMenuOpen(false)}>Shop Wholesale</a>
        <a href="#faq" onClick={()=>setMenuOpen(false)}>Quality &amp; Safety</a>
      </div>
      <button className="cart" aria-label={`Cart with ${cart} items`}>Cart <span>{cart}</span></button>
    </nav>
    <section className="hero cinematicHero" id="top">
      <div className="heroBackdrop" aria-hidden="true" />
      <div className="particles particlesOne" aria-hidden="true" />
      <div className="particles particlesTwo" aria-hidden="true" />
      <div className="aurora auroraOne" aria-hidden="true" />
      <div className="aurora auroraTwo" aria-hidden="true" />
      <div className="steam steamOne" aria-hidden="true" />
      <div className="steam steamTwo" aria-hidden="true" />
      <div className="steam steamThree" aria-hidden="true" />
      <div className="heroGlow" aria-hidden="true" />
      <div className="heroCopy heritageCopy"><p className="eyebrow">A MANILA HEIRLOOM, HAND-BAKED DAILY</p><h1>The ultimate gift of<br/><em>culinary heritage.</em></h1><p className="lead">Meticulously crafted Buko Ube Pie by the Michelin-awarded owners of Cendrillon and Purple Yam Brooklyn. Now in Manila.</p><div className="heroActions"><button className="primary" onClick={()=>setCart(cart+1)}>RESERVE YOUR FRESH BATCH <span>→</span></button></div><div className="rating featuredLine"><b>●</b><span>As featured in The New York Times, Michelin Guide &amp; James Beard Foundation</span></div></div>
    </section>
    <section className="trustBar"><span>✦ Mini pies from ₱499</span><span>✦ Cookies from ₱50</span><span>✦ Box of 6 cookies ₱350</span><span>✦ Made with love</span></section>
    <section className="story purpleStory" id="story">
      <div className="storyVisual storySlideshow"><img className="storySlide slideOne" src={sitePath('/story-buko-ube.jpg')} alt="Purple Yam Buko Ube Mini Pie"/><img className="storySlide slideTwo" src={sitePath('/story-cashew.jpg')} alt="Purple Yam Cashew Panutsa Pie"/><img className="storySlide slideThree" src={sitePath('/story-banana.jpg')} alt="Purple Yam Banana Kalinag Pie"/><span>HAND-BAKED DAILY</span><div className="slideDots" aria-hidden="true"><i/><i/><i/></div></div>
      <div className="storyContent"><p className="storyTag"><i/> THE PURPLE YAM STORY</p><h2>When was the last time a gift <em>tasted like home?</em></h2><p className="storyIntro">Some flavors do more than satisfy. They bring back Sunday tables, family celebrations, and the warmth of something made by hand.</p><p><strong>PY Pastry Kitchen</strong> brings together tender young coconut and velvety purple yam in a golden pastry crafted to be shared, remembered, and given with pride.</p><p className="storyPromise">Hand-baked. Heartfelt. Made in Manila.</p><div className="storyCards"><article><i/><h3>A Manila Heirloom</h3><p>Beloved Filipino flavors elevated with careful craft, generous filling, and a beautifully flaky crust.</p></article><article><i/><h3>Made for Meaningful Moments</h3><p>A thoughtful culinary gift for homecomings, celebrations, and the people who deserve something special.</p></article></div></div>
    </section>
    <section className="orderProof" aria-label="More than 2,000 orders">
      <p className="proofTag"><i/> WHY MANILA LOVES IT</p><h2>Created for people who crave<br/><em>something unforgettable.</em></h2>
      <div className="proofReasons"><span>🥥 Three buko stages</span><span>💜 Two ube varieties</span><span>🌾 Nipa starch</span><span>🥧 Flaky hand-made crust</span><span>🔥 Hand-baked daily</span><span>🎁 Made for gifting</span></div>
      <div className="proofBottom"><div className="orderNumber"><strong>2,000<sup>+</sup></strong><small>ORDERS</small></div><div className="proofMessage"><p>AND GROWING</p><h3>Making celebrations <em>sweeter.</em></h3><span>From homecomings to family tables, every pie carries a little piece of Manila&apos;s culinary heritage.</span></div></div>
    </section>
    <section className="legacySection" aria-label="Culinary legacy of Amy Besa and Romy Dorotan"><div className="legacyPanel"><p>A CULINARY LEGACY BY</p><div className="legacyNames"><strong>AMY BESA</strong><i/><strong>ROMY DOROTAN</strong><i/><strong className="legacyPurple">purple yam</strong><i/><strong>CENDRILLON <small>NEW YORK</small></strong></div><span>From their pioneering New York restaurant, Cendrillon, to Purple Yam—celebrating Filipino food, memory, and heritage.</span></div></section>
    <section className="faq" id="faq"><div><p className="eyebrow">GOOD TO KNOW</p><h2>Pie questions,<br/><em>answered.</em></h2></div><div className="faqList"><details open><summary>How long does it stay fresh?</summary><p>Best enjoyed within 3 days refrigerated. Warm each slice before serving.</p></details><details><summary>Where do you deliver?</summary><p>Demo coverage: Metro Manila and nearby areas.</p></details><details><summary>Can I schedule an order?</summary><p>Yes—choose a preferred delivery date during checkout.</p></details></div></section>
    <footer className="footer"><div className="brand"><span className="brandMark">py</span><span>PASTRY KITCHEN</span></div><p>Freshly baked happiness in every bite.</p><p>0966 235 1036 · PYPastryKitchen@gmail.com</p></footer>
  </main>
}
