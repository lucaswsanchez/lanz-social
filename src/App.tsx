import Feed from "./components/Feed";
import Header from "./components/Header";
import "./styles/App.css";

function App() {
  return (
    <div className="app-container">
      <header>
        <Header />
      </header>
      <main>
        <Feed />
      </main>
      <footer>
        <h1>Soy el footer</h1>
      </footer>
    </div>
  );
}

export default App;
