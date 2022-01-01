import './App.css';
import Covid from './components/covid'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='entire-body'>
    <h1 className='header'>Covid Live Tracker</h1>
    {/*<button className='btn btn-sucess'>Submit</button>*/}
     
    <Covid />
    </div>
  );
}

export default App;
