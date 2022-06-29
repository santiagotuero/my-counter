import "./App.css";
import Counter from "./components/counter";

function App() {
  return (
    <div className="App">
      <section className="section-container">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </section>
      <Counter />
    </div>
  );
}

export default App;
