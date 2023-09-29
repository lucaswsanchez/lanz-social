import Feed from "./components/Feed";
import "./styles/App.css";

function App() {
  return (
    <div className="main-container">
      <div className="app-container">
        <header>
          <div className="header-logo">Lanz Social</div>
          <div className="header-nav">
            <ul>
              <li>NAV</li>
              <li>NAV</li>
              <li>NAV</li>
              <li>NAV</li>
            </ul>
          </div>
        </header>
        <main>
          <Feed />
        </main>
        <footer></footer>
      </div>
    </div>
  );
}

export default App;
