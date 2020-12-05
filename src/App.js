import React from "react";
import Characters from "./Characters";
import { useGlobalContext } from "./context";

const App = () => {
  const { loading, prev, next, page } = useGlobalContext();
  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      <section className="section">
        <h1>Rick & Morty API</h1>
        <Characters />
        <div className="btn-container">
          <button className="btn" onClick={prev}>
            PREV
          </button>
          <button className="btn" onClick={next}>
            NEXT
          </button>
          <h4>{page}</h4>
        </div>
      </section>
    </main>
  );
};

export default App;
