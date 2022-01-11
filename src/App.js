import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Menu from './components/Menu';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/menu' element={<Menu/>}/>
    </Routes>
  );
}

export default App;
