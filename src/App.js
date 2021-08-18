import './App.css';
import data from './data/recipes.json';
import Menu from './components/05/Menu';

function App() {
  return (
    <div className="App">
      <Menu title='recipes' recipes={data} />
    </div>
  );
}

export default App;
