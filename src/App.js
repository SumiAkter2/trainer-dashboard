import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-circular-progressbar/dist/styles.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Component/Header';
import './App.css'

function App() {
  return (
    <div className='App h-100 p-5'>
      <h1 className='text-light'>EVOLV FIT</h1>

      <Routes>
        <Route path='/' element={<Header></Header>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
