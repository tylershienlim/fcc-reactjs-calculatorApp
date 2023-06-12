import './App.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Calculator/>
      <div className='designText'>
        Designed and coded by
        <br></br>
        <a href="https://github.com/tylershienlim" target='_blank' rel="noreferrer">
        @tylershienlim
        </a>
      </div>
      </div>
    </div>
  );
}

export default App;
