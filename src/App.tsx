import Feed from "./components/Feed";
import Footer from "./components/Footer";
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
        <Footer />
      </footer>
    </div>
  );
}

export default App;
