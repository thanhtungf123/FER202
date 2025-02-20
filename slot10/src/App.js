import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Infor from './components/Infor';
import ProductList from './components/ProductList';
import SearchFilter from './components/SearchFilter';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <Counter />
      <h1>Information</h1>
      <Infor />
      <h1>Product List</h1>
      <ProductList />
      <h1>Search Filter</h1>
      <SearchFilter />
    </div>
  );
}

export default App;
