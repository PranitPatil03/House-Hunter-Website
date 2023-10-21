import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./page/Hero";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <section>
          <Hero />
        </section>
      </main>
    </>
  );
}

export default App;
