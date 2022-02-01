import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import LeptListView from './views/LeptList/LeptListView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LeptListView />
      </BrowserRouter>
    </div>
  );
}

export default App;
