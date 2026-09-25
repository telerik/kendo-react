"use client";

import { Button } from "@progress/kendo-react-buttons";
import { Input } from "@progress/kendo-react-inputs";

export default function SignInPage() {
  return (
    <main className="auth-page">
      <section className="card-container" aria-labelledby="sign-in-title">
        <h1 id="sign-in-title">Sign in to Coffee Warehouse</h1>
        <p className="utility-page__description">
          Use your operations account to manage warehouse activity.
        </p>
        <form className="utility-page__fields">
          <label>
            Work email
            <Input type="email" autoComplete="email" required />
          </label>
          <label>
            Password
            <Input type="password" autoComplete="current-password" required />
          </label>
          <Button themeColor="primary" type="submit">
            Sign in
          </Button>
        </form>
      </section>
    </main>
  );
}
