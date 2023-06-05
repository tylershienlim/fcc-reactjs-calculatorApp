import './App.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Calculator/>
      </div>
        <div className='designText'>
          Designed and coded by
          <br></br>
          @tylershienlim
        </div>
        <a rel="noreferrer" target="_blank" href="https://www.figma.com/file/4pv8rnIBckR2gxl9WgKVHD/Calculator-App?type=design&node-id=0%3A1&t=YP3H5J7QSaSZubCd-1">
          Figma Design File</a>
    </div>
  );
}

export default App;
