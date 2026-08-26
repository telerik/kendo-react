import Link from "next/link";

export default function NotFound() {
  return (
    <main className="utility-page">
      <section className="card-container">
        <h1>Page not found</h1>
        <p className="utility-page__description">
          The warehouse page you requested is unavailable.
        </p>
        <Link href="/warehouse/dashboard">Return to dashboard</Link>
      </section>
    </main>
  );
}
