import './App.scss';
import CategoriesList from './Components/Categories-list/Categories-list';
import Header from './Components/Header/Header';
import ProductMain from './Components/ProductCard/ProductMain';

function App() {
  return (
    <div className="App">
      <Header/>
      <CategoriesList/>

      <ProductMain/>
    </div>
  );
}

export default App;
