import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-circular-progressbar/dist/styles.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Component/Header';
import ProgressBar from './Component/progressBar';
import './App.css'
// import { ProgressBar } from 'react-bootstrap';
function App() {
  return (
    <div className='App h-100 p-5'>
      <h1>Evolv Fit</h1>
      <ProgressBar></ProgressBar>
      <Routes>
        <Route path='/' element={<Header></Header>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
