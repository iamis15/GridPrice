import React from "react";

export default function App() {
  return (
    <main className="container">
      <section className="top">
        <h1>Join our community</h1>
        <h2>30-day, hassle-free money back guarantee</h2>
        <p>
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </section>

      <section className="left">
        <h1>Monthly Subscription</h1>
        <section className="price">
          <h2>$29</h2>
          <p>per month</p>
        </section>
        <p>Full access for less than $1 a day</p>
        <button>Sign Up</button>
      </section>

      <section className="right">
        <h1>Why Us</h1>
        <p>Tutorials by industry experts</p>
        <p>Peer & expert code review</p>
        <p>Coding exercises</p>
        <p>Access to our GitHub repos</p>
        <p>Community forum</p>
        <p>Flashcard decks</p>
        <p>New videos every week</p>
      </section>
    </main>
  );
}
