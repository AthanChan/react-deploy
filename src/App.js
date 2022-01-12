import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Switch> 
            <Route exact path = "/react-deploy">
              <Home />
            </Route>
            <Route path = "/react-deploy/create">
              <Create />
            </Route>
          </Switch>
        </div>
    </div>

    </Router>
    
  );
}


export default App;
