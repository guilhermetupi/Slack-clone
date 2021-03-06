import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import Login from './components/Login/Login';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      <Router>
        {
          !user ? (
            <Login />
          )
          : (
            <>
              <Header />
              <div className='app__body'>
                <Sidebar />
                <Switch>
                  <Route path='/room/:roomId'>
                    <Chat />
                  </Route>
                  <Route path='/'>
                    <h1>Welcome!</h1>
                  </Route>
                </Switch>
              </div>
            </>
          )
        }
      </Router>
    </div>
  );
}

export default App;
