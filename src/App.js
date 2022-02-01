import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import LeptListView from './views/LeptList/LeptListView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LeptListView />
        <Route exact path="/">
          <Link to="/">Home</Link>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
