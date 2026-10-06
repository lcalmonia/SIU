import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <main className="shell">
      <section className="card">
        <p className="eyebrow">SIU</p>
        <h1>Project Monitoring System</h1>
        <p className="muted">
          Deployment foundation initialized. No demo personnel, projects,
          positions, or transactional records are included.
        </p>
        <div className="status">
          <span>✓</span>
          <div>
            <strong>Production data ready</strong>
            <p>Structured records will use Netlify Database. Uploaded documents/images will use Netlify Blobs.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);