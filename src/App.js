import {BrowserRouter,Route,Switch, useHistory,Redirect} from 'react-router-dom';
import Dashboard from './components/dashboard';
import Stats from './components/stats';
import './App.css';

const Routing=()=>{
    return (
        <Switch>
            <Route path='/dashboard'>
                <Dashboard />
            </Route>
            <Route path='/stats'>
                <Stats />
            </Route>
            <Route exact path="/" render={() => {
                    return (
                        <Redirect to='/dashboard' />
                    )
                }}
            />
        </Switch>
      
    )
  }

function App() {
    return (
        <div className="App">            
            <BrowserRouter>    
                <Routing />
            </BrowserRouter>
        </div>
    );
}

export default App;
