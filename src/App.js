import { Switch, Route } from 'react-router';
import HomePage from './pages/homepage.component';
import './App.css';

function App() {


  const HatPage = () => {
    <h1>Hat Page</h1>
  }

  
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hat' component={HatPage} />
      </Switch>
      
    </div>
  );
}

export default App;
