import React from "react";
import { Button } from "@progress/kendo-react-buttons";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Switch, TextBox } from "@progress/kendo-react-inputs";

type StorePageKind =
  | "login"
  | "register"
  | "account"
  | "settings"
  | "notifications"
  | "help"
  | "wishlist"
  | "compare"
  | "stores"
  | "search"
  | "order"
  | "not-found";

interface StorePageProps {
  kind: StorePageKind;
  orderId?: string;
}

const goToProducts = () => {
  window.location.href = "/kendo-react/kendo-react-e-commerce-astro-app/products";
};

const Heading = ({ title, description }: { title: string; description: string }) => (
  <header className="store-page__heading">
    <h1>{title}</h1>
    <p>{description}</p>
  </header>
);

const StorePage: React.FC<StorePageProps> = ({ kind, orderId }) => {
  if (kind === "login" || kind === "register") {
    const isRegister = kind === "register";
    return (
      <main className="store-page">
        <Heading
          title={isRegister ? "Create your Vilora account" : "Welcome back"}
          description={isRegister ? "Save your favorites and track every order in one place." : "Sign in to view your orders and saved jewelry."}
        />
        <form className="store-page__form">
          {isRegister && <TextBox aria-label="Full name" placeholder="Full name" autoComplete="name" />}
          <TextBox aria-label="Email address" placeholder="Email address" autoComplete="email" type="email" />
          <TextBox aria-label="Password" placeholder="Password" autoComplete={isRegister ? "new-password" : "current-password"} type="password" />
          {isRegister && <label><input type="checkbox" /> I agree to the terms and privacy policy.</label>}
          <Button themeColor="primary" size="large" type="submit">{isRegister ? "Create account" : "Sign in"}</Button>
          {!isRegister && <Button fillMode="flat">Forgot password?</Button>}
          <Button fillMode="outline">Continue with Google</Button>
        </form>
      </main>
    );
  }

  if (kind === "account") {
    return (
      <main className="store-page store-page--wide">
        <Heading title="Your account" description="Manage your profile, saved addresses, payment methods, and order history." />
        <section className="store-page__grid">
          <article className="store-page__card"><h2>Profile</h2><p>Maya Rivera<br />maya.rivera@example.com</p><Button fillMode="outline">Edit profile</Button></article>
          <article className="store-page__card"><h2>Saved addresses</h2><p>Home<br />18 W 21st Street, New York</p><Button fillMode="outline">Manage addresses</Button></article>
          <article className="store-page__card"><h2>Order history</h2><p>Order VL-10482 is being prepared.</p><Button themeColor="primary" onClick={() => { window.location.href = "/kendo-react/kendo-react-e-commerce-astro-app/order/VL-10482"; }}>Track order</Button></article>
        </section>
      </main>
    );
  }

  if (kind === "settings") {
    return (
      <main className="store-page">
        <Heading title="Settings & preferences" description="Choose how Vilora keeps in touch with you." />
        <section className="store-page__list" aria-label="Notification preferences">
          <label className="store-page__list-item">Order and delivery updates <Switch defaultChecked aria-label="Order updates" /></label>
          <label className="store-page__list-item">Back-in-stock alerts <Switch defaultChecked aria-label="Back-in-stock alerts" /></label>
          <label className="store-page__list-item">New collection emails <Switch aria-label="New collection emails" /></label>
        </section>
      </main>
    );
  }

  if (kind === "notifications") {
    return (
      <main className="store-page">
        <Heading title="Notifications" description="Order, delivery, and collection updates." />
        <section className="store-page__list">
          <article className="store-page__list-item"><span><strong>Order VL-10482 is being prepared</strong><br />Your Diamond Wedding Ring will ship by Friday.</span><small>Today</small></article>
          <article className="store-page__list-item"><span><strong>Your wishlist item is back in stock</strong><br />Silver Heart Necklace is ready to add to your cart.</span><small>Yesterday</small></article>
        </section>
      </main>
    );
  }

  if (kind === "help") {
    return (
      <main className="store-page">
        <Heading title="Help & support" description="Find an answer or send our jewelry specialists a message." />
        <TextBox aria-label="Search help articles" placeholder="Search delivery, returns, and care" />
        <section className="store-page__list">
          <article className="store-page__card"><h2>Returns & exchanges</h2><p>Start a return within 30 days of delivery.</p><Button fillMode="flat">Read the policy</Button></article>
          <article className="store-page__card"><h2>Jewelry care</h2><p>Learn how to keep precious metals and gemstones luminous.</p><Button fillMode="flat">View care guide</Button></article>
          <article className="store-page__card"><h2>Contact support</h2><p>Our team responds within one business day.</p><Button themeColor="primary">Send a message</Button></article>
        </section>
      </main>
    );
  }

  if (kind === "wishlist") {
    return (
      <main className="store-page">
        <Heading title="Your wishlist" description="Save pieces you love and return when the moment is right." />
        <section className="store-page__card">
          <h2>No saved pieces yet</h2><p>Browse our curated collections to build your wishlist.</p><Button themeColor="primary" onClick={goToProducts}>Explore jewelry</Button>
        </section>
      </main>
    );
  }

  if (kind === "compare") {
    return (
      <main className="store-page store-page--wide">
        <Heading title="Compare jewelry" description="Add up to four pieces from the catalog to compare materials, dimensions, and prices." />
        <section className="store-page__card">
          <h2>Your comparison is empty</h2><p>Select the Compare action on a product card to see details side by side.</p><Button themeColor="primary" onClick={goToProducts}>Browse products</Button>
        </section>
      </main>
    );
  }

  if (kind === "stores") {
    return (
      <main className="store-page store-page--wide">
        <Heading title="Find a Vilora store" description="Locate a boutique for personal styling, repairs, and pickup." />
        <div className="store-page__form"><TextBox aria-label="City or ZIP code" placeholder="City or ZIP code" /><Button themeColor="primary">Search stores</Button></div>
        <section className="store-page__notice">Enter a location to view nearby boutiques and pickup availability.</section>
      </main>
    );
  }

  if (kind === "search") {
    return (
      <main className="store-page store-page--wide">
        <Heading title="Search jewelry" description="Find rings, necklaces, bracelets, earrings, and watches." />
        <div className="store-page__form"><TextBox aria-label="Search products" placeholder="What are you looking for?" /><DropDownList aria-label="Sort results" data={["Featured", "Price: low to high", "Newest"]} defaultValue="Featured" /><Button themeColor="primary">Search</Button></div>
      </main>
    );
  }

  if (kind === "order") {
    return (
      <main className="store-page">
        <Heading title="Order confirmed" description={`Thank you. Your order ${orderId || "VL-10482"} is being prepared.`} />
        <section className="store-page__card">
          <h2>Delivery status: Placed</h2><p>Placed <strong>→</strong> Shipped <strong>→</strong> Delivered</p><p>Estimated delivery: September 2–4</p><Button themeColor="primary" onClick={goToProducts}>Continue shopping</Button>
        </section>
      </main>
    );
  }

  return (
    <main className="store-page">
      <Heading title="Page not found" description="The page you requested is unavailable or may have moved." />
      <section className="store-page__card"><TextBox aria-label="Search products" placeholder="Search our collections" /><Button themeColor="primary" onClick={goToProducts}>Return to home</Button></section>
    </main>
  );
};

export default StorePage;
