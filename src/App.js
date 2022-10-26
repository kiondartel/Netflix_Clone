import './App.css';
import Row from './components/Row';
import categories from "./api"


function App() {
  return (
    <div className="App">
      {/* Navbar */}
      {/* Destaque */}
      {/* Em alta */}
      {categories.map((categories) => {
        return <Row
          key={categories.name}
          title={categories.title}
          path={categories.path}
        />
      })}
    </div>
  );
}

export default App;
