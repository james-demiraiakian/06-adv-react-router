import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LeptListView from './views/LeptList/LeptListView';
import LeptDetailView from './views/LeptDetail/LeptDetailView';

function App() {
  return (
    <div className="App">
      <h1>ButterMoths</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LeptListView />
          </Route>
          <Route exact path={'/lept/:leptID'}>
            <LeptDetailView />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
