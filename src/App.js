import './App.scss';
import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home/Home';
import Message from './Pages/Message/Message';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import SearchProducts from './Pages/SearchProducts/SearchProducts';
import Category from './Pages/Category/Category';
import Login from './Pages/Auth/login/Login';
import Create from './Pages/Auth/create/Create';
import Auth from './Pages/Auth/Auth';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='auth' element={<Auth/>}>
            <Route path='login' element={<Login/>}/>
            <Route path='create' element={<Create/>}/>
          </Route>
          <Route path='/' element={<Home/>}/>
          <Route path='/message' element={<Message/>}/>
          <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
          <Route path='/search/:searchtitle' element={<SearchProducts/>}/>
          <Route path='/category/:categoryId' element={<Category/>}/>
        </Routes>
    </div>
  );
}

export default App;
