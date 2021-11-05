import { Switch, Route } from 'react-router';
import HomePage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component';
import './App.css';

function App() {


  const HatPage = () => {
    return <h1>Hat Page</h1>
  }

  
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
      
    </div>
  );
}

export default App;
