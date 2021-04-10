import { Route, Switch } from 'react-router';
import './App.css';
import Home from './Pages/Home';
import PictureDetail from './Pages/PictureDetail';

function App() {
  return (
    <div className="App">
      <Switch>
    <Route path='/' exact>
      <Home/>
    </Route>
    <Route path='/detail/:id' exact>
      <PictureDetail />
    </Route>
      </Switch>
    </div>
  );
}

export default App;
