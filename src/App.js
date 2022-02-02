import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import LeptListView from './views/LeptList/LeptListView';
import LeptDetailView from './views/LeptDetail/LeptDetailView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LeptListView />
          </Route>
          <Route to={'/lept/:leptID'}>
            <LeptDetailView />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
